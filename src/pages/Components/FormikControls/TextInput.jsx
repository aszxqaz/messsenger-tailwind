import { Field, ErrorMessage } from 'formik';

export default function TextInput(props) {
	const { name, inputcomponent, errorcomponent, ...rest } = props;
	const [InputComponent, ErrorComponent] = [inputcomponent, errorcomponent];
	return (
		<>
			<Field name={name}>
				{({ field, form }) => {
					return <InputComponent id={name} {...field} {...rest} />;
				}}
			</Field>
			<ErrorComponent>
				<ErrorMessage name={name} component="p" />
			</ErrorComponent>
		</>
	);
}
