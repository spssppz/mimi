"use client";
import { useEffect, useRef } from "react";
import { BtnArrowIcon } from "@/icons/BtnArrowIcon";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
	{ image: '/images/solutions-page/improvement/1.jpg', title: 'Вашу квартиру.', subtitle: 'Поможем улучшить' },
	{ image: '/images/solutions-page/improvement/2.jpg', title: 'Ваш дом.', subtitle: 'Поможем улучшить' },
	{ image: '/images/solutions-page/improvement/3.jpg', title: 'Ваш офис.', subtitle: 'Поможем улучшить' },
	{ image: '/images/solutions-page/improvement/4.jpg', title: 'Жилой комлекс.', subtitle: 'Поможем улучшить' },
]

export default function Improvement() {
	const sectionRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const bgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "+=300%",
					pin: true,
					scrub: 1,
				}
			});

			slides.forEach((slide, index) => {
				if (index === 0) return;

				// 1. Контент уходит вверх
				tl.to(contentRef.current, {
					y: -50,
					opacity: 0,
					duration: 0.6,
				})
					// 2. Меняем картинку (прозрачность)
					.to(bgRef.current, { opacity: 0, duration: 0.4 }, "-=0.2")
					.call(() => {
						// Обновляем данные напрямую через DOM
						if (bgRef.current) bgRef.current.src = slide.image;
						const title = contentRef.current?.querySelector('.slide-title');
						const subtitle = contentRef.current?.querySelector('.slide-subtitle');
						if (title) title.textContent = slide.title;
						if (subtitle) subtitle.textContent = slide.subtitle;
					})
					// 3. Подготавливаем контент снизу (сброс позиции)
					.set(contentRef.current, { y: 100 })
					// 4. Проявляем фон и ввозим контент снизу вверх
					.to(bgRef.current, { opacity: 1, duration: 0.4 })
					.to(contentRef.current, {
						y: 0,
						opacity: 1,
						duration: 0.6,
					});
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} className="py-22.5 relative min-h-screen flex overflow-hidden">
			{/* Background */}
			<div>
				<img
					ref={bgRef}
					src={slides[0].image}
					className="absolute inset-0 w-full h-full object-cover"
					alt="Фон"
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-transparent to-black/60"></div>
			</div>

			<div className="max-w-308 mx-auto px-4 relative w-full flex flex-col h-full">
				<div ref={contentRef} className="flex flex-col items-center text-center text-white h-full">
					<div className="font-bold flex-auto">
						<div className="slide-subtitle text-[20px] md:text-[22px] lg:text-[24px] -tracking-[0.01em] mb-2 lg:mb-4">
							{slides[0].subtitle}
						</div>
						<div className="slide-title text-[40px] md:text-[52px] lg:text-[64px]">
							{slides[0].title}
						</div>
					</div>

					{/* Твоя оригинальная кнопка без изменений */}
					<button className="min-w-62.25 shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] cursor-pointer rounded-[50px] leading-none flex px-11 py-2 items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#d1d1d1] tracking-[-0.02em] text-[#5a250a] group">
						Подробнее
						<BtnArrowIcon className="group-hover:translate-x-1 transition-transform duration-300 w-6 h-6"></BtnArrowIcon>
					</button>
				</div>
			</div>
		</section>
	);
}