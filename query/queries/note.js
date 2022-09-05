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
