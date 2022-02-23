import tw from 'tailwind-styled-components';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));;
    }
`;

const Wrapper = tw.div`
    flex items-center justify-center bg-transparent 
`;
const Form = tw.form`
    w-100 my-12 mx-auto text-center relative
`;

const Card = tw.fieldset`
    bg-white shadow-inner rounded py-5 px-8 w-4/5 my-0 mx-[calc(10%)]
`;

const Heading = styled.h1`
	text-transform: uppercase;
    font-size: 1.25rem;
	color: rgb(44, 62, 80);
    margin-bottom: 2rem;
`;

const Input = tw.input`
    p-4 border border-solid border-slate-300 rounded mb-3 w-full text-stone-700
`;

const Button = tw.button`
    w-full bg-green-700 font-bol text-white rounded border-none outline-none cursor-pointer py-4
`

export default function LoginPage() {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Form>
					<Card>
						<Heading>Create your account</Heading>
						<Input
							autocomplete="off"
							type="text"
							name="email"
							placeholder="Электронная почта"
						/>
						<Input
							autocomplete="off"
							type="password"
							name="pass"
							placeholder="Пароль"
						/>
						<Input
							autocomplete="off"
							type="password"
							name="cpass"
							placeholder="Подтвердите пароль"
						/>
                        <Button>Зарегистрироваться</Button>
					</Card>
				</Form>
			</Wrapper>
		</>
	);
}
