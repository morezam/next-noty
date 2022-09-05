import { gql } from 'graphql-request';

export const SIGN_UP = gql`
	mutation ($email: String!, $password: String!) {
		createUser(email: $email, password: $password) {
			email
			id
		}
	}
`;

export const LOG_IN = gql`
	mutation ($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			userId
		}
	}
`;

export const LOG_OUT = gql`
	mutation {
		logOut {
			id
		}
	}
`;
