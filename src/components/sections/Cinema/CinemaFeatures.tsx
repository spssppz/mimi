"use client";

import { Title } from "@/components/UI/Title";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Link from "next/link";

const features = [
	{
		id: 0,
		title: 'Домашний кинотеатр',
		content: {
			list: [
				"Планируем размещение акустики",
				"Грамотно располагаем свет",
				"Планируем работу микроклимата",
				"Подбираем проектор и экран",
				"Часто все элементы скрыты и выезжают при необходимости",
			],
			link: {
				text: 'Домашний кинотеатр',
				url: '/',
			}
		},
		image: '/images/cinema-page/features/1.png',
	},
	{
		id: 1,
		title: 'Мультирум',
		content: {
			list: [
				"Планируем размещение акустики",
				"Грамотно располагаем свет",
				"Планируем работу микроклимата",
				"Подбираем проектор и экран",
				"Часто все элементы скрыты и выезжают при необходимости",
			],
			link: {
				text: 'Мультирум',
				url: '/',
			}
		},
		image: '/images/cinema-page/features/2.png',
	},
	{
		id: 2,
		title: 'Проекторы',
		content: {
			list: [
				"Планируем размещение акустики",
				"Грамотно располагаем свет",
				"Планируем работу микроклимата",
				"Подбираем проектор и экран",
				"Часто все элементы скрыты и выезжают при необходимости",
			],
			link: {
				text: 'Проекторы',
				url: '/',
			}
		},
		image: '/images/cinema-page/features/3.png',
	},
	{
		id: 3,
		title: 'Телевизоры',
		content: {
			list: [
				"Планируем размещение акустики",
				"Грамотно располагаем свет",
				"Планируем работу микроклимата",
				"Подбираем проектор и экран",
				"Часто все элементы скрыты и выезжают при необходимости",
			],
			link: {
				text: 'Телевизоры',
				url: '/',
			}
		},
		image: '/images/cinema-page/features/4.png',
	},
	{
		id: 4,
		title: 'Аудио',
		content: {
			text: 'Вам не придется отрываться от прослушивания любимой композиции только потому, что нужно пойти в другую комнату. Система создает эффект следования музыки за вами, получая данные с датчиков движения.',
			link: {
				text: 'Узнать больше про аудио',
				url: '/',
			}
		},
		image: '/images/cinema-page/features/5.png',
	},
]

export default function CinemaFeatures() {
	const [activeIndex, setActiveIndex] = useState(1);
	const swiperRef = useRef<any>(null);

	const handleSelect = (index: number) => {
		setActiveIndex(index);
		swiperRef.current?.slideTo(index);
	};
	return (
		<section className="py-22.5 md:py-25 lg:py-30 overflow-hidden bg-black">
			<Title className="max-w-308 mb-6 text-[#acacac] md:mb-8 lg:mb-10 mx-auto px-4">Функционал</Title>
			<div className="max-w-348 mx-auto px-4">
				<div className="bg-foreground rounded-3xl overflow-hidden min-h-152.5 items-center gap-30 lg:flex hidden">
					<div className="py-15 pl-20 flex-none w-[37%] relative">
						<ul className="space-y-6 leading-snug -tracking-[0.01em]">
							{features.map((item, idx) => (
								<li key={item.id} className={`${activeIndex === idx && "bg-background rounded-[20px] p-6"}`}>
									<button
										onClick={() => handleSelect(idx)}
										className={`cursor-pointer text-left font-semibold font-helvetica ${activeIndex === idx ? 'text-foreground' : 'text-foreground/60'}`}
									>
										{item.title}
									</button>
									{activeIndex === idx && item.content && (
										<div className="pt-4 space-y-4">
											{item.content.text && (
												<p>{item.content.text}</p>
											)}
											{item.content.list &&
												(
													<ul className="space-y-px">
														{item.content.list.map((li, i) => (
															<li key={i} className="flex items-start">
																<span className="mr-2">•</span> {li}
															</li>
														))}
													</ul>
												)}
											{item.content.link &&
												(<Link href={item.content.link.url}>{item.content.link.text}</Link>)
											}
										</div>
									)}
								</li>
							))}
						</ul>
					</div>
					<div className="flex-auto min-w-0 self-stretch">
						<Swiper
							modules={[EffectFade]}
							effect="fade"
							onSwiper={(swiper) => (swiperRef.current = swiper)}
							onSlideChange={(s) => setActiveIndex(s.activeIndex)}
							className="h-full"
						>
							{features.map((item, idx) => (
								<SwiperSlide key={idx} className="relative">
									<Image
										src={item.image}
										fill
										alt={item.title}
										className="w-full h-auto object-cover bg-white"
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
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
							<SwiperSlide key={idx} className="p-4 rounded-3xl bg-white mr-4">
								<div className="rounded-[20px] mb-4 p-6 bg-background leading-snug -tracking-[0.01em]">
									<div className="mb-4 font-helvetica font-semibold">{item.title}</div>
									<div>
										{item.content.text && (
											<p>{item.content.text}</p>
										)}
										{item.content.list &&
											(
												<ul className="space-y-px">
													{item.content.list.map((li, i) => (
														<li key={i} className="flex items-start">
															<span className="mr-2">•</span> {li}
														</li>
													))}
												</ul>
											)}
										{item.content.link &&
											(<Link href={item.content.link.url}>{item.content.link.text}</Link>)
										}
									</div>
								</div>
								<div className="relative aspect-735/610 max-w-120 mx-auto">
									<Image
										src={item.image}
										fill
										alt={item.title}
										className="object-cover"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}