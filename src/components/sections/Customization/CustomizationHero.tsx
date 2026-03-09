import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function CustomizationHero() {
	return (
		<section className="pt-10 pb-36.25 relative">
			<div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#313a39] to-background"></div>
			<div className="max-w-308 px-4 mx-auto flex flex-col items-center text-center relative">
				<Image
					src="/images/customization-page/hero/decor.png"
					width={406}
					height={406}
					quality={95}
					alt=""
					className="mb-5"
				/>
				<Title className="mb-6">Монтаж и установка</Title>
				<div className="font-helvetica text-[17px] leading-[1.3] -tracking-[0.01em] max-w-135.5">
					Музыка — одна из важнейших составляющих настроения, и порой так хочется, чтобы ей сопровождалось каждое действие.
				</div>
			</div>
		</section>
	);
}