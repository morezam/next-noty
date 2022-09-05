import styled from 'styled-components';

export const HomeWrapper = styled.section`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	height: 95vh;
	background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('/img/hero-2.jpg');
	background-position: center;
	background-size: cover;
`;

export const HomeContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	color: var(--white-color);
`;

export const HomeP = styled.p`
	position: relative;
	margin: 1rem 2rem 5rem 2rem;
	font-size: 2rem;
	line-height: 1.6;
	max-width: 70rem;
	text-align: center;
`;

export const LinkButton = styled.a`
	color: #fff;
	background-color: ${({ bgcolor }) =>
		bgcolor ? bgcolor : 'var(--primary-color)'};

	border: none;
	align-self: center;
	font-size: 2.5rem;
	padding: 1.5rem 4rem;
	text-decoration: none;
`;
