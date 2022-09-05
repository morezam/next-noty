import { useState } from 'react';
import Link from 'next/link';
import fromnow from 'fromnow';
import { useMutation } from '@tanstack/react-query';
import { client } from '../../lib/graphQlRequestDefault';
import { FaTrash } from 'react-icons/fa';
import { DELETE_NOTE } from '../../query/mutations/note';
// import { GET_NOTES } from '../../query/queries/note';
import { H4 } from '../Typographi';
import { DeleteIcon, NoteLink, NoteP, NoteTime } from './NoteStyles';

const NoteList = ({ allNotes }) => {
	const [noteId, setNoteId] = useState('');

	const mutation = useMutation(({ id }) => {
		return client.request(DELETE_NOTE, { id });
	});

	const onSpanClick = noteId => {
		mutation.mutate({ id: noteId });
	};
	return allNotes
		.slice()
		.map(note => {
			const timee = new Date(note.updatedAt).getTime();
			return { ...note, updatedAt: timee };
		})
		.sort((a, b) => b.updatedAt - a.updatedAt)
		.map(note => {
			return (
				<>
					<div style={{ position: 'relative' }} key={note.id}>
						<Link passHref href={`/panel/note/${note.id}`}>
							<NoteLink>
								<li>
									<H4>{note.title}</H4>
									<NoteP>
										{note.body.length > 100
											? note.body.substring(0, 100) + '...'
											: note.body.substring(0, 100) + ''}
									</NoteP>
								</li>
								<NoteTime>
									{fromnow(note.updatedAt, {
										and: false,
										suffix: true,
										max: 1,
									})}
								</NoteTime>
							</NoteLink>
						</Link>
						<DeleteIcon
							onClick={() => {
								setNoteId(note.id);
							}}>
							<FaTrash />
						</DeleteIcon>
					</div>
					{/* <Modal
						onYes={() => {
							onSpanClick(noteId);
							modalCtx.closeOpen();
						}}
						onNo={() => modalCtx.closeOpen()}
					/> */}
				</>
			);
		});
};

export default NoteList;
