"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Title } from '../UI/Title';
import { SliderNavigation } from '../UI/SliderNavigation';
import Image from 'next/image';
import { useState } from 'react';

const cases = [
	{
		title: "Высокие технологии в классическом исполнении",
		description: "Вся электрика в доме теперь в вашем смартфоне. Делай десятки действий одним кликом.",
		image: "./images/cases/1.jpg",
		tags: ["Мультимедиа", "Освещение", "Климат", "Мультимедиа"],
	},
	{
		title: "3-х этажный дом. Поселок Park Avenue",
		description: "Вся электрика в доме теперь в вашем смартфоне. Делай десятки действий одним кликом.",
		image: "./images/cases/2.jpg",
		tags: ["Климат", "Мультимедиа", "Климат", "Безопасность"],
	},
	{
		title: "Большой дом для всей семьи",
		description: "Вся электрика в доме теперь в вашем смартфоне. Делай десятки действий одним кликом.",
		image: "./images/cases/3.jpg",
		tags: ["Климат", "Безопасность"],
	},
	{
		title: "Высокие технологии в классическом исполнении",
		description: "Вся электрика в доме теперь в вашем смартфоне. Делай десятки действий одним кликом.",
		image: "./images/cases/1.jpg",
		tags: ["Мультимедиа", "Освещение"],
	},
	{
		title: "3-х этажный дом. Поселок Park Avenue",
		description: "Вся электрика в доме теперь в вашем смартфоне. Делай десятки действий одним кликом.",
		image: "./images/cases/2.jpg",
		tags: ["Климат", "Мультимедиа"],
	},
	{
		title: "Большой дом для всей семьи",
		description: "Вся электрика в доме теперь в вашем смартфоне. Делай десятки действий одним кликом.",
		image: "./images/cases/3.jpg",
		tags: ["Климат", "Безопасность", "Освещение", "Мультимедиа"],
	},
];

const cats = [
	{ icon: "./images/icons/cats/01.svg", label: "Освещение" },
	{ icon: "./images/icons/cats/02.svg", label: "Климат" },
	{ icon: "./images/icons/cats/03.svg", label: "Мультимедиа" },
	{ icon: "./images/icons/cats/04.svg", label: "Безопасность" },
	{ icon: "./images/icons/cats/05.svg", label: "Шторы" },
	{ icon: "./images/icons/cats/06.svg", label: "Кинотеатр" },
];

export default function Cases() {

	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

	return (
		<section className="bg-foreground py-22.5 overflow-hidden">
			<div className="max-w-308 mx-auto px-4">

				<Title className="text-white mb-10">Кейсы</Title>

				<div className="flex flex-wrap gap-2.5 md:gap-3 mb-10">
					{cats.map((cat) => (
						<button
							key={cat.label}
							className="flex items-center gap-2.5 bg-[#242634] py-2.5 cursor-pointer font-medium text-[14px] px-4 rounded-full text-white tracking-[-0.01em] leading-tight"
						>
							<Image
								src={cat.icon}
								width={18}
								height={18}
								alt={cat.label}
							/>
							{cat.label}
						</button>
					))}
				</div>

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
							slidesPerView: 2
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 60,
						},
					}}
				>
					{cases.map((item, index) => {

						const visibleTags = item.tags.slice(0, 2)
						const restCount = item.tags.length - visibleTags.length

						return (
							<SwiperSlide key={`${item.title}-${index}`}>

								<div className="relative aspect-360/290 mb-7.5 overflow-hidden rounded-xl">
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="object-cover"
									/>
								</div>

								<div className="flex flex-wrap items-center gap-2 mb-2 text-[13px]">
									{visibleTags.map(tag => (
										<span
											key={tag}
											className="bg-[#1b1b1b] py-1.5 px-3 rounded-full text-[#afe7ff]"
										>
											{tag}
										</span>
									))}

									{restCount > 0 && (
										<span className="text-[#a7b3b7] p-1.5">
											+{restCount}
										</span>
									)}
								</div>

								<h3 className="text-[17px] tracking-[-0.01em] text-white mb-2 font-medium leading-tight">
									{item.title}
								</h3>

								<div className="text-brand-gray font-helvetica text-[15px] mb-2 tracking-[-0.01em] leading-tight line-clamp-2">
									{item.description}
								</div>

								<a href="#" className="text-brand-blue inline-flex items-center gap-1 leading-tight" >
									<span className="text-[15px]">
										Смотреть проект
									</span>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 18L15 12L9 6"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a >
							</SwiperSlide>)
					})}
				</Swiper>

				<SliderNavigation setPrev={setPrevEl} setNext={setNextEl} />
			</div>
		</section>
	);
};