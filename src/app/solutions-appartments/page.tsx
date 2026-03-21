import Header from "@/components/layout/Header"
import SolutionsHero from "@/components/sections/SolutionsHero"
import VentilationControl from "@/components/sections/Solutions/VentilationControl"
import Capabilities from "@/components/sections/Capabilities"
import SolutionsCase from "@/components/sections/Solutions/SolutionsCaseAppartments"
import SystemCase from "@/components/sections/Solutions/SystemCase"
import Scripts from "@/components/sections/common/Scripts"
import Features from "@/components/sections/Features"
import Showroom from "@/components/sections/common/Showroom"
import Footer from "@/components/layout/Footer"

import { routes } from "@/config/routes"


export const metadata = {
	title: routes.solutionsAppartments.title
}

export default function solutionsAppartmentsPage() {
	return (
		<>
			<Header />

			<main>
				<SolutionsHero
					image="/images/solutions-page/hero-bg-appartments.jpg"
					title={
						<>
							<span className="text-[18px] md:text-[24px] lg:text-[28px]">
								Готовые решения
							</span>
							<br />
							В жилой комплекс.
						</>
					}
				/>
				<Capabilities />
				<VentilationControl />
				<SolutionsCase />
				<SystemCase
					title="Видео-доступ"
					text="Вызов на смартфон, превью с ближайших камер и открытие двери/калитки/шлагбаума из приложения."
					link="#"
					image="/images/solutions-page/system-case/2.jpg"
					imageWidth={910}
					imageHeight={540}
				/>
				<Scripts />
				<Features title="Удобное управление" />
				<Showroom />
			</main>

			<Footer />
		</>
	)
}