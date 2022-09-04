import { gql } from 'apollo-server-micro';

export const userSchema = gql`
	type User {
		email: String!
		id: ID!
		notes: [Note!]!
		todos: [Todo!]!
	}

	type Token {
		token: String!
		userId: ID!
	}

	type UserWithToken {
		token: String!
		user: User!
	}

	extend type Query {
		user(id: ID!): User!
	}

	extend type Mutation {
		createUser(email: String!, password: String!): UserWithToken!
		login(email: String!, password: String!): Token!
	}
`;
