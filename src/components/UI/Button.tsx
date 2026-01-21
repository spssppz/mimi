"use client"

import { BtnArrowIcon } from '@/icons/BtnArrowIcon'
import { useState, useRef } from 'react'

interface ButtonProps {
	children: React.ReactNode
	className?: string
}

export const Button = ({ children, className = "" }: ButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null)

	const [pos, setPos] = useState({ x: 0, y: 0 })

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!buttonRef.current) return

		const rect = buttonRef.current.getBoundingClientRect()

		setPos({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		})
	}

	const handleMouseLeave = () => {
		if (!buttonRef.current) return

		const rect = buttonRef.current.getBoundingClientRect()

		// правый нижний угол (чуть внутрь, чтобы не обрезался)
		setPos({
			x: rect.width - 20,
			y: rect.height - 20,
		})
	}

	return (
		<button
			ref={buttonRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={`group relative cursor-pointer bg-[#f8f9fa]
				shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea]
				rounded-[50px] flex px-6 py-2.5 border border-white items-center justify-center
				uppercase gap-1.5 font-semibold text-[13px] min-w-62.25 tracking-[-0.02em]
				text-[#00576b] transition-all duration-300 ${className}`}
		>
			<span
				className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-[top,left] duration-500 ease-out"
				style={{
					top: pos.y,
					left: pos.x,
					width: 50,
					height: 50,
					background:
						'radial-gradient(50% 50% at 50% 50%, rgb(224, 232, 235) 0%, rgb(196, 249, 252) 100%)',
					filter: 'blur(7px)',
					zIndex: 0,
				}}
			/>

			<span className="relative z-10 flex items-center gap-1.5">
				{children}
				<BtnArrowIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
			</span>
		</button>
	)
}
