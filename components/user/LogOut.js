import React, { useContext } from 'react';
import { BiExit } from 'react-icons/bi';
import AuthContext from '../../context/auth-context';
import { Btn } from '../Btn';

const LogOut = () => {
	const authCtx = useContext(AuthContext);
	const onBtnClick = () => {
		authCtx.logOut();
	};

	return (
		<Btn logout onClick={onBtnClick}>
			<BiExit />
			Logout
		</Btn>
	);
};

export default LogOut;
