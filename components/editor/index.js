import ExampleTheme from './ExampleTheme';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import AutoLinkPlugin from './plugins/AutoLinkPlugin';

function Placeholder() {
	return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
	// The editor theme

	theme: ExampleTheme,
	// Handling of errors during update
	onError(error) {
		throw error;
	},
	// Any custom nodes go here
	nodes: [
		HeadingNode,
		ListNode,
		ListItemNode,
		QuoteNode,
		CodeNode,
		CodeHighlightNode,
		TableNode,
		TableCellNode,
		TableRowNode,
		AutoLinkNode,
		LinkNode,
	],
};

export default function Editor({
	editorStateRef,
	initialEditorState,
	readMode = false,
	...options
}) {
	return (
		<LexicalComposer
			initialConfig={{
				...editorConfig,
				editorState: initialEditorState,
				...options,
			}}>
			<div
				className={`${
					readMode
						? 'editor-container-shared'
						: 'editor-container-shared editor-container'
				}`}>
				{!readMode && <ToolbarPlugin />}
				<div
					className={`${readMode ? 'editor-inner-readmode' : 'editor-inner'}`}>
					<RichTextPlugin
						contentEditable={
							<ContentEditable
								className={`${
									readMode
										? 'editor-input-shared'
										: 'editor-input-shared editor-input '
								}`}
							/>
						}
						placeholder={<Placeholder />}
					/>
					{!readMode && <HistoryPlugin />}
					{editorStateRef && (
						<OnChangePlugin
							onChange={editorState => (editorStateRef.current = editorState)}
						/>
					)}
					<AutoFocusPlugin />
					<CodeHighlightPlugin />
					<ListPlugin />
					<LinkPlugin />
					<AutoLinkPlugin />
					<ListMaxIndentLevelPlugin maxDepth={7} />
				</div>
			</div>
		</LexicalComposer>
	);
}
