"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import { Title } from "../UI/Title"
import { SliderNavigation } from "../UI/SliderNavigation"
import { articles } from '@/data/articles'
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { RightArrowIcon } from "@/icons/RightArrowIcon"
import { ArticleCard } from "../UI/ArticleCard"

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

export default function Articles() {
	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

	const isDesktop = useMediaQuery("(min-width: 992px)")

	return (
		<section className="py-10 md:py-16 lg:py-22.5 overflow-hidden">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-10">Полезные статьи</Title>

				{isDesktop ? (
					<div className="flex gap-5">
						{articles.slice(0, 3).map(article => (
							<ArticleCard
								key={article.id}
								article={article}
								className="flex-1"
							/>

						))}
						<MoreSlide className="w-50 shrink-0" />
					</div>
				) : (
					<>
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
							}}
						>
							{articles.slice(0, 3).map(article => (
								<SwiperSlide key={article.id}>
									<ArticleCard article={article} />
								</SwiperSlide>
							))}

							<SwiperSlide>
								<MoreSlide />
							</SwiperSlide>
						</Swiper>

						<SliderNavigation className="justify-end mt-10" setPrev={setPrevEl} setNext={setNextEl} />
					</>
				)}
			</div>
		</section>
	)
}
