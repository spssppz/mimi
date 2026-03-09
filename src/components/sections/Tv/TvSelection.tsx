import { Button } from "@/components/UI/Button";
import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function TvSelection() {
	return (
		<section className="py-22.5">
			<div className="max-w-235.5 px-4 mx-auto">
				<Title className="mb-10 text-center">Подбор и&nbsp;установка</Title>
				<ul className="grid md:grid-cols-2 gap-5">
					<li className="min-h-100 md:min-h-125 overflow-hidden relative rounded-[20px] bg-white md:col-span-2 font-semibold text-[32px] leading-[1.3] px-15 py-9.25 -tracking-[0.01em]">
						<Image
							fill
							src="/images/tv-page/selection/1.jpg"
							alt=""
							className="object-cover"
							quality={95}
						/>
					</li>
					<li className="min-h-100 md:min-h-150 overflow-hidden relative rounded-[20px] bg-white font-semibold text-[22px] md:text[26px] lg:text-[32px] leading-[1.3] px-6 md:px-10 lg:px-15 py-9.25 -tracking-[0.01em] flex items-end">
						<Image
							fill
							src="/images/tv-page/selection/2.jpg"
							alt=""
							className="object-cover"
							quality={95}
						/>
						<div className="relative">
							Интеграция <br />
							со звуком.
						</div>
					</li>
					<li className="min-h-100 md:min-h-150 overflow-hidden relative rounded-[20px] bg-white font-semibold text-[22px] md:text[26px] lg:text-[32px] leading-[1.3] px-6 md:px-10 lg:px-15 py-9.25 -tracking-[0.01em]">
						<Image
							fill
							src="/images/tv-page/selection/3.jpg"
							alt=""
							className="object-cover"
							quality={95}
						/>
						<div className="relative">
							Точная <br />
							передача цветов.
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}