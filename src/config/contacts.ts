import type { Contacts } from "@/types/contacts";

export const contacts: Contacts = {
	phone: "+7 (4012) 234-34-34",
	email: "MiMiSmart@mail.ru",
	workingHours: '09:00 - 18:00',
	rating: 4.9,
	apps: [
		{
			label: 'App Store',
			href: '',
			icon: '/images/icons/app/apple.svg'
		},
		{
			label: 'Google Play',
			href: '',
			icon: '/images/icons/app/android.svg'
		},
	],
	socials: [
		{
			name: 'Telegram',
			icon: '/images/icons/socials/tg.svg',
			href: '/'
		},
		{
			name: 'YouTube',
			icon: '/images/icons/socials/youtube.svg',
			href: '/'
		},
		{
			name: 'VK',
			icon: '/images/icons/socials/vk.svg',
			href: '/'
		},
	]
}
