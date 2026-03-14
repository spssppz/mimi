
import Header from "@/components/layout/Header";
import WindowBlindHero from "@/components/sections/WindowBlind/WindowBlindHero";
import WindowBlindEngine from "@/components/sections/WindowBlind/WindowBlindEngine";
import ElectricCurtainsTypes from "@/components/sections/ElectricCurtains/ElectricCurtainsTypes";
import ElectricCurtainsQuiet from "@/components/sections/ElectricCurtains/ElectricCurtainsQuiet";
import Scripts from "@/components/sections/common/Scripts";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

import { routes } from "@/config/routes";


export const metadata = {
	title: routes.WindowBlind.title
}

export default function WindowBlindPage() {
	return (
		<>
			<Header />
			<main>
				<WindowBlindHero></WindowBlindHero>
				<ElectricCurtainsTypes></ElectricCurtainsTypes>
				<WindowBlindEngine></WindowBlindEngine>
				<ElectricCurtainsQuiet></ElectricCurtainsQuiet>
				<Scripts></Scripts>
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
}