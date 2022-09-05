import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { client } from '../../lib/graphQlRequestDefault';
import { FaCheckCircle, FaArrowAltCircleLeft } from 'react-icons/fa';
import { UPDATE_NOTE } from '../../query/mutations/note';
import { GET_NOTE } from '../../query/queries/note';
import {
	NoteWrapper,
	InputsWrapper,
	NoteInput,
	NoteCheck,
	TextArea,
	BackLink,
} from './NoteStyles';

const ShowNote = () => {
	const { data, isSuccess } = useQuery(id => {
		return client.request(GET_NOTE, { id });
	});

	const [newTitle, setNewTitle] = useState(isSuccess ? data.note.title : '');
	const [newBody, setNewBody] = useState(isSuccess ? data.note.body : '');

	const mutation = useMutation(
		({ id, title, body }) => {
			return client.request(UPDATE_NOTE, { id, title, body });
		},
		{
			onSuccess() {
				router.replace('/panel');
			},
		}
	);
	const router = useRouter();

	const onDivClick = () => {
		mutation.mutate({
			id: props.match.params.id,
			title: newTitle,
			body: newBody,
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
						value={newTitle}
						onChange={e => setNewTitle(e.target.value)}
						spellCheck="false"
					/>
					<TextArea
						spellCheck="false"
						value={newBody}
						onChange={e => setNewBody(e.target.value)}></TextArea>
					{newTitle !== title || newBody !== body ? (
						<NoteCheck onClick={onDivClick}>
							<FaCheckCircle />
						</NoteCheck>
					) : (
						''
					)}
				</InputsWrapper>
			</NoteWrapper>
		</>
	);
};

export default ShowNote;
