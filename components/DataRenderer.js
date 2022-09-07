import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Btn } from './Btn';
import {
	InputsWrapper,
	NoteInput,
	NoteWrapper,
	TextArea,
} from './note/NoteStyles';

export default function DataRenderer({ onFormSubmit, create, data, children }) {
	const { register, handleSubmit, reset } = useForm();

	useEffect(() => {
		if (data) {
			reset(data);
		}
	}, [data, reset]);

	return (
		<NoteWrapper>
			<InputsWrapper onSubmit={handleSubmit(onFormSubmit)}>
				<NoteInput {...register('title')} placeholder="Title" />
				<TextArea {...register('body')} placeholder="Write Here...." />
				{children}
				<Btn secondary>{create ? 'Create' : 'Update'}</Btn>
			</InputsWrapper>
		</NoteWrapper>
	);
}
