import { Button } from "@/components/UI/Button";
import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function PowerSupplyArchit() {
	return (
		<section className="pt-22.5 pb-30">
			<div className="max-w-235.5 px-4 mx-auto">
				<Title className="text-center mb-15">Архитектурные решения</Title>
				<ul className="grid md:grid-cols-2 gap-5">
					<li className="bg-white rounded-[20px] max-md:justify-between px-6 max-md:py-6 lg:px-5 min-h-125 md:gap-10 md:col-span-2 overflow-hidden flex max-md:flex-col-reverse items-center">
						<div className="relative md:grow-0 md:shrink-0 md:basis-138.75 w-[90%] md:w-auto aspect-1110/1000">
							<Image

								src="/images/power-supply-page/archit/1.png"
								fill
								alt=""
								className="object-cover"
							/>
						</div>
						<div className="font-semibold max-md:self-stretch text-[24px] md:text-[28px] lg:text-[32px] leading-loose -tracking-[0.01em] bg-linear-to-b from-foreground to-[rgba(81,96,118,0)] bg-clip-text text-transparent md:-ml-10">
							<p>ИБП</p>
							<p>Аккумуляторы</p>
							<p>Щиты.</p>
						</div>
					</li>
					<li className="bg-white relative rounded-[20px] px-6 lg:px-15 pt-6 lg:py-9.25 min-h-125 md:min-h-150 flex overflow-hidden md:items-end font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">
						<Image
							src="/images/power-supply-page/archit/2.jpg"
							fill
							alt=""
							className="object-cover"
						/>
						<div className="relative">Выделенные линии.</div>
					</li>
					<li className="bg-white relative rounded-[20px] px-6 lg:px-15 pt-6 lg:py-9.25 min-h-125 md:min-h-150 overflow-hidden font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">
						<Image
							src="/images/power-supply-page/archit/3.jpg"
							fill
							alt=""
							className="object-cover"
						/>
						<div className="relative">Время автономии.</div>
					</li>
				</ul>
			</div>
		</section>
	);
} 