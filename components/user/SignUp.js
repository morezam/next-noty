import { useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { SIGN_UP } from '../../query/mutations/user';
import {
	InputWrapper,
	UserForm,
	Input,
	FormWrapper,
	Label,
	PError,
	UserP,
	UserLink,
} from './UserStyles';
import Nav from '../nav/Nav';
import { Btn } from '../Btn';
import { H2 } from '../Typographi';

const SignUp = () => {
	const [val, setVal] = useState('');
	const [pas, setPas] = useState('');
	const passRef = useRef();
	const history = useHistory();
	const [addUser, { error }] = useMutation(SIGN_UP);
	if (error) {
		console.log(error);
	}

	const onButtonClick = () => {
		addUser({
			variables: { email: val, password: pas },
		}).then(() => {
			history.replace({
				pathname: '/login',
				state: {
					message: 'Login with your newly created account',
				},
			});
		});
		setVal('');
		setPas('');
	};
	return (
		<>
			<Nav />
			<FormWrapper>
				<UserForm onSubmit={e => e.preventDefault()}>
					<H2 color="var(--white-color)">
						Sign Up and Exprience Noty For Free
					</H2>
					<InputWrapper>
						<Label htmlFor="email">Email</Label>
						<Input
							type="text"
							value={val}
							onChange={e => setVal(e.target.value)}
							placeholder="Enter your email"
							id="email"
						/>
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							value={pas}
							onChange={e => setPas(e.target.value)}
							id="password"
							placeholder="Enter your email"
							ref={passRef}
							onMouseEnter={() => (passRef.current.type = 'text')}
							onMouseLeave={() => (passRef.current.type = 'password')}
						/>
					</InputWrapper>
					{error ? <PError>{error.message}</PError> : null}
					<Btn secondary onClick={onButtonClick}>
						Signup
					</Btn>
					<UserP>
						have an account? <UserLink to="/login">Login</UserLink>
					</UserP>
				</UserForm>
			</FormWrapper>
		</>
	);
};

export default SignUp;
