import { useQuery } from '@tanstack/react-query';
import { client } from '../../lib/graphQlRequestDefault';
import { GET_TODOS } from '../../query/queries/todo';
import TodoComponent from '../../components/todo';

const Todos = () => {
	const { data, loading, isSuccess } = useQuery(['todos'], () => {
		return client.request(
			GET_TODOS,
			{},
			{
				token: window.localStorage.getItem('token'),
			}
		);
	});
	if (loading) {
		return <p>Loading ..</p>;
	}
	return <>{isSuccess ? <TodoComponent data={data} /> : ''}</>;
};

export default Todos;
