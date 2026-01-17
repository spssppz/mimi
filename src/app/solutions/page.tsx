import Header from "@/components/layout/Header";
import SolutionsHero from "@/components/sections/Solutions/SolutionsHero";
import Improvement from "@/components/sections/Solutions/Improvement";
import Contacts from "@/components/sections/common/Contacts";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Готовые решения'
}

export default function SolutionsPage() {
	return (
		<>
			<Header />
			<main>
				<SolutionsHero></SolutionsHero>
				<Improvement></Improvement>
				<Contacts></Contacts>
			</main>
			<Footer />
		</>
	);
} 