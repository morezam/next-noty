import styled from 'styled-components';

export const HomeWrapper = styled.section`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 95vh;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const HomeContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HomeP = styled.p`
	position: relative;
	margin: 3rem;
	font-size: 2rem;
	line-height: 1.6;
	max-width: 70rem;
	text-align: center;
`;

export const LinkWrapper = styled.div`
	display: flex;
	width: 50rem;
	margin-top: 1rem;
	justify-content: space-evenly;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const LinkButton = styled.a`
	color: #fff;
	background-color: ${({ bgcolor }) =>
		bgcolor ? bgcolor : 'var(--primary-color)'};

	border: 2px solid currentColor;
	align-self: center;
	font-size: 2.5rem;
	padding: 1.5rem 4rem;
	text-decoration: none;
	border-radius: 0.5rem;
	transition: all 0.3s;

	@media (max-width: 600px) {
		width: 18rem;
		text-align: center;
	}

	&:hover {
		background-color: transparent;
		color: ${({ bgcolor }) => (bgcolor ? bgcolor : 'var(--secondary-color)')};
		border: 2px solid currentColor;
	}
`;
