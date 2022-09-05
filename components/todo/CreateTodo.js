import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { client } from '../../lib/graphQlRequestDefault';
import { CREATE_TODO } from '../../query/mutations/todo';
// import { GET_TODOS } from '../../query/queries/todo';
import { Btn } from '../Btn';
import { TodoInput, TodoForm } from './TodoStyles';

const CreateTodo = () => {
	const [title, setTitle] = useState('');
	const mutation = useMutation(({ title, completed }) => {
		return client.request(CREATE_TODO, { title, completed });
	});

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
