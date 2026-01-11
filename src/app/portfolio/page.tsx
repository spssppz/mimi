import Header from "@/components/layout/Header";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Проекты'
}

export default function AboutPage() {
	return (
		<>
			<Header />
			<main>
				<Portfolio></Portfolio>
			</main>
			<Footer />
		</>
	);
} 