import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { typeDefs } from '../../backend/schemas';
import { resolvers } from '../../backend/resolvers';

import { userModel } from '../../backend/models/userModel';
import { noteModel } from '../../backend/models/noteModel';
import { todoModel } from '../../backend/models/todoModel';

const getUser = async req => {
	const token = req.headers['token'];
	if (token) {
		try {
			return jwt.verify(token, process.env.PRIVATE_KEY);
		} catch (e) {
			throw new Error('Your session expired. Sign in again.');
		}
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
	context: async ({ req }) => {
		if (req) {
			const authUser = await getUser(req);
			return {
				authUser,
				models: {
					userModel,
					noteModel,
					todoModel,
				},
			};
		}
	},
});

const startServer = server.start().then(() => {
	mongoose.connect(`${process.env.MONGODB_CONNECTION_URL}`);
	// mongoose.connect(``);
});

export default async function handler(req, res) {
	await startServer;
	await server.createHandler({ path: '/api' })(req, res);
}

export const config = {
	api: {
		bodyParser: false,
	},
};
