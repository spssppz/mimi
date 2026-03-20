import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function AlarmSystemHero() {
	return (
		<section className="pt-6 md:pt-10 lg:py-15 pb-15 lg:pb-22.5">
			<div className="max-w-308 mb-10 lg:mb-15 px-4 mx-auto flex flex-wrap gap-10 justify-between items-center">
				<Title>Сигнализация</Title>
				<Image
					width={73}
					height={63}
					alt=""
					quality={95}
					src="/images/alarm-system-page/hero-decor.png"
					className="max-md:hidden"
				/>
			</div>
			<div className="relative max-w-400 mx-auto overflow-hidden aspect-390/500 md:aspect-1440/902">
				<Image
					fill
					quality={95}
					src="/images/alarm-system-page/hero.jpg"
					alt=""
					className="object-cover"
				/>
			</div>
		</section>
	);
};
