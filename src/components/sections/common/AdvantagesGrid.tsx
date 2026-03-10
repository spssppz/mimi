"use client"

import Image from "next/image";
import { Title } from "@/components/UI/Title";


type AdvantageItem = {
	image: string
	cap: string
	descr: string
	theme: string
}

type Props = {
	title: string
	items: AdvantageItem[]
}


export default function AdvantagesGrid({ title, items }: Props) {
	return (
		<section className="pt-30 pb-22.5">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-4 md:mb-10">{title}</Title>
				<ul className="grid sm:grid-cols-2 lg:flex gap-4 sm:gap-5 flex-wrap relative">
					<li className="shadow-[0_1px_2px_0_rgba(0,0,0,0.06),0_1px_3px_0_rgba(0,0,0,0.1)] tracking-[-0.01em] lg:w-[32%] p-6 min-h-65 rounded-[20px] bg-[#d8d8d8] overflow-hidden relative">
						<Image
							src={items[0].image}
							quality={95}
							alt=""
							fill
							className="object-cover"
						/>
						<h3 className={`relative mb-1 font-medium text-[16px] -mr-3 md:mr-0 ${items[0].theme === 'light' ? 'text-white' : ''}`}>{items[0].cap}</h3>
						<p className={`relative font-helvetica text-[15px] ${items[0].theme === 'light' ? 'text-[#95979e]' : 'text-brand-gray'}`}>
							{items[0].descr}
						</p>
					</li>
					<li className="lg:w-[42.75%] tracking-[-0.01em] p-6 min-h-65 rounded-[20px] bg-[#0f1015] overflow-hidden relative">
						<Image
							src={items[1].image}
							quality={95}
							alt=""
							fill
							className="object-cover"
						/>
						<h3 className={`relative mb-1 font-medium text-[16px] ${items[1].theme === 'light' ? 'text-white' : ''}`}>{items[1].cap}</h3>
						<p className={`relative font-helvetica max-w-[90%] text-[15px] ${items[1].theme === 'light' ? 'text-[#95979e]' : 'text-brand-gray'}`}>
							{items[1].descr}
						</p>
					</li>
					<li className="hidden xl:block lg:w-[21.75%] min-h-65 relative">

						<Image
							src="/images/advantages/decor-1.svg"
							alt=""
							fill
							className="object-cover"
						/>
					</li>
					<li className="lg:ml-auto lg:w-[44.8%] tracking-[-0.01em] p-6 min-h-65 rounded-[20px] bg-[#0f1015] overflow-hidden relative z-10">
						<Image
							src={items[2].image}
							quality={95}
							alt=""
							fill
							className="object-cover"
						/>
						<h3 className={`relative mb-1 font-medium text-[16px] ${items[2].theme === 'light' ? 'text-white' : ''}`}>{items[2].cap}</h3>
						<p className={`relative max-w-[71%] font-helvetica text-[15px] ${items[2].theme === 'light' ? 'text-[#95979e]' : 'text-brand-gray'}`}>
							{items[2].descr}
						</p>
					</li>
					<li className="lg:w-[32.1%] tracking-[-0.01em] p-6 min-h-65 rounded-[20px] bg-[#d8d8d8] overflow-hidden relative">
						<Image
							src={items[3].image}
							quality={95}
							alt=""
							fill
							className="object-cover"
						/>
						<h3 className={`relative mb-1 font-medium text-[16px] ${items[3].theme === 'light' ? 'text-white' : ''}`}>{items[3].cap}</h3>
						<p className={`${items[0].theme === 'light' ? 'text-[#95979e]' : 'text-brand-gray'} relative font-helvetica text-[15px]`}>
							{items[3].descr}
						</p>
					</li>
					<li className="aspect-285/327 absolute w-[23.8%] hidden lg:block -left-7.5 top-65">
						<Image src="/images/advantages/decor-2.png" quality={95} alt="background" fill className="object-cover" />
					</li>
					<li className="aspect-390/314 lg:hidden relative -mx-4 -mt-4">
						<Image src="/images/advantages/decor-3.png" quality={95} alt="background" fill className="object-cover" />
					</li>
				</ul>
			</div>
		</section>
	);
};
