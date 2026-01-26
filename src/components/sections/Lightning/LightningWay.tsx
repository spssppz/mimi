"use client";

import { Title } from "@/components/UI/Title";
import { SliderNavigation } from "@/components/UI/SliderNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { RightArrowIcon } from "@/icons/RightArrowIcon";
import { useState } from "react";
import Image from "next/image";

const tabs = [
	{
		label: "Без умного дома",
		image: "/images/lightning-page/way/2.png",
		text: "Выключатели множатся: на каждой стене — пианино из клавиш. Каждый управляет только одной группой света. Никаких сцен — только вкл/выкл. Чтобы приглушить свет или закрыть все — приходится обходить комнаты и нажимать по очереди. Итог: 10+ выключателей, путаешься, где что включается, и лишние отверстия в стенах."
	},
	{
		label: "С умным домом",
		image: "/images/lightning-page/way/1.jpg",
		text: "С умным домом вы управляете группой света через одно нажатие, сценарии включения и выключения становятся полностью автоматическими, а количество физических выключателей минимально."
	}
]

export default function LightningWay() {

	return (
		<section className="py-22.5 text-center">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-30 lg:mb-40">
					Два способа. <br />
					<span className="bg-[linear-gradient(180deg,#422e0c_0%,#ffc96e_100%)] bg-clip-text text-transparent">Управляйте группой света</span>
				</Title>
				<div className="max-w-125 mx-auto -tracking-[0.01em] flex flex-col items-center">
					<Image
						src="/images/lightning-page/way/1.jpg"
						className="lg:mb-35 md:mb-30 mb-25"
						width={285}
						alt=""
						height={285}
					/>
					<div className="mb-10 bg-white flex justify-center gap-2 p-1 rounded-[50px] font-helvetica font-medium leading-normal">
						<button type="button" className="py-2.5 px-5 rounded-[50px]">Без умного дома</button>
						<button type="button" className="py-2.5 px-5 bg-foreground text-white rounded-[50px]">С умным домом</button>
					</div>
					<div className="text-[17px] leading-tight">Сокращаем количество выключателей в среднем в 2 раза. Итого у вас теперь 3-5 выключателей вместо 10.
						Но каждой кнопке на выключателе будет присвоено не одно действие вкл/выкл, а управление группой света или сценарием.</div>
				</div>
			</div>
		</section>
	);
}