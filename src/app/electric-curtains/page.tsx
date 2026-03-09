import Header from "@/components/layout/Header";
import ElectricCurtainsHero from "@/components/sections/ElectricCurtains/ElectricCurtainsHero";
import ElectricCurtainsTypes from "@/components/sections/ElectricCurtains/ElectricCurtainsTypes";
import ElectricCurtainsPositioning from "@/components/sections/ElectricCurtains/ElectricCurtainsPositioning";
import ElectricCurtainsEngine from "@/components/sections/ElectricCurtains/ElectricCurtainsEngine";
import ElectricCurtainsQuiet from "@/components/sections/ElectricCurtains/ElectricCurtainsQuiet";
import Scripts from "@/components/sections/common/Scripts";
import Features from "@/components/sections/Features";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

import { routes } from "@/config/routes";


export const metadata = {
	title: routes.ElectricCurtains.title
}

export default function ElectricCurtainsPage() {
	return (
		<>
			<Header />
			<main>
				<ElectricCurtainsHero></ElectricCurtainsHero>
				<ElectricCurtainsTypes></ElectricCurtainsTypes>
				<ElectricCurtainsPositioning></ElectricCurtainsPositioning>
				<ElectricCurtainsEngine></ElectricCurtainsEngine>
				<ElectricCurtainsQuiet></ElectricCurtainsQuiet>
				<Scripts></Scripts>
				<Features title="Удобное управление" />
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
}