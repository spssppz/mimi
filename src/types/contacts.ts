type AppLink = {
	label: string
	href: string
	icon: string
}

type SocialLink = {
	name: string
	href: string
	icon: string
}

export type Contacts = {
	phone: string
	email: string
	workingHours: string
	rating: number
	apps?: AppLink[]
	socials?: SocialLink[]
}
