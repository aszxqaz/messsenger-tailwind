import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
    flex flex-col mb-2 relative w-fit h-fit max-w-xs py-2 px-3 rounded-xl text-sm
    ${p => p.self && 'self-end'}
	${p => p.self ? 'bg-green-100' : 'bg-blue-200'}
`;

const MessageText = tw.div`
    text-left mb-2`

const MessageDate = tw.div`
    text-xs self-end`

export function ChatMessage({text, date, self}) {
	return (
		<Wrapper self={self}>
			<MessageText>
				<p>{text}</p>
			</MessageText>
			<MessageDate>
				<p>{date}</p>
			</MessageDate>
		</Wrapper>
	);
}
