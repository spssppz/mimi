"use client"

import { BtnArrowIcon } from '@/icons/BtnArrowIcon'
import gsap from 'gsap'
import { useRef, useLayoutEffect } from 'react'

interface ButtonProps {
	children: React.ReactNode
	className?: string
}

export const Button = ({ children, className = '' }: ButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null)
	const circleRef = useRef<HTMLSpanElement>(null)

	const leaveTimeout = useRef<gsap.core.Tween | null>(null)

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!buttonRef.current || !circleRef.current) return

		// если курсор вернулся — отменяем возврат
		if (leaveTimeout.current) {
			leaveTimeout.current.kill()
			leaveTimeout.current = null
		}

		const rect = buttonRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		gsap.to(circleRef.current, {
			left: x,
			top: y,
			duration: 0.5,
			ease: 'power3.out',
		})
	}

	const handleMouseLeave = () => {
		if (!buttonRef.current || !circleRef.current) return

		const rect = buttonRef.current.getBoundingClientRect()

		// ждём 2 секунды, потом возвращаем кружок
		leaveTimeout.current = gsap.delayedCall(2, () => {
			gsap.to(circleRef.current!, {
				left: rect.width - 20,
				top: rect.height - 20,
				duration: 0.5,
				ease: 'power3.out',
			})
		})
	}


	return (
		<button
			ref={buttonRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={`group relative cursor-pointer bg-[#f8f9fa] shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] items-center rounded-[50px] flex px-6 py-2.5 border border-white items-center uppercase gap-1.5 font-semibold text-[13px] min-w-62.25 tracking-[-0.02em] text-[#00576b] transition-all duration-300 ${className}`}
		>
			<span
				ref={circleRef}
				className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
				style={{
					width: 55,
					height: 55,
					left: 'calc(100% - 20px)',
					top: 'calc(100% - 20px)',
					background: 'radial-gradient(50% 50% at 50% 50%, rgb(224, 232, 235) 0%, rgb(196, 249, 252) 100%)',
					filter: 'blur(7px)',
					zIndex: 0,
				}}
			/>

			<span className="relative z-10">
				{children}
			</span>
			<BtnArrowIcon className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
		</button>
	)
}
