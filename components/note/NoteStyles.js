import styled from 'styled-components';

export const NotesWrapper = styled.div`
	/* padding: 10rem 10rem 10rem 2rem; */
	padding: 3rem;
`;

export const NoteUl = styled.ul`
	list-style: none;
	margin-top: 5rem;
	display: grid;
	color: ${({ theme }) => theme.noteColor};

	grid-template-columns: repeat(1, 1fr);
	grid-gap: 2rem;
	@media only screen and (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (min-width: 1000px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const NoteLink = styled.a`
	text-decoration: none;
	/* width: 30rem; */
	height: 25rem;
	background-color: ${({ theme }) => theme.noteBack};
	display: block;
	border-radius: 1rem;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
	transition: all 0.3s;
	padding: 2rem 2.5rem;
	position: relative;
	color: ${({ theme }) => theme.noteColor};

	/* transform: scale(1.02); */
`;

export const NoteCreate = styled.div`
	position: fixed;
	bottom: 3rem;
	right: 2rem;
	width: 6rem;
	height: 6rem;
	border-radius: 50%;
	background-color: #a4334d;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.5rem;
	cursor: pointer;
	font-weight: 100;
	z-index: 100;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
	& > * {
		text-decoration: none;
		color: #000;
	}
	@media only screen and (min-width: 1000px) {
		display: none;
	}
`;

export const NoteP = styled.p`
	font-size: 2rem;
	margin-top: 2rem;
`;

export const DeleteIcon = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
	z-index: 15;
	font-size: 2rem;
	cursor: pointer;
`;

export const NoteTime = styled.p`
	position: absolute;
	bottom: 1rem;
	right: 2rem;
	color: #666;
	font-size: 1.4rem;
`;

export const NoteWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	margin-top: 10rem;
	@media only screen and (min-width: 1000px) {
		margin-top: 5rem;
	}
`;
export const InputsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* padding: 2rem; */
	justify-content: flex-end;
	background-color: ${({ theme }) => theme.noteBack};
	color: ${({ theme }) => theme.noteColor};
`;
export const NoteInput = styled.textarea`
	border: none;
	min-width: 90vw;

	text-align: center;
	font-size: 3rem;
	font-family: inherit;
	box-shadow: 0.5rem 1rem 5rem rgba(0, 0, 0, 0.1);
	resize: none;
	z-index: 2;
	color: inherit;
	background-color: inherit;
	overflow: hidden;
	@media only screen and (min-width: 400px) {
		min-width: 70vw;
	}

	&::placeholder {
		color: inherit;
	}

	&:focus {
		outline: none;
	}
`;
export const NoteCheck = styled.div`
	font-size: 4rem;
	color: #29bb89;
	z-index: 50;
	background-color: #206a5d;
	min-width: 90vw;
	display: flex;
	justify-content: center;

	align-items: center;
	padding: 1rem 0;
	cursor: pointer;
	@media only screen and (min-width: 400px) {
		min-width: 70vw;
	}
`;

export const TextArea = styled.textarea`
	resize: none;
	border: none;
	height: 60vh;
	min-width: 90vw;
	font-size: 2.1rem;
	background-color: inherit;
	padding: 3rem;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
	line-height: 1.5;
	font-family: inherit;
	align-self: flex-end;
	color: inherit;

	@media only screen and (min-width: 400px) {
		min-width: 70vw;
		height: 70vh;
	}

	&::-webkit-scrollbar {
		width: 6px;
		background-color: var(--gray-color);
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--primary-color);
	}

	&:focus {
		outline: none;
	}
`;

export const BackLink = styled.a`
	display: block;
	text-decoration: none;
	cursor: pointer;
	font-size: 3rem;
	position: relative;
	width: 3rem;
	top: 2rem;
	z-index: 1000;
	left: 2rem;
	color: ${({ theme }) => theme.noteColor};
	margin: 1rem 0 -2rem;
`;
