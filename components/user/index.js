import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Spinner from '../spinner';
import { useAuthContext } from '../../context/authContext';
import { AuthActionKind } from '../../context/authReducer';
import { client } from '../../lib/graphQlRequestDefault';
import { SIGN_UP, LOG_IN } from '../../query/mutations/user';
// import Spinner from '../spinner/Spinner';
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
				router.push('/panel');
			},
		}
	);

	const onFormSubmit = data => {
		mutate(data);
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			<SignupForm
				signup={signup}
				onFormSubmit={onFormSubmit}
				errorMessage={isError ? error.response.errors[0].message : null}
			/>
		</div>
	);
};

export default UserSign;
