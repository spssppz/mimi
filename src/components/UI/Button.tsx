"use client";

import { useState, useRef } from 'react';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
}

export const Button = ({ children, className = "" }: ButtonProps) => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			// Вычисляем позицию курсора относительно самой кнопки
			setMousePos({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
		}
	};

	return (
		<button
			ref={buttonRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`group relative overflow-hidden cursor-pointer bg-[#f8f9fa] shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] rounded-[50px] flex px-7 py-2.5 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] min-w-62.25 tracking-[-0.02em] text-[#00576b] transition-all duration-300 ${className}`}
		>
			<span
				className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 rounded-full"

				style={{
					top: `${mousePos.y}px`,
					left: `${mousePos.x}px`,
					width: '70px',
					height: '70px',
					background: 'radial-gradient(50% 50% at 50% 50%, rgb(224, 232, 235) 0%, rgb(196, 249, 252) 100%)',
					opacity: isHovered ? 1 : 0,
					filter: 'blur(7px)',
					zIndex: 0
				}}
			/>

			<span className="relative z-10 flex items-center gap-1.5">
				{children}
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18 8L22 12L18 16" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
					<path d="M2 12H22" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
				</svg>
			</span>
		</button>
	);
};