import Header from "@/components/layout/Header";
// 
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
				{/*  */}
				<Improvement></Improvement>
				<Contacts></Contacts>
			</main>
			<Footer />
		</>
	);
} 