
import Header from "@/components/layout/Header";
import ProjectorHero from "@/components/sections/Projector/ProjectorHero";
import ProjectorAdvantages from "@/components/sections/Projector/ProjectorAdvantages";
import ProjectorFlux from "@/components/sections/Projector/ProjectorFlux";
import ProjectorTypes from "@/components/sections/Projector/ProjectorTypes";
import Scripts from "@/components/sections/common/Scripts";
import Features from "@/components/sections/Features";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

import { routes } from "@/config/routes";


export const metadata = {
	title: routes.Projector.title
}

export default function ProjectorPage() {
	return (
		<>
			<Header />
			<main>
				<ProjectorHero></ProjectorHero>
				<ProjectorAdvantages></ProjectorAdvantages>
				<ProjectorFlux></ProjectorFlux>
				<ProjectorTypes></ProjectorTypes>
				<Scripts></Scripts>
				<Features title="Удобное управление" />
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
}