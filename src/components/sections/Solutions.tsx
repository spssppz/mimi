'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Title } from '../UI/Title';
import { RightArrowIcon } from '@/icons/RightArrowIcon';
import gsap from 'gsap';

interface CardProps {
	title: string;
	description: string;
	image: string;
	imgWidth: number;
	glowColor: string; // Передаем цвет сюда
}

const SolutionCard = ({ title, description, image, imgWidth, glowColor }: CardProps) => {
	const cardRef = useRef<HTMLLIElement>(null);
	const glowRef = useRef<HTMLDivElement>(null);
	const OFFSET = 10;

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!cardRef.current || !glowRef.current) return;

		const rect = cardRef.current.getBoundingClientRect();
		const glowW = rect.width * 0.6;
		const glowH = rect.height * 0.6;

		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const isLeft = e.clientX < centerX;
		const isTop = e.clientY < centerY;

		const targetX = isLeft ? -OFFSET : (rect.width - glowW + OFFSET);
		const targetY = isTop ? -OFFSET : (rect.height - glowH + OFFSET);

		// Подбираем углы для градиента
		let angle = 155;
		if (isTop && !isLeft) angle = 210;
		else if (!isTop && isLeft) angle = 25;
		else if (!isTop && !isLeft) angle = 320;

		gsap.to(glowRef.current, {
			x: targetX,
			y: targetY,
			width: glowW,
			height: glowH,
			// Динамически подставляем цвет из пропсов
			background: `linear-gradient(${angle}deg, ${glowColor} 0%, rgba(255, 255, 255, 0) 70%)`,
			duration: 0.7,
			ease: "expo.out",
			opacity: 1,
			overwrite: "auto"
		});
	};

	const handleMouseLeave = () => {
		gsap.to(glowRef.current, {
			duration: 0.7,
			opacity: 0.6, // Твоя настройка остаточного свечения
		});
	};

	return (
		<li
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative group list-none"
		>
			<div
				ref={glowRef}
				className="absolute pointer-events-none blur-[11px] opacity-0 z-0"
				style={{ willChange: 'transform, background' }}
			/>

			<div className="relative z-10 bg-foreground border border-[#5A5D64] min-h-76 md:min-h-89 rounded-xl p-8 flex flex-col justify-center items-center text-center">
				<div className="mb-4">
					<Image src={image} alt={title} width={imgWidth} height={100} />
				</div>

				<h3 className="tracking-[-0.01em] text-[17px] text-white font-medium mb-4">{title}</h3>
				<div className="mb-4 font-helvetica text-brand-gray text-[15px] tracking-[-0.01em]">
					{description}
				</div>

				<a href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-brand-blue group">
					Узнать больше
					<RightArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
				</a>
			</div>
		</li>
	);
};

export default function Solutions() {
	return (
		<section className="bg-foreground py-30 overflow-hidden relative">
			<div className="dots-pattern" />
			<div className="max-w-308 mx-auto px-4">
				<Title className="text-white mb-20">Комплексные решения</Title>

				<ul className="grid md:grid-cols-2 gap-6 md:gap-5">
					<SolutionCard
						title="Для квартиры"
						image="/images/solutions/1.png"
						imgWidth={100}
						glowColor="#99E1FF"
						description="От проектирования до настройки - создаём умную квартиру, где всё связано и работает согласованно"
					/>
					<SolutionCard
						title="Для дома"
						image="/images/solutions/2.png"
						imgWidth={165}
						glowColor="#FFF599" // Желтый градиент для второго блока
						description="От проектирования до настройки - создаём умную квартиру, где всё связано и работает согласованно"
					/>
				</ul>
			</div>
		</section>
	);
}