import DialogDisplay from './containers/DialogDisplay';
import DialogInput from './containers/DialogInput';
import { createGlobalStyle } from 'styled-components';
import SidebarDisplay from './containers/SidebarDisplay';
import { sidebarItems } from './data/sidebarItems';

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
			<SidebarDisplay dialogsList={sidebarItems} />
		</>
	);
};

export default App;
