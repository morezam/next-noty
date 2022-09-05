import styled from 'styled-components';

export const NavTop = styled.nav`
	position: absolute;
	top: 2rem;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	margin-bottom: 10rem;
	@media only screen and (min-width: 1000px) {
		display: none;
	}
`;

export const LinkNav = styled.a`
	font-size: 2.5rem;
	text-decoration: none;
	color: ${({ theme }) => theme.noteColor};
	cursor: pointer;
	z-index: 200;
	margin: 1rem 4rem;
	z-index: 10;
`;

export const NavListWrap = styled.div`
	display: ${({ open }) => (open ? 'flex' : 'none')};
	background-color: rgba(0, 0, 0, 0.5);
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 90;
`;

export const NavList = styled.div`
	flex-direction: column;
	display: flex;
	position: absolute;
	top: 4rem;
	right: 5rem;
	z-index: 100;
	background-color: ${({ theme }) => theme.noteBack};
	border-radius: 1rem;
	font-size: 2rem;
	padding: 2rem;
	& > * {
		margin: 2rem 0;
		cursor: pointer;
	}
`;
