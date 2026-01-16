import Header from "@/components/layout/Header";
// 
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Климат-контроль'
}

export default function ClimatePage() {
	return (
		<>
			<Header />
			<main>
				{/*  */}
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
} 