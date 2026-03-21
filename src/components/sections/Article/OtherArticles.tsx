"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"

import { articles } from '@/data/articles'
import { RightArrowIcon } from "@/icons/RightArrowIcon"
import { Title } from "@/components/UI/Title"
import { SliderNavigation } from "@/components/UI/SliderNavigation"
import { ArticleCard } from "@/components/UI/ArticleCard"

/* =======================
	 UI BLOCKS
======================= */

function MoreSlide({ className }: { className?: string }) {
	return (
		<a
			href="#"
			className={`border-2 text-[#4a5df9] transition hover:text-foreground duration-300 border-[#4a5df9] hover:border-foreground rounded-[20px] flex items-center justify-center gap-2.5 ${className}`}
		>
			<span className="text-[14px]">
				Больше новостей
			</span>
			<RightArrowIcon className="w-6 h-6"></RightArrowIcon>
		</a >
	)
}

/* =======================
	 MAIN COMPONENT
======================= */

export default function OtherArticles() {
	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);


	return (
		<section className="py-10 md:py-16 lg:py-22.5 overflow-hidden">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-10">Другие статьи</Title>

				<div className="md:hidden">
					<div className="flex gap-5 flex-col">
						{articles.map(article => (
							<ArticleCard
								key={article.id}
								article={article}
								className="flex-1"
							/>

						))}
						<button className="cursor-pointer w-full text-[14px] rounded-[20px] border border-[#4a5df9] p-3 text-brand-blue">Больше новостей</button>
					</div>
				</div>

				<div className="max-md:hidden">
					<Swiper
						spaceBetween={20}
						slidesPerView={1}
						modules={[Navigation]}
						navigation={{
							prevEl: prevEl,
							nextEl: nextEl,
						}}
						className="overflow-visible!"
						breakpoints={{
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
					>
						{articles.map(article => (
							<SwiperSlide key={article.id}>
								<ArticleCard article={article} />
							</SwiperSlide>
						))}

						<SwiperSlide>
							<MoreSlide />
						</SwiperSlide>
					</Swiper>

					<SliderNavigation className="justify-end mt-10" setPrev={setPrevEl} setNext={setNextEl} />
				</div>
			</div>
		</section>
	)
}
