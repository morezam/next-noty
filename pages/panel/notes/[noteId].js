import { useRouter } from 'next/router';
import PanelLayout from '../../../components/layout';
import ShowNote from '../../../components/note/ShowNote';

const Note = () => {
	const router = useRouter();
	const noteId = router.query?.noteId;

	return (
		<PanelLayout>
			<ShowNote id={noteId} />
		</PanelLayout>
	);
};

export default Note;
