import Head from 'next/head';
import { useRouter } from 'next/router';
import PanelLayout from '@components/layout';
import ShowNote from '@components/note/ShowNote';

const Note = () => {
	const router = useRouter();
	const noteId = router.query?.noteId;

	return (
		<PanelLayout>
			<Head>
				<title>Note</title>
			</Head>
			<ShowNote id={noteId} />
		</PanelLayout>
	);
};

export default Note;
