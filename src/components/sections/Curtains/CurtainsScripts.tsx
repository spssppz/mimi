"use client";

import { Title } from "@/components/UI/Title";
import Image from "next/image";
import { useRef, useState, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { RightArrowIcon } from "@/icons/RightArrowIcon";
import gsap from "gsap";

import 'swiper/css';
import 'swiper/css/effect-fade';

const features = [
	{
		id: 0,
		title: 'Я пришел',
		content: [
			"За час начнут прогреваться теплые полы",
			"Отопление перейдет в дневной режим",
			"Плавно откроются шторы, естественно пробуждая солнечными лучами",
			"Вместо будильника, тихая музыка аккуратно встретит с новым днем",
		],
	},
	{
		id: 1,
		title: 'Я ушел',
		content: [
			"Выключается весь свет",
			"Закрываются шторы",
			"Выключается музыка",
			"Климат-контроль переходит в энергосберегающий режим",
		],
	},
	{
		id: 2,
		title: 'Вечеринка',
		content: [
			"За час начнут прогреваться теплые полы",
			"Отопление перейдет в дневной режим",
			"Плавно откроются шторы, естественно пробуждая солнечными лучами",
			"Вместо будильника, тихая музыка аккуратно встретит с новым днем",
		],
	},
]

export default function CurtainsScripts() {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<any>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Анимируем все обертки контента
			features.forEach((_, idx) => {
				const selector = `.content-wrapper-${idx}`;
				const isActive = activeIndex === idx;

				gsap.to(selector, {
					height: isActive ? "auto" : 0,
					opacity: isActive ? 1 : 0,
					duration: 0.4,
					ease: "power2.inOut",
					overwrite: true
				});
			});
		}, containerRef);

		return () => ctx.revert();
	}, [activeIndex]);

	const handleSelect = (index: number) => {
		swiperRef.current?.slideTo(index);
	};

	return (
		<section className="py-22.5 overflow-hidden">
			<div className="max-w-308 px-4 mx-auto mb-10 flex items-start gap-10 flex-col md:flex-row md:items-end md:justify-between">
				<Title>Сценарии</Title>

				<a href="#" className="inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[15px] font-medium text-brand-blue group cursor-pointer">
					Узнать больше
					<RightArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
				</a>
			</div>

			<div className="max-w-348 mx-auto px-4" ref={containerRef}>
				<div className="rounded-3xl relative overflow-hidden min-h-126 bg-black items-center lg:flex hidden">

					<div className="py-15 pl-20 flex-none w-[36%] relative z-20">
						{/* Стрелки навигации */}
						<div className="absolute top-1/2 left-5 -translate-y-1/2 flex flex-col gap-4 text-[#acacac]">
							<button
								onClick={() => swiperRef.current?.slidePrev()}
								disabled={activeIndex === 0}
								className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 rotate-90 transition-all disabled:opacity-10 disabled:cursor-default"
							>
								<RightArrowIcon className="rotate-180 w-5 h-5" />
							</button>
							<button
								onClick={() => swiperRef.current?.slideNext()}
								disabled={activeIndex === features.length - 1}
								className="rotate-90 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all disabled:opacity-10 disabled:cursor-default"
							>
								<RightArrowIcon className="w-5 h-5" />
							</button>
						</div>

						{/* Список табов */}
						<ul className="space-y-4">
							{features.map((item, idx) => (
								<li
									key={item.id}
									className={`border transition-colors duration-500 rounded-xl overflow-hidden ${activeIndex === idx
										? "border-[#5a5d64] bg-[linear-gradient(180deg,#27272b_0%,#101011_100%)] shadow-[inset_-4px_4px_3px_0_rgba(0,0,0,0.25)]"
										: "border-transparent"
										}`}
								>
									<button
										onClick={() => handleSelect(idx)}
										className={`w-full cursor-pointer text-left py-4 px-6 font-semibold font-helvetica transition-colors ${activeIndex === idx ? 'text-white' : 'text-white/50 hover:text-white/80'
											}`}
									>
										{item.title}
									</button>

									<div className={`content-wrapper-${idx} h-0 opacity-0 overflow-hidden px-6`}>
										<ul className="pb-5 space-y-3">
											{item.content.map((li, i) => (
												<li key={i} className="flex items-start text-sm text-white/80">
													<span className="mr-2 text-brand-blue">•</span> {li}
												</li>
											))}
										</ul>
									</div>
								</li>
							))}
						</ul>
					</div>

					{/* Фоновый слайдер */}
					<div className="absolute inset-0 z-10">
						<Swiper
							onSwiper={(s) => (swiperRef.current = s)}
							onSlideChange={(s) => setActiveIndex(s.activeIndex)}
							effect="fade"
							speed={600}
							modules={[EffectFade]}
							className="h-full w-full"
						>
							{features.map((item, idx) => (
								<SwiperSlide key={idx}>
									<Image
										src="/images/curtains-page/scripts/bg.jpg"
										fill
										alt=""
										className="object-cover"
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>

				{/* Мобильная версия */}
				<div className="lg:hidden">
					<Swiper
						spaceBetween={16}
						slidesPerView={1}
						onSlideChange={(s) => setActiveIndex(s.activeIndex)}
						className="overflow-visible"
					>
						{features.map((item, idx) => (
							<SwiperSlide key={idx} className="min-h-112.5 relative p-4 rounded-3xl overflow-hidden bg-black">
								<Image
									src="/images/curtains-page/scripts/bg-mob.jpg"
									fill
									alt=""
									className="object-cover opacity-60"
								/>
								<div className="relative z-10 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
									<div className="mb-4 font-semibold text-white text-lg">{item.title}</div>
									<ul className="space-y-2">
										{item.content.map((li, i) => (
											<li key={i} className="flex items-start text-sm text-white/90">
												<span className="mr-2">•</span> {li}
											</li>
										))}
									</ul>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}