import Radio from './Radio';

export default function ({ options }) {
	if (options?.length === 0) return;

	return (
		<div className="flex flex-col space-y-1">
			{options.map((option) => (
				<Radio key={option.value} options={option} />
			))}
		</div>
	);
}
