"use client"

import { SliderNavigation } from "@/components/UI/SliderNavigation";
import { Title } from "@/components/UI/Title";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { RightArrowIcon } from "@/icons/RightArrowIcon";

export type Slide = {
	image?: string
	cap: string
	descr: string
	theme?: 'light' | 'dark'
	link?: string
}

type Props = {
	title: string
	slides: Slide[]
}

export default function PartnersFeatures({ title, slides }: Props) {

	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null)
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null)
	return (
		<section className="pt-22.5 lg:pt-30 pb-22.5 overflow-hidden">
			<div className="max-w-308 px-4 mx-auto">
				<Title className="mb-10 lg:max-w-200">{title}</Title>

				<Swiper
					modules={[Navigation]}
					navigation={{ prevEl, nextEl }}
					className="overflow-visible!"
					breakpoints={{
						0: {
							spaceBetween: 16,
							slidesPerView: 'auto',
						},
						768: {
							spaceBetween: 16,
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
					}}
				>

					{slides.map((slide, i) => (
						<SwiperSlide key={i} className="bg-white relative -tracking-[0.01em] max-md:basis-[95.53%] max-md:grow-0 max-md:shrink-0 aspect-380/540 flex! flex-col justify-end rounded-[20px] overflow-hidden py-6 px-4 lg:px-6 space-y-2">
							{slide.image && (
								<Image
									fill
									alt=""
									src={slide.image}
									className="object-cover"
									quality={95}
								/>
							)}
							<h3 className={`${slide.theme === 'light' ? 'text-white' : ''} font-medium text-[17px] relative`}>{slide.cap}</h3>
							<div className={`${slide.theme === 'light' ? 'text-white' : 'text-[#acacac]'} font-helvetica text-[15px] relative`}>{slide.descr}</div>
							{slide.link && (
								<a href={slide.link} className="relative inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[15px] font-medium text-brand-blue group">
									Узнать больше
									<RightArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
								</a>
							)}
						</SwiperSlide>
					))}
				</Swiper>
				<SliderNavigation className="justify-end mt-10" setPrev={setPrevEl} setNext={setNextEl} />
			</div>
		</section>
	);
}
