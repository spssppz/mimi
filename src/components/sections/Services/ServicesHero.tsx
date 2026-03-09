import { Title } from "@/components/UI/ServicesHeroTitle";
import Image from "next/image";

export default function ServicesHero() {
	return (
		<section className="lg:min-h-192 min-h-181.5 relative flex items-center">
			<div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,#c4f9fc_0%,#f4f4f4_100%)]"></div>
			<div className="max-w-308 flex-auto mx-auto px-4 relative text-center flex flex-col items-center">
				<div className="mb-5 lg:mb-3 sm:max-w-none max-w-75.5">
					<Image
						width={374}
						height={67}
						src="/images/services-page/hero/decor.svg"
						alt=""
					/>
				</div>
				<Title>Полный цикл</Title>
				<ul className="space-y-3.25 font-medium -tracking-[0.01em] leading-tight lg:-mt-11.5 flex flex-col items-center">
					<li className="backdrop-blur-xs border border-white/60 p-2.5 bg-white/40 rounded-lg bg-linear-to-r from-[#316abb] to-brand-blue bg-clip-text text-transparent text-[32px]">Проектирование</li>
					<li className="backdrop-blur-xs border border-white/60 p-2.5 bg-white/40 rounded-lg bg-linear-to-r from-[#316abb] to-brand-blue bg-clip-text text-transparent text-[24px]">Монтаж</li>
					<li className="backdrop-blur-xs border border-white/60 p-2.5 bg-white/40 rounded-lg bg-linear-to-r from-[#316abb] to-brand-blue bg-clip-text text-transparent text-[18px]">Сервис</li>
				</ul>
			</div>
		</section>
	);
}