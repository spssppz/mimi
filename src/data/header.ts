export const menuItems = [
	{
		label: 'Главная',
		href: '/',
		desktop: true
	},
	{
		label: 'Услуги',
		href: '/',
		desktop: true
	},
	{
		label: 'Функционал',
		action: 'openFunctional',
		desktop: true
	},
	{
		label: 'Оборудование',
		href: '/',
		desktop: true
	},
	{
		label: 'Фурнитура',
		href: '/',
		desktop: true
	},
	{
		label: 'Готовые решения',
		href: '/',
		desktop: true
	},
	{
		label: 'Проекты',
		href: '/',
		desktop: true
	},
	{
		label: 'Цены',
		href: '/',
		desktop: false
	},
	{
		label: 'О компании',
		href: '/',
		desktop: false
	},
	{
		label: 'Партнерам',
		href: '/',
		desktop: false
	},
	{
		label: 'Статьи',
		href: '/',
		desktop: false
	},
	{
		label: 'Контакты',
		href: '/',
		desktop: false
	},
]

export const functionalMenu = {
	title: "Функционал",
	categories: [
		{
			id: "security",
			label: "Безопасность",
			items: ["Видеонаблюдение", "Сигнализация", "Пожарная сигнализация", "Контроль доступа", "Протечка воды", "Ворота", "Домофон"]
		},
		{
			id: "climate",
			label: "Микроклимат",
			items: ["Отопление", "Кондиционирование"]
		},
		{
			id: "multimedia",
			label: "Мультимедиа",
			items: ["Домашний кинотеатр", "Мультирум", "Проекторы", "Телевизоры", "Аудио", "Управление мультимедией"]
		},
		{
			id: "electrics",
			label: "Электрика",
			items: ["Управление шторами", "Рулонные шторы"]
		},
		{
			id: "lighting",
			label: "Освещение",
			items: ["Диммирование", "Биодинамическое"]
		},
	]
};