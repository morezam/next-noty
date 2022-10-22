import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@components/spinner';
import { GET_NOTES } from '@query/queries/note';
import { client } from '@lib/graphQlRequestDefault';
import { useAuthContext } from '@context/authContext';
import PanelLayout from '@components/layout';

const ShowNotes = dynamic(() => import('@components/note/ShowNotes'), {
	suspense: true,
});

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
			<Head>
				<title>Welcome to your panel.</title>
				<meta name="description" content="Welcome to your panel. Enjoy Noty." />
				<link rel="icon" type="image/svg+xml" href="/logo.svg" />
			</Head>
			{isSuccess && (
				<Suspense fallback={<Spinner />}>
					<ShowNotes data={data} />
				</Suspense>
			)}
		</PanelLayout>
	);
};

export default Panel;
