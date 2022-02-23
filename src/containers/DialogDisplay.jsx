import tw from 'tailwind-styled-components';
import { dialogMessages } from '../data/dialogMessages';
import { ChatMessage } from '../components/ChatMessage';
import DialogHeader from './DialogHeader';
import DialogInput from './DialogInput';

const Wrapper = tw.div`
    flex flex-1 flex-col w-full h-full`;

const DialogDisplayContainer = tw.div`
    flex flex-1 flex-col p-2 overflow-y-scroll bg-slate-200`;

export default function DialogDisplay() {
	return (
		<Wrapper>
			<DialogHeader />
			<DialogDisplayContainer>
				{dialogMessages.map((dialog) => (
					<ChatMessage {...dialog} />
				))}
			</DialogDisplayContainer>
			<DialogInput />
		</Wrapper>
	);
}
