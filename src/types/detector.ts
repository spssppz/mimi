export type DetectorExampleData = {
	bg?: string
	bodyClasses?: string
	title: string
	text: string
	image: string
	imageWidth?: number
	imageHeight?: number
}

export type Detector = {
	slug: string
	title: string
	subtitle: string
	icon: string
	image: string
	bg: string
	linkHover: string
	isWide?: boolean
	DetectorExample?: DetectorExampleData
}