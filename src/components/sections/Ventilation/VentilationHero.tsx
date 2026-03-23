import { Button } from "@/components/UI/Button";
import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function VentilationHero() {
	return (
		<section className="pb-22.5 lg:pb-30 overflow-hidden">
			<div className="max-w-368 px-4 mx-auto flex flex-col items-center">
				<div className="mb-20 min-w-229">
					<Image
						src="/images/ventilation-page/hero.jpg"
						width={1440}
						height={317}
						alt=""
					/>
				</div>
				<div className="max-w-140 mx-auto text-center">
					<Title className="mb-6">Вентиляция</Title>
					<div className="mb-20">
						<Button className="justify-center py-1.75!">Подобрать ткань и привод</Button>
					</div>
					<div className="font-helvetica text-[17px] leading-[1.3] -tracking-[0.01em]">Нехитрая система подъема, позволяющая им подниматься вверх или опускаться вниз с помощью системы шнуров и электропривода..
						Часто популярны на кухне, лоджиях и других местах, где из за особенностей помещения нецелесообразно устанавливать раздвижные шторы.</div>
				</div>
			</div>
		</section>
	)
}