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
import { Btn } from '../Btn';
import { H2 } from '../Typographi';

const SignupForm = ({ onFormSubmit, signup, errorMessage }) => {
	return (
		<div>
			<H2 color="var(--white-color)">
				Please enter your informations to{' '}
				{signup ? 'go to your panel' : 'create a new account'}
			</H2>
			<FormWrapper>
				<UserForm onSubmit={onFormSubmit}>
					<InputWrapper>
						<Label htmlFor="email">Email</Label>
						<Input type="text" placeholder="Enter your email" id="email" />
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							id="password"
							placeholder="Enter your password"
						/>
					</InputWrapper>

					<Btn secondary>{signup ? 'Signup' : 'Login'}</Btn>
					{errorMessage && <span>{errorMessage}</span>}
				</UserForm>
			</FormWrapper>
		</div>
	);
};

export default SignupForm;
