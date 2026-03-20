import Header from "@/components/layout/Header"
import OtherArticles from "@/components/sections/Article/OtherArticles"
import Footer from "@/components/layout/Footer"
import { routes } from "@/config/routes"
import Image from "next/image"
import { contacts } from "@/config/contacts"
import Link from "next/link"
import { LikeIcon } from "@/icons/LikeIcon"

export const metadata = {
	title: routes.news.title
}

export default function NewsPage() {
	return (
		<>
			<Header />

			<main>
				{/* +1 */}
			</main>

			<Footer />
		</>
	)
}