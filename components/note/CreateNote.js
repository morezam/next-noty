import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { client } from '../../lib/graphQlRequestDefault';
import { FaCheckCircle, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ADD_NOTE } from '../../query/mutations/note';
import { GET_NOTES } from '../../query/queries/note';
import {
	NoteWrapper,
	InputsWrapper,
	NoteInput,
	NoteCheck,
	TextArea,
	BackLink,
} from './NoteStyles';
import { useRouter } from 'next/router';

const CreateNote = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const router = useRouter();

	const mutation = useMutation(
		({ title, body }) => {
			return client.request(ADD_NOTE, { title, body });
		},
		{
			onSuccess() {
				router.replace('/panel');
			},
		}
	);

	const onButtonClick = () => {
		mutation.mutate({
			title,
			body,
		});
	};

	return (
		<>
			<BackLink to="/panel">
				<FaArrowAltCircleLeft />
			</BackLink>
			<NoteWrapper>
				<InputsWrapper>
					<NoteInput
						value={title}
						onChange={e => setTitle(e.target.value)}
						spellCheck="false"
						placeholder="Title"
					/>
					<TextArea
						spellCheck="false"
						value={body}
						onChange={e => setBody(e.target.value)}></TextArea>

					<NoteCheck onClick={onButtonClick}>
						<FaCheckCircle />
					</NoteCheck>
				</InputsWrapper>
			</NoteWrapper>
		</>
	);
};

export default CreateNote;
