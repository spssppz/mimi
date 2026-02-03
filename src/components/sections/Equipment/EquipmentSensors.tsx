import { RightArrowIcon } from "@/icons/RightArrowIcon"
import Image from "next/image"

const cols = [
	{
		icon: '/images/equipment-page/sensors/1.svg',
		iconWidth: 40,
		iconHeight: 40,
		text: 'Датчики движения',
	},
	{
		icon: '/images/equipment-page/sensors/2.svg',
		iconWidth: 40,
		iconHeight: 40,
		text: 'Датчики протечки воды',
	},
	{
		icon: '/images/equipment-page/sensors/3.svg',
		iconWidth: 60,
		iconHeight: 40,
		text: 'Датчики влажности воздуха',
	},
	{
		icon: '/images/equipment-page/sensors/4.svg',
		iconWidth: 40,
		iconHeight: 40,
		text: 'Датчики утечки метана',
	},
	{
		icon: '/images/equipment-page/sensors/5.svg',
		iconWidth: 40,
		iconHeight: 40,
		text: 'Датчики уровня освещенности',
	},
	{
		icon: '/images/equipment-page/sensors/6.svg',
		iconWidth: 40,
		iconHeight: 40,
		text: 'Датчики температуры теплого пола',
	},
]

export default function EquipmentSensors() {
	return (
		<section className="py-22.5 lg:py-30 bg-foreground">
			<div className="max-w-235.5 mx-auto px-4 -tracking-[0.01em]">
				<div className="mb-20 md:mb-25 lg:mb-30">
					<div className="text-white font-helvetica font-bold text-[18px] md:text-[24px] lg:text-[32px] leading-tight">Датчики</div>
					<h2 className="mb-6 font-helvetica tracking-0 font-bold text-[86px] md:text-[100px] lg:text-[140px] xl:text-[220px] bg-[linear-gradient(180deg,#fff_0%,#516076_100%)] bg-clip-text text-transparent leading-tight flex flex-col">
						Уют
						<span className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px]">в каждой детали вашего дома.</span>
					</h2>
					<div className="text-[17px] leading-tight max-w-143 mb-4 text-white">
						Умный Дом MiMiSmart ведет статистику и накапливает показания всех датчиков в системе ежесекундно. Все показания вы контролируете в online режиме с приложения.
					</div>
					<a href="#" className="inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[15px] font-medium text-brand-blue group">
						Узнать больше о датчиках
						<RightArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
					</a>
				</div>
				<ul className="text-white -tracking-[0.01em] grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 lg:gap-x-8.5 lg:gap-y-8.5 ">
					{cols.map((col, i) => (
						<li>
							<Image
								src={col.icon}
								width={col.iconWidth}
								height={col.iconHeight}
								alt=""
								className="mb-4"
							/>
							<p>{col.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
