import styled from 'styled-components';

export const TodosWrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* height: 100vh; */
	margin-top: 5rem;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const TodoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const TodosUl = styled.ul`
	list-style: none;
`;

export const TodoForm = styled.form`
	margin-top: 5rem;
`;

export const TodoInput = styled.input`
	border: 1px solid green;
	padding: 1.5rem;
	width: 27rem;
	border-radius: 1rem;
	font-size: 2rem;

	@media only screen and (min-width: 400px) {
		width: 27rem;
	}

	&:focus {
		outline: none;
	}
`;

export const TodoLi = styled.li`
	display: flex;
	padding: 1rem;
	background-color: rgba(249, 248, 80);
	margin: 1rem 0;
	width: 40rem;
	border-radius: 1rem;
	font-size: 1.7rem;
`;

export const CheckWrapper = styled.div`
	height: 3rem;
	width: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 3;
	margin-right: 1rem;
	border: 2px solid var(--primary-color);
	color: var(--primary-color);
	/* background-color: var(--primary-color); */
`;

export const UpdateInput = styled.input`
	background-color: rgba(249, 248, 80);
	font-size: 1.8rem;
	font-family: inherit;
	border: 0;
	&:focus {
		outline: none;
	}
`;
