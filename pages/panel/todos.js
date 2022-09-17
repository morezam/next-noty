import { useQuery } from '@tanstack/react-query';
import { client } from '../../lib/graphQlRequestDefault';
import Spinner from '../../components/spinner';
import { GET_TODOS } from '../../query/queries/todo';
import TodoComponent from '../../components/todo';

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

	return <>{isSuccess ? <TodoComponent data={data} /> : ''}</>;
};

export default Todos;
