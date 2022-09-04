import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	createdAt: {
		type: String,
		required: true,
	},
	updatedAt: {
		type: String,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
});

export const note = mongoose.model('note', noteSchema);
