import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function ClimateHero() {
	return (
		<section className="pt-13 lg:pt-10 pb-22.5 bg-white">
			<div className="max-w-308 mx-auto px-4">
				<div className="mb-22.5 bg-[#f8f8f8] text-center relative overflow-hidden">
					<div className="hidden lg:block absolute top-0 right-0 w-94 aspect-376/444">
						<Image
							src="/images/climate-page/hero/dots.png"
							fill
							alt=""
						/>
					</div>
					<div className="lg:relative pt-10 px-4 mb-4.5">
						<Title className="mb-4">Климат-контроль.</Title>
						<div className="text-[17px] leading-tight tracking-[-0.01em] max-w-lg mx-auto">Система сама знает, когда включить кондиционер, а когда теплые полы. Влажность всегда будет в норме, показатели углекислого газа – не превысят критического значения.</div>
					</div>
					<Image
						src="/images/climate-page/hero/decor.png"
						alt=""
						className="hidden sm:block"
						width={1200}
						height={550}
					/>
					<div className="aspect-358/367 sm:hidden relative">
						<Image
							src="/images/climate-page/hero/decor-mob.png"
							alt=""
							fill
						/>
					</div>
				</div>
				<div className="font-helvetica font-bold text-[32px] text-[#acacac]"><span className="text-foreground">Правильный микроклимат в квартире благоприятно сказывается на здоровье</span>. Есть сотни исследований подтверждающих это. Но кроме этого вы и сами могли наблюдать, что в некоторых помещениях комфортно находиться, работать, спать. А из некоторых хочется всегда выйти проветриться.</div>
			</div>
		</section>
	);
}