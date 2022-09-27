import { gql } from 'apollo-server-micro';

export const noteSchema = gql`
	type Note {
		body: String!
		excerpt: String!
		createdAt: String!
		updatedAt: String
		id: ID!
		userId: ID!
	}

	extend type Query {
		note(id: String!): Note!
		allNotes: [Note!]!
	}

	extend type Mutation {
		createNote(body: String!, excerpt: String!): Note!
		updateNote(id: ID!, excerpt: String, body: String): Note!
		deleteNote(id: ID!): Note
	}
`;
