"use client"

import { useState } from "react"

import { RightArrowIcon } from "@/icons/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";
import { Title } from "@/components/UI/CatalogTitle";

type ProductItem = {
	image: {
		src: string
		width: number
		height: number
	}
	cap: string
	descr: string
	link: string
}

type Props = {
	title?: string
	mobTitle?: string
	items: ProductItem[]
	INITIAL_COUNT?: number
	LOAD_MORE?: number
}

export default function CatalogItems({
	title,
	items,
	mobTitle,
	INITIAL_COUNT = 6,
	LOAD_MORE = 3
}: Props) {
	const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

	const handleLoadMore = () => {
		setVisibleCount(prev => prev + LOAD_MORE)
	}

	const visibleItems = items.slice(0, visibleCount)

	return (
		<section className="py-22.5 bg-white">
			<div className="max-w-308 mx-auto px-4">
				{title && (
					<Title className="mb-10 text-center">{title}</Title>
				)}
				<ul className="grid grid-cols-2 lg:grid-cols-3 sm:gap-4 gap-2 mb-6 lg:mb-10">
					{visibleItems.map((item, i) => (
						<li
							key={i}
							className="rounded-[20px] bg-background px-5 py-6 md:px-10 md:py-10 lg:min-h-122.5 flex flex-col"
						>
							<Image
								src={item.image.src}
								alt={item.cap}
								width={item.image.width}
								height={item.image.height}
								quality={95}
								className="self-center mb-5"
							/>
							<div className="space-y-4 md:space-y-3 -tracking-[0.01em] max-sm:text-center mt-auto">
								<h3 className="font-semibold max-sm:text-[15px] leading-[1.4]">{item.cap}</h3>
								<div className="text-[15px] max-sm:hidden line-clamp-2">{item.descr}</div>

								<Link
									href={item.link}
									className="inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[15px] font-medium text-brand-blue group cursor-pointer"
								>
									Подробнее
									<RightArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
								</Link>
							</div>
						</li>
					))}
				</ul>
				{visibleCount < items.length && (
					<div className="text-center">
						<button
							onClick={handleLoadMore}
							className="cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] font-medium text-[13px] text-[#121212] p-3 rounded-[50px] min-w-50 bg-white"
						>
							Показать еще
						</button>
					</div>
				)}
			</div>
		</section>
	)
}