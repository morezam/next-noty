import { gql } from 'apollo-server-micro';

module.exports = gql`
	type Todo {
		title: String!
		userId: ID!
		completed: Boolean
		id: ID!
	}

	extend type Query {
		allTodos: [Todo!]!
	}

	extend type Mutation {
		createTodo(title: String!, completed: Boolean!): Todo!
		updateTodo(id: ID!, title: String, completed: Boolean): Todo!
		deleteTodo(id: ID!): Todo
	}
`;
