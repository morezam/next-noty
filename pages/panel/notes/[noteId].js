import { useRouter } from 'next/router';
import ShowNote from '../../../components/note/ShowNote';

const Note = () => {
	const router = useRouter();
	const noteId = router.query?.noteId;

	return <ShowNote id={noteId} />;
};

export default Note;
