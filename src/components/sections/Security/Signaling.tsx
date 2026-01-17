import { Title } from "@/components/UI/Title"
import { RightArrowIcon } from "@/icons/RightArrowIcon"
import Image from "next/image"

const items = [
	{
		id: 0,
		image: '/images/security-page/signaling/icons/1.svg',
		title: 'Зональная охрана.',
		description: 'Включите только охрану территории по периметру, когда находитесь дома.',
	},
	{
		id: 1,
		image: '/images/security-page/signaling/icons/1.svg',
		title: 'Разграничение уровней доступа',
		description: 'Обслуживающему персоналу выдаются отдельные доступы, не позволяющие отключать систему безопасности.',
	},
	{
		id: 2,
		image: '/images/security-page/signaling/icons/1.svg',
		title: '“Имитацией присутствия”',
		description: 'Активация на колонках лая собак, включение освещения в комнатах, блокировка дверей.',
	},
	{
		id: 3,
		image: '/images/security-page/signaling/icons/1.svg',
		title: 'Тревожная кнопка.',
		description: 'При реальной угрозе вы сможете вызвать соответствующие органы, нажав одну кнопку в приложении.',
	},
]
export default function Signaling() {
	return (
		<section className="py-27.5">
			<div className="max-w-235.5 mx-auto px-4 mb-20">
				<Title className="mb-6">Сигнализация</Title>
				<div className="mb-4 -tracking-[0.01em] text-[17px] leading-tight lg:max-w-143">Сигнализация в системе Умный дом реализуется за счет комплекса датчиков, которые покрывают всю охраняемую площадь.</div>
				<a href="#" className="mb-10 font-helvetica inline-flex items-center gap-1 -tracking-[0.01em] text-[15px] font-medium text-brand-blue group">
					Узнать больше
					<RightArrowIcon className="w-5 h-5"></RightArrowIcon>
				</a>
			</div>
			<div className="max-w-308 mx-auto px-4">
				<ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-5 gap-y-10.5 lg:gap-y-5">
					{items.map(item => (
						<li key={item.id} className="-tracking-[0.01em] flex flex-col items-center gap-4 text-center">
							<Image
								src={item.image}
								width={42}
								height={42}
								alt=""
							/>
							<div className="font-helvetica font-semibold ">{item.title}</div>
							<div className="text-[15px]">{item.description}</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
