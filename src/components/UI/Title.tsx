import Image from "next/image";

interface TitleProps {
	children: React.ReactNode;
	className?: string;
}

export const Title = ({ children, className = "" }: TitleProps) => {
	return (
		<h2 className={`text-[40px] md:text-[52px] lg:text-[64px] font-bold tracking-[-0.01em] leading-tight ${className}`}>
			{children}
			<Image
				src="/images/icons/title-decor.svg"
				alt="Title decor"
				width={11}
				height={11}
				className="blur-[1px] rounded-full inline-block ml-1 align-baseline shadow-[0_1px_12px_0_#ffc599,2px_2px_3px_0_rgba(0,0,0,0.26)]"
			/>
		</h2>
	);
}