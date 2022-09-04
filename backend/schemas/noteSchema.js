import { gql } from 'apollo-server-micro';

export const noteSchema = gql`
	type Note {
		title: String!
		body: String!
		createdAt: String!
		updatedAt: String
		id: ID!
		userId: ID!
	}

	extend type Query {
		note(id: ID!): Note!
		allNotes: [Note!]!
	}

	extend type Mutation {
		createNote(title: String!, body: String!): Note!
		updateNote(id: ID!, title: String, body: String): Note!
		deleteNote(id: ID!): Note
	}
`;
