'use client'

import { useState } from 'react' // Добавили useRef
import Image from 'next/image';
import { Title } from '../../UI/Title';
import { Button } from '../../UI/Button';
import { showroomContent } from '@/data/showroom';
import { brand } from '@/config/brand';
import { PlayIcon } from '@/icons/PlayIcon';
import { MimiLogo } from '@/components/UI/MimiLogo';

export default function Showroom() {
	const [isPlaying, setIsPlaying] = useState(false)

	return (
		<section className="overflow-hidden relative pt-10 pb-26 md:pt-16 md:pb-34 lg:pt-22.5 lg:pb-45">
			<span className='absolute bottom-15 left-1/2 -translate-x-1/2 w-360 aspect-1440/820 -z-1'>
				<Image
					src='/images/showroom/bg.png' // Убрал точку в начале для корректного пути в Next.js
					alt="background image"
					fill
					className="object-cover"
				/>
			</span>
			<div className="max-w-236 mx-auto px-4">

				<Title className="mb-6 lg:max-w-200">
					{showroomContent.title}
				</Title>

				<div className="font-helvetica lg:max-w-122.5 text-brand-gray leading-snug tracking-[-0.01em] mb-10 md:mb-14 lg:mb-18">
					{showroomContent.description}
				</div>

				<MimiLogo className='mb-26 md:mb-18 flex justify-center lg:mx-auto'></MimiLogo>

				<div className="relative border-16 border-[#f9fbfc] aspect-video mb-8.5 md:mb-6 rounded-[20px] overflow-hidden bg-[#f9fbfc]">
					{!isPlaying && (
						<>
							<Image
								src={`${showroomContent.videoPreview}`}
								alt="Превью видео"
								fill
								className="object-cover rounded-2xl"
							/>

							<button
								onClick={() => setIsPlaying(true)}
								className="absolute rounded-full overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
								aria-label="Запустить видео"
							>
								<PlayIcon className='w-13.5 h-13.5'></PlayIcon>
							</button>
						</>
					)}

					{isPlaying && (
						<video
							className="w-full h-full object-cover rounded-2xl"
							controls
							autoPlay
						>
							<source src={`${showroomContent.videoSrc}`} type="video/mp4" />
						</video>
					)}
				</div>

				<div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-8">
					<div className="flex items-center gap-3">
						<div className="w-11 h-11 bg-white rounded-[10px] flex items-center justify-center">
							<Image
								src="./images/icons/address-decor.svg"
								width={44}
								height={44}
								alt="Address"
							/>
						</div>
						<div className="font-helvetica lg:max-w-45 text-[14px] tracking-[-0.01em] text-brand-blue">
							{brand.address}
						</div>
					</div>
					<Button>Записаться в шоурум</Button>
				</div>

			</div>
		</section>
	);
};