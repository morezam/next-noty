import React, {
	createContext,
	useMemo,
	useContext,
	useReducer,
	useEffect,
} from 'react';

import { AuthActionKind, AuthReducer } from './authReducer';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, { token: null });
	const { token } = state;

	useEffect(() => {
		const token = localStorage.getItem('token');
		token &&
			dispatch({
				type: AuthActionKind.LOGIN,
				payload: token,
			});
	}, []);

	useEffect(() => {
		token
			? localStorage.setItem('token', token)
			: localStorage.removeItem('token');
	}, [token]);

	const contextValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);
	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
