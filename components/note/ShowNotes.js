import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { NotesWrapper, NoteCreate, NoteUl } from './NoteStyles';
import NoteList from './NoteList';

const ShowNotes = ({ data }) => {
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
