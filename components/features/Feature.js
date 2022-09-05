import styled from 'styled-components';
import { H3 } from '../Typographi';

const FeatureWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5rem;
	align-items: center;
	justify-content: space-evenly;
	@media only screen and (min-width: 600px) {
		flex-direction: ${({ rtl }) => (rtl ? 'row' : 'row-reverse')};
		padding: 5rem 10rem;
	}
`;

const FeatureContent = styled.div`
	position: relative;
`;
const FeatureP = styled.p`
	font-size: 2rem;
	/* max-width: 50rem; */
	line-height: 1.6;
	margin: 3rem 0;
	@media only screen and (min-width: 600px) {
		max-width: 50rem;
	}
`;

const FeatureMedia = styled.div`
	position: relative;
`;

const FeatureImg = styled.img`
	width: 100%;
	display: block;
	margin: 0 auto;
`;

const Feature = ({ title, text, src, rtl }) => {
	return (
		<FeatureWrapper rtl={rtl}>
			<FeatureContent>
				<H3>{title}</H3>
				<FeatureP>{text}</FeatureP>
			</FeatureContent>
			<FeatureMedia>
				<FeatureImg src={src} />
			</FeatureMedia>
		</FeatureWrapper>
	);
};

export default Feature;
