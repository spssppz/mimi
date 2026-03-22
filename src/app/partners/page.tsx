import Header from "@/components/layout/Header"

import Advantages from "@/components/sections/Advantages"
import Showroom from "@/components/sections/common/Showroom"
import Footer from "@/components/layout/Footer"

import { routes } from "@/config/routes"
import PartnersFeatures from "@/components/sections/Partners/PartnersFeatures"


export const metadata = {
	title: routes.partners.title
}


const featuresSlides = [
	{
		image: '/images/partners-page/features-slides/1.jpg',
		cap: 'Помощь.',
		descr: 'Помогаем в решении многих инженерных вопросов - подрядчики по отоплению, кондиционированию и другие получат еще один контролирующий орган в нашем лице.',
	},
	{
		image: '/images/partners-page/features-slides/2.jpg',
		cap: 'Оборудование.',
		descr: 'Комплексно подходим к выполнению работ и предлагаем на условиях сотрудничества дополнительное необходимое оборудование по партнерским ценам.',
	},
	{
		image: '/images/partners-page/features-slides/3.jpg',
		cap: 'Магазинам.',
		descr: 'У вас собственный магазин по продаже систем и устройств, позволяющих сделать жилье комфортным? Мы с удовольствием организуем вам поставку нашего оборудования.',
	},
	{
		cap: 'Монтажникам.',
		descr: 'Вы – компания, специализирующаяся на монтаже интеллектуальных систем и оборудования – мы с радостью предоставим вам наши устройства.',
	},
]

export default function PartnersPage() {
	return (
		<>
			<Header />

			<main>
				{/* +4 */}
				<PartnersFeatures
					title="Всем, кто «за» передовые технологии"
					slides={featuresSlides}
				/>
				<Advantages />
				<Showroom />
			</main>

			<Footer />
		</>
	)
}