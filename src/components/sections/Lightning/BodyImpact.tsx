import { Title } from "@/components/UI/Title"
import { BodyImpactList } from "@/data/lightning"
import Image from "next/image"


export default function BodyImpact() {
	return (
		<section className="pb-22.5 lg:pt-15 pt-11.25">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-10">Влияние на организм</Title>
				<ul className="grid lg:grid-cols-3 grid-cols-2 gap-3 md:gap-4 lg:gap-5">
					{BodyImpactList.map(item => (
						<li key={item.id} className="bg-white rounded-[20px] px-4 py-8.5 flex flex-col items-center justify-center text-center gap-5">
							<div className="relative w-13.5 h-13.5 lg:w-16 lg:h-16">
								<Image
									src={item.icon}
									alt=""
									fill
								/>
							</div>
							<p className="font-semibold text-[16px] md:text-[18px] lg:text-[20px] -tracking-[0.01em]">{item.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
