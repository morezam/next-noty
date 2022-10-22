import { PError, Input, Label } from './user/UserStyles';

const InputComponent = ({
	type,
	register,
	name,
	inputId,
	required,
	pattern,
	message,
	label,
	fieldError,
	value,
}) => {
	const errorSpans = type => {
		if (fieldError) {
			if (fieldError.type === type) {
				return <PError key={type}>{fieldError.message}</PError>;
			}
		}
	};

	return (
		<>
			<Label htmlFor={inputId}>{label}</Label>
			<Input
				type={type ? type : 'text'}
				value={value ? value : undefined}
				{...register(name, {
					required: {
						value: required,
						message: required ? 'This field is required' : '',
					},
					pattern: {
						value: pattern ? pattern : /[\s\S]*/,
						message: message ? message : '',
					},
				})}
				id={inputId}
			/>
			{['required', 'minLength', 'maxLength', 'pattern'].map(item =>
				errorSpans(item)
			)}
		</>
	);
};

export default InputComponent;
