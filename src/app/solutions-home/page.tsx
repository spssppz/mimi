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
	title: routes.solutionsHome.title
}

export default function SolutionsHomePage() {
	return (
		<>
			<Header />

			<main>
				{/* +11 */}
				<Showroom />
			</main>

			<Footer />
		</>
	)
}