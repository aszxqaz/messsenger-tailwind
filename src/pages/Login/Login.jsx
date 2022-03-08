import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
import { AUTH_ERRORS } from '../authErrors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
const Form = tw.form`
    text-center relative w-[calc(93%)]
`;

const Card = styled(tw.fieldset`
    shadow-inner rounded py-5 px-8 my-0 
`)`
	background-color: rgba(255, 255, 255, 0.9);
	box-shadow: inset 0 0px 50px 0 rgb(0 0 0 / 19%), inset 0 2px 15px 0 rgb(0 0 0 / 24%);
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

const Input = tw.input`
    p-4 border border-solid rounded w-full text-stone-700 focus:bg-green-100
	${(p) => (p.error ? 'border-rose-700' : 'border-slate-300')}
	transition-all
`;

const ErrorInput = tw.div`
	text-xs text-rose-900 text-left mb-3 h-4 transition-all
`;

const Button = tw.button`
    w-full bg-green-700 hover:bg-green-800 font-bol text-white rounded border-none outline-none 
	cursor-pointer py-4 transition-all
`;

const Error = tw.div`
    text-center h-12 flex justify-center items-center mb-3 text-rose-700 transition-all
`;

export default function LoginPage() {
	const [error, setError] = useState(null);
	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Неправильный формат электронной почты')
			.required('Поле обязательно'),
		password: Yup.string().required('Поле обязательно').min(5, "Пароль должен содержать минимум 5 символов"),
		cpassword: Yup.ArraySchema.string
	});
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			cpassword: '',
		},
		onSubmit: (values) => console.log(values),
		validate: (values) => {
			const errors = {};

			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Неправильный адрес электронной почты';
			}
			for (let key in values) {
				if (!values[key]) {
					errors[key] = 'Поле обязательно';
				}
			}
			return errors;
		},
	});

	console.log(formik);

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Form onSubmit={formik.handleSubmit}>
					<Card>
						<Heading>Регистрация</Heading>
						<SubHeading>Шаг 1</SubHeading>
						<Input
							error={formik.touched.email && formik.errors.email}
							autoComplete="off"
							type="text"
							name="email"
							value={formik.values.email}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							placeholder="Электронная почта"
						/>
						<ErrorInput>
							<p>{formik.touched.email && formik.errors.email}</p>
						</ErrorInput>
						<Input
							error={formik.touched.password && formik.errors.password}
							autoComplete="off"
							type="password"
							name="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Пароль"
						/>
						<ErrorInput>
							<p>{formik.touched.password && formik.errors.password}</p>
						</ErrorInput>
						<Input
							error={formik.touched.cpassword && formik.errors.cpassword}
							autoComplete="off"
							type="password"
							name="cpassword"
							value={formik.values.cpassword}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Подтвердите пароль"
						/>
						<ErrorInput>
							<p>{formik.touched.cpassword && formik.errors.cpassword}</p>
						</ErrorInput>
						<Error>
							<p>{error}</p>
						</Error>
						<Button type="submit">Далее</Button>
					</Card>
				</Form>
			</Wrapper>
		</>
	);
}
