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
		newNote => {
			return client.request(UPDATE_NOTE, newNote);
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

	const onFormSubmit = data => {
		mutation.mutate({
			id,
			...data,
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
