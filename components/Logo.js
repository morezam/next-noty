import styled from 'styled-components';
import { FaBookOpen } from 'react-icons/fa';

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
			<FaBookOpen /> <span style={{ visibility: 'hidden' }}>..</span>
			<p> NOTY</p>
		</LogoWrapper>
	);
};

export default Logo;
