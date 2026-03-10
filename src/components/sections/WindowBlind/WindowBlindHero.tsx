import { Button } from "@/components/UI/Button";
import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function WindowBlindHero() {
	return (
		<section className="pt-10 pb-22.5 bg-white">
			<div className="max-w-235.5 px-4 mx-auto flex flex-col items-center text-center">
				<Image
					src="/images/window-blind-page/hero.png"
					width={474}
					height={427}
					quality={95}
					alt=""
					className="mb-5"
				/>
				<Title className="mb-6">Короткий слоган</Title>
				<Button className="justify-center py-1.75!">Подобрать ткань и привод</Button>
				<div className="font-helvetica text-[17px] mt-20 leading-[1.3] -tracking-[0.01em] max-w-135.5">
					Нехитрая система подъема, позволяющая им подниматься вверх или опускаться вниз с помощью системы шнуров и электропривода..
					Часто популярны на кухне, лоджиях и других местах, где из за особенностей помещения нецелесообразно устанавливать раздвижные шторы.
				</div>
			</div>
		</section>
	);
}