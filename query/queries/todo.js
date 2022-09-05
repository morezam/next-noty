import { gql } from 'graphql-request';

export const GET_TODOS = gql`
	{
		allTodos {
			id
			title
			completed
		}
	}
`;
