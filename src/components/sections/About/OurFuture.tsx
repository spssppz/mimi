"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { Title } from "@/components/UI/Title";
import { SliderNavigation } from "@/components/UI/SliderNavigation";
import { ourFutureList } from "@/data/ourFuture";

export default function OurFuture() {

	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
	return (
		<section className="py-22.5 overflow-hidden">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-10">Будущее нашей компании</Title>
				<Swiper
					modules={[Navigation]}
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 16,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}
					navigation={{
						prevEl: prevEl,
						nextEl: nextEl,
					}}
					className="overflow-visible!"
				>
					{typeof window !== 'undefined' && window.innerWidth >= 1024 && (
						<SwiperSlide className="flex-none mr-4 md:mr-5 lg:mr-10 tracking-[-0.01em]">
							<div className="font-bold items-center justify-center flex text-[32px] text-[#acacac] aspect-375/465 rounded-[20px] overflow-hidden mb-4 bg-[#ededed] p-20">
								<span className="max-w-40">Дальше больше...</span>
							</div>
						</SwiperSlide>
					)}

					{ourFutureList.map((item, index) => (
						<SwiperSlide
							key={index}
							className="flex-none mr-4 md:mr-5 lg:mr-10 tracking-[-0.01em]"
						>
							<div className="relative block aspect-375/465 rounded-[20px] overflow-hidden mb-4 bg-brand-gray">
								<Image
									src={item.src}
									alt={item.title}
									fill
									className="object-cover"
									draggable={false}
								/>
							</div>

							<h3 className="text-[17px] font-medium mb-2">{item.title}</h3>
							<p className="leading-snug text-[15px] text-brand-gray font-helvetica">
								{item.description}
							</p>
						</SwiperSlide>
					))}
				</Swiper>

				<SliderNavigation className="justify-end mt-10" setPrev={setPrevEl} setNext={setNextEl} />
			</div>
		</section >
	);
}