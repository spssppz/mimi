import { Title } from "@/components/UI/Title";
import { RightArrowIcon } from "@/icons/RightArrowIcon";
import Image from "next/image";

export default function ServicesMontage() {
	return (
		<section className="pt-22.5 pb-22.5 lg:pb-30 relative">
			<div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white to-[#c4eafc]"></div>
			<div className="max-w-235.5 px-4 mx-auto relative">
				<div className="text-center mb-20 flex flex-col items-center">
					<Image
						src="/images/services-page/montage/top-decor.png"
						width={384}
						height={119}
						alt=""
						quality={95}
						className="max-w-full mb-15"
					/>
					<Title className="mb-6">Монтаж и настройка</Title>
					<div className="font-helvetica leading-[1.3] -tracking-[0.01em] text-brand-light-gray max-w-139 mx-auto">
						Система децентрализована, не имеет "центрального мозга", что позволяет поднять надежность системы на новый уровень.
					</div>
				</div>
				<ul className="grid md:grid-cols-2 gap-5">
					<li className="rounded-[20px] md:col-span-2 gap-10 bg-white md:min-h-125 flex flex-col-reverse md:flex-row items-center justify-between px-6 pt-6 md:pt-0 md:px-10 lg:px-20">
						<div className="w-54 lg:w-72.5 lg:flex-none">
							<Image
								src="/images/services-page/montage/1.png"
								width={291}
								height={527}
								alt=""
								quality={95}
								className="max-w-full"
							/>
						</div>
						<div className="leading-[1.3] flex-none md:w-90 -tracking-[0.01em]">
							<h3 className="lg:mb-6 font-medium mb-2.5 text-[22px] md:text-[26px] lg:text-[32px]">
								Щиты
							</h3>
							<div className="font-helvetica text-brand-light-gray">
								Система децентрализована, не имеет "центрального мозга", что позволяет поднять надежность системы на новый уровень.
							</div>
						</div>
					</li>
					<li className="rounded-[20px] flex flex-col-reverse md:block bg-white px-6 py-6 md:py-9.25 md:px-10 lg:px-15">
						<div className="md:mb-2.5 self-end md:self-stretch -mr-6 md:-mr-10 lg:-mr-15">
							<Image
								src="/images/services-page/montage/2.png"
								width={385}
								height={376}
								alt=""
								quality={95}
								className="max-w-full"
							/>
						</div>
						<div className="leading-[1.3] -tracking-[0.01em]">
							<h3 className="lg:mb-6 font-medium mb-2.5 text-[22px] md:text-[26px] lg:text-[32px]">
								Мультирум
							</h3>
							<div className="font-helvetica text-brand-light-gray">
								Система децентрализована, не имеет "центрального мозга", что позволяет поднять надежность системы на новый уровень.
							</div>
						</div>
					</li>
					<li className="rounded-[20px] bg-white px-6 py-6 md:px-10 lg:px-15 md:py-9.25 flex flex-col items-center md:items-stretch gap-2.5">
						<div className="leading-[1.3] -tracking-[0.01em]">
							<h3 className="lg:mb-6 font-medium mb-2.5 text-[22px] md:text-[26px] lg:text-[32px]">
								Оборудование
							</h3>
							<div className="font-helvetica text-brand-light-gray">
								Система децентрализована, не имеет "центрального мозга", что позволяет поднять надежность системы на новый уровень.
							</div>
						</div>
						<div>
							<Image
								src="/images/services-page/montage/3.png"
								width={325}
								height={376}
								alt=""
								quality={95}
								className="max-w-full"
							/>
						</div>
					</li>
					<li className="rounded-[20px] bg-white md:col-span-2 px-6 md:px-0 pt-5 md:pt-0 flex flex-col md:flex-row md:items-center gap-5">
						<div className="leading-[1.3] -tracking-[0.01em] md:pl-10 lg:pl-15 md:py-10">
							<h3 className="lg:mb-6 font-medium mb-2.5 text-[22px] md:text-[26px] lg:text-[32px]">
								Электрика
							</h3>
							<div className="font-helvetica mb-2.5 lg:mb-6 text-brand-light-gray">
								Система децентрализована, не имеет "центрального мозга", что позволяет поднять надежность системы на новый уровень.
							</div>
							<a href="#" className="-tracking-[0.01em] inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[15px] font-medium text-brand-blue group">
								Узнать больше про монтаж
								<RightArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
							</a>
						</div>
						<div className="flex-none w-[47.25%] hidden md:block relative aspect-430/500">
							<Image
								src="/images/services-page/montage/4.png"
								fill
								alt=""
								quality={95}
								className="object-cover"
							/>
						</div>
						<div className="w-full md:hidden relative aspect-334/351 -mr-6">
							<Image
								src="/images/services-page/montage/4-mob.png"
								fill
								alt=""
								quality={95}
								className="object-cover"
							/>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}