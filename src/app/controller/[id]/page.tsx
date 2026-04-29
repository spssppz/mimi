import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ControllerCard from "@/components/sections/ControllerCard/ControllerCard"
import { routes } from "@/config/routes"
import { getControllerById } from "@/lib/controllers"
import { notFound } from "next/navigation"

export const metadata = {
	title: routes.controller.title
}

export default async function ControllerDetailPage({ params }: { params: { id: string } }) {
	const controller = await getControllerById(params.id)

	if (!controller) {
		notFound()
	}

	return (
		<>
			<Header />
			<main>
				<ControllerCard {...controller} />
			</main>
			<Footer />
		</>
	)
}
