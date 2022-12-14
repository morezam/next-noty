import { useForm } from 'react-hook-form';
import { InputWrapper, UserForm, PError } from './UserStyles';
import Input from '../Input';
import { Btn } from '../Btn';
import { H2 } from '../Typography';
import Spinner from '../spinner';

const SignupForm = ({ onFormSubmit, signup, errorMessage, isLoading }) => {
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
				position: 'relative',
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

				{isLoading ? (
					<Btn primary>
						<Spinner height="1rem" />
					</Btn>
				) : (
					<Btn secondary>{signup ? 'Signup' : 'Login'}</Btn>
				)}

				{errorMessage && <PError>{errorMessage}</PError>}
			</UserForm>
		</div>
	);
};

export default SignupForm;
