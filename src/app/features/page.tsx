import Header from "@/components/layout/Header";
// 
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Функционал'
}

export default function FeaturesPage() {
	return (
		<>
			<Header />
			<main>
				{/*  */}
				<Features title="Удобное управление?" />
			</main>
			<Footer />
		</>
	);
} 