import tw from 'tailwind-styled-components';
import useAvatarInCloudFirebase from '../hooks/useAvatarInCloudFirebase';

const Wrapper = tw.div`
    flex items-center px-1 py-2 border-solid divide-y-3>*+* border-slate-900 cursor-pointer hover:bg-slate-200 max-w-screen
`;
const UserImage = tw.div`
	w-14
`;
const Image = tw.img`
	w-full rounded-full
`
const Info = tw.div`
	flex-1 text-left pl-3 max-w-[calc(100%-4rem)]
`;
const Username = tw.div`capitalize font-bold`;
const LastMessage = tw.div`max-h-14 text-ellipsis max-w-4`;

const UsernameParagraph = tw.p`

`
const LastMessageParagraph = tw.p`
max-h-14 text-ellipsis overflow-hidden whitespace-nowrap max-w-full inline-block
`

export default function SidebarItem({ avatarSrc, username, lastMessage, ...restProps }) {

	const src = useAvatarInCloudFirebase()
	return (
		<Wrapper>
			<UserImage>
				<Image src={src} />
			</UserImage>
			<Info>
				<Username>
					<UsernameParagraph>{username}</UsernameParagraph>
				</Username>
				<LastMessage>
					<LastMessageParagraph>{lastMessage}</LastMessageParagraph>
				</LastMessage>
			</Info>
		</Wrapper>
	);
}
