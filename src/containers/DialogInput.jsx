import { MdInsertEmoticon, MdAttachment, MdSend } from 'react-icons/md';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
    flex items-center py-2 bg-slate-100 relative
`;

const Form = tw.form`
    flex-1 mx-3
`;

const Input = tw.input`
    h-9 px-3 rounded-xl border-none outline-none w-full
`;

const Button = styled.div`
    width: 1.75rem;
    height: 1.75rem;
    margin-left: 0.5rem;
    &:last-child {
        margin-left: 0;
        margin-right: 0.5rem;
    }
    & > svg {
        width: 100%;
		height: 100%;
		color: gray;
		cursor: pointer;
        transition: color 0.2s ease-in-out;
        &:hover {
            color: rgb(20, 20, 20);
        }
	}
`

export default function DialogInput() {
	return (
		<Wrapper>
			{/* {openEmojiBox && (
				<EmojiPicker
					onEmojiClick={(e, data) => {
						setMessage((prev) => prev + data.emoji);
					}}
				/>
			)} */}
			<ButtonWrapper element={<MdInsertEmoticon />} />
			<ButtonWrapper element={<MdAttachment />} />
			<Form>
				<Input type="text" placeholder="Type a message" />
			</Form>
			<ButtonWrapper element={<MdSend />} />
		</Wrapper>
	);
}

const ButtonWrapper = ({ element }) => {
	return <Button>{element}</Button>;
};
