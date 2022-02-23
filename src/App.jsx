import DialogDisplay from './containers/DialogDisplay';
import DialogInput from './containers/DialogInput';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
	  height: ${window.innerHeight + 'px'};
	  overflow: hidden;
  }
  #root {
	  height: 100%;
  }
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<DialogDisplay />
		</>
	);
};

export default App;
