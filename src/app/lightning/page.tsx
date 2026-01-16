import Header from "@/components/layout/Header";
// 
import BodyImpact from "@/components/sections/Lightning/BodyImpact";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Умный свет'
}

export default function LightningPage() {
	return (
		<>
			<Header />
			<main>
				{/*  */}
				<BodyImpact></BodyImpact>
			</main>
			<Footer />
		</>
	);
} 