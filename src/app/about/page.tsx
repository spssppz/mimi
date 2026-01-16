import Header from "@/components/layout/Header";
// 
import Team from "@/components/sections/About/Team";
import Certificates from "@/components/sections/About/Certificates";
import Contacts from "@/components/sections/common/Contacts";
import Footer from "@/components/layout/Footer";


export const metadata = {
	title: 'О компании'
}

export default function AboutPage() {
	return (
		<>
			<Header />
			<main>
				{/*  */}
				<Team></Team>
				<Certificates></Certificates>
				<Contacts></Contacts>
			</main>
			<Footer />
		</>
	);
} 