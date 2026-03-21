"use client"

import { SliderNavigation } from "@/components/UI/SliderNavigation";
import { Title } from "@/components/UI/Title";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const slides = [
	{
		image: '/images/smart-switches-page/materials/1.jpg',
		cap: 'Металл',
		descr: 'Органично сочетаются с техникой, мебельной фурнитурой и современными интерьерными решениями.',
	},
	{
		image: '/images/smart-switches-page/materials/2.jpg',
		cap: 'Стекло',
		descr: 'Подходит для светлых и минималистичных интерьеров, где важна чистота форм и визуальная лёгкость',
		theme: 'dark'
	},
	{
		image: '/images/smart-switches-page/materials/3.jpg',
		cap: 'Камень',
		descr: 'Позволяют встроить розетки и выключатели в стены и панели без визуального шума',
	},
]
export default function SmartSwitchesMaterials() {

	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null)
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null)
	return (
		<section className="py-22.5 lg:py-30 overflow-hidden">
			<div className="max-w-308 px-4 mx-auto">
				<Title className="mb-10">Дизайн и материалы</Title>

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
						<SwiperSlide key={i} className="relative p-6 aspect-380/540 flex! rounded-[20px] overflow-hidden flex-col justify-end">
							<Image
								fill
								alt=""
								src={slide.image}
								quality={95}
							/>
							<h3 className={`${slide.theme !== 'dark' && 'text-white'} font-medium mb-2 text-[17px] relative`}>{slide.cap}</h3>
							<div className={`${slide.theme === 'dark' ? 'text-brand-gray' : 'text-white/60'} font-helvetica text-[15px] relative text-[#acacac]`}>{slide.descr}</div>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderNavigation className="justify-end mt-10" setPrev={setPrevEl} setNext={setNextEl} />
			</div>
		</section>
	);
}
