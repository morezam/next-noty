import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { GET_NOTES } from '../../query/queries/note';
import { client } from '../../lib/graphQlRequestDefault';
import { useAuthContext } from '../../context/authContext';
import { Other, Parent, Sidebar } from '../../components/panel/PanelStyles';
import SideList from '../../components/panel/SideList';
import PanelNav from '../../components/panel/PanelNav';
import ShowNotes from '../../components/note/ShowNotes';

const Panel = () => {
	const { state } = useAuthContext();

	const { data, loading, isSuccess } = useQuery(['notes'], () => {
		return client.request(
			GET_NOTES,
			{},
			{
				token: window.localStorage.getItem('token'),
			}
		);
	});

	if (loading) {
		return <p>Loading ...</p>;
	}

	console.log(state);
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
	return (
		<Parent>
			<Sidebar>
				<SideList />
			</Sidebar>
			<PanelNav />
			<Other>{isSuccess && <ShowNotes data={data} />}</Other>
		</Parent>
	);
};

export default Panel;
