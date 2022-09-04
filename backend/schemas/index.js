import { gql } from 'apollo-server-micro';
import { userSchema } from './userSchema';
import { todoSchema } from './todoSchema';
import { noteSchema } from './noteSchema';

const linkSchema = gql`
	type Query {
		_: Boolean
	}
	type Mutation {
		_: Boolean
	}
`;

export const typeDefs = [linkSchema, userSchema, noteSchema, todoSchema];
