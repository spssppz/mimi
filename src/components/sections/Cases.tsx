"use client"

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { cases } from '@/data/cases'

import { Title } from '../UI/Title'
import { SliderNavigation } from '../UI/SliderNavigation'
import { categories } from '@/data/categories'
import { RightArrowIcon } from '@/icons/RightArrowIcon'

export default function Cases() {
	const [activeCat, setActiveCat] = useState<string | null>(null)
	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null)
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null)

	const filteredCases = useMemo(() => {
		if (!activeCat) return cases
		return cases.filter(item => item.tags.includes(activeCat))
	}, [activeCat])

	return (
		<section className="bg-foreground py-22.5 overflow-hidden">
			<div className="max-w-308 mx-auto px-4">

				<Title className="text-white mb-10">Кейсы</Title>

				{/* Фильтр */}
				<div className="flex flex-wrap gap-2.5 md:gap-3 mb-10">
					<button
						onClick={() => setActiveCat(null)}
						className={`cursor-pointer py-2.5 px-4 rounded-full text-[14px] font-medium transition
              ${activeCat === null
								? 'bg-brand-blue text-white'
								: 'bg-[#242634] text-white'
							}`}
					>
						Все
					</button>

					{categories.map(cat => {
						const isActive = activeCat === cat.label

						return (
							<button
								key={cat.label}
								onClick={() => setActiveCat(cat.label)}
								className={`cursor-pointer flex items-center gap-2.5 py-2.5 px-4 rounded-full text-[14px] font-medium transition
                  ${isActive
										? 'bg-brand-blue text-white'
										: 'bg-[#242634] text-white'
									}`}
							>
								<Image
									src={cat.icon}
									width={18}
									height={18}
									alt={cat.label}
								/>
								{cat.label}
							</button>
						)
					})}
				</div>

				<Swiper
					modules={[Navigation]}
					spaceBetween={60}
					slidesPerView={1}
					navigation={{ prevEl, nextEl }}
					className="overflow-visible!"
					breakpoints={{
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
				>
					{filteredCases.map((item, index) => {
						const visibleTags = item.tags.slice(0, 2)
						const restCount = item.tags.length - visibleTags.length

						return (
							<SwiperSlide key={`${item.title}-${index}`}>
								<div className="relative aspect-360/290 mb-5 lg:mb-7.5 overflow-hidden rounded-xl">
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="object-cover"
									/>
								</div>
								{index === 0 ? (
									<div
										className="relative mb-6 lg:mb-7 min-h-14 lg:min-h-15.5"
										style={{
											width: `calc(${filteredCases.length * 100}% + ${(filteredCases.length - 1) * 60}px)`
										}}
									>
										<div className='pattern-bg absolute top-0 left-0 w-full h-[29%] lg:h-[35%]'></div>
										<div className='absolute bottom-0 left-0 w-full h-[71%] lg:h-[65%] bg-linear-to-b from-[#0F1014] via-[#131519] via-[53.37%] to-[rgba(16,16,16,0)]'>
											<span className='absolute top-0 left-0 w-37.5 h-full bg-foreground [clip-path:polygon(0_0,100%_100%,0_100%)]'></span>
										</div>
									</div>
								) : (
									<div className="mb-6 lg:mb-7 min-h-14 lg:min-h-15.5" />
								)}

								<div className="flex flex-wrap items-center gap-2 mb-2 text-[13px]">
									{visibleTags.map((tag, i) => (
										<span
											key={`${tag}-${i}`}
											className="bg-[#1b1b1b] py-1.5 px-3 rounded-full text-[#afe7ff]"
										>
											{tag}
										</span>
									))}

									{restCount > 0 && (
										<span className="text-[#a7b3b7] p-1.5">
											+{restCount}
										</span>
									)}
								</div>

								<h3 className="text-[17px] tracking-[-0.01em] text-white mb-2 font-medium leading-tight">
									{item.title}
								</h3>

								<p className="text-brand-gray font-helvetica text-[15px] mb-2 tracking-[-0.01em] leading-tight line-clamp-2">
									{item.description}
								</p>

								<a
									href="#"
									className="text-brand-blue inline-flex items-center gap-1 leading-tight"
								>
									<span className="text-[15px]">Смотреть проект</span>
									<RightArrowIcon className="w-6 h-6"></RightArrowIcon>
								</a>
							</SwiperSlide>
						)
					})}
				</Swiper>

				<SliderNavigation setPrev={setPrevEl} setNext={setNextEl} />
			</div>
		</section>
	)
}
