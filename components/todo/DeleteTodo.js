import { useMutation } from '@tanstack/react-query';
import { FaTrash } from 'react-icons/fa';
import { queryClient } from '@lib/queryclient';
import { client } from '@lib/graphQlRequestDefault';
import { DELETE_TODO } from '@query/mutations/todo';

const DeleteTodo = ({ todoId }) => {
	const mutation = useMutation(
		({ id }) => {
			return client.request(DELETE_TODO, { id });
		},
		{
			onMutate: async ({ id }) => {
				await queryClient.cancelQueries(['todos']);

				const previousTodos = queryClient.getQueryData(['todos']);

				queryClient.setQueryData(['todos'], old => {
					return {
						allTodos: old.allTodos.filter(todo => todo.id !== id),
					};
				});

				return { previousTodos };
			},
			onError: (err, newTodo, context) => {
				queryClient.setQueryData(['todos'], context.previousTodos);
			},
			onSettled: () => {
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
