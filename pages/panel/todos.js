import { useQuery } from '@tanstack/react-query';
import { client } from '../../lib/graphQlRequestDefault';
import Spinner from '../../components/spinner';
import { GET_TODOS } from '../../query/queries/todo';
import PanelLayout from '../../components/layout';
import { lazy, Suspense } from 'react';

const TodoComponent = lazy(() => import('../../components/todo'));
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
