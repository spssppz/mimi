interface Props {
	setPrev: (node: HTMLButtonElement | null) => void;
	setNext: (node: HTMLButtonElement | null) => void;
}

export const SliderNavigation = ({ setPrev, setNext }: Props) => {
	return (
		<div className="flex justify-end gap-4 mt-10">
			<button
				ref={setPrev}
				className="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-default"
			>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M12.5 15L7.5 10L12.5 5"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			<button
				ref={setNext}
				className="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-default"
			>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M7.5 15L12.5 10L7.5 5"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
};