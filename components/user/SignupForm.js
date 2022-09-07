import { InputWrapper, UserForm, Label, PError } from './UserStyles';
import Input from '../Input';
import { Btn } from '../Btn';
import { H2 } from '../Typographi';
import { useForm } from 'react-hook-form';

const SignupForm = ({ onFormSubmit, signup, errorMessage }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<UserForm onSubmit={handleSubmit(onFormSubmit)}>
				<H2 color="var(--white-color)">
					Please enter your informations to{' '}
					{!signup ? 'go to your panel' : 'create a new account'}
				</H2>
				<InputWrapper>
					<Input
						label="Email"
						register={register}
						name="email"
						inputId="email"
						required
						fieldError={errors.email}
					/>
					<Input
						label="Password"
						register={register}
						name="password"
						inputId="password"
						required
						type="password"
						fieldError={errors.password}
					/>
				</InputWrapper>

				<Btn secondary>{signup ? 'Signup' : 'Login'}</Btn>
				{errorMessage && <PError>{errorMessage}</PError>}
			</UserForm>
		</div>
	);
};

export default SignupForm;
