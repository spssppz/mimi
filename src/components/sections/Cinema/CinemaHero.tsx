import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function CinemaHero() {
	return (
		<section className="relative min-h-225 pt-30 pb-10 bg-black">
			<Image
				src="/images/cinema-page/hero/bg-desktop.png"
				fill
				alt="bg"
				className="hidden lg:block"
			/>
			<div className="max-w-308 mx-auto px-4 relative">
				<Title className="mb-2 text-white">Мультимедиа</Title>
				<div className="font-helvetica text-[17px] max-w-143 text-[#acacac] leading-tight -tracking-[0.01em]">Продуманная до мелочей система, которая позволяет вам погрузиться в просмотр кино, почувствовать атмосферу, которую задумал режиссер фильма и направить все чувства в тот, кинематографический мир.</div>
				<div className="lg:hidden aspect-390/426 relative -mx-4">

					<Image
						src="/images/cinema-page/hero/tv-mob.jpg"
						fill
						alt="bg"
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}