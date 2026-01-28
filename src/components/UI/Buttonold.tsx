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
	const leftGlowRef = useRef<HTMLSpanElement>(null)
	const rightGlowRef = useRef<HTMLSpanElement>(null)
	const leaveTimeline = useRef<gsap.core.Timeline | null>(null)

	// 🔧 НАСТРОЙКИ ДЛЯ "НЕЖНОСТИ"
	const CIRCLE_SIZE = 90 // Увеличили размер для мягкости
	const SIDE_GLOW_SIZE = 70
	const RETURN_DELAY = 0.3

	useLayoutEffect(() => {
		if (!buttonRef.current) return

		// Начальное положение: свечение справа
		gsap.set(circleRef.current, {
			xPercent: -50,
			yPercent: -50,
			left: '90%',
			top: '50%',
			opacity: 0.6
		})

		gsap.set(rightGlowRef.current, { opacity: 0.5, scale: 1 })
		gsap.set(leftGlowRef.current, { opacity: 0, scale: 0.8 })
	}, [])

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!buttonRef.current) return

		if (leaveTimeline.current) {
			leaveTimeline.current.kill()
		}

		const rect = buttonRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const progressX = x / rect.width

		// 1. Движение внутреннего круга (сделали плавнее через duration и ease)
		gsap.to(circleRef.current, {
			left: x,
			top: '50%',
			opacity: 1,
			duration: 0.8, // Больше времени на доводку = плавнее
			ease: 'power2.out',
		})

		// 2. Внешние свечения
		const edgeThreshold = 0.3

		// Левое: плавно проявляется при подходе к краю
		const leftOpacity = progressX < edgeThreshold ? (1 - progressX / edgeThreshold) : 0
		gsap.to(leftGlowRef.current, {
			opacity: leftOpacity * 0.8,
			scale: 0.8 + leftOpacity * 0.4,
			duration: 0.5
		})

		// Правое: плавно проявляется при подходе к краю
		const rightOpacity = progressX > (1 - edgeThreshold) ? (progressX - (1 - edgeThreshold)) / edgeThreshold : 0
		gsap.to(rightGlowRef.current, {
			opacity: rightOpacity * 0.8,
			scale: 0.8 + rightOpacity * 0.4,
			duration: 0.5
		})
	}

	const handleMouseLeave = () => {
		if (!buttonRef.current) return
		const rect = buttonRef.current.getBoundingClientRect()

		leaveTimeline.current = gsap.timeline({ delay: RETURN_DELAY })
			// Синхронно возвращаем всё вправо
			.to(circleRef.current, {
				left: rect.width * 0.9,
				opacity: 0.6,
				duration: 1,
				ease: 'power3.inOut',
			}, 0)
			.to(rightGlowRef.current, {
				opacity: 0.5,
				scale: 1,
				duration: 1,
				ease: 'power3.inOut',
			}, 0)
			.to(leftGlowRef.current, {
				opacity: 0,
				scale: 0.8,
				duration: 0.8,
			}, 0)
	}

	// Очень мягкий градиент
	const glowStyle = {
		background: 'radial-gradient(circle, white 0%, #C4F9FC 100%);',
	}

	return (
		<div className="relative inline-block group">
			{/* СЛОЙ 1: ВНЕШНИЕ СВЕЧЕНИЯ (за границами) */}
			<span
				ref={leftGlowRef}
				className="absolute -left-6 top-1/2 -translate-y-1/2 pointer-events-none blur-xl"
				style={{ ...glowStyle, width: SIDE_GLOW_SIZE, height: SIDE_GLOW_SIZE, zIndex: 0 }}
			/>
			<span
				ref={rightGlowRef}
				className="absolute -right-6 top-1/2 -translate-y-1/2 pointer-events-none blur-xl"
				style={{ ...glowStyle, width: SIDE_GLOW_SIZE, height: SIDE_GLOW_SIZE, zIndex: 0 }}
			/>

			<button
				ref={buttonRef}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				className={`group relative cursor-pointer bg-[#f8f9fa]
          shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea]
          rounded-[50px] flex px-8 py-3 border border-white
          items-center uppercase gap-1.5 font-semibold text-[13px]
          min-w-62.25 tracking-[-0.02em] text-[#00576b]
          transition-all duration-300 overflow-hidden ${className}`}
			>
				{/* СЛОЙ 2: ВНУТРЕННИЙ КРУГ (под блюром) */}
				<span
					ref={circleRef}
					className="absolute pointer-events-none rounded-full"
					style={{
						...glowStyle,
						width: CIRCLE_SIZE,
						height: CIRCLE_SIZE,
						zIndex: 1,
					}}
				/>

				{/* СЛОЙ 3: МЯГКИЙ БЛЮР ПОВЕРХ КРУГА */}
				<div className="absolute inset-0 z-[2] backdrop-blur-[10px] pointer-events-none rounded-[50px]" />

				{/* СЛОЙ 4: КОНТЕНТ */}
				<span className="relative z-10">{children}</span>
				<BtnArrowIcon className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
			</button>
		</div>
	)
}