import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function GatesHero() {
	return (
		<section className="relative max-md:py-15 sm:overflow-hidden min-h-198 md:min-h-215 md:flex md:items-center">
			<div className="max-sm:hidden w-300 lg:w-360 aspect-1440/971 absolute -t-10 -translate-x-1/2 left-1/2">
				<Image
					src="/images/gates-page/hero-decor.png"
					fill
					alt=""
				/>
			</div>
			<Image
				src="/images/gates-page/hero-decor-mob.png"
				fill
				alt=""
				className="object-cover sm:hidden"
			/>
			<div className="max-w-235.5 px-4 mx-auto flex flex-col items-center text-center relative md:w-full">
				<Title className="mb-4 xl:text-[84px]">Ворота</Title>
				<div className="max-w-113 text-[17px] leading-[1.3] -tracking-[0.01em] font-helvetica">Открывайте и закрывайте ворота с помощью специальных устройств, подключенных к центральной системе управления умного дома.</div>
			</div>
		</section>
	)
}