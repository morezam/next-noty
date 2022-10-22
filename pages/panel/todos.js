import { useQuery } from '@tanstack/react-query';
import { client } from '@lib/graphQlRequestDefault';
import Spinner from '@components/spinner';
import { GET_TODOS } from '@query/queries/todo';
import PanelLayout from '@components/layout';
import { Suspense } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const TodoComponent = dynamic(() => import('@components/todo'), {
	suspense: true,
});

const Todos = () => {
	const { data, isSuccess, isLoading } = useQuery(['todos'], () => {
		return client.request(
			GET_TODOS,
			{},
			{
				token: window.localStorage.getItem('token'),
			}
		);
	});

	return (
		<PanelLayout>
			<Head>
				<title>Todos</title>
				<meta
					name="description"
					content="You can see all of your todos, create, delete or update them"
				/>
			</Head>
			{isSuccess ? (
				<Suspense fallback={<Spinner />}>
					<TodoComponent data={data} />
				</Suspense>
			) : (
				''
			)}
		</PanelLayout>
	);
};

export default Todos;
