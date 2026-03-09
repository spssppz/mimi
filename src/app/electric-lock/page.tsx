import Header from "@/components/layout/Header";
import ElectricLockHero from "@/components/sections/ElectricLock/ElectricLockHero";
import ElectricLockAccess from "@/components/sections/ElectricLock/ElectricLockAccess";
import ElectricLockIntegration from "@/components/sections/ElectricLock/ElectricLockIntegration";
import Scripts from "@/components/sections/common/Scripts";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

import { routes } from "@/config/routes";


export const metadata = {
	title: routes.electricLock.title
}

export default function ElectricLockPage() {
	return (
		<>
			<Header />
			<main>
				<ElectricLockHero></ElectricLockHero>
				<ElectricLockAccess></ElectricLockAccess>
				<ElectricLockIntegration></ElectricLockIntegration>
				<Scripts></Scripts>
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
}