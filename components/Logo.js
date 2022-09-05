import styled from 'styled-components';
import { FaBookOpen } from 'react-icons/fa';

export const LogoWrapper = styled.div`
	font-size: 2.5rem;
	display: flex;
	align-items: center;
	align-items: center;
	/* font-family: 'Baloo Tammudu 2', cursive; */

	margin: 1rem;
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
