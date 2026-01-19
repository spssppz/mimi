import Header from "@/components/layout/Header";
// 
import EquipmentApp from "@/components/sections/Equipment/EquipmentApp";
import EquipmentCatalog from "@/components/sections/Equipment/EquipmentCatalog";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Оборудование'
}

export default function EquipmentPage() {
	return (
		<>
			<Header />
			<main>
				{/*  */}
				<EquipmentApp></EquipmentApp>
				<EquipmentCatalog></EquipmentCatalog>
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
} 