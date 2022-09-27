export const AuthActionKind = {
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
};

export const AuthReducer = (state, action) => {
	switch (action.type) {
		case AuthActionKind.LOGIN: {
			return {
				...state,
				token: action.payload,
			};
		}
		case AuthActionKind.LOGOUT: {
			return {
				...state,
				token: action.payload,
			};
		}
		default:
			return state;
	}
};
