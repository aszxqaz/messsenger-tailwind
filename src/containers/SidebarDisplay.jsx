import tw from 'tailwind-styled-components';
import SidebarItem from '../components/SidebarItem';

const Wrapper = tw.div`
	flex fllex-col h-full w-full relative bg-slate-100
`
const DialogsList = tw.div`
	flex flex-col overflow-y-scroll overflow-x-hidden
`;

export default function SidebarDisplay({ dialogsList }) {
	return (
		<Wrapper>
			<DialogsList>
				{dialogsList.map((dialog) => (
					<SidebarItem {...dialog} />
				))}
			</DialogsList>
		</Wrapper>
	);
}
