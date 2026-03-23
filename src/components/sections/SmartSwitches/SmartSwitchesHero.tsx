"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import { Title } from "@/components/UI/Title"
import { Button } from "@/components/UI/Button"
import gsap from "gsap"

const heroImages = [
	{
		src: "/images/smart-switches-page/hero/1.png",
		className: "top-[6.3%] left-[27.80%] w-[13.32%]",
		from: { x: -120, y: -90, rotate: -8, scale: 0.86 },
	},
	{
		src: "/images/smart-switches-page/hero/2.png",
		className: "top-[6.1%] left-[53.19%] w-[15.44%]",
		from: { x: 0, y: -130, rotate: 6, scale: 0.82 },
	},
	{
		src: "/images/smart-switches-page/hero/3.png",
		className: "top-[14.9%] right-[8.9%] w-[13.32%]",
		from: { x: 140, y: -70, rotate: 10, scale: 0.84 },
	},
	{
		src: "/images/smart-switches-page/hero/4.png",
		className: "bottom-[37.3%] right-[2.8%] w-[13.32%]",
		from: { x: 170, y: 0, rotate: 8, scale: 0.88 },
	},
	{
		src: "/images/smart-switches-page/hero/5.png",
		className: "bottom-[17.1%] right-[21.2%] w-[14.77%]",
		from: { x: 100, y: 120, rotate: 5, scale: 0.84 },
	},
	{
		src: "/images/smart-switches-page/hero/6.png",
		className: "bottom-[12.9%] left-[43.30%] w-[13.32%]",
		from: { x: 0, y: 130, rotate: -4, scale: 0.82 },
	},
	{
		src: "/images/smart-switches-page/hero/7.png",
		className: "bottom-[15.2%] left-[20.44%] w-[14.77%]",
		from: { x: -110, y: 120, rotate: -7, scale: 0.84 },
	},
	{
		src: "/images/smart-switches-page/hero/8.png",
		className: "bottom-[35.3%] left-[1.20%] w-[15.37%]",
		from: { x: -170, y: 10, rotate: -10, scale: 0.86 },
	},
	{
		src: "/images/smart-switches-page/hero/9.png",
		className: "top-[14.9%] left-[7.11%] w-[13.32%]",
		from: { x: -130, y: -80, rotate: -8, scale: 0.84 },
	},
]

export default function SmartSwitchesHero() {
	const sectionRef = useRef<HTMLElement | null>(null)
	const bgRef = useRef<HTMLDivElement | null>(null)
	const titleRef = useRef<HTMLDivElement | null>(null)
	const textRef = useRef<HTMLDivElement | null>(null)
	const buttonRef = useRef<HTMLDivElement | null>(null)
	const imageRefs = useRef<(HTMLDivElement | null)[]>([])

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			imageRefs.current.forEach((el, index) => {
				if (!el) return

				gsap.set(el, {
					opacity: 0,
					...heroImages[index].from,
				})
			})

			gsap.set([titleRef.current, textRef.current, buttonRef.current], {
				opacity: 0,
				y: 24,
			})

			gsap.set(bgRef.current, {
				opacity: 0,
				scale: 1.05,
			})

			const tl = gsap.timeline()

			tl.to(bgRef.current, {
				opacity: 1,
				scale: 1,
				duration: 1.7,
				ease: "power2.out",
			})

			imageRefs.current.forEach((el, index) => {
				if (!el) return

				tl.to(
					el,
					{
						x: 0,
						y: 0,
						rotate: 0,
						scale: 1,
						opacity: 1,
						duration: 1.1,
						ease: "power3.out",
					},
					0.1 + index * 0.06
				)
			})

			tl.to(
				titleRef.current,
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
				},
				0.35
			)
				.to(
					textRef.current,
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						ease: "power3.out",
					},
					0.48
				)
				.to(
					buttonRef.current,
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						ease: "power3.out",
					},
					0.6
				)
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			ref={sectionRef}
			className="lg:min-h-225 min-h-198 py-22.5 flex items-center relative overflow-hidden"
		>
			<div
				ref={bgRef}
				className="absolute top-1/2 -translate-y-1/2 left-1/2 min-w-[300%] md:min-w-[200%] lg:min-w-360 -translate-x-1/2 w-full max-w-414.5 aspect-1658/1082"
			>
				{heroImages.map((item, index) => (
					<div
						key={item.src}
						ref={el => {
							imageRefs.current[index] = el
						}}
						className={`absolute rounded-xs overflow-hidden aspect-square opacity-0 ${item.className}`}
					>
						<Image
							src={item.src}
							fill
							alt=""
							quality={95}
							className="object-cover"
						/>
					</div>
				))}
			</div>

			<div className="max-w-235.5 px-4 relative mx-auto flex flex-col text-center items-center w-full">
				<div className="max-lg:hidden font-bold text-[64px]">Фурнитура.</div>

				<div ref={titleRef}>
					<Title className="bg-linear-to-r from-brand-blue to-[#f00] bg-clip-text text-transparent mb-6">
						Умные выключатели
					</Title>
				</div>

				<div
					ref={textRef}
					className="mb-6 max-w-140 -tracking-[0.01em] text-[17px] leading-[1.3]"
				>
					Управление светом и сценариями в эстетичном исполнении.
				</div>

				<div ref={buttonRef}>
					<Button className="justify-center py-1.75!">Подобрать дизайн</Button>
				</div>
			</div>
		</section>
	)
}