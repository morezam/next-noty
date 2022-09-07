import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import CreateNoteComponent from '../../../components/note/CreateNote';
import { client } from '../../../lib/graphQlRequestDefault';
import { ADD_NOTE } from '../../../query/mutations/note';
import { useAuthContext } from '../../../context/authContext';
// import { GET_NOTES } from '../../query/queries/note';

const CreateNote = () => {
	const router = useRouter();
	const { state } = useAuthContext();

	const mutation = useMutation(
		({ title, body }) => {
			return client.request(
				ADD_NOTE,
				{ title, body },
				{
					token: state.token,
				}
			);
		},
		{
			onSuccess() {
				router.replace('/panel');
			},
		}
	);

	const onFormClick = data => {
		mutation.mutate({ ...data });
	};
	return <CreateNoteComponent onFormClick={onFormClick} />;
};

export default CreateNote;
