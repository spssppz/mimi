export type InfoSection = {
	title: string
	text?: string[]
	list?: string[]
}

export type DetectorInfo = {
	sections: InfoSection[]
	theme?: 'dark' | 'light'
}

export type DetectorExampleData = {
	title: string
	text: string
	image: string
	imageWidth?: number
	imageHeight?: number
	theme?: 'dark' | 'light'
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
	detectorExample?: DetectorExampleData
	info?: DetectorInfo
}