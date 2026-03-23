"use client"

import { Title } from "@/components/UI/Title"
import { RightArrowIcon } from "@/icons/RightArrowIcon"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function FireReaction() {
	const sectionRef = useRef<HTMLElement | null>(null)
	const textRef = useRef<HTMLDivElement | null>(null)
	const gradientRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
					toggleActions: "play none none none"
				}
			})

			tl.to(gradientRef.current, {
				opacity: 1,
				duration: 0.9,
				ease: "power2.out"
			}).to(
				textRef.current,
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power2.out"
				},
				"-=0.4"
			)
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			ref={sectionRef}
			className="max-md:pb-22.5 pt-22.5 bg-black relative overflow-hidden"
		>
			<div
				ref={gradientRef}
				className="absolute left-0 -bottom-6 w-full h-19.25 bg-linear-to-r from-foreground via-[#804848] to-foreground blur-[30px] opacity-0"
			/>

			<div className="relative max-w-308 px-4 mx-auto">
				<Title className="mb-10 text-center max-w-175 mx-auto bg-linear-to-b from-[#fff4eb] from-[52.2%] to-[#ff4425] bg-clip-text text-transparent">
					Оперативная
					<br className="md:hidden" />
					реакция на пожар
				</Title>

				<div className="flex justify-end pr-27.5">
					<Image
						src="/images/fire-page/reaction/top-decor.png"
						width={682}
						height={40}
						quality={95}
						alt=""
					/>
				</div>

				<div className="flex items-center max-md:flex-col justify-between gap-5">
					<div className="relative w-[63%] aspect-756/694">
						<Image
							src="/images/fire-page/reaction/smoke.png"
							fill
							quality={95}
							alt=""
						/>
					</div>

					<div
						ref={textRef}
						className="max-w-86.5 space-y-6 opacity-0 translate-y-6"
					>
						<Image
							src="/images/fire-page/reaction/icon.svg"
							width={54}
							height={54}
							alt=""
						/>
						<div className="font-helvetica text-[17px] leading-[1.3] -tracking-[0.01em] text-white">
							Пожарная сигнализация является неотъемлемой частью системы охраны и безопасности умного дома. Она предназначена для раннего обнаружения и предотвращения пожаров в жилых и коммерческих помещениях.
						</div>
						<a
							href="#"
							className="inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[15px] font-medium text-brand-blue group"
						>
							Узнать больше
							<RightArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}