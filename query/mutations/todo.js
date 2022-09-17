import { gql } from 'graphql-request';

export const CHANGE_COMPLETED = gql`
	mutation ($id: ID!, $title: String!, $completed: Boolean!) {
		updateTodo(id: $id, title: $title, completed: $completed) {
			completed
		}
	}
`;

export const CREATE_TODO = gql`
	mutation ($title: String!, $completed: Boolean!) {
		createTodo(title: $title, completed: $completed) {
			id
			title
			completed
		}
	}
`;

export const UPDATE_TODO = gql`
	mutation ($id: ID!, $title: String!) {
		updateTodo(id: $id, title: $title) {
			id
			title
		}
	}
`;

export const DELETE_TODO = gql`
	mutation ($id: ID!) {
		deleteTodo(id: $id) {
			id
			title
			__typename
		}
	}
`;
