import { useContext } from 'react';

import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';
import ThemeContext from '../context/theme-context';

const Modes = ({ withText }) => {
	const themeCtx = useContext(ThemeContext);
	return (
		<div onClick={() => themeCtx.toggleTheme()}>
			{themeCtx.theme === 'light' ? (
				<>
					<RiSunFill />
					{withText ? 'Dark Mode' : ''}
				</>
			) : (
				<>
					<RiMoonClearFill />
					{withText ? 'Light Mode' : ''}
				</>
			)}
		</div>
	);
};

export default Modes;
