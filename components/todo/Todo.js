import { useMutation } from '@tanstack/react-query';
import { FaCheck } from 'react-icons/fa';
import { client } from '../../lib/graphQlRequestDefault';
import { CHANGE_COMPLETED } from '../../query/mutations/todo';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';
import { CheckWrapper, TodoLi } from './TodoStyles';
import { queryClient } from '../../lib/queryclient';

const Todo = ({ todo }) => {
	const mutation = useMutation(
		({ id, title, completed }) => {
			return client.request(CHANGE_COMPLETED, { id, title, completed });
		},
		{
			onMutate: async updatedTodo => {
				await queryClient.cancelQueries(['todos']);

				const previousTodos = queryClient.getQueryData(['todos']);

				queryClient.setQueryData(['todos'], old => {
					return {
						allTodos: old.allTodos.map(todo => {
							if (todo.id === updatedTodo.id) {
								return { ...updatedTodo };
							}
							return todo;
						}),
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

	const onLiClick = todo => {
		mutation.mutate({
			id: todo.id,
			title: todo.title,
			completed: todo.completed === true ? false : true,
		});
	};

	return (
		<TodoLi>
			<CheckWrapper
				onClick={() => {
					onLiClick(todo);
				}}>
				<FaCheck
					style={{
						display: `${!todo.completed ? 'none' : 'block'}`,
						color: 'inherit',
					}}
				/>
			</CheckWrapper>
			<UpdateTodo todo={todo}>
				<DeleteTodo todoId={todo.id} />
			</UpdateTodo>
		</TodoLi>
	);
};

export default Todo;
