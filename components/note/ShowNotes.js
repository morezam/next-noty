import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { NotesWrapper, NoteCreate, NoteUl } from './NoteStyles';
import { GET_NOTES } from '../../query/queries/note';
import NoteList from './NoteList';
import { client } from '../../lib/graphQlRequestDefault';

const ShowNotes = () => {
	const { data, loading } = useQuery(() => {
		return client.request(GET_NOTES);
	});

	if (loading) {
		return <p>Loading ...</p>;
	}

	return (
		<NotesWrapper>
			<NoteCreate>
				<Link href="/panel/create">
					<a>
						<FaPlus />
					</a>
				</Link>
			</NoteCreate>
			<NoteUl>
				<NoteList allNotes={data.allNotes} />
			</NoteUl>
		</NotesWrapper>
	);
};

export default ShowNotes;
