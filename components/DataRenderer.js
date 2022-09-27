import { useCallback, useRef } from 'react';
import { Btn } from './Btn';
import Editor from './editor';
import { NoteWrapper } from './note/NoteStyles';

export default function DataRenderer({ onFormSubmit, create, data }) {
	const editorStateRef = useRef();

	const onEditorSubmit = useCallback(
		editorState => {
			const editorJsonState = editorState.toJSON();
			const editorStringState = JSON.stringify(editorJsonState);
			const rootChildren = editorJsonState.root.children;
			const excerpt =
				rootChildren.length <= 4 ? rootChildren : rootChildren.slice(0, 5);

			const excerptObject = {
				root: { ...editorJsonState.root, children: excerpt },
			};
			const stringExcerpt = JSON.stringify(excerptObject);
			onFormSubmit({ body: editorStringState, excerpt: stringExcerpt });
		},
		[onFormSubmit]
	);

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<NoteWrapper>
				<Editor
					editorStateRef={editorStateRef}
					initialEditorState={data ? data.body : null}
				/>
				<Btn secondary onClick={() => onEditorSubmit(editorStateRef.current)}>
					{create ? 'Create' : 'Update'}
				</Btn>
			</NoteWrapper>
		</div>
	);
}
