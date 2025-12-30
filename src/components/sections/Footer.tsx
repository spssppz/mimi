import Image from "next/image";
import Link from "next/link";

const footerColumns = [
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

const socialLinks = [
	{ name: 'Telegram', path: './images/icons/socials/tg.svg', href: '/' },
	{ name: 'YouTube', path: './images/icons/socials/youtube.svg', href: '/' },
	{ name: 'VK', path: './images/icons/socials/vk.svg', href: '/' },
]

type FooterLink = {
	label: string
	href: string
}

type FooterColumnProps = {
	title: string
	links: FooterLink[]
	showOnMobile?: boolean
}

export function FooterColumn({ title, links, showOnMobile }: FooterColumnProps) {
	return (
		<div className={`mb-10 md:mb-6 break-inside-avoid ${showOnMobile ? 'block' : 'hidden md:block'}`}>
			<h4 className="font-medium text-[14px] mb-3 tracking-wide text-[#0a051a]">
				{title}
			</h4>

			<ul className="flex flex-col gap-2">
				{links.map(({ label, href }) => (
					<li key={label}>
						<Link
							href={href}
							className="font-helvetica text-brand-light-gray/60 text-[13px] transition-colors hover:text-brand-light-gray"
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default function Footer() {
	return (
		<footer className="bg-[#efefef] py-10">
			<div className="max-w-308 mx-auto px-4">

				<div className="border-t border-[#d9d9d9] pt-6 pb-10">
					<Link href="/" className="inline-block mb-10">
						<Image unoptimized
							src="./images/logo.svg"
							alt="MiMiSmart"
							width={120}
							height={32}
							priority
						/>
					</Link>

					<div className="columns-2 md:columns-3 lg:columns-5 gap-10">
						{footerColumns.map(column => (
							<FooterColumn
								key={column.title}
								title={column.title}
								links={column.links}
								showOnMobile={column.showOnMobile}
							/>
						))}

						<div className="block break-inside-avoid">
							<h4 className="font-medium text-[14px] mb-3 text-[#0a051a] tracking-wide">
								Контакты
							</h4>
							<div className="flex flex-col items-start mb-4">
								<a
									href="tel:+740122343434"
									className="font-helvetica whitespace-nowrap text-brand-blue text-[14px] mb-4 transition-colors hover:text-brand-light-gray"
								>
									+7 (4012) 234-34-34
								</a>
								<a
									href="mailto:MiMiSmart@mail.ru"
									className="font-helvetica text-brand-blue text-[14px] transition-colors hover:text-brand-light-gray"
								>
									MiMiSmart@mail.ru
								</a>
							</div>
							<nav
								className="flex gap-4"
								aria-label="Социальные сети"
							>
								{socialLinks.map(icon => (
									<Link
										key={icon.name}
										href={icon.href}
										className="w-4.5 h-4.5 block duration-300 transition-transform ease-in-out hover:scale-125"
									>
										<Image unoptimized
											src={icon.path}
											alt={icon.name}
											width={18}
											height={18}
										/>
									</Link>
								))}
							</nav>
						</div>
					</div>
				</div>
				<div className="font-helvetica text-[#0a051a] border-t text-[13px] border-[#d9d9d9] pt-6 flex flex-col justify-between items-start gap-2.5 md:gap-4 md:flex-row md:items-center">
					<p>© 2025 MiMiSmart. All rights reserved.</p>
					<Link href="/" className="text-brand-light-gray/60 transition-colors hover:text-brand-light-gray">Политика конфиденциальности</Link>
				</div>
			</div>
		</footer>
	)
}
