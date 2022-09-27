import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
	body: {
		type: String,
		required: true,
	},
	excerpt: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
	},
	updatedAt: {
		type: Date,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
});

export const noteModel =
	mongoose.models.note || mongoose.model('note', noteSchema);
