'use client'

import { useState, useMemo, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import 'swiper/css'
import { cases } from '@/data/cases'
import { categories } from '@/data/categories'
import { RightArrowIcon } from '@/icons/RightArrowIcon'
import { Title } from '@/components/UI/Title'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
	const categoriesMap = useMemo(() => Object.fromEntries(categories.map(cat => [cat.label, cat.icon])), [])
	const [activeCat, setActiveCat] = useState<string | null>(null)
	const filteredCases = useMemo(() => (activeCat ? cases.filter(item => item.tags.includes(activeCat)) : cases), [activeCat])

	const casesRefs = useRef<(HTMLLIElement | null)[]>([])

	useLayoutEffect(() => {
		if (!casesRefs.current.length) return

		casesRefs.current.forEach(item => {
			if (!item) return
			gsap.fromTo(
				item,
				{ autoAlpha: 0, x: -50 },
				{
					autoAlpha: 1,
					x: 0,
					duration: 0.8,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: item,
						start: 'top 80%',
						toggleActions: 'play none none none',
					},
				}
			)
		})
	}, [filteredCases])

	return (
		<section className="pt-15 pb-22.5 lg:pb-30 overflow-hidden">
			<div className="max-w-348 mx-auto px-4">
				<Title className="mb-10 xl:px-20">Проекты</Title>

				{/* Фильтр */}
				<div className="flex flex-wrap gap-3 lg:mb-10 xl:px-20">
					<button
						onClick={() => setActiveCat(null)}
						className={`cursor-pointer py-2.5 px-4 rounded-full text-[14px] font-medium transition ${activeCat === null ? 'bg-brand-blue text-white' : 'bg-[#fcfdff]'
							}`}
					>
						Все
					</button>
					{categories.map(cat => {
						const isActive = activeCat === cat.label

						const hasCases = cases.some(item =>
							item.tags.includes(cat.label)
						)
						const IconComponent = cat.icon
						return (
							<button
								key={cat.label}
								onClick={() => hasCases && setActiveCat(cat.label)}
								className={`flex items-center gap-2.5 py-2.5 px-4 rounded-full text-[14px] font-medium transition
										${isActive ? 'bg-brand-blue text-white'
										: hasCases
											? 'cursor-pointer bg-[#fcfdff] text-foreground hover:opacity-80 transition-opacity duration-200'
											: 'bg-transparent text-brand-gray'
									}
									 `}
							>
								<IconComponent className="w-4.5 h-4.5" />
								{cat.label}
							</button>
						)
					})}
				</div>

				<ul>
					{filteredCases.map((item, index) => (
						<li

							ref={el => {
								casesRefs.current[index] = el
							}}
							key={`${item.title}-${index}`}
							className="py-10 border-b gap-4 lg:gap-20 border-[#d9d9d9] flex flex-col-reverse lg:flex-row lg:items-end xl:pl-20"
						>
							<div className="lg:basis-106.5">
								<div className="mb-4 md:mb-5 flex flex-wrap gap-2">
									{item.tags.map((tag, i) => {
										const Icon = categoriesMap[tag]
										return (
											<div
												key={`${tag}-${i}`}
												className="font-helvetica py-1.5 border border-[#d9d9d9] rounded-[50px] px-3 font-medium flex items-center gap-2.5 text-[13px] text-brand-gray tracking-[-0.02em]"
											>
												{Icon && <Icon className="w-4 h-4" />}
												<span>{tag}</span>
											</div>
										)
									})}
								</div>

								<h3 className="font-helvetica text-[18px] md:text-[20px] tracking-[-0.01em] mb-3 font-medium leading-tight">
									{item.title}
								</h3>
								<p className="text-brand-gray text-[15px] md:text-[16px] mb-4 md:mb-5 tracking-[-0.01em] leading-snug">
									{item.description}
								</p>
								<a href="#" className="text-brand-blue inline-flex items-center gap-1 leading-tight">
									<span className="text-[15px]">Смотреть проект</span>
									<RightArrowIcon className="w-6 h-6" />
								</a>
							</div>

							<div className="relative rounded-xl overflow-hidden flex-auto aspect-774/430">
								<Image quality={95} src={item.imageMain} alt={item.title} fill className="object-cover" />
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
