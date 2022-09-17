import Todo from './Todo';
import CreateTodo from './CreateTodo';
import { TodosUl, TodosWrapper } from './TodoStyles';

import PanelLayout from '../layout';

const ShowTodos = ({ data }) => {
	return (
		<PanelLayout>
			<TodosWrapper>
				<CreateTodo />
				<TodosUl>
					{data.allTodos.map(todo => {
						return <Todo todo={todo} key={todo.id} />;
					})}
				</TodosUl>
			</TodosWrapper>
		</PanelLayout>
	);
};

export default ShowTodos;
