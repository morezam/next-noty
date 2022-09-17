import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import Spinner from '../spinner';
import { client } from '../../lib/graphQlRequestDefault';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { queryClient } from '../../lib/queryclient';
import { UPDATE_NOTE } from '../../query/mutations/note';
import { GET_NOTE } from '../../query/queries/note';
import { BackLink } from './NoteStyles';
import Link from 'next/link';
import DataRenderer from '../DataRenderer';

const ShowNote = ({ id }) => {
	const { data, isSuccess, isLoading } = useQuery(['note', { id }], () => {
		return client.request(GET_NOTE, { id });
	});

	const mutation = useMutation(
		({ id, title, body }) => {
			return client.request(UPDATE_NOTE, { id, title, body });
		},
		{
			onSuccess() {
				queryClient.invalidateQueries(['note', { id }]);
				router.replace('/panel');
			},
		}
	);
	const router = useRouter();

	if (isLoading) {
		return <Spinner />;
	}

	if (mutation.isLoading) {
		return <Spinner />;
	}

	const onFormSubmit = formData => {
		mutation.mutate({
			id: formData.id,
			title: formData.title,
			body: formData.body,
		});
	};

	return (
		<>
			<Link href="/panel" passHref>
				<BackLink>
					<FaArrowAltCircleLeft />
				</BackLink>
			</Link>
			{isSuccess && (
				<DataRenderer
					create={false}
					data={data.note}
					onFormSubmit={onFormSubmit}
				/>
			)}
		</>
	);
};

export default ShowNote;
