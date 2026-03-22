import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function PALHero() {
	return (
		<section className="min-h-198 pb-22.5 max-md:pt-10 lg:min-h-205 bg-linear-to-b from-[#e5eeff] to-background">
			<div className="max-w-308 px-4 mx-auto flex flex-col items-center text-center">
				<div className="-mb-10 max-sm:-mx-10">

					<Image
						src="/images/pal-page/hero-decor.png"
						width={467}
						height={402}
						alt=""
					/>
				</div>
				<Title className="mb-6 relative">Защита от протечек</Title>
				<div className="max-w-xl font-helvetica text-[17px] leading-[1.3] -tracking-[0.01em]">
					Открывайте и закрывайте ворота с помощью специальных устройств, подключенных к центральной системе управления умного дома.
				</div>
			</div>
		</section>
	)
}