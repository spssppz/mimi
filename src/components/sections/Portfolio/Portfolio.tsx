"use client"

import { useState, useMemo } from 'react'
import Image from 'next/image'
import 'swiper/css'
import { cases } from '@/data/cases'

import { categories } from '@/data/categories'
import { RightArrowIcon } from '@/icons/RightArrowIcon'
import { Title } from '@/components/UI/Title'

export default function Portfolio() {
	const [activeCat, setActiveCat] = useState<string | null>(null)

	const filteredCases = useMemo(() => {
		if (!activeCat) return cases
		return cases.filter(item => item.tags.includes(activeCat))
	}, [activeCat])

	return (
		<section className="pt-15 pb-22.5 lg:pb-30 overflow-hidden">
			<div className="max-w-308 mx-auto px-4">

				<Title className="mb-10">Проекты</Title>

				{/* Фильтр */}
				<div className="flex flex-wrap gap-3 mb-10">
					<button
						onClick={() => setActiveCat(null)}
						className={`cursor-pointer py-2.5 px-4 rounded-full text-[14px] font-medium transition
              ${activeCat === null
								? 'bg-brand-blue text-white'
								: 'bg-[#fcfdff]'
							}`}
					>
						Все
					</button>

					{categories.map(cat => {
						const isActive = activeCat === cat.label
						const IconComponent = cat.icon
						return (
							<button
								key={cat.label}
								onClick={() => setActiveCat(cat.label)}
								className={`cursor-pointer flex items-center gap-2.5 py-2.5 px-4 rounded-full text-[14px] font-medium transition
                  ${isActive
										? 'bg-brand-blue text-white'
										: 'bg-[#fcfdff]'
									}`}
							>
								<IconComponent className="w-4.5 h-4.5" />
								{cat.label}
							</button>
						)
					})}
				</div>
				<ul>
					{filteredCases.map((item, index) => {
						return (
							<li className='py-10 border-b border-[#d9d9d9] flex' key={`${item.title}-${index}`}>
								<div>
									<div className='mb-5 flex flex-wrap gap-2'>
										{item.tags.map((tag, i) => (
											<div className='font-helvetica py-1.5 border border-[#d9d9d9] rounded-[50px] px-3 font-medium flex gap-2.5 text-[13px] text-brand-gray tracking-[-0.02em]'>{tag}</div>
										))}
									</div>
									<h3 className="font-helvetica text-[20px] tracking-[-0.01em] mb-3 font-medium leading-tight">
										{item.title}
									</h3>
									<p className="text-brand-gray text-[16px] mb-5 tracking-[-0.01em] leading-snug">
										{item.description}
									</p>
									<a
										href="#"
										className="text-brand-blue inline-flex items-center gap-1 leading-tight"
									>
										<span className="text-[15px]">Смотреть проект</span>
										<RightArrowIcon className="w-6 h-6"></RightArrowIcon>
									</a>
								</div>
								<div className='relative w-[10%] h-full'>
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="object-cover"
									/>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
