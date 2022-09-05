import { gql } from 'graphql-request';

export const GET_NOTES = gql`
	query {
		allNotes {
			title
			body
			createdAt
			updatedAt
			id
			userId
		}
	}
`;

export const GET_NOTE = gql`
	query ($id: String!) {
		note(id: $id) {
			title
			body
			createdAt
			updatedAt
			id
		}
	}
`;
