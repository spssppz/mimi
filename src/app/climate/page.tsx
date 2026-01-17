import Header from "@/components/layout/Header";
import ClimateHero from "@/components/sections/Climate/ClimateHero";
import ClimateFunctions from "@/components/sections/Climate/ClimateFunctions";
import ClimateFeatures from "@/components/sections/Climate/ClimateFeatures";
import Features from "@/components/sections/Features";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Климат-контроль'
}

export default function ClimatePage() {
	return (
		<>
			<Header />
			<main>
				<ClimateHero></ClimateHero>
				<ClimateFeatures></ClimateFeatures>
				<ClimateFunctions></ClimateFunctions>
				<Features title="Как управлять?" />
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
} 