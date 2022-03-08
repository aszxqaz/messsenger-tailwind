import tw from 'tailwind-styled-components'

const Input = tw.input`p-4 border border-solid rounded w-full text-stone-700 focus:bg-green-100
   ${(p) => (p.error ? 'border-rose-700' : 'border-slate-300')} transition-all
`;

export default function (props) {
	return (
		<Input
			autoComplete="off"
         {...props}
		/>
	);
}
