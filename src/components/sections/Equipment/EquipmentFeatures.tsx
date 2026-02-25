import { Title } from "@/components/UI/Title"
import { RightArrowIcon } from "@/icons/RightArrowIcon"
import Image from "next/image"

const cols = [
	{
		image: '/images/equipment-page/features/1.jpg',
		cap: 'Сбор статистики.',
		descr: 'Смотрите показания счетчиков в online-формате. ',
	},
	{
		image: '/images/equipment-page/features/2.jpg',
		cap: 'Индивидуальная настройка.',
		descr: 'В любой момент Вы можете самостоятельно изменять настройки системы. Например, задайте время, когда вы возвращаетесь с работы домой, чтоб к этому времени система проветрила квартиру.',
	},
	{
		image: '/images/equipment-page/features/3.jpg',
		cap: 'Масштабируемость.',
		descr: 'Расширять возможности системы легко. Вы всегда можете дополнить и расширить возможности умного дома, подключая новые удобные функции.',
	},
	{
		image: '/images/equipment-page/features/4.jpg',
		cap: 'Разграничение прав доступа.',
		descr: 'Ограничьте круг пользователей, допущенных к просмотру управления отдельными элементами.',
	},
]

export default function EquipmentFeatures() {
	return (
		<section className="pt-22.5 lg:pt-30 pb-22.5">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-6 md:mb-8 lg:mb-10">Возможности умного дома</Title>
				<ul className="gap-4 lg:gap-5 flex flex-wrap">
					{cols.map((col, i) => {
						// На десктопе 2-й и 3-й li будут 70%
						const widthClass = (i === 1 || i === 2) ? 'lg:w-[65%]' : 'lg:w-[33%]'
						return (
							<li
								key={i}
								className={`p-5 flex-auto lg:p-6 relative min-h-89.5 rounded-2xl lg:rounded-[20px] overflow-hidden lg:min-h-100 flex flex-col justify-end ${widthClass}`}
							>
								<Image src={col.image} quality={95} fill alt="" />
								<h3 className="relative mb-1 font-medium text-white leading-tight">{col.cap}</h3>
								<div className={`${i === 0 ? 'max-w-[80%]' : ''} ${i === 2 ? 'max-w-[85%]' : ''}  relative text-[15px] text-[#95979e] font-helvetica -tracking-[0.2px]`}>{col.descr}</div>
							</li>
						)
					})}
				</ul>

			</div>
		</section >
	)
}
