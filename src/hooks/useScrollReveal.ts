import { useEffect } from "react"

export function useScrollReveal() {
	useEffect(() => {
		const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						console.log("VISIBLE", entry.target)

						entry.target.classList.add("active")
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.2 }
		)

		elements.forEach(el => observer.observe(el))

		return () => observer.disconnect()
	}, [])
}
