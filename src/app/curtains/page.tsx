import Header from "@/components/layout/Header";
import CurtainsHero from "@/components/sections/Curtains/CurtainsHero";
import CurtainsText from "@/components/sections/Curtains/CurtainsText";
import CurtainsTypes from "@/components/sections/Curtains/CurtainsTypes";
import CurtainsTabs from "@/components/sections/Curtains/CurtainsTabs";
import CurtainsScripts from "@/components/sections/Curtains/CurtainsScripts";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Электрошторы'
}

export default function CurtainsPage() {
	return (
		<>
			<Header />
			<main>
				<CurtainsHero></CurtainsHero>
				<CurtainsText></CurtainsText>
				<CurtainsTypes></CurtainsTypes>
				<CurtainsTabs></CurtainsTabs>
				<CurtainsScripts></CurtainsScripts>
				<Features title="Как управлять шторами?" />
			</main>
			<Footer />
		</>
	);
} 