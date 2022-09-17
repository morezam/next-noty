import React, { useState } from 'react';
import Link from 'next/link';
import fromnow from 'fromnow';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../lib/queryclient';
import Modal from '../modal';
import { client } from '../../lib/graphQlRequestDefault';
import { FaTrash } from 'react-icons/fa';
import { DELETE_NOTE } from '../../query/mutations/note';
import { H2, H4 } from '../Typographi';
import { DeleteIcon, NoteLink, NoteP, NoteTime } from './NoteStyles';
import { Btn } from '../Btn';

const NoteList = ({ allNotes }) => {
	const [noteId, setNoteId] = useState('');
	const [open, setOpen] = useState(false);

	const mutation = useMutation(
		({ id }) => {
			return client.request(DELETE_NOTE, { id });
		},
		{
			onMutate: async ({ id }) => {
				await queryClient.cancelQueries(['notes']);

				const previousNots = queryClient.getQueryData(['notes']);

				queryClient.setQueryData(['notes'], old => {
					return {
						allNotes: old.allNotes.filter(note => note.id !== id),
					};
				});

				return { previousNots };
			},
			onError: (err, deletedNote, context) => {
				queryClient.setQueryData(['notes'], context.previousNots);
			},
			onSettled: () => {
				queryClient.invalidateQueries(['notes']);
			},
		}
	);

	const onSpanClick = noteId => {
		mutation.mutate({ id: noteId });
		setOpen(false);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return allNotes.map(note => {
		return (
			<React.Fragment key={note.id}>
				<div style={{ position: 'relative' }}>
					<Link passHref href={`/panel/notes/${note.id}`}>
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
								{fromnow(+note.updatedAt, {
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
							setOpen(!open);
						}}>
						<FaTrash />
					</DeleteIcon>
				</div>
				<Modal isOpen={open} onRequestClose={handleClose}>
					<H2>You sure?</H2>
					<div>
						<Btn primary bgcolor="red" onClick={() => onSpanClick(noteId)}>
							Yes
						</Btn>
						<Btn primary bgcolor="green" onClick={() => handleClose()}>
							No
						</Btn>
					</div>
				</Modal>
			</React.Fragment>
		);
	});
};

export default NoteList;
