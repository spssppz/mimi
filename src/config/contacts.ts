import { TgIcon } from "@/icons/socials/TgIcon";
import { VkIcon } from "@/icons/socials/VkIcon";
import { YoutubeIcon } from "@/icons/socials/YoutubeIcon";

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
			href: '/',
			icon: TgIcon,
		},
		{
			name: 'YouTube',
			href: '/',
			icon: YoutubeIcon,
		},
		{
			name: 'VK',
			href: '/',
			icon: VkIcon,
		},
	]
}
