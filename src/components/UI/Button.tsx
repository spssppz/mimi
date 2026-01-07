interface ButtonProps {
	children: React.ReactNode;
	className?: string;
}

export const Button = ({ children, className = "" }: ButtonProps) => {
	return (
		<button className={`cursor-pointer shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] rounded-[50px] flex px-7 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] min-w-62.25 tracking-[-0.02em] text-[#00576b] ${className}`}>
			{children}
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18 8L22 12L18 16" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
				<path d="M2 12H22" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
			</svg>
		</button>
	);
};
