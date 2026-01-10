'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Title } from "../UI/Title";
import { Pagination } from "swiper/modules";
import { BtnArrowIcon } from "@/icons/BtnArrowIcon";

export default function Capabilities() {
	return (
		<section className="pb-10 pt-22.5 md:pb-16 lg:py-22.5 overflow-hidden lg:overflow-visible">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-10">Чем вы сможете управлять?</Title>
				{/* DESKTOP */}
				<ul className="hidden lg:block space-y-5">
					<li className="sticky top-3 bg-[linear-gradient(225deg,#f4dbc5_0%,#f4f4f4_48.56%,#d1a683_100%)] shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-20 px-15 gap-4 min-h-150 overflow-hidden flex flex-col justify-between">
						<h3 className="font-bold text-[100px] leading-none tracking-[-0.04em] text-black/7">Освещение</h3>
						<div className="flex justify-between gap-4 items-end">
							<p className="font-helvetica text-[16px] max-w-85 leading-snug tracing-[-0.01em] text-[#907e70]">
								Подходят любые светильники. <br /> Регулируйте яркость, температуру теплого и холодного света. Управляйте шторами с кнопок и с телефона.
							</p>
							<button className="shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#5a250a]">
								Подробнее
								<BtnArrowIcon className="w-6 h-6"></BtnArrowIcon>
							</button>
						</div>
						<span className="absolute w-[44%] top-0 -right-7.25 aspect-584/500">

							<Image
								src="./images/capabilities/decor/1.png"
								alt="Фон"
								fill
							/>
						</span>
					</li>
					<li className="sticky top-6 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-20 px-15 bg-[#adafbb] gap-4 min-h-150 overflow-hidden flex flex-col justify-between">
						<h3 className="font-bold text-[100px] leading-none tracking-[-0.04em] text-black/7">Климат</h3>
						<div className="flex justify-between gap-4 items-end">
							<p className="font-helvetica text-[16px] max-w-85 leading-snug tracing-[-0.01em] text-[#303236]">
								Автоматический климат-контроль: <br /> слаженная работа отопления, теплых полов, кондиционеров, вентиляции и увлажнения
							</p>
							<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
								Подробнее
								<BtnArrowIcon className="w-6 h-6"></BtnArrowIcon>
							</button>
						</div>

						<span className="absolute w-80.5 top-7 right-6 aspect-322/303">

							<Image
								src="./images/capabilities/decor/2.png"
								alt="Фон"
								fill
							/>
						</span>
					</li>
					<li className="sticky top-9 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-20 px-15 bg-[#0f1015] gap-4 min-h-150 overflow-hidden flex flex-col justify-between">
						<Image
							className="object-cover"
							src="./images/capabilities/bg/3.png"
							alt="Фон"
							fill
						/>
						<h3 className="relative font-bold text-[90px] leading-none tracking-[-0.04em] bg-[linear-gradient(90deg,rgba(145,152,168,0.15)_0%,#afe7ff_67.34%,rgba(145,152,168,0.15)_100%)] bg-clip-text text-transparent">Безопасность</h3>
						<div className="relative flex justify-between gap-4 items-end">
							<p className="font-helvetica text-[16px] max-w-85 leading-snug tracing-[-0.01em] text-[#95979e]">
								Защита от протечек воды, охранная сигнализация, имитацция присутствия
							</p>
							<button className="shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
								Подробнее
								<BtnArrowIcon className="w-6 h-6"></BtnArrowIcon>
							</button>
						</div>
					</li>
					<li className="sticky top-12 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-20 px-15 bg-[#c7c7c9] gap-4 min-h-150 overflow-hidden flex flex-col justify-between">
						<Image
							className="object-cover"
							src="./images/capabilities/bg/4.png"
							alt="Фон"
							fill
						/>
						<h3 className="relative font-bold text-[100px] leading-none tracking-[-0.04em] text-black/7">Шторы</h3>
						<div className="relative flex justify-between gap-4 items-end">
							<p className="font-helvetica text-[16px] max-w-85 leading-snug tracing-[-0.01em] text-[#58595d]">
								Управляем любыми видами отопления, теплых полов и конвекторов. В каждой комнате своя, комфортная каждому температура.
							</p>
							<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
								Подробнее
								<BtnArrowIcon className="w-6 h-6"></BtnArrowIcon>
							</button>
						</div>
					</li>
					<li className="sticky top-15 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-20 px-15 bg-[#eee] gap-4 min-h-150 overflow-hidden flex flex-col justify-between">
						<Image
							className="object-cover"
							src="./images/capabilities/bg/5.png"
							alt="Фон"
							fill
						/>
						<h3 className="relative font-bold text-[100px] leading-none tracking-[-0.04em] text-black/7">Видео- <br /> наблюдение</h3>
						<div className="relative flex justify-between gap-4 items-end">
							<p className="font-helvetica text-[16px] max-w-85 leading-snug tracing-[-0.01em] text-[#95979e]">
								Смотрите ваши камеры и отвечайте на звонок в домофон в любой точке мира. Наблюдайте за домом и будьте уверены, что с родными все в порядке.
							</p>
							<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
								Подробнее
								<BtnArrowIcon className="w-6 h-6"></BtnArrowIcon>
							</button>
						</div>
					</li>
					<li className="sticky top-18 bg-[radial-gradient(50%_200%_at_50%_50%,#F4EFC5_0%,#F4F4F4_48.56%,#D3B291_100%)] shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-20 px-15 bg-[#0f1015] gap-4 min-h-150 overflow-hidden flex flex-col justify-between">
						<Image
							className="object-cover"
							src="./images/capabilities/bg/6.png"
							alt="Фон"
							fill
						/>
						<h3 className="relative font-bold text-[100px] leading-none tracking-[-0.04em] text-black/7">Электрика</h3>
						<div className="relative flex justify-between gap-4 items-end">
							<p className="font-helvetica text-[16px] max-w-85 leading-snug tracing-[-0.01em] text-[#58595d]">
								Спроектируем и реализуем современную электрику. Управление розетками, сценарные выключатели, стабилизация напряжения, резервное питание, молниезащита.
							</p>
							<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
								Подробнее
								<BtnArrowIcon className="w-6 h-6"></BtnArrowIcon>
							</button>
						</div>
					</li>
					<li className="sticky top-21 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-20 px-15 bg-[#c9c9ca] gap-4 min-h-150 overflow-hidden flex flex-col justify-between">
						<Image
							className="object-cover"
							src="./images/capabilities/bg/7.png"
							alt="Фон"
							fill
						/>
						<h3 className="relative font-bold text-[100px] leading-none tracking-[-0.04em] text-black/12">Кинотеатр</h3>
						<div className="relative flex justify-between gap-4 items-end">
							<p className="font-helvetica text-[16px] max-w-85 leading-snug tracing-[-0.01em] text-[#303236]">
								Оборудуем кинозалы и кино в гостиной под ключ. Автоматизируем аппаратуру кино и создаем удобные сценарии
							</p>
							<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
								Подробнее
								<BtnArrowIcon className="w-6 h-6"></BtnArrowIcon>
							</button>
						</div>
					</li>
					<li className="sticky top-24 bg-[radial-gradient(50%_50%_at_50%_50%,#462925_0%,#000000_100%)] shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-20 px-15 bg-[#0f1015] gap-4 min-h-150 overflow-hidden flex flex-col justify-between">
						<Image
							className="object-cover"
							src="./images/capabilities/bg/8.png"
							alt="Фон"
							fill
						/>
						<h3 className="relative font-bold text-[100px] leading-none tracking-[-0.04em] text-white/24">Мультирум</h3>
						<div className="relative flex justify-between gap-4 items-end">
							<p className="font-helvetica text-[16px] max-w-85 leading-snug tracing-[-0.01em] text-[#92969d]">
								Своя музыка в каждой комнате, AirPlay, следящая музыка, звуковые оповещения
							</p>
							<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
								Подробнее
								<BtnArrowIcon className="w-6 h-6"></BtnArrowIcon>
							</button>
						</div>
					</li>
				</ul>
				{/* MOBILE */}
				<div className="lg:hidden">
					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						spaceBetween={16}
						slidesPerView={1}
						className="overflow-visible!"
					>
						<SwiperSlide className="flex-none w-full mr-4">
							<div className="relative lg:sticky lg:top-3 bg-[linear-gradient(225deg,#f4dbc5_0%,#f4f4f4_48.56%,#d1a683_100%)] shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-4 px-6 md:py-8 md:px-12 gap-4 min-h-125 overflow-hidden flex flex-col justify-between">
								<h3 className="font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-none tracking-[-0.04em] text-black/7">Освещение</h3>
								<div className="flex justify-between gap-4 items-start sm:items-end flex-col sm:flex-row">
									<p className="font-helvetica text-[16px] sm:max-w-85 leading-snug tracing-[-0.01em] text-[#907e70]">
										Подходят любые светильники. <br /> Регулируйте яркость, температуру теплого и холодного света. Управляйте шторами с кнопок и с телефона.
									</p>
									<button className="shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#5a250a]">
										Подробнее
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18 8L22 12L18 16"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
											<path d="M2 12H22"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
								<span className="absolute w-98 top-0 -right-10 sm:-right-5 aspect-233/200">

									<Image
										src="./images/capabilities/decor/1.png"
										alt="Лампа"
										fill
									/>
								</span>
							</div>
						</SwiperSlide>
						<SwiperSlide className="flex-none w-full mr-4">
							<div className="relative lg:sticky lg:top-6 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-4 px-6 md:py-8 md:px-12 bg-[#adafbb] gap-4 min-h-125 overflow-hidden flex flex-col justify-between">
								<h3 className="font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-none tracking-[-0.04em] text-black/7">Климат</h3>
								<div className="flex justify-between gap-4 items-start sm:items-end flex-col sm:flex-row">
									<p className="font-helvetica text-[16px] sm:max-w-85 leading-snug tracing-[-0.01em] text-[#303236]">
										Автоматический климат-контроль: <br /> слаженная работа отопления, теплых полов, кондиционеров, вентиляции и увлажнения
									</p>
									<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
										Подробнее
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18 8L22 12L18 16"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
											<path d="M2 12H22"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>

								<span className="absolute w-60 md:w-70 top-7 right-6 aspect-322/303">

									<Image
										src="./images/capabilities/decor/2.png"
										alt="Фон"
										fill
									/>
								</span>
							</div>
						</SwiperSlide>
						<SwiperSlide className="flex-none w-full mr-4">
							<div className="relative lg:sticky lg:top-9 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-4 px-6 md:py-8 md:px-12 bg-[#0f1015] gap-4 min-h-125 overflow-hidden flex flex-col justify-between">
								<Image
									className="object-cover"
									src="./images/capabilities/bg/3.png"
									alt="Фон"
									fill
								/>
								<h3 className="relative font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-none tracking-[-0.04em] bg-[linear-gradient(90deg,rgba(145,152,168,0.15)_0%,#afe7ff_67.34%,rgba(145,152,168,0.15)_100%)] bg-clip-text text-transparent">Безопасность</h3>
								<div className="relative flex justify-between gap-4 items-start sm:items-end flex-col sm:flex-row">
									<p className="font-helvetica text-[16px] sm:max-w-85 leading-snug tracing-[-0.01em] text-[#95979e]">
										Защита от протечек воды, охранная сигнализация, имитацция присутствия
									</p>
									<button className="shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
										Подробнее
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18 8L22 12L18 16"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
											<path d="M2 12H22"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="flex-none w-full mr-4">
							<div className="relative lg:sticky lg:top-12 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-4 px-6 md:py-8 md:px-12 bg-[#c7c7c9] gap-4 min-h-125 overflow-hidden flex flex-col justify-between">
								<Image
									className="object-cover"
									src="./images/capabilities/bg/4.png"
									alt="Фон"
									fill
								/>
								<h3 className="relative font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-none tracking-[-0.04em] text-black/7">Шторы</h3>
								<div className="relative flex justify-between gap-4 items-start sm:items-end flex-col sm:flex-row">
									<p className="font-helvetica text-[16px] sm:max-w-85 leading-snug tracing-[-0.01em] text-[#58595d]">
										Управляем любыми видами отопления, теплых полов и конвекторов. В каждой комнате своя, комфортная каждому температура.
									</p>
									<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
										Подробнее
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18 8L22 12L18 16"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
											<path d="M2 12H22"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="flex-none w-full mr-4">
							<div className="relative lg:sticky lg:top-15 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-4 px-6 md:py-8 md:px-12 bg-[#eee] gap-4 min-h-125 overflow-hidden flex flex-col justify-between">
								<Image
									className="object-cover"
									src="./images/capabilities/bg/5.png"
									alt="Фон"
									fill
								/>
								<h3 className="relative font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-none tracking-[-0.04em] text-black/7">Видео- <br /> наблюдение</h3>
								<div className="relative flex justify-between gap-4 items-start sm:items-end flex-col sm:flex-row">
									<p className="font-helvetica text-[16px] sm:max-w-85 leading-snug tracing-[-0.01em] text-[#95979e]">
										Смотрите ваши камеры и отвечайте на звонок в домофон в любой точке мира. Наблюдайте за домом и будьте уверены, что с родными все в порядке.
									</p>
									<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
										Подробнее
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18 8L22 12L18 16"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
											<path d="M2 12H22"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="flex-none w-full mr-4">
							<div className="relative lg:sticky lg:top-18 bg-[radial-gradient(50%_200%_at_50%_50%,#F4EFC5_0%,#F4F4F4_48.56%,#D3B291_100%)] shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-4 px-6 md:py-8 md:px-12 bg-[#0f1015] gap-4 min-h-125 overflow-hidden flex flex-col justify-between">
								<Image
									className="object-cover"
									src="./images/capabilities/bg/6.png"
									alt="Фон"
									fill
								/>
								<h3 className="relative font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-none tracking-[-0.04em] text-black/7">Электрика</h3>
								<div className="relative flex justify-between gap-4 items-start sm:items-end flex-col sm:flex-row">
									<p className="font-helvetica text-[16px] sm:max-w-85 leading-snug tracing-[-0.01em] text-[#58595d]">
										Спроектируем и реализуем современную электрику. Управление розетками, сценарные выключатели, стабилизация напряжения, резервное питание, молниезащита.
									</p>
									<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
										Подробнее
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18 8L22 12L18 16"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
											<path d="M2 12H22"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="flex-none w-full mr-4">
							<div className="relative lg:sticky lg:top-21 shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-4 px-6 md:py-8 md:px-12 bg-[#c9c9ca] gap-4 min-h-125 overflow-hidden flex flex-col justify-between">
								<Image
									className="object-cover"
									src="./images/capabilities/bg/7.png"
									alt="Фон"
									fill
								/>
								<h3 className="relative font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-none tracking-[-0.04em] text-black/12">Кинотеатр</h3>
								<div className="relative flex justify-between gap-4 items-start sm:items-end flex-col sm:flex-row">
									<p className="font-helvetica text-[16px] sm:max-w-85 leading-snug tracing-[-0.01em] text-[#303236]">
										Оборудуем кинозалы и кино в гостиной под ключ. Автоматизируем аппаратуру кино и создаем удобные сценарии
									</p>
									<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
										Подробнее
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18 8L22 12L18 16"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
											<path d="M2 12H22"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="flex-none w-full mr-4">
							<div className="relative lg:sticky lg:top-24 bg-[radial-gradient(50%_50%_at_50%_50%,#462925_0%,#000000_100%)] shadow-[inset_-2px_2px_3px_0_rgba(0,0,0,0.19),inset_1px_-1px_1px_0_rgba(255,255,255,0.6)] rounded-3xl py-4 px-6 md:py-8 md:px-12 bg-[#0f1015] gap-4 min-h-125 overflow-hidden flex flex-col justify-between">
								<Image
									className="object-cover"
									src="./images/capabilities/bg/8.png"
									alt="Фон"
									fill
								/>
								<h3 className="relative font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-none tracking-[-0.04em] text-white/24">Мультирум</h3>
								<div className="relative flex justify-between gap-4 items-start sm:items-end flex-col sm:flex-row">
									<p className="font-helvetica text-[16px] sm:max-w-85 leading-snug tracing-[-0.01em] text-[#92969d]">
										Своя музыка в каждой комнате, AirPlay, следящая музыка, звуковые оповещения
									</p>
									<button className="cursor-pointer rounded-[50px] leading-none flex px-11 py-2 border border-white items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#f0f4f6] tracking-[-0.02em] text-[#0a051a]">
										Подробнее
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18 8L22 12L18 16"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
											<path d="M2 12H22"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};