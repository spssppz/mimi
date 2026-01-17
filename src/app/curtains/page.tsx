import Header from "@/components/layout/Header";
import CurtainsHero from "@/components/sections/Curtains/CurtainsHero";
import CurtainsText from "@/components/sections/Curtains/CurtainsText";
import CurtainsTypes from "@/components/sections/Curtains/CurtainsTypes";
// 
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
				{/*  */}
				{/*  */}
				<Features title="Как управлять шторами?" />
			</main>
			<Footer />
		</>
	);
} 