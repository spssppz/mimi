import Header from "@/components/layout/Header";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Footer from "@/components/layout/Footer";
import { routes } from "@/config/routes";

export const metadata = {
	title: routes.portfolio.title
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