import { BtnArrowIcon } from "@/icons/BtnArrowIcon";
import Image from "next/image";

const slides = [
	{
		image: '/images/solutions-page/improvement/1.jpg',
		title: 'Вашу квартиру.',
		subtitle: 'Поможем улучшить',
	},
	{
		image: '/images/solutions-page/improvement/2.jpg',
		title: 'Ваш дом.',
		subtitle: 'Поможем улучшить',
	},
	{
		image: '/images/solutions-page/improvement/3.jpg',
		title: 'Ваш офис.',
		subtitle: 'Поможем улучшить',
	},
	{
		image: '/images/solutions-page/improvement/4.jpg',
		title: 'Жилой комлекс.',
		subtitle: 'Поможем улучшить',
	},
]

export default function Improvement() {
	return (
		<section className="py-22.5 relative min-h-195 flex">
			<div>
				<Image
					src={slides[0].image}
					fill
					className="object-cover"
					alt="Фон"
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-transparent to-black/60"></div>
			</div>
			<div className="max-w-308 mx-auto px-4 relative">
				<div className="flex flex-col items-center text-center text-white h-full">
					<div className="font-bold flex-auto">
						<div className="text-[20px] md:text-[22px] lg:text-[24px] -tracking-[0.01em] mb-2 lg:mb-4">{slides[0].subtitle}</div>
						<div className="text-[40px] md:text-[52px] lg:text-[64px]">{slides[0].title}</div>
					</div>
					<button className="min-w-62.25 shadow-[inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5),inset_3px_3px_6px_0_#eaeaea] cursor-pointer rounded-[50px] leading-none flex px-11 py-2 items-center justify-center uppercase gap-1.5 font-semibold text-[13px] bg-[#d1d1d1] tracking-[-0.02em] text-[#5a250a] group">
						Подробнее
						<BtnArrowIcon className="group-hover:translate-x-1 transition-transform duration-300 w-6 h-6"></BtnArrowIcon>
					</button>
				</div>
			</div>
		</section>
	);
}