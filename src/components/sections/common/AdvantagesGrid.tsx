"use client"

import Image from "next/image";
import { Title } from "@/components/UI/Title";


type AdvantageItem = {
	image: string
	cap: string
	descr: string
	theme: string
}

type Props = {
	title: string
	items: AdvantageItem[]
}

export default function AdvantagesGrid({ title, items }: Props) {
	const renderItem = (item: typeof items[0], index: number) => {
		// Размеры и стили по индексу (для lg)
		let lgWidth = 'lg:w-[32%]'
		if (items.length === 4) {
			if (index === 1) lgWidth = 'lg:w-[42.75%]'
			if (index === 2) lgWidth = 'lg:ml-auto lg:w-[44.8%] z-10'
			if (index === 3) lgWidth = 'lg:w-[32.1%]'
		} else if (items.length === 5) {
			if (index === 0) lgWidth = 'lg:w-[32%]'
			if (index === 1) lgWidth = 'lg:w-[42.75%]'
			if (index === 2) lgWidth = 'lg:ml-auto lg:w-[22%] lg:z-10'
			if (index === 3) lgWidth = 'lg:w-[22%]'
			if (index === 4) lgWidth = 'lg:w-[32%]'
		}

		return (
			<li
				key={index}
				className={`tracking-[-0.01em] p-6 min-h-65 rounded-[20px] overflow-hidden relative ${lgWidth} '#d8d8d8'}`}
			>
				<Image src={item.image} quality={95} alt="" fill className="object-cover" />
				<h3 className={`relative mb-1 font-medium text-[16px] ${item.theme === 'light' ? 'text-white' : ''}`}>
					{item.cap}
				</h3>
				<p className={`relative font-helvetica text-[15px] ${item.theme === 'light' ? 'text-[#95979e]' : 'text-brand-gray'}`}>
					{item.descr}
				</p>
			</li>
		)
	}

	return (
		<section className="pt-30 pb-22.5">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-4 md:mb-10">{title}</Title>
				<ul className="grid sm:grid-cols-2 lg:flex gap-4 sm:gap-5 flex-wrap relative">
					{/* Рендерим карточки до второй */}
					{items.slice(0, 2).map((item, index) => renderItem(item, index))}

					{/* Первый декор (xl) */}
					<li className="hidden xl:block lg:w-[21.75%] min-h-65 relative">
						<Image src="/images/advantages/decor-1.svg" alt="" fill className="object-cover" />
					</li>

					{/* Остальные карточки */}
					{items.slice(2).map((item, index) => renderItem(item, index + 2))}

					{/* Второй и третий декор */}
					<li className="aspect-285/327 absolute w-[23.8%] hidden lg:block -left-7.5 top-65">
						<Image src="/images/advantages/decor-2.png" quality={95} alt="background" fill className="object-cover" />
					</li>
					<li className="aspect-390/314 lg:hidden relative -mx-4 -mt-4">
						<Image src="/images/advantages/decor-3.png" quality={95} alt="background" fill className="object-cover" />
					</li>
				</ul>
			</div>
		</section>
	)
}