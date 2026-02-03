"use client"

import Image from "next/image"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import { Title } from "../UI/Title"
import { SliderNavigation } from "../UI/SliderNavigation"
import { articles } from '@/data/articles'
import type { Article } from "@/types/article"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import Link from "next/link"
import { RightArrowIcon } from "@/icons/RightArrowIcon"

/* =======================
	 UI BLOCKS
======================= */

function ArticleCard({ article, className }: { article: Article, className?: string }) {
	return (
		<div className={`group relative bg-white p-4 pt-5 md:p-5 md:pt-7.5 rounded-[20px] leading-tight font-semibold ${className}`}>

			<div className="flex justify-between items-center mb-4 gap-3">
				<span className="text-brand-blue text-[14px]">
					{article.tag}
				</span>

				{article.isNew && (
					<span className="bg-[#0a051a] text-white text-[13px] py-1 px-3 uppercase rounded-tl-[60px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-sm">
						Новое
					</span>
				)}
			</div>

			<h3 className="text-[20px] text-[#0a051a] mb-5 transition-colors duration-350 group-hover:text-brand-blue">
				<Link href="">
					{article.title}
					<span className="absolute rounded-[20px] block top-0 left-0 w-full h-full"></span>
				</Link>
			</h3>

			<p className="text-brand-gray font-helvetica text-[15px] font-normal leading-normal mb-6 line-clamp-2">
				{article.description}
			</p>

			<div className="aspect-326/149 lg:aspect-273/125 rounded-2xl overflow-hidden mt-auto">
				<Image
					src={article.image}
					alt={article.title}
					width={273}
					height={125}
					className="w-full object-cover"
				/>
			</div>
		</div>
	)
}

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
						{articles.map(article => (
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
					</>
				)}
			</div>
		</section>
	)
}
