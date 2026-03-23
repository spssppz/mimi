import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function AirConditioningHero() {
	return (
		<section className="pt-10 bg-[#f8f8f8] lg:pt-15 pb-22.5 min-h-198 overflow-hidden">
			<div className="max-w-308 mx-auto px-4 flex flex-col items-center text-center">
				<div className="mb-20 lg:mb-10 min-w-109.5">
					<Image
						src="/images/air-conditioning-page/hero-decor.jpg"
						width={940}
						height={395}
						alt=""
					/>
				</div>
				<Title className="mb-10 lg:mb-20">Короткий слоган</Title>
				<div className="max-w-140 font-helvetica text-[17px] leading-[1.3] -tracking-[0.01em]">Нехитрая система подъема, позволяющая им подниматься вверх или опускаться вниз с помощью системы шнуров и электропривода..
					Часто популярны на кухне, лоджиях и других местах, где из за особенностей помещения нецелесообразно устанавливать раздвижные шторы.</div>
			</div>
		</section>
	)
}