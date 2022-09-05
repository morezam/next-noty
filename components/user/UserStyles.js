import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InputWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	height: 95vh;
`;

export const UserForm = styled.form`
	display: flex;
	flex-direction: column;
	height: 80%;
	justify-content: space-evenly;
	width: 50rem;
	align-items: center;
	background-color: var(--primary-color);
	border-radius: 1rem;
`;

export const Label = styled.label`
	align-self: flex-start;
	color: var(--white-color);
	font-size: 2rem;
`;

export const Input = styled.input`
	padding: 2rem 1.5rem;
	font-family: inherit;
	margin: 2rem 0;
	min-width: 26vw;
	font-size: 2rem;

	&:focus {
		outline: none;
	}
`;

export const PError = styled.p`
	font-size: 2rem;
	color: #e91e63;
	padding: 0 2rem;
	text-align: center;
`;

export const UserP = styled.p`
	font-size: 2.5rem;
	color: var(--white-color);
`;

export const UserLink = styled(Link)`
	color: var(--secondary-color);
`;
