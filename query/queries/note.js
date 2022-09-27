import { gql } from 'graphql-request';

export const GET_NOTES = gql`
	query {
		allNotes {
			excerpt
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
			body
			excerpt
			createdAt
			updatedAt
			id
		}
	}
`;
