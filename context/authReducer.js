export const AuthActionKind = {
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
};

export const initialState = {
	isAuthenticated: false,
	token: null,
};

export const AuthReducer = (state, action) => {
	switch (action.type) {
		case AuthActionKind.LOGIN: {
			return {
				...state,
				isAuthenticated: true,
				token: action.payload,
			};
		}
		case AuthActionKind.LOGOUT: {
			return {
				...state,
				isAuthenticated: false,
				token: action.payload,
			};
		}
		default:
			return state;
	}
};
