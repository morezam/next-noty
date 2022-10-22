import styled from 'styled-components';

export const UserForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 40rem;
	height: 55rem;
	margin-top: 5rem;
	justify-content: space-evenly;
	background-color: var(--primary-color);
	border-radius: 1rem;
	padding: 0 3rem;
	position: relative;
`;

export const InputWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	align-self: flex-start;
	color: var(--white-color);
	font-size: 2rem;
	margin-top: 1rem;
`;

export const Input = styled.input`
	padding: 1.5rem 1rem;
	font-family: inherit;
	margin: 1rem 0;
	font-size: 2rem;

	&:focus {
		outline: none;
	}
`;

export const PError = styled.p`
	font-size: 1.8rem;
	color: #e91e63;
	padding: 0 2rem;
	text-align: center;
`;

export const UserP = styled.p`
	font-size: 2.5rem;
	color: var(--white-color);
`;

export const UserLink = styled.a`
	color: var(--secondary-color);
`;
