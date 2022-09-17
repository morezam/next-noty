import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/spinner';
import { GET_NOTES } from '../../query/queries/note';
import { client } from '../../lib/graphQlRequestDefault';
import { useAuthContext } from '../../context/authContext';
import ShowNotes from '../../components/note/ShowNotes';
import PanelLayout from '../../components/layout';

const Panel = () => {
	const { state } = useAuthContext();

	const { data, isLoading, isSuccess } = useQuery(['notes'], () => {
		return client.request(
			GET_NOTES,
			{},
			{
				token: window.localStorage.getItem('token'),
			}
		);
	});

	if (isLoading) {
		return <Spinner />;
	}

	if (!state.token) {
		return (
			<div>
				<Link href="/signup">
					<a>Sign up</a>
				</Link>{' '}
				or{' '}
				<Link href="/login">
					<a>Login</a>
				</Link>{' '}
				first
			</div>
		);
	}
	return <PanelLayout>{isSuccess && <ShowNotes data={data} />}</PanelLayout>;
};

export default Panel;
