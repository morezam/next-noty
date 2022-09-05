import styled from 'styled-components';

export const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	position: absolute;
	width: 100%;
	top: 2rem;
`;

export const LogoNav = styled.div`
	justify-self: flex-end;
	position: absolute;
	right: 0;
	top: 1rem;
	@media only screen and (min-width: 600px) {
		position: relative;
	}
`;

export const StyledLink = styled.a`
	text-transform: uppercase;
	text-decoration: none;
	font-size: 2rem;
	color: ${({ color }) => color || 'var(--white-color)'};
	transition: all 0.3s;
	padding-bottom: 0.5rem;

	&:hover {
		border-bottom: 5px solid var(--secondary-color);
	}
	@media only screen and (min-width: 600px) {
		color: #000;
	}
`;

export const NavUlWrapper = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(57, 62, 70, 0.98);
	top: ${({ active }) => (active ? '0' : '-100%')};
	transition: all 0.9s;
	z-index: 30;
	width: 100%;
	height: 100%;

	@media only screen and (min-width: 600px) {
		position: relative;
		background-color: transparent;
		color: #000;
		justify-content: flex-end;
	}
`;

export const NavUl = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;

	& > * {
		margin: 2rem 0;
	}
	@media only screen and (min-width: 600px) {
		flex-direction: row-reverse;
		& > * {
			margin: 0 2rem;
		}
	}
`;

export const NavClose = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 2rem;
	color: var(--white-color);

	@media only screen and (min-width: 600px) {
		display: none;
	}
`;
