import tw from 'tailwind-styled-components';
import Spinner from './Spinner';

const Button = tw.button`
    w-full bg-green-700 hover:bg-green-800 font-bold text-white rounded border-none outline-none 
	cursor-pointer py-4 transition-all disabled:opacity-30 disabled:bg-green-700 relative
`;

export default function ({ children, submitting, ...rest }) {
	return (
		<Button {...rest}>
			<span style={{ opacity: submitting ? 0 : 1 }}>
				{children}
			</span>
			{submitting ? <Spinner /> : null}
		</Button>
	);
}
