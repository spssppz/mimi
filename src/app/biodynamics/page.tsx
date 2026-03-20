import Header from "@/components/layout/Header"
import OtherArticles from "@/components/sections/Article/OtherArticles"
import Footer from "@/components/layout/Footer"
import { routes } from "@/config/routes"
import Image from "next/image"
import { contacts } from "@/config/contacts"
import Link from "next/link"
import { LikeIcon } from "@/icons/LikeIcon"
import Showroom from "@/components/sections/common/Showroom"

export const metadata = {
	title: routes.biodynamics.title
}

export default function BiodynamicsPage() {
	return (
		<>
			<Header />

			<main>
				{/* +6 */}
				<Showroom />
			</main>

			<Footer />
		</>
	)
}