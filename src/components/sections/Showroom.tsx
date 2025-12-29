'use client'

import { useState } from 'react'
import Image from 'next/image';
import { Title } from '../UI/Title';

export default function Showroom() {
	const [isPlaying, setIsPlaying] = useState(false)

	return (
		<section className="pt-10 pb-26 md:pt-16 md:pb-34 lg:pt-22.5 lg:pb-45">
			<div className="max-w-236 mx-auto px-4">

				<Title className="mb-6">
					Приходите к нам <br />
					в Шоурум в Москве
				</Title>

				<div className="font-helvetica text-brand-gray leading-snug tracking-[-0.01em] mb-10 md:mb-14 lg:mb-18">
					Вы вживую ощутите тот комфорт, который дает Умный Дом. <br />
					Сами поуправляете системой. <br />
					Мы расскажем о возможностях, которые вы даже не могли себе представить. <br />
					Вы поймете, почему обычная электрика устарела еще 30 лет назад.
				</div>

				<div className="mb-26 md:mb-18 flex justify-center">
					<Image
						src="/images/showroom/mimi.svg"
						width={600}
						height={95}
						alt="MiMiSmart"
					/>
				</div>
				<div className="relative border-16 border-[#f9fbfc] aspect-video mb-8.5 md:mb-6 rounded-[20px] overflow-hidden bg-[#f9fbfc]">

					{!isPlaying && (
						<>
							<Image
								src="/images/showroom/preview.jpg"
								alt="Превью видео"
								fill
								className="object-cover rounded-2xl"
							/>

							<button
								onClick={() => setIsPlaying(true)}
								className="absolute rounded-full overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
								aria-label="Запустить видео"
							>
								<Image
									src="/images/icons/play.svg"
									width={54}
									height={54}
									alt="Запустить видео"
								/>
							</button>
						</>
					)}

					{isPlaying && (
						<video
							className="w-full h-full object-cover rounded-2xl"
							controls
							autoPlay
						>
							<source src="/videos/showroom.mp4" type="video/mp4" />
						</video>
					)}
				</div>

				<div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-8">
					<div className="flex items-center gap-3">
						<div className="w-11 h-11 bg-white rounded-[10px]">
							<Image
								src="/images/icons/address-decor.svg"
								width={44}
								height={44}
								alt="г. Москва, Новоданиловская наб., 6к1"
							/>
						</div>
						<div className="font-helvetica text-[14px] tracking-[-0.01em] text-brand-blue">
							г. Москва, <br />
							Новоданиловская наб., 6к1
						</div>
					</div>

					<button className="cursor-pointer shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] rounded-[50px] flex px-7 py-2 border border-white items-center uppercase gap-1.5 font-semibold text-[13px] tracking-[-0.02em] text-[#00576b]">
						Записаться в шоурум
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 8L22 12L18 16" stroke="#00576B" strokeWidth="1.6" strokeLinejoin="round" />
							<path d="M2 12H22" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
						</svg>

					</button>
				</div>

			</div>

		</section>
	);
};