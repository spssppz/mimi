import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function ControlAccessHero() {
	return (
		<section className="min-h-182.5 bg-white overflow-hidden">
			<div className="max-w-308 px-4 mx-auto flex flex-col items-center text-center relative">
				<Image
					src="/images/control-access-page/hero-decor.png"
					width={596}
					height={513}
					quality={95}
					alt=""
					className="mb-5 -mt-10"
				/>
				<Title className="mb-6">Контроль доступа.</Title>
				<div className="font-helvetica text-[17px] leading-[1.3] -tracking-[0.01em] max-w-135.5">
					Нехитрая система подъема, позволяющая им подниматься вверх или опускаться вниз с помощью системы шнуров и электропривода..
					Часто популярны на кухне.
				</div>
			</div>
		</section>
	);
}