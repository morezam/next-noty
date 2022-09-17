import { useRouter } from 'next/router';
import { BiExit } from 'react-icons/bi';
import { useAuthContext } from '../../context/authContext';
import { AuthActionKind } from '../../context/authReducer';
import { Btn } from '../Btn';

const LogOut = () => {
	const { dispatch } = useAuthContext();
	const router = useRouter();
	const onBtnClick = () => {
		dispatch({
			type: AuthActionKind.LOGOUT,
			payload: null,
		});
		router.replace('/');
	};

	return (
		<Btn logout onClick={onBtnClick}>
			<BiExit />
			Logout
		</Btn>
	);
};

export default LogOut;
