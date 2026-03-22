import ArrowLink from "@/components/UI/ArrowLink";
import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function PartnersForDealer() {
	return (
		<section className="pt-30 pb-15 overflow-hidden">
			<div className="max-w-308 px-4 mx-auto">
				<div className="mb-10 flex flex-col items-center text-center max-w-217 mx-auto">
					<div className="font-bold text-[24px] -tracking-[0.01em] text-[#e27500]">Предлагаем сотрудничество</div>
					<Title className="mb-10 lg:mb-6">Дилерам</Title>
					<div className="font-helvetica text-[17px] lg:text-[19px] leading-[1.3] -tracking-[0.01em] text-brand-gray space-y-[1em]">
						<p>Полный пакет инструментов и инструкций.</p>
						<p>Для региональных дилеров мы предлагаем полный комплект необходимых маркетинговых материалов, инструментов продаж, аналитики и обработки, помощь в запуске умного дома и поддержку ваших клиентов.</p>
					</div>
				</div>
				<div className="flex max-lg:flex-col lg:items-center gap-10 xl:pr-20 justify-between">
					<div className="-rotate-12 -ml-30 lg:-ml-[17.8%] relative aspect-916/709 grow-0 shrink-0 w-120 lg:w-[76.3%]">
						<Image
							src="/images/partners-page/for-dealer/decor.png"
							fill
							alt=""
						/>
					</div>
					<div className="lg:max-w-86.75">
						<Image
							src="/images/partners-page/for-dealer/icon.svg"
							width={54}
							height={54}
							alt=""
							className="mb-6"
						/>
						<p className="mb-4 font-helvetica text-[17px] leading-[1.4] -tracking-[0.01em] text-brand-gray">Для дилеров MiMiSmart выстроена прозрачная и предсказуемая модель сотрудничества. Мы предоставляем инженерную платформу, готовые решения и поддержку производителя, что позволяет сосредоточиться на работе с клиентами и реализации проектов, не беря на себя риски разработки, тестирования и сопровождения системы.</p>
						<ArrowLink href="#">Подробнее дилерам</ArrowLink>
					</div>
				</div>
			</div>
		</section>
	)
}