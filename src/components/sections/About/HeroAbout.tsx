import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function HeroAbout() {
	return (
		<section className="pt-15 md:pt-22.5 lg:pt-28 pb-22.5 md:pb-28 lg:pb-58.5">
			<div className="max-w-308 mx-auto px-4 flex gap-10 xl:gap-30">

				<div className="hidden -ml-9 px-3.5 lg:block relative w-82.5 shrink-0 grow-0 basis-82.5">
					<Image
						src='/images/faq/left-bg.png'
						alt="background image"
						fill
						className="object-cover"
					/>
					<div className="sticky top-10">
						<div className="relative top-10 aspect-386/468">
							<Image
								src="/images/about-hero/01.png"
								width={386}
								height={468}
								alt="default"
								className="absolute top-0 left-1/2 -translate-x-1/2 transition-opacity duration-500 ease-in-out opacity-100 scale-100 z-10"
							/>
						</div>
					</div>
				</div>
				<div className="xl:mr-24 flex-auto">
					<Title className="mb-8.5"><span className="text-[#00d0ff]">MiMi</span>Smart</Title>
					<div className="mb-8.5 font-helvetica text-[18px] lg:text-[20px] tracking-[-0.01em] space-y-8.5">
						<p>Крупнейший <span className="text-[#ce5941]">(ТОП-1)</span> российский производитель <br />премиальных систем умный дом.</p>
						<p className="relative">
							<div className="absolute top-0 -left-1 -right-1 h-full -z-1 bg-[#ffeba4]">
								<div className="absolute top-0 -left-0.5 w-0.5 h-7 bg-black">
									<span className="absolute bottom-full left-1/2 w-2 h-2 rounded-full bg-black -translate-x-1/2"></span>
								</div>
								<div className="absolute bottom-0 -right-0.5 w-0.5 h-7 bg-black">
									<span className="absolute top-full left-1/2 w-2 h-2 rounded-full bg-black -translate-x-1/2"></span>
								</div>
							</div>
							Система MiMiSmart начала свою историю в 2004 году, когда один из наших основателей делал ремонт в своем большом загородном доме.
						</p>
						<p>В проекте было множество групп освещения, кондиционеров, теплые полы, радиаторы. И управлять этим без единой, слаженной системы – очевидно невозможно.</p>
						<p>Так появилась система MiMiSmart.</p>
						<div className="rounded-2xl lg:rounded-[20px] overflow-hidden relative aspect-690/400">
							<Image
								src="/images/about-hero/main.jpg"
								fill
								alt=""
							/>
						</div>
						<p>С тех времен мы прошли долгий путь:</p>
					</div>
					<ul className="grid grid-cols-2 gap-6 md:gap-8.5 font-helvetica text-[15px] md:text-[16px] tracking-[-0.01em]">
						<li>
							<Image
								src="/images/about-hero/icons/1.svg"
								width={60}
								height={40}
								alt=""
								className="mb-4"
							/>
							<p>8 версий устройств</p>
						</li>
						<li>
							<Image
								src="/images/about-hero/icons/2.svg"
								width={60}
								height={40}
								alt=""
								className="mb-4"
							/>
							<p>Бесчисленное кол-во прошивок</p>
						</li>
						<li>
							<Image
								src="/images/about-hero/icons/3.svg"
								width={60}
								height={40}
								alt=""
								className="mb-4"
							/>
							<p>3 различных интерфейсов приложения</p>
						</li>
						<li>
							<Image
								src="/images/about-hero/icons/4.svg"
								width={60}
								height={40}
								alt=""
								className="mb-4"
							/>
							<p>40+ позиций - датчиков и устройств.</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
