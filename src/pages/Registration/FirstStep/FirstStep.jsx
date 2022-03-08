import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
import { AUTH_ERRORS } from '../../authErrors';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import Input from '../../Components/Forms/Input';
import formikProps from './formikProps';
import TextInput from '../../Components/FormikControls/TextInput';
import Button from '../../Components/Elements/Button';
import { useContext } from 'react';
import { DataContext } from '../Main';

const GlobalStyle = createGlobalStyle`

@import url(https://fonts.googleapis.com/css?family=Ubuntu+Condensed:regular);
    body {
        font-family: 'Ubuntu Condensed', sans-serif;
        background: linear-gradient(rgba(196, 102, 0, 0.6), rgba(90, 9, 182, 0.6));;
    }
`;

const Wrapper = tw.div`
    flex items-center justify-center bg-transparent h-full 
`;

const Heading = styled.h1`
	text-transform: uppercase;
	font-size: 2rem;
	color: rgb(44, 62, 80);
	margin-bottom: 1.2rem;
`;

const SubHeading = styled.h2`
	font-size: 1.2rem;
	color: rgb(44, 62, 80);
	margin-bottom: 2rem;
`;

const ErrorInput = tw.div`
	text-xs text-rose-900 text-left mb-3 h-4 transition-all pl-1
`;

const Error = tw.div`
    text-center h-12 flex justify-center items-center mb-3 text-rose-700 transition-all
`;

export default function ({ nextStep }) {
	const { data, setData } = useContext(DataContext);

	const onSubmit = (values) => {
		setData(data => ({...data, ...values}))
		nextStep();
	};

	return (
		<Formik {...formikProps} onSubmit={onSubmit}>
			{(formik) => {
				return (
					<Form>
						<TextInput
							type="text"
							name="email"
							placeholder="Электронная почта"
							inputcomponent={Input}
							errorcomponent={ErrorInput}
						/>
						<TextInput
							type="password"
							name="password"
							placeholder="Пароль"
							inputcomponent={Input}
							errorcomponent={ErrorInput}
						/>
						<TextInput
							type="password"
							name="confirmPassword"
							placeholder="Повторите пароль"
							inputcomponent={Input}
							errorcomponent={ErrorInput}
						/>
						<Button
							type="submit"
							onClick={formik.handleSubmit}
							disabled={!(formik.isValid && formik.dirty)}>
							Далее
						</Button>
					</Form>
				);
			}}
		</Formik>
	);
}
