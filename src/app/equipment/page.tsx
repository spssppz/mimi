import Header from "@/components/layout/Header";
import EquipmentHero from "@/components/sections/Equipment/EquipmentHero";
import EquipmentFeatures from "@/components/sections/Equipment/EquipmentFeatures";
import EquipmentControlls from "@/components/sections/Equipment/EquipmentControlls";
// 
import EquipmentReserve from "@/components/sections/Equipment/EquipmentReserve";
import EquipmentApp from "@/components/sections/Equipment/EquipmentApp";
import EquipmentCatalog from "@/components/sections/Equipment/EquipmentCatalog";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";
import { routes } from "@/config/routes";

export const metadata = {
	title: routes.equipment.title
}

export default function EquipmentPage() {
	return (
		<>
			<Header />
			<main>
				<EquipmentHero></EquipmentHero>
				<EquipmentFeatures></EquipmentFeatures>
				<EquipmentControlls></EquipmentControlls>
				{/*  */}
				<EquipmentReserve></EquipmentReserve>
				<EquipmentApp></EquipmentApp>
				<EquipmentCatalog></EquipmentCatalog>
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
} 