import { gql } from 'graphql-request';

export const ADD_NOTE = gql`
	mutation ($body: String!, $excerpt: String!) {
		createNote(body: $body, excerpt: $excerpt) {
			id
			excerpt
		}
	}
`;

export const DELETE_NOTE = gql`
	mutation ($id: ID!) {
		deleteNote(id: $id) {
			id
		}
	}
`;

export const UPDATE_NOTE = gql`
	mutation ($id: ID!, $body: String!, $excerpt: String!) {
		updateNote(id: $id, body: $body, excerpt: $excerpt) {
			excerpt
			id
		}
	}
`;
