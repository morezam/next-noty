import { gql } from 'graphql-request';

export const ADD_NOTE = gql`
	mutation ($title: String!, $body: String!) {
		createNote(title: $title, body: $body) {
			title
		}
	}
`;

export const DELETE_NOTE = gql`
	mutation ($id: ID!) {
		deleteNote(id: $id) {
			title
			id
		}
	}
`;

export const UPDATE_NOTE = gql`
	mutation ($id: ID!, $title: String!, $body: String!) {
		updateNote(id: $id, title: $title, body: $body) {
			title
			body
			id
		}
	}
`;
