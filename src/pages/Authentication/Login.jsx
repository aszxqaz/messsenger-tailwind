import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {useState, useEffect} from 'react'
import { AUTH_ERRORS } from './authErrors';
import { useFormik } from 'formik';

const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Ubuntu+Condensed:regular);
    body {
        font-family: 'Ubuntu Condensed', sans-serif;
        background: linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));;
    }
`;

const Wrapper = tw.div`
    flex items-center justify-center bg-transparent h-full 
`;
const Form = tw.form`
    text-center relative w-[calc(93%)]
`;

const Card = tw.fieldset`
    bg-white shadow-inner rounded py-5 px-8 my-0 
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
    p-4 border border-solid border-slate-300 rounded w-full text-stone-700 focus:bg-green-100
`;

const ErrorInput = tw.div`
	text-xs text-rose-900 text-left mb-3
`

const Button = tw.button`
    w-full bg-green-700 font-bol text-white rounded border-none outline-none cursor-pointer py-4
`;

const Error = tw.div`
    text-center h-12 flex justify-center items-center mb-3 text-rose-700
`

export default function LoginPage() {
    const [error, setError] = useState(AUTH_ERRORS.BAD_REQUEST)
    const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			cpassword: ''
		},
		onSubmit: values => console.log(values),
		validate: values => {
			const errors = {}
			if (!values.name) {
				errors.name = 'Required'
			}
			return errors
		}
	})

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Form onSubmit={formik.handleSubmit}>
					<Card>
						<Heading>Регистрация</Heading>
						<SubHeading>Шаг 1</SubHeading>
						<Input
							autoComplete="off"
							type="text"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							placeholder="Электронная почта"
						/>
						<ErrorInput><p>Поле обязательно</p></ErrorInput>
						<Input
							autoComplete="off"
							type="password"
							name="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							placeholder="Пароль"
						/>
						<ErrorInput><p>Поле обязательно</p></ErrorInput>
						<Input
							autoComplete="off"
							type="password"
							name="cpassword"
							value={formik.values.cpassword}
							onChange={formik.handleChange}
							placeholder="Подтвердите пароль"
						/>
						<ErrorInput><p>Поле обязательно</p></ErrorInput>
                        <Error><p>{error}</p></Error>
						<Button type="submit">Далее</Button>
					</Card>
				</Form>
			</Wrapper>
		</>
	);
}
