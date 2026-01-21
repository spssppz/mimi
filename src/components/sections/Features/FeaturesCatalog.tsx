import { Title } from "@/components/UI/Title";
import { RightArrowIcon } from "@/icons/RightArrowIcon";
import Image from "next/image";

const catalog = [
	{
		icon: '/images/features-page/catalog/1.png',
		iconWidth: 75,
		iconHeight: 64,
		description: 'Освещение',
	},
	{
		icon: '/images/features-page/catalog/2.png',
		iconWidth: 63,
		iconHeight: 64,
		description: 'Климат контроль',
	},
	{
		icon: '/images/features-page/catalog/3.png',
		iconWidth: 78,
		iconHeight: 64,
		description: 'Мультимедиа',
	},
	{
		icon: '/images/features-page/catalog/4.png',
		iconWidth: 75,
		iconHeight: 64,
		description: 'Безопасность',
	},
	{
		icon: '/images/features-page/catalog/5.png',
		iconWidth: 91,
		iconHeight: 64,
		description: 'Электрокарнизы',
	},
	{
		icon: '/images/features-page/catalog/6.png',
		iconWidth: 64,
		iconHeight: 64,
		description: 'Управление розетками',
	},
]

export default function FeaturesCatalog() {
	return (
		<section className="pt-30 pb-22.5 lg:pb-11.25">
			<div className="max-w-308 mx-auto px-4">
				<div className="mb-10 flex lg:flex-row flex-col gap-10 lg:items-end lg:justify-between">
					<Title>Функционал</Title>
					<ul className="space-y-6 lg:space-y-4">
						<li className="flex items-center gap-3">
							<Image
								src="/images/features-page/catalog/icon-1.png"
								width={34}
								height={34}
								alt=""
							/>
							<div className="leading-tight">
								<div className="mb-0.5 font-semibold text-[15px] -tracking-[0.01em]">Нужна консультация по умному дому?</div>
								<a href="#" className="inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[14px] text-brand-blue group -tracking-[0.01em]">
									Записаться
									<RightArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"></RightArrowIcon>
								</a>
							</div>
						</li>
						<li className="flex items-center gap-3">
							<Image
								src="/images/features-page/catalog/icon-2.svg"
								width={34}
								height={34}
								alt=""
							/>
							<div className="leading-tight">
								<div className="mb-0.5 font-semibold text-[15px] -tracking-[0.01em]">Посетите наш Шоурум</div>
								<a href="#" className="inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[14px] text-brand-blue group -tracking-[0.01em]">
									Записаться
									<RightArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"></RightArrowIcon>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<ul className="grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
					{catalog.map((item, i) => (
						<li key={i} className="flex aspect-square lg:aspect-auto lg:min-h-47.5 rounded-xl bg-white p-2 lg:p-3 flex-col items-center justify-center gap-2.5 font-medium text-[15px] -tracking-[0.01em] text-center">
							<Image
								src={item.icon}
								width={item.iconWidth}
								height={item.iconHeight}
								alt={item.description}
							/>
							<a href="">{item.description}</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}