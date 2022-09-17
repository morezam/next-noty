import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { checkEmail } from '../lib/checkEmail';
import { checkPassword } from '../lib/checkPassword';

export const resolvers = {
	Query: {
		user: async (parent, { id }, { models: { userModel } }, info) => {
			const user = await userModel.findById({ _id: id }).exec();
			return user;
		},

		note: async (parent, { id }, { models: { noteModel } }, info) => {
			const note = await noteModel.findById({ _id: id }).exec();
			return note;
		},
		allNotes: async (
			parent,
			args,
			{ models: { noteModel }, authUser },
			info
		) => {
			if (!authUser) {
				throw new Error('you are not Authenticated, please sign up/in');
			}
			const notes = await noteModel
				.find({ userId: authUser.id })
				.sort({ updatedAt: -1, createdAt: -1 })
				.exec();
			return notes;
		},

		allTodos: async (
			parent,
			args,
			{ models: { todoModel }, authUser },
			info
		) => {
			const todos = await todoModel
				.find({ userId: authUser.id })
				.sort({ createdAt: -1 })
				.exec();
			return todos;
		},
	},
	Mutation: {
		createUser: async (
			parent,
			{ email, password },
			{ models: { userModel } },
			info
		) => {
			if (!email || !password) {
				throw new Error('you must provide email and password');
			}

			if (!checkEmail(email)) {
				throw new Error('Email is not valid');
			}

			if (!checkPassword(password)) {
				throw new Error(
					'Password must be at least 8 character long with on number and one special character'
				);
			}
			const hashedPassword = bcrypt.hashSync(password, 12);
			const user = await userModel.create({ email, password: hashedPassword });
			const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, {
				expiresIn: 24 * 10 * 50,
			});

			return { user, token };
		},

		login: async (
			parent,
			{ email, password },
			{ models: { userModel } },
			info
		) => {
			if (!email || !password) {
				throw new Error('you must provide email and password');
			}
			const user = await userModel.findOne({ email }).exec();
			if (!user) {
				throw new Error('user not found');
			}
			const matchPasswords = bcrypt.compareSync(password, user.password);

			if (!matchPasswords) {
				throw new Error('password is not correct');
			}

			const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, {
				expiresIn: 24 * 10 * 50,
			});

			return {
				token,
				userId: user.id,
			};
		},

		createNote: async (
			parent,
			{ title, body },
			{ models: { noteModel }, authUser },
			info
		) => {
			const note = await noteModel.create({
				title,
				body,
				userId: authUser.id,
				updatedAt: new Date().toString(),
				createdAt: new Date().toString(),
			});
			return note;
		},
		updateNote: async (
			parent,
			{ id, title, body },
			{ models: { noteModel } },
			info
		) => {
			const newNote = await noteModel.findByIdAndUpdate(id, {
				title,
				body,
				updatedAt: new Date().toString(),
			});
			return newNote;
		},

		deleteNote: async (parent, { id }, { models: { noteModel } }, info) => {
			const deletedNote = await noteModel.findByIdAndDelete(id);
			return deletedNote;
		},

		createTodo: async (
			parent,
			{ title, completed },
			{ models: { todoModel }, authUser },
			info
		) => {
			const todo = await todoModel.create({
				title,
				completed,
				userId: authUser.id,
				createdAt: Date.now(),
			});
			return todo;
		},

		updateTodo: async (
			parent,
			{ id, title, completed },
			{ models: { todoModel } },
			info
		) => {
			const newTodo = await todoModel.findByIdAndUpdate(id, {
				title,
				completed,
			});
			return newTodo;
		},

		deleteTodo: async (parent, { id }, { models: { todoModel } }, info) => {
			const deletedTodo = await todoModel.findByIdAndDelete(id);
			return deletedTodo;
		},
	},

	User: {
		notes: async ({ id }, args, { models: { noteModel } }, info) => {
			const notes = await noteModel.find({ userId: id });
			return notes;
		},

		todos: async ({ id }, args, { models: { todoModel } }, info) => {
			const todos = await todoModel.find({ userId: id });
			return todos;
		},
	},
};
