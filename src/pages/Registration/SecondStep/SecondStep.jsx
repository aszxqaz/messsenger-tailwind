import RadioInput from '../../Components/FormikControls/RadioInput';
import Radio from '../../Components/Forms/Radio';
import formikProps, { sexRadioOptions } from './formikProps';
import { Form, Formik } from 'formik';
import Button from '../../Components/Elements/Button';
import TextInput from '../../Components/FormikControls/TextInput';
import Input from '../../Components/Forms/Input';
import tw from 'tailwind-styled-components';
import { useContext } from 'react';
import { DataContext } from '../Main';
import Spinner from '../../Components/Elements/Spinner';

const ErrorInput = tw.div`
	text-xs text-rose-900 text-left mb-3 h-4 transition-all pl-1
`;

const onSubmit = (values) => {
	console.log(values);
	setData((data) => ({ ...data, ...values }));
	nextStep();
};

export default function SecondStep() {
	const { data, setData } = useContext(DataContext);
	const onSubmit = (values) => {
		setData((data) => ({ ...data, ...values }));
	};

	return (
		<Formik {...formikProps} onSubmit={onSubmit}>
			{(formik) => {
				return (
					<Form>
						<TextInput
							type="text"
							name="firstName"
							placeholder="Имя"
							inputcomponent={Input}
							errorcomponent={ErrorInput}
						/>
						<TextInput
							type="text"
							name="secondName"
							placeholder="Фамилия"
							inputcomponent={Input}
							errorcomponent={ErrorInput}
						/>
						<div className="flex flex-col space-y-1">
							<RadioInput options={sexRadioOptions} component={Radio} name="sex" />
						</div>
						<Button
							type="submit"
							onClick={formik.handleSubmit}
							disabled={!(formik.isValid && formik.dirty && !formik.isSubmitting)}
							submitting={formik.isSubmitting}>
							Зарегистрироваться
						</Button>
					</Form>
				);
			}}
		</Formik>
	);
}
