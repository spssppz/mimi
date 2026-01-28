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

	// 👉 начальная позиция — сразу справа, без дерганий
	useLayoutEffect(() => {
		if (!buttonRef.current || !circleRef.current) return

		const rect = buttonRef.current.getBoundingClientRect()
		const size = 45

		gsap.set(circleRef.current, {
			left: rect.width - 1 - size / 2,
			top: rect.height / 2,
			width: size,
			height: size,
		})
	}, [])

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!buttonRef.current || !circleRef.current) return

		if (leaveTimeout.current) {
			leaveTimeout.current.kill()
			leaveTimeout.current = null
		}

		const rect = buttonRef.current.getBoundingClientRect()

		const minX = 1 + 45 / 2
		const maxX = rect.width - 1 - 45 / 2

		let x = e.clientX - rect.left
		if (x < minX) x = minX
		if (x > maxX) x = maxX

		const y = rect.height / 2

		const mid = rect.width / 2
		const distance = Math.abs(x - mid)
		const size = 40 + (45 - 40) * (distance / mid)

		gsap.to(circleRef.current, {
			left: x,
			top: y,
			width: size,
			height: size,
			duration: 0.4,
			ease: 'power3.out',
		})
	}

	const handleMouseLeave = () => {
		if (!buttonRef.current || !circleRef.current) return

		const rect = buttonRef.current.getBoundingClientRect()
		const size = 45

		leaveTimeout.current = gsap.delayedCall(1, () => {
			gsap.to(circleRef.current!, {
				left: rect.width - 1 - size / 2,
				top: rect.height / 2,
				width: size,
				height: size,
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
			className={`group relative cursor-pointer bg-[#f8f9fa] 
				shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] 
				rounded-[50px] flex px-6 py-2.5 border border-white 
				items-center uppercase gap-1.5 font-semibold text-[13px] 
				min-w-62.25 tracking-[-0.02em] text-[#00576b] 
				transition-all duration-300 ${className}`}
		>
			<span
				ref={circleRef}
				className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
				style={{
					background:
						'radial-gradient(50% 50% at 50% 50%, rgb(224, 232, 235) 0%, rgb(196, 249, 252) 100%)',
					filter: 'blur(6px)',
					zIndex: 0,
				}}
			/>

			<span className="relative z-10">{children}</span>
			<BtnArrowIcon className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
		</button>
	)
}
