import { createElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Paper = styled(tw.div`
    shadow-inner rounded py-5 px-8 my-0 text-center relative w-[calc(93%)]
`)`
	background-color: rgba(255, 255, 255, 0.9);
	box-shadow: inset 0 0px 50px 0 rgb(0 0 0 / 19%), inset 0 2px 15px 0 rgb(0 0 0 / 24%);
`;

export default function ({ children, ...props }) {
	return <Paper {...props}>{children}</Paper>;
}
