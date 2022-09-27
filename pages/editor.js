import { useCallback, useRef } from 'react';
import { Btn } from '../components/Btn';
import EditorComponent from '../components/editor';

const Editor = () => {
	const editorStateRef = useRef();

	const onEditorSubmit = useCallback(editorState => {
		const editorStringState = JSON.stringify(editorState.toJSON());
		console.log(editorState.toJSON());
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<EditorComponent
				initialEditorState={null}
				editorStateRef={editorStateRef}
			/>
			<Btn
				style={{ width: '50rem' }}
				secondary
				onClick={() => onEditorSubmit(editorStateRef.current)}>
				Submit
			</Btn>
		</div>
	);
};

export default Editor;
