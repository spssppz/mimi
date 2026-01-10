import type { FooterColumnData, SocialLink } from "@/types/footer"

export const footerColumns: FooterColumnData[] = [
	{
		title: 'Основное',
		links: [
			{ label: 'Главная', href: '/' },
			{ label: 'Услуги', href: '/' },
			{ label: 'Функционал', href: '/' },
			{ label: 'Оборудование', href: '/' },
			{ label: 'Фурнитура', href: '/' },
			{ label: 'Готовые решения', href: '/' },
			{ label: 'Проекты', href: '/' },
			{ label: 'Сотрудничество', href: '/' },
			{ label: 'Шоурум', href: '/' },
			{ label: 'Цены', href: '/' },
			{ label: 'О компании', href: '/' },
			{ label: 'Отзывы', href: '/' },
			{ label: 'Сертификаты', href: '/' },
			{ label: 'Контакты', href: '/' },
			{ label: 'Статьи', href: '/' },
		],
		showOnMobile: true,
	},
	{
		title: 'Электрокарнизы',
		links: [
			{ label: 'Управление шторами', href: '/' },
			{ label: 'Рулонные шторы', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Освещение',
		links: [
			{ label: 'Диммирование', href: '/' },
			{ label: 'Биодинамическое', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Климат контроль',
		links: [
			{ label: 'Кондиционирование', href: '/' },
			{ label: 'Отопление', href: '/' },
			{ label: 'Теплый пол', href: '/' },
			{ label: 'Вентиляция', href: '/' },
			{ label: 'Увлажнение', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Мультимедиа',
		links: [
			{ label: 'Домашний кинотеатр', href: '/' },
			{ label: 'Мультирум', href: '/' },
			{ label: 'Проекторы', href: '/' },
			{ label: 'Телевизоры', href: '/' },
			{ label: 'Аудио', href: '/' },
			{ label: 'Управление мультимедией', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Безопасность и защита',
		links: [
			{ label: 'Видеонаблюдение', href: '/' },
			{ label: 'Охранная система и сигнализация', href: '/' },
			{ label: 'Домофон', href: '/' },
			{ label: 'Контроль доступа (Ворота)', href: '/' },
			{ label: 'Контроль доступа (Электрозамки)', href: '/' },
			{ label: 'Пожарная система', href: '/' },
			{ label: 'Защита от протечек', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Управление розетками',
		links: [
			{ label: 'Основное', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Контроллеры',
		links: [
			{ label: 'Основное', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Бесперебойное электроснабжение',
		links: [
			{ label: 'Основное', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Приложение',
		links: [
			{ label: 'Основное', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Датчики',
		links: [
			{ label: 'Датчики движения', href: '/' },
			{ label: 'Инфракрасные датчики', href: '/' },
			{ label: 'Датчики открытия', href: '/' },
			{ label: 'Датчики дыма', href: '/' },
			{ label: 'Датчики протечки', href: '/' },
			{ label: 'Датчики температуры', href: '/' },
			{ label: 'Датчики влажности', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Готовые решения',
		links: [
			{ label: 'Квартира', href: '/' },
			{ label: 'Дом', href: '/' },
			{ label: 'Офис', href: '/' },
			{ label: 'Жилые комплексы', href: '/' },
		],
		showOnMobile: false,
	},
	{
		title: 'Информация',
		links: [
			{ label: 'Политика конфиденциальности', href: '/' },
		],
		showOnMobile: true,
	},
]

export const socialLinks: SocialLink[] = [
	{ name: 'Telegram', path: './images/icons/socials/tg.svg', href: '/' },
	{ name: 'YouTube', path: './images/icons/socials/youtube.svg', href: '/' },
	{ name: 'VK', path: './images/icons/socials/vk.svg', href: '/' },
]
