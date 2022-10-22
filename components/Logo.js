import styled from 'styled-components';
import Image from 'next/image';

export const LogoWrapper = styled.div`
	font-size: 2.5rem;
	display: flex;
	align-items: center;
	align-items: center;
	font-family: AlfaSlabOne, cursive;

	color: var(--secondary-color);
	position: absolute;
	top: 4rem;
	left: 4rem;
`;

const Logo = () => {
	return (
		<LogoWrapper>
			<Image src="/logo.svg" alt={`Noty's logo`} height={30} width={30} />{' '}
			<span style={{ visibility: 'hidden' }}>.</span>
			<p> NOTY</p>
		</LogoWrapper>
	);
};

export default Logo;
