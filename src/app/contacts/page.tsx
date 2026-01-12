import Header from "@/components/layout/Header";
import Contacts from "@/components/sections/common/Contacts";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Контакты'
}

export default function ContactsPage() {
	return (
		<>
			<Header />
			<main>
				<Contacts></Contacts>
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
} 