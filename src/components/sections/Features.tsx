"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { Title } from "../UI/Title";
import { SliderNavigation } from "../UI/SliderNavigation";

const features = [
	{
		title: "Приложение",
		description: "Вся электрика в доме теперь в вашем смартфоне. Делай десятки действий одним кликом.",
		src: "./images/features/1.jpg",
	},
	{
		title: "Выключатели",
		description: "Управляйте так, как привыкли. Почти как классические выключатели. На одну кнопку можно разместить десятки действий.",
		src: "./images/features/2.jpg",

	},
	{
		title: "Голосовое управление",
		description: "Просто скажите — Алиса, открой шторы. Или — Siri, выключи свет. Команда будет выполнена незамедлительно.",
		src: "./images/features/1.jpg",
	},
	{
		title: "Приложение",
		description: "Вся электрика в доме теперь в вашем смартфоне. Делай десятки действий одним кликом.",
		src: "./images/features/1.jpg",
	},
	{
		title: "Выключатели",
		description: "Управляйте так, как привыкли. Почти как классические выключатели. На одну кнопку можно разместить десятки действий.",
		src: "./images/features/2.jpg",
	},
	{
		title: "Голосовое управление",
		description: "Просто скажите — Алиса, открой шторы. Или — Siri, выключи свет. Команда будет выполнена незамедлительно.",
		src: "./images/features/1.jpg",
	},
];

export default function Features() {

	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
	return (
		<section className="py-10 md:py-16 lg:py-22.5 overflow-hidden">
			<div className="max-w-308 mx-auto px-4">
				<div className="lg:ml-36">
					<Title className="mb-10">Удобное управление</Title>
					<Swiper
						modules={[Navigation]}
						spaceBetween={0}
						slidesPerView={'auto'}
						navigation={{
							prevEl: prevEl,
							nextEl: nextEl,
						}}
						className="overflow-visible!"
					>
						{features.map((item, index) => (
							<SwiperSlide
								key={index}
								className="w-70! mr-10 md:w-110! shrink-0"
							>
								<a href="" className="relative block aspect-11/10 rounded-[20px] overflow-hidden mb-4 bg-brand-gray">
									<Image unoptimized
										src={item.src}
										alt={item.title}
										fill
										className="object-cover"
										draggable={false}
									/>
								</a>

								<h3 className="text-[17px] font-medium mb-2">{item.title}</h3>
								<p className="leading-snug mb-2 text-[15px] text-brand-gray font-helvetica">
									{item.description}
								</p>
								<a href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-brand-blue group">
									Узнать больше
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
										<path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</a>
							</SwiperSlide>
						))}
					</Swiper>

					<SliderNavigation setPrev={setPrevEl} setNext={setNextEl} />
				</div>
			</div>
		</section>
	);
}