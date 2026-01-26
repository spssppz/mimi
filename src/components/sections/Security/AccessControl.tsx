import { RightArrowIcon } from "@/icons/RightArrowIcon"
import Image from "next/image"

const cols = [
	{
		icon: '/images/security-page/smart-sockets/icons/1.svg',
		iconWidth: 42,
		iconHeight: 42,
		title: 'Управление электрозамком с помощью приложения',
		description: 'Если к вам пришли гости, а вас еще нет дома, вы можете посмотреть по камерам видеонаблюдения кто пришел.',
	},
	{
		icon: '/images/security-page/smart-sockets/icons/2.svg',
		iconWidth: 41,
		iconHeight: 41,
		title: 'Открытие замка по отпечатку пальца или face id',
		description: 'Разблокировка квартиры по отпечатку биометрии – удобное решение, которое немного улучшит качество жизни.',
	},
	{
		icon: '/images/security-page/smart-sockets/icons/3.svg',
		iconWidth: 42,
		iconHeight: 42,
		title: 'Открытие замка по паролю',
		description: 'На случай, когда нет возможности открыть дверь ключем или отпечатком пальца.',
	},
	{
		icon: '/images/security-page/smart-sockets/icons/4.svg',
		iconWidth: 49,
		iconHeight: 42,
		title: 'Единоразовый код',
		description: 'Может пригодится, когда вы пригласили няню, но нет возможности дождаться ее дома.',
	},
]
export default function AccessControl() {
	return (
		<section className="py-27.5 md:py-32 lg:py-35 bg-foreground relative overflow-hidden">
			<div className="max-w-235.5 mx-auto px-4">

			</div>
		</section>
	)
}
