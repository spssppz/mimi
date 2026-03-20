import Header from "@/components/layout/Header"
// 
import SmartSwitchesLogic from "@/components/sections/SmartSwitches/SmartSwitchesLogic"
import Scripts from "@/components/sections/common/Scripts"
import Showroom from "@/components/sections/common/Showroom"
import Footer from "@/components/layout/Footer"
import { routes } from "@/config/routes"


export const metadata = {
	title: routes.smartSwitches.title
}

export default function smartSwitchesPage() {
	return (
		<>
			<Header />

			<main>
				{/* +2 */}
				{/* dev-20 */}
				<SmartSwitchesLogic />
				<Scripts />
				<Showroom />
			</main>

			<Footer />
		</>
	)
}