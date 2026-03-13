import { Title } from "@/components/UI/Title";
import Image from "next/image";

const cols = [
	{
		image: '/images/himidity-page/types/1.jpg',
		cap: 'Центральное.',
	},
	{
		image: '/images/himidity-page/types/2.jpg',
		cap: 'Форсуночные решения.',
	},
]


export default function HimidityTypes() {
	return (
		<section className="py-22.5 bg-white">
			<div className="max-w-308 px-4 mx-auto relative">
				<Title className="mb-10">Типы систем</Title>
				<ul className="grid md:grid-cols-2 gap-5">
					{cols.map((col, i) => (
						<li key={i} className="relative rounded-[20px] overflow-hidden px-6 py-6 lg:px-15 lg:py-9.25 font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[1.3] -tracking-[0.01em] flex items-end aspect-590/600">
							<Image
								src={col.image}
								fill
								alt={col.cap}
								className="object-cover"
							/>
							<h3 className="relative">{col.cap}</h3>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}