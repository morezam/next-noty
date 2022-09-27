import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import CreateNoteComponent from '../../../components/note/CreateNote';
import { client } from '../../../lib/graphQlRequestDefault';
import { ADD_NOTE } from '../../../query/mutations/note';
import ParentLayout from '../../../components/layout';
import { useAuthContext } from '../../../context/authContext';
import Spinner from '../../../components/spinner';
import { useCallback } from 'react';

const CreateNote = () => {
	const router = useRouter();
	const { state } = useAuthContext();

	const mutation = useMutation(
		data => {
			return client.request(ADD_NOTE, data, {
				token: state.token,
			});
		},
		{
			onSuccess() {
				router.replace('/panel');
			},
		}
	);
	const onFormClick = useCallback(
		data => {
			mutation.mutate(data);
		},
		[mutation]
	);

	if (mutation.isLoading) {
		return <Spinner />;
	}

	return (
		<ParentLayout>
			<CreateNoteComponent onFormClick={onFormClick} />
		</ParentLayout>
	);
};

export default CreateNote;
