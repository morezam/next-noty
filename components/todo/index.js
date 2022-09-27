import Todo from './Todo';
import CreateTodo from './CreateTodo';
import { TodosUl, TodosWrapper } from './TodoStyles';

const ShowTodos = ({ data }) => {
	return (
		<TodosWrapper>
			<CreateTodo />
			<TodosUl>
				{data.allTodos.map(todo => {
					return <Todo todo={todo} key={todo.id} />;
				})}
			</TodosUl>
		</TodosWrapper>
	);
};

export default ShowTodos;
