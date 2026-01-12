import Header from "@/components/layout/Header";
import FAQ from "@/components/sections/FAQ/FAQ";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'FAQ'
}

export default function FAQPage() {
	return (
		<>
			<Header />
			<main>
				<FAQ></FAQ>
			</main>
			<Footer />
		</>
	);
} 