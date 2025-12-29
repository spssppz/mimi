interface TitleProps {
	children: React.ReactNode; // Текст заголовка
	className?: string;        // Дополнительные стили (цвет и т.д.)
}

export const Title = ({ children, className = "" }: TitleProps) => {
	return (
		<h2 className={`text-[40px] md:text-[52px] lg:text-[64px] font-bold tracking-[-0.01em] leading-tight ${className}`}>
			{children}
		</h2>
	);
};
