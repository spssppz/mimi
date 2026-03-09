import Link from "next/link";

export const metadata = {
	title: 'MiMiSmart'
}

export default function PagesPage() {
	return (
		<div className="py-20">
			<div className="max-w-235.5 mx-auto px-4 text-[20px] leading-normal space-y-10">
				<div>
					<ul className="font-helvetica">
						<li><Link href="/" className="transition-colors hover:text-brand-blue duration-300">Главная</Link></li>
					</ul>
				</div>
				<div>
					<div className="mb-4 font-bold">STAGE 2:</div>
					<ul className="font-helvetica">
						<li><Link href="/about" className="transition-colors hover:text-brand-blue duration-300">О компании</Link></li>
						<li><Link href="/contacts" className="transition-colors hover:text-brand-blue duration-300">Контакты</Link></li>
						<li><Link href="/faq" className="transition-colors hover:text-brand-blue duration-300">FAQ</Link></li>
						<li><Link href="/portfolio" className="transition-colors hover:text-brand-blue duration-300">Проекты</Link></li>
						<li><Link href="/solutions" className="transition-colors hover:text-brand-blue duration-300">Готовые решения</Link></li>
						<li><Link href="/cinema" className="transition-colors hover:text-brand-blue duration-300">Мультимедиа</Link></li>
						<li><Link href="/equipment" className="transition-colors hover:text-brand-blue duration-300">Оборудование</Link></li>
						<li><Link href="/lightning" className="transition-colors hover:text-brand-blue duration-300">Освещение</Link></li>
						<li><Link href="/curtains" className="transition-colors hover:text-brand-blue duration-300">Электрошторы</Link></li>
						<li><Link href="/features" className="transition-colors hover:text-brand-blue duration-300">Преимущества</Link></li>
						<li><Link href="/security" className="transition-colors hover:text-brand-blue duration-300">Безопасность</Link></li>
						<li><Link href="/climate" className="transition-colors hover:text-brand-blue duration-300">Климат-контроль</Link></li>
					</ul>
				</div>
				{/* <div>
					<div className="mb-4 font-bold">STAGE 3/1:</div>
					<ul className="font-helvetica">
						<li><Link href="/" className="transition-colors hover:text-brand-blue duration-300"></Link></li>
					</ul>
				</div> */}
				<div>
					<div className="mb-4 font-bold">STAGE 3/2:</div>
					<ul className="font-helvetica">
						<li><Link href="/audio" className="transition-colors hover:text-brand-blue duration-300">Аудио</Link></li>
						<li><Link href="/tv" className="transition-colors hover:text-brand-blue duration-300">TV</Link></li>
						<li><Link href="/projector" className="transition-colors hover:text-brand-blue duration-300">Проектор</Link></li>
						<li><Link href="/electric-curtains" className="transition-colors hover:text-brand-blue duration-300">Электрошторы</Link></li>
						<li><Link href="/electric-lock" className="transition-colors hover:text-brand-blue duration-300">Электрозамок</Link></li>
						<li><Link href="/services" className="transition-colors hover:text-brand-blue duration-300">Монтаж и настройка</Link></li>
						<li><Link href="/designing" className="transition-colors hover:text-brand-blue duration-300">Проектирование</Link></li>
						<li><Link href="/customization" className="transition-colors hover:text-brand-blue duration-300">Монтаж и установка</Link></li>
					</ul>
				</div>
			</div>
		</div>
	);
}