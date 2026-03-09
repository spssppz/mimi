import { Button } from "@/components/UI/Button";
import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function ElectricCurtainsHero() {
	return (
		<section className="pt-22.5 lg:pt-16.75 pb-15 lg:pb-22.5">
			<div className="max-w-308 px-4 mx-auto text-center flex flex-col items-center">
				<Title className="mb-6">Короткий слоган</Title>
				<Button className="justify-center py-1.75! mb-10">Подобрать ткань и привод</Button>
				<Image
					src="/images/electric-curtains-page/hero/decor.png"
					width={774}
					height={500}
					alt="decor"
					className="mb-10"
				/>
				<div className="font-helvetica text-[17px] leading-[1.3] -tracking-[0.01em] max-w-140">Нехитрая система подъема, позволяющая им подниматься вверх или опускаться вниз с помощью системы шнуров и электропривода..
					Часто популярны на кухне, лоджиях и других местах, где из за особенностей помещения нецелесообразно устанавливать раздвижные шторы. </div>
			</div>
		</section>
	);
}