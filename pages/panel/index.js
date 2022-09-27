import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/spinner';
import { GET_NOTES } from '../../query/queries/note';
import { client } from '../../lib/graphQlRequestDefault';
import { useAuthContext } from '../../context/authContext';
import PanelLayout from '../../components/layout';
import { lazy, Suspense } from 'react';

const ShowNotes = lazy(() => import('../../components/note/ShowNotes'));

const Panel = () => {
	const { state } = useAuthContext();

	const { data, isSuccess, isLoading } = useQuery(['notes'], () => {
		return client.request(
			GET_NOTES,
			{},
			{
				token: window.localStorage.getItem('token'),
			}
		);
	});

	if (!state.token || isLoading) {
		return <Spinner />;
	}
	return (
		<PanelLayout>
			{isSuccess && (
				<Suspense fallback={<Spinner />}>
					<ShowNotes data={data} />
				</Suspense>
			)}
		</PanelLayout>
	);
};

export default Panel;
