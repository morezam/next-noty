import React, {
	createContext,
	useMemo,
	useContext,
	useReducer,
	useEffect,
} from 'react';

import { AuthActionKind, AuthReducer, initialState } from './authReducer';

const AuthContext = createContext({
	state: initialState,
	dispatch: () => {},
});

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, initialState);

	useEffect(() => {
		const token = localStorage.getItem('token');
		token &&
			dispatch({
				type: AuthActionKind.LOGIN,
				payload: token,
			});
	}, []);

	useEffect(() => {
		state.token !== null
			? localStorage.setItem('token', state.token)
			: localStorage.removeItem('token');
	}, [state.token]);

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
