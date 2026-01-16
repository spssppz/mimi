import Header from "@/components/layout/Header";
// 
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
				<Contacts></Contacts>
			</main>
			<Footer />
		</>
	);
} 