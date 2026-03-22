import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function PALAppearance() {
	return (
		<section className="pt-22.5 lg:pt-40 pb-30 lg:pb-22.5 min-h-198 lg:min-h-206 flex relative">
			<Image
				src="/images/pal-page/appearance-bg.jpg"
				fill
				alt=""
				className="object-cover max-md:object-[40%_center]"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(244,244,244,0)_0%,#f4f4f4_100%),rgba(0,0,0,0.2)]" />
			<div className="max-w-308 mx-auto px-4 w-full flex flex-col justify-between relative">
				<Title className="text-center max-w-md self-center">Необычный
					внешний вид</Title>
				<div className="font-helvetica text-white max-w-80 -tracking-[0.01em]">
					<div className="pb-4 mb-4 lg:pb-6 lg:mb-6 border-b font-bold border-[rgba(217, 217, 217, 0.5)] text-[24px] md:text-[28px] lg:text-[32px]">2см радиус</div>
					<p className="text-[17px] leading-[1.3]">
						Датчики отличаются малым размером. Еще одной особенностью является то, что они изменяют свой цвет при контакте с водой. В обычном состоянии датчик светится зеленым, нештатная ситуация заставляет его поменять цвет на красный.
					</p>
				</div>
			</div>
		</section>
	)
}