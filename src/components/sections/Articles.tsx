"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import { Title } from "../UI/Title"
import { SliderNavigation } from "../UI/SliderNavigation"

/* =======================
	 TYPES & DATA
======================= */

type Article = {
	id: number
	tag: string
	isNew: boolean
	title: string
	description: string
	image: string
}

const articles: Article[] = [
	{
		id: 1,
		tag: "Тег",
		isNew: true,
		title: "Высокие технологии в классическом исполнении",
		description:
			"Механика игры «Потолкуем?» Архитектура. Увлекаетесь архитектурой и урбанистикой? Вам точно подойдёт наша игра!",
		image: "./images/articles/1.jpg",
	},
	{
		id: 2,
		tag: "Тег",
		isNew: true,
		title: "Высокие технологии в классическом исполнении",
		description:
			"Механика игры «Потолкуем?» Архитектура. Увлекаетесь архитектурой и урбанистикой? Вам точно подойдёт наша игра!",
		image: "./images/articles/2.jpg",
	},
	{
		id: 3,
		tag: "Тег",
		isNew: true,
		title: "Высокие технологии в классическом исполнении",
		description:
			"Механика игры «Потолкуем?» Архитектура. Увлекаетесь архитектурой и урбанистикой? Вам точно подойдёт наша игра!",
		image: "./images/articles/3.jpg",
	},
]

/* =======================
	 HOOK
======================= */

function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)
		setMatches(media.matches)

		const listener = () => setMatches(media.matches)
		media.addEventListener("change", listener)

		return () => media.removeEventListener("change", listener)
	}, [query])

	return matches
}

/* =======================
	 UI BLOCKS
======================= */

function ArticleCard({ article, className }: { article: Article, className?: string }) {
	return (
		<div className={`relative bg-white p-4 pt-5 md:p-5 md:pt-7.5 rounded-[20px] leading-tight font-semibold ${className}`}>

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

			<h3 className="text-[20px] text-[#0a051a] mb-5">
				{article.title}
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
			className={`border-2 text-[#4a5df9] border-[#4a5df9] rounded-[20px] flex items-center justify-center gap-2.5 ${className}`}
		>
			<span className="text-[14px]">
				Больше новостей
			</span>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9 18L15 12L9 6"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
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
							modules={[Navigation]}
							spaceBetween={20}
							slidesPerView={1}
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

						<SliderNavigation setPrev={setPrevEl} setNext={setNextEl} />
					</>
				)}
			</div>
		</section>
	)
}
