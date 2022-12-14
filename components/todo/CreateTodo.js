import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@lib/queryclient';
import { client } from '@lib/graphQlRequestDefault';
import { CREATE_TODO } from '@query/mutations/todo';
import { useAuthContext } from '@context/authContext';
import { Btn } from '../Btn';
import { TodoInput, TodoForm } from './TodoStyles';

const CreateTodo = () => {
	const [title, setTitle] = useState('');

	const { state } = useAuthContext();

	const mutation = useMutation(
		({ title, completed }) => {
			return client.request(
				CREATE_TODO,
				{ title, completed },
				{
					token: state.token,
				}
			);
		},
		{
			onMutate: async newTodo => {
				await queryClient.cancelQueries(['todos']);

				const previousTodos = queryClient.getQueryData(['todos']);

				queryClient.setQueryData(['todos'], old => {
					return {
						allTodos: [
							{ id: `${Date.now()} ${newTodo.title}`, ...newTodo },
							...old.allTodos,
						],
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

	const onButtonClick = () => {
		mutation.mutate({
			title,
			completed: false,
		});
		setTitle('');
	};

	return (
		<>
			<TodoForm onSubmit={e => e.preventDefault()}>
				<TodoInput
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder="Enter New Todo"
				/>

				<Btn todo onClick={onButtonClick}>
					Done
				</Btn>
			</TodoForm>
		</>
	);
};

export default CreateTodo;
