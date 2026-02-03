"use client";

import { Title } from "@/components/UI/Title";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { RightArrowIcon } from "@/icons/RightArrowIcon";

const features = [
	{
		id: 0,
		title: 'Я пришел',
		content: {
			list: [
				"За час начнут прогреваться теплые полы",
				"Отопление перейдет в дневной режим",
				"Плавно откроются шторы, естественно пробуждая солнечными лучами",
				"Вместо будильника, тихая музыка аккуратно встретит с новым днем",
			],
		},
	},
	{
		id: 1,
		title: 'Я ушел',
		content: {
			list: [
				"Выключается весь свет",
				"Закрываются шторы",
				"Выключается музыка",
				"Климат-контроль переходит в энергосберегающий режим",
			],
		},
	},
	{
		id: 2,
		title: 'Вечеринка',
		content: {
			list: [
				"За час начнут прогреваться теплые полы",
				"Отопление перейдет в дневной режим",
				"Плавно откроются шторы, естественно пробуждая солнечными лучами",
				"Вместо будильника, тихая музыка аккуратно встретит с новым днем",
			],
		},
	},
]

export default function CurtainsScripts() {
	const [activeIndex, setActiveIndex] = useState(1);
	const swiperRef = useRef<any>(null);
	const total = features.length
	const handlePrev = () => {
		if (activeIndex > 0) {
			swiperRef.current?.slidePrev()
		}
	}

	const handleNext = () => {
		if (activeIndex < total - 1) {
			swiperRef.current?.slideNext()
		}
	}

	const handleSelect = (index: number) => {
		setActiveIndex(index);
		swiperRef.current?.slideTo(index);
	};
	return (
		<section className="py-22.5 overflow-hidden">
			<div className="max-w-308 px-4 mx-auto mb-10 flex items-start gap-10 flex-col md:flex-row md:items-end md:justify-between">
				<Title>Сценарии</Title>

				<a href="#" className="inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[15px] font-medium text-brand-blue group">
					Узнать больше
					<RightArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
				</a>
			</div>
			<div className="max-w-348 mx-auto px-4">
				<div className="rounded-3xl relative overflow-hidden min-h-150 bg-black items-center lg:flex hidden">
					<div className="py-15 pl-20 flex-none w-[34%] relative z-10">
						<div className="hidden lg:flex absolute top-1/2 left-5 -translate-y-1/2 flex-col gap-4 text-[#acacac]">
							<button

								onClick={handlePrev}
								disabled={activeIndex === 0}
								className="w-9 h-9 rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-80 rotate-90 transition-opacity duration-300 disabled:opacity-20 disabled:cursor-default"
							>
								<RightArrowIcon className="rotate-180 w-5 h-5"></RightArrowIcon>
							</button>
							<button

								onClick={handleNext}
								disabled={activeIndex === total - 1}
								className="rotate-90 w-9 h-9 rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-300 disabled:opacity-20 disabled:cursor-default"
							>
								<RightArrowIcon className="w-5 h-5"></RightArrowIcon>
							</button>
						</div>
						<ul className="space-y-6 leading-snug -tracking-[0.01em]">
							{features.map((item, idx) => (
								<li key={item.id} className={`${activeIndex === idx && "shadow-[inset_-4px_4px_3px_0_rgba(0,0,0,0.25)] bg-[linear-gradient(180deg,#27272b_0%,#101011_100%)] border border-[#5a5d64] rounded-xl py-5 px-4"}`}>
									<button
										onClick={() => handleSelect(idx)}
										className={`cursor-pointer text-left font-semibold font-helvetica ${activeIndex === idx ? 'text-white' : 'text-white/60'}`}
									>
										{item.title}
									</button>
									{activeIndex === idx && item.content && (
										<div className="pt-4 text-white">
											<ul className="space-y-4.5">
												{item.content.list.map((li, i) => (
													<li key={i} className="flex items-start">
														<span className="mr-2">•</span> {li}
													</li>
												))}
											</ul>
										</div>
									)}
								</li>
							))}
						</ul>
					</div>
					<Image
						src="/images/curtains-page/scripts/bg.jpg"
						fill
						alt=""
						className="object-cover"
					/>
				</div>
				<div className="lg:hidden px-4 -mx-4">
					<Swiper
						className="-mx-4 px-4 overflow-visible!"
						spaceBetween={16}
						modules={[Pagination]}
						pagination={{ clickable: true }}
						slidesPerView={1}
					>
						{features.map((item, idx) => (
							<SwiperSlide key={idx} className="min-h-150 overflow-hidden relative p-4 rounded-3xl text-white bg-black mr-4">

								<Image
									src="/images/curtains-page/scripts/bg-mob.jpg"
									fill
									alt=""
									className="object-cover"
								/>
								<div className="rounded-[20px] relative z-10 mb-4 p-6 shadow-[inset_-4px_4px_3px_0_rgba(0,0,0,0.25)] bg-[linear-gradient(180deg,#27272b_0%,#101011_100%)] leading-snug -tracking-[0.01em]">
									<div className="mb-4 font-helvetica font-semibold">{item.title}</div>
									<div>
										<ul className="space-y-1">
											{item.content.list.map((li, i) => (
												<li key={i} className="flex items-start">
													<span className="mr-2">•</span>
													{li}
												</li>
											))}
										</ul>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}