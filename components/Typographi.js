import styled from 'styled-components';

export const H1 = styled.h1`
	font-size: 7rem;
	text-align: center;
	line-height: 1.2;
	margin-top: 10rem;

	color: #fff;
	/* font-family: 'Krona One', sans-serif; */
	font-family: 'Baloo Tammudu 2', cursive;

	@media screen and (min-width: 600px) {
		margin-top: 0;
	}
`;
export const H2 = styled.h2`
	font-size: 2.5rem;
	color: ${({ color }) => color || 'inherit'};
	text-align: center;
`;

export const H3 = styled.h3`
	font-size: 3rem;
	/* text-align: center; */
	line-height: 1.6;
`;
export const H4 = styled.h4`
	font-size: 2.5rem;
	line-height: 1.5;
`;
