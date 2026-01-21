import Header from "@/components/layout/Header";
import CinemaHero from "@/components/sections/Cinema/CinemaHero";
// 
import Features from "@/components/sections/Features";
// 
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Мультимедиа'
}

export default function CinemaPage() {
	return (
		<>
			<Header />
			<main>
				<CinemaHero></CinemaHero>
				{/*  */}
				<Features title="Удобное управление" />
				{/*  */}
				{/*  */}
			</main>
			<Footer />
		</>
	);
} 