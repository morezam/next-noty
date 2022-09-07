import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../lib/queryclient';
import { client } from '../../lib/graphQlRequestDefault';
// import { GET_TODOS } from '../../query/queries/todo';
import { DELETE_TODO } from '../../query/mutations/todo';
import { FaTrash } from 'react-icons/fa';

const DeleteTodo = ({ todoId }) => {
	const mutation = useMutation(
		({ id }) => {
			return client.request(DELETE_TODO, { id });
		},
		{
			onSuccess() {
				queryClient.invalidateQueries(['todos']);
			},
		}
	);

	const onTodoDelete = id => {
		mutation.mutate({
			id,
		});
	};
	return (
		<FaTrash
			onClick={() => onTodoDelete(todoId)}
			style={{ cursor: 'pointer', color: '#393e46' }}
		/>
	);
};

export default DeleteTodo;
