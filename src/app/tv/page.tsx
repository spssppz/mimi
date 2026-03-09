
import Header from "@/components/layout/Header";
import TvHero from "@/components/sections/Tv/TvHero";
import TvSelection from "@/components/sections/Tv/TvSelection";
import TvDiagonal from "@/components/sections/Tv/TvDiagonal";
import TvWiring from "@/components/sections/Tv/TvWiring";
import Scripts from "@/components/sections/common/Scripts";
import Features from "@/components/sections/Features";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

import { routes } from "@/config/routes";


export const metadata = {
	title: routes.Tv.title
}

export default function TvPage() {
	return (
		<>
			<Header />
			<main>
				<TvHero></TvHero>
				<TvSelection></TvSelection>
				<TvDiagonal></TvDiagonal>
				<TvWiring></TvWiring>
				<Scripts></Scripts>
				<Features title="Удобное управление" />
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
}