import { Field } from 'formik';
import { Fragment } from 'react';

export default function RadioInput({ name, options, component, ...rest }) {
	const RadioComponent = component;
	return (
		<>
			<Field name={name} {...rest}>
				{({ field }) => {
					return options.values.map((value, index) => {
						const key = `${options.key}-${index}`;
						return (
							<RadioComponent
								label={value}
								id={key}
								{...field}
								value={value}
								checked={field.value === value}
							/>
						);
					});
				}}
			</Field>
		</>
	);
}
