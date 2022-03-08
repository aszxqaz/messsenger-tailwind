import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
import { AUTH_ERRORS } from '../authErrors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import Paper from '../Components/Elements/Paper';
import { createContext } from 'react';

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

const pages = [FirstStep, SecondStep];
export const DataContext = createContext();

export default function () {
	const [step, setStep] = useState(0);
	const [data, setData] = useState({});

	useEffect(() => {
		console.log(data);
	}, [data]);

	const nextStep = () => {
		setStep((prev) => prev + 1);
	};

	return (
		<DataContext.Provider value={{ data, setData }}>
			<GlobalStyle />
			<Wrapper>
				<Paper>
					<Heading>Регистрация</Heading>
					<SubHeading>Шаг {step + 1}</SubHeading>
					{((Page) => (
						<Page key={Page.toString()} nextStep={nextStep} />
					))(pages[step])}
				</Paper>
			</Wrapper>
		</DataContext.Provider>
	);
}
