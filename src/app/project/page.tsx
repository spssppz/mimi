import Header from "@/components/layout/Header"
import ProjectHero from "@/components/sections/Project/ProjectHero"
import ProjectSteps from "@/components/sections/Project/ProjectSteps"
import ProjectTags from "@/components/sections/Project/ProjectTags"
import Cases from "@/components/sections/Cases"
import Showroom from "@/components/sections/common/Showroom"
import Footer from "@/components/layout/Footer"

import { routes } from "@/config/routes"


export const metadata = {
	title: routes.project.title
}

export default function ProjectPage() {
	return (
		<>
			<Header />

			<main>
				<ProjectHero />
				<ProjectSteps />
				<ProjectTags />
				<Cases
					title="Другие работы"
					limit={3}
				/>
				<Showroom />
			</main>

			<Footer />
		</>
	)
}