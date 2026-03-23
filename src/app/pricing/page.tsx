import Header from "@/components/layout/Header"

import Showroom from "@/components/sections/common/Showroom"
import Footer from "@/components/layout/Footer"

import { routes } from "@/config/routes"


export const metadata = {
	title: routes.pricing.title
}

export default function PricingPage() {
	return (
		<>
			<Header />

			<main>
				{/* +2 */}
				<Showroom />
			</main>

			<Footer />
		</>
	)
}