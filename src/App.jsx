import { createGlobalStyle } from 'styled-components';
import RegistrationPage from './pages/Registration/Main';

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
			{/* <DialogDisplay /> */}
			{/* <SidebarDisplay dialogsList={sidebarItems} /> */}
			<RegistrationPage />
		</>
	);
};

export default App;
