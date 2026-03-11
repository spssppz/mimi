
import Header from "@/components/layout/Header";
import CatalogHero from "@/components/sections/Catalog/CatalogHero";
import CatalogItems from "@/components/sections/Catalog/CatalogItems";
import Footer from "@/components/layout/Footer";

import { routes } from "@/config/routes";


export const metadata = {
	title: routes.Catalog.title
}

export default function CatalogPage() {
	return (
		<>
			<Header />
			<main>
				<CatalogHero></CatalogHero>
				<CatalogItems></CatalogItems>
			</main>
			<Footer />
		</>
	);
}