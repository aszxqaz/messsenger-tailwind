import styled from 'styled-components';

const CircularProgress = styled.span`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	width: 40px;
	height: 40px;
	display: inline-block;
	animation: 550ms linear 0s infinite normal none running circular;
	color: rgb(0, 0, 0);
	@keyframes circular {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const Svg = styled.svg`
	display: block;
`;

const Circle = styled.circle`
	stroke-linecap: round;
	stroke: currentcolor;
	stroke-dasharray: 80px, 200px;
	stroke-dashoffset: 0;
`;

export default function () {
	return (
		<CircularProgress role="progressbar">
			<Svg viewBox="22 22 44 44">
				<Circle cx="44" cy="44" r="20" fill="none" stroke-width="40" />
			</Svg>
		</CircularProgress>
	);
}
