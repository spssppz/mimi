"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { Title } from "../UI/Title";
import { SliderNavigation } from "../UI/SliderNavigation";
import { features } from "@/data/features";
import { RightArrowIcon } from "@/icons/RightArrowIcon";

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
									<Image
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
									<RightArrowIcon className="w-5 h-5"></RightArrowIcon>
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