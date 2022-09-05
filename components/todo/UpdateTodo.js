import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { client } from '../../lib/graphQlRequestDefault';
import { FaCheckCircle } from 'react-icons/fa';
import { UPDATE_TODO } from '../../query/mutations/todo';
// import { GET_TODOS } from '../../query/queries/todo';
import { UpdateInput, TodoWrapper } from './TodoStyles';

const Input = ({ todo, children }) => {
	const [title, setTitle] = useState(todo.title);
	const mutation = useMutation(({ id, title, completed }) => {
		return client.request(UPDATE_TODO, { id, title, completed });
	});

	const onUpdate = () => {
		mutation.mutate({
			id: todo.id,
			title,
			completed: todo.completed,
		});
	};

	return (
		<TodoWrapper>
			<UpdateInput
				spellCheck={false}
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			{todo.title === title ? (
				children
			) : (
				<FaCheckCircle style={{ cursor: 'pointer' }} onClick={onUpdate} />
			)}
		</TodoWrapper>
	);
};

export default Input;
