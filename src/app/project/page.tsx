import Header from "@/components/layout/Header"

import Showroom from "@/components/sections/common/Showroom"
import Footer from "@/components/layout/Footer"

import { routes } from "@/config/routes"


export const metadata = {
	title: routes.project.title
}

export default function ProjectPage() {
	return (
		<>
			<Header />

			<main>
				{/* +4 */}
				<Showroom />
			</main>

			<Footer />
		</>
	)
}