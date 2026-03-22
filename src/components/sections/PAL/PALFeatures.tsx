import { Title } from "@/components/UI/Title";
import Image from "next/image";
import 'swiper/css'

export type Col = {
	image?: string
	cap: string
	descr: string
}

type Props = {
	title: string
	cols: Col[]
}

export default function PALFeatures({ title, cols }: Props) {
	return (
		<section className="py-22.5">
			<div className="max-w-308 px-4 mx-auto">
				<Title className="mb-10 lg:max-w-200">{title}</Title>
				<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					{cols.map((col, i) => (
						<li key={i} className="p-6 bg-white flex flex-col justify-end rounded-[20px] overflow-hidden relative aspect-385/540">
							{col.image && (
								<Image
									fill
									alt=""
									src={col.image}
									className="object-cover"
									quality={95}
								/>
							)}
							<h3 className={`font-medium text-[17px] relative`}>{col.cap}</h3>
							<div className={`font-helvetica text-[15px] relative`}>{col.descr}</div>

						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
