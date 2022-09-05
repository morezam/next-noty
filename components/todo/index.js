import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { client } from '../../lib/graphQlRequestDefault';
import { GET_TODOS } from '../../query/queries/todo';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import { TodosUl, TodosWrapper } from './TodoStyles';

const ShowTodos = () => {
	const { data, loading, isSuccess } = useQuery(() => {
		return client.request(GET_TODOS);
	});
	if (loading) {
		return <p>Loading ..</p>;
	}
	return (
		<TodosWrapper>
			<CreateTodo />
			<TodosUl>
				{isSuccess &&
					data.allTodos
						.slice()
						.reverse()
						.map(todo => {
							return <Todo todo={todo} key={todo.id} />;
						})}
			</TodosUl>
		</TodosWrapper>
	);
};

export default ShowTodos;
