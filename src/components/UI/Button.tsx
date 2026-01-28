"use client"

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { BtnArrowIcon } from '@/icons/BtnArrowIcon'

interface ButtonProps {
	children: React.ReactNode
	className?: string
}

export const Button = ({ children, className = '' }: ButtonProps) => {
	const spotlightRef = useRef<HTMLDivElement>(null) // Внутренний
	const staticGlowRef = useRef<HTMLDivElement>(null) // Внешний справа
	const buttonRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		// Внутренний круг — начальная позиция справа внутри
		gsap.set(spotlightRef.current, {
			left: "100%",
			xPercent: -100,
			x: -2,
			top: "50%",
			yPercent: -50,
			opacity: 0.5
		})

		// Внешний круг — всегда зафиксирован справа
		gsap.set(staticGlowRef.current, {
			right: "-5px", // Слегка вылезает за кнопку
			top: "50%",
			yPercent: -50,
			opacity: 1
		})
	}, [])

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!buttonRef.current || !spotlightRef.current || !staticGlowRef.current) return

		const rect = buttonRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left

		// 1. Внутренний круг: Бегает за мышью (твой старый рабочий код)
		gsap.killTweensOf(spotlightRef.current)
		gsap.to(spotlightRef.current, {
			x: x,
			left: 0,
			xPercent: -50,
			duration: 0.4,
			ease: 'power2.out',
			opacity: 1
		})

		// 2. Внешний круг: Не двигается, но меняет прозрачность
		// Чем ближе мышь к правому краю (rect.width), тем он ярче
		const progress = x / rect.width
		const glowOpacity = Math.max(0.2, progress) // минимум 0.2, максимум 1

		gsap.to(staticGlowRef.current, {
			opacity: glowOpacity,
			duration: 0.3
		})
	}

	const handleMouseLeave = () => {
		// Возвращаем внутренний блик на место через секунду
		gsap.to(spotlightRef.current, {
			left: "100%",
			xPercent: -100,
			x: -2,
			duration: 0.6,
			delay: 1,
			ease: 'power3.inOut',
			opacity: 0.5
		})

		// Внешний возвращаем к базовой тусклости
		gsap.to(staticGlowRef.current, {
			opacity: 0.3,
			duration: 0.6
		})
	}

	return (
		// Ограничение 8px снаружи (p-2 дает около 8px отступа от краев overflow-hidden)
		<div
			className="relative inline-block group/wrap"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{/* ВНЕШНИЙ КРУГ (Статичный справа) */}
			<div
				ref={staticGlowRef}
				className="pointer-events-none absolute"
				style={{
					width: '110px',
					height: '50px',
					background: '#C4F9FC',
					borderRadius: '90% 50px 50px 90%',
					filter: 'blur(6px)',
					zIndex: 0,
				}}
			/>

			<button
				ref={buttonRef}
				className={`group relative cursor-pointer bg-[#f8f9fa]
          shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea]
          rounded-[50px] flex px-8 py-3 border border-white
          items-center uppercase gap-1.5 font-semibold text-[13px]
          min-w-62.25 tracking-[-0.02em] text-[#00576b]
          transition-all duration-300 overflow-hidden z-10 ${className}`}
			>
				{/* ВНУТРЕННИЙ КРУГ (Бегающий) */}
				<div
					ref={spotlightRef}
					className="pointer-events-none absolute"
					style={{
						width: '80px',
						height: '60px',
						background: 'radial-gradient(circle, #fff 0%, #fff 25%, #78f3fa 100%)',
						borderRadius: '40%',
						filter: 'blur(10px)',
						zIndex: 1,
					}}
				/>

				<span className="relative z-10">{children}</span>
				<BtnArrowIcon className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
			</button>
		</div>
	)
}