import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const CircleSVG = styled.svg`
	user-select: none;
	width: 1em;
	height: 1em;
	display: inline-block;
	fill: currentColor;
	font-size: 1.5rem;
	flex-shrink: 0;
`;
const OuterCircle = styled(CircleSVG)`
	transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	transform: scale(1);
`;
const InnerCircle = styled(CircleSVG)`
	transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	left: 0;
	position: absolute;
	transition: transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms;
`;
const Circles = tw.span`relative flex`;
const Label = tw.label`inline-flex items-center cursor-pointer align-middle space-x-0`;
let Input = tw.input`absolute opacity-0 w-full h-full top-0 left-0 m-0 p-0 z-1 cursor-pointer`;
Input = styled(Input)`
	&:not(:checked) + span > svg:nth-child(2) {
		transform: scale(0);
	}
	&:checked + span > svg:nth-child(2) {
		transform: scale(1);
	}
`;
const CircleContainer = tw.span`inline-flex items-center justify-center relative bg-transparent outline-0
   border-0 m-0 cursor-pointer select-none align-middle p-1 rouded-[50%] text-[rgba(0,0,0,0.6)]`;

export default function ({label, ...rest}) {
	return (
		<Label>
			<CircleContainer>
				<Input name="sex" type="radio" {...rest}/>
				<Circles>
					<OuterCircle focusable="false" aria-hidden="true" viewBox="0 0 24 24">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
					</OuterCircle>
					<InnerCircle focusable="false" aria-hidden="true" viewBox="0 0 24 24">
						<path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />
					</InnerCircle>
				</Circles>
			</CircleContainer>
			<span className="text-xl">{label}</span>
		</Label>
	);
}
