import DialogDisplay from './containers/DialogDisplay';
import DialogInput from './containers/DialogInput';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<DialogDisplay />;
			<DialogInput />
		</>
	);
};

export default App;
