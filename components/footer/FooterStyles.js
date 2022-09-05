import styled from 'styled-components';

export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	background-color: #1b2021;
	@media only screen and (min-width: 600px) {
		height: 25rem;
		justify-content: space-around;
	}
`;
export const FooterContent = styled.div`
	display: flex;

	flex-direction: column;
	align-items: center;
	@media only screen and (min-width: 600px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;
export const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 600px) {
		flex-direction: row;
	}
`;
export const FooterLink = styled.a`
	text-decoration: none;
	text-transform: uppercase;
	color: var(--white-color);
	font-size: 2rem;
	margin: 1rem 2rem;
`;
export const FooterSocials = styled.div`
	display: flex;
	color: var(--white-color);
	margin: 2rem 0;
	font-size: 3rem;
	& > * {
		margin: 0 1.5rem;
		cursor: pointer;
	}
`;
export const FooterCopy = styled.p`
	font-size: 1.7rem;
	color: var(--white-color);
	align-self: center;
	@media only screen and (min-width: 600px) {
		justify-self: flex-start;
	}
`;
