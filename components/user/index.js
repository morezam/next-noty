import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Spinner from '../spinner';
import { useAuthContext } from '../../context/authContext';
import { AuthActionKind } from '../../context/authReducer';
import { client } from '../../lib/graphQlRequestDefault';
import { SIGN_UP, LOG_IN } from '../../query/mutations/user';
import SignupForm from './SignupForm';

const UserSign = ({ signup }) => {
	const { dispatch } = useAuthContext();
	const router = useRouter();

	const { mutate, isLoading, isError, error } = useMutation(
		newUser => {
			return client.request(signup ? SIGN_UP : LOG_IN, newUser);
		},
		{
			onSuccess(data) {
				dispatch({
					type: AuthActionKind.LOGIN,
					payload: signup ? data.createUser.token : data.login.token,
				});
				router.replace('/panel');
			},
		}
	);

	const onFormSubmit = data => {
		mutate(data);
	};

	return (
		<div>
			<SignupForm
				signup={signup}
				onFormSubmit={onFormSubmit}
				errorMessage={isError ? error.response.errors[0].message : null}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default UserSign;
