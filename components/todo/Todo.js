import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { FaCheck } from 'react-icons/fa';
import { client } from '../../lib/graphQlRequestDefault';
import { CHANGE_COMPLETED } from '../../query/mutations/todo';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';
import { CheckWrapper, TodoLi } from './TodoStyles';

const Todo = ({ todo }) => {
	const [hide, setHide] = useState(true);
	const mutation = useMutation(({ id, title, completed }) => {
		return client.request(CHANGE_COMPLETED, { id, title, completed });
	});
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
					setHide(!hide);
				}}>
				<FaCheck
					style={{
						display: `${hide ? 'none' : 'block'}`,
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
