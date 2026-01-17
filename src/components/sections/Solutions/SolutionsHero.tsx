import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function SolutionsHero() {
	return (
		<section className="pt-15 pb-22.5 lg:pb-0">
			<div className="mb-30 lg:mb-5">
				<div className="max-w-248 mx-auto px-4">
					<Title className="mb-4 lg:mb-2">Готовые решения</Title>
					<div className="text-[17px] leading-snug tracking-[-0.01em] md:max-w-115 mb-10 lg:mb-8">Настоящий умный дом - это система слаженного автоматизированного управления всеми инженерными системами дома</div>
					<div className="relative aspect-939/639">
						<Image
							src="/images/solutions-page/hero/1.png"
							fill
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="lg:py-30 lg:relative">
				<Image
					src="/images/solutions-page/hero/bg.png"
					fill
					alt=""
					className="object-cover hidden lg:block"
				/>
				<div className="relative max-w-248 mx-auto px-4 tracking-[-0.01em]">
					<h3 className="mb-4 font-bold text-[24px] md:text-[28px] lg:text-[32px]">В современном доме действительно нужна централизованная система управления умный дом, которая не только принесет комфорт и уют.</h3>
					<div className="mb-10 lg:mb-38 text-[17px] leading-tight md:max-w-115">Настоящий умный дом - это система слаженного автоматизированного управления всеми инженерными системами дома</div>
					<ul className="grid md:grid-cols-2 gap-10 text-[15px] lg:text-[16px]">
						<li className="max-w-88">
							<Image
								src="/images/about-hero/icons/1.svg"
								width={60}
								height={40}
								alt=""
								className="mb-4"
							/>
							<p>
								Соединяет освещение, климат, мультимедиа и безопасность в единую логику
							</p>
						</li>
						<li className="tracking-[-0.01em] max-w-88">
							<Image
								src="/images/about-hero/icons/2.svg"
								width={60}
								height={40}
								alt=""
								className="mb-4"
							/>
							<p>
								Автоматизирует рутину, чтобы дом подстраивался под вас
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}