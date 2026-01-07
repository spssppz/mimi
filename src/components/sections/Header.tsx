'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const functionalMenu = {
	title: "Функционал",
	categories: [
		{
			id: "security",
			label: "Безопасность",
			items: ["Видеонаблюдение", "Сигнализация", "Пожарная сигнализация", "Контроль доступа", "Протечка воды", "Ворота", "Домофон"]
		},
		{ id: "climate", label: "Микроклимат", items: ["Отопление", "Кондиционирование"] },
	]
};

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeTab, setActiveTab] = useState('security');
	const [showFunctional, setShowFunctional] = useState(false);

	const activeCategory = functionalMenu.categories.find(
		c => c.id === activeTab
	)

	useEffect(() => {
		if (isOpen) document.body.classList.add('overflow-hidden')
		else document.body.classList.remove('overflow-hidden')

		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	}, [isOpen])

	return (
		<header
			onMouseLeave={() => setShowFunctional(false)}
			className="lg:relative font-helvetica lg:backdrop-blur-md bg-[rgba(244, 244, 244)]/95 border-b border-[rgba(69, 69, 69)]/15 py-2"
		>
			<div className="max-w-308 mx-auto px-4 flex items-center lg:justify-between gap-5">

				<Link href="/" className="basis-30 w-30 order-1 mr-auto lg:mr-0">
					<Image
						className="w-full h-auto"
						src="./images/logo.svg"
						alt="MiMiSmart"
						width={120}
						height={32}
					/>
				</Link>

				<div className="flex gap-6 xl:gap-8 items-center order-3 lg:order-2">
					<nav className="hidden lg:flex gap-6 xl:gap-8 items-center text-brand-light-gray/60 text-[13px]">
						<Link href="/">Главная</Link>
						<Link href="/">Услуги</Link>
						<button onClick={() => setShowFunctional(true)} className="cursor-pointer">Функционал</button>
						<Link href="/">Оборудование</Link>
						<Link href="/">Фурнитура</Link>
						<Link href="/">Готовые решения</Link>
						<Link href="/">Проекты</Link>
					</nav>
					<button
						onClick={() => setIsOpen(prev => !prev)}
						className="lg:hidden relative z-3 text-brand-light-gray lg:text-[#777777] w-6 h-6 basis-6 cursor-pointer"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4 12H20"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4 18H20"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4 6H20"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>

				<a href="tel:+740122344555" className="order-2 lg:order-3 bg-white rounded-full shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.06)] p-2 min-w-9.5 lg:min-w-auto min-h-9.5 lg:min-h-auto lg:px-4 lg:pt-2.5 lg:pb-2 flex items-center justify-center gap-2 font-medium text-[13px]">
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.06802 9.66463C8.18849 9.71995 8.32422 9.73259 8.45284 9.70047C8.58145 9.66834 8.69529 9.59336 8.7756 9.48788L8.98268 9.21663C9.09135 9.07173 9.23227 8.95413 9.39427 8.87313C9.55626 8.79213 9.7349 8.74996 9.91602 8.74996H11.666C11.9754 8.74996 12.2722 8.87288 12.491 9.09167C12.7098 9.31046 12.8327 9.60721 12.8327 9.91663V11.6666C12.8327 11.976 12.7098 12.2728 12.491 12.4916C12.2722 12.7104 11.9754 12.8333 11.666 12.8333C8.88124 12.8333 6.21053 11.727 4.24139 9.75791C2.27226 7.78878 1.16602 5.11807 1.16602 2.33329C1.16602 2.02387 1.28893 1.72713 1.50772 1.50833C1.72652 1.28954 2.02326 1.16663 2.33268 1.16663H4.08268C4.3921 1.16663 4.68885 1.28954 4.90764 1.50833C5.12643 1.72713 5.24935 2.02387 5.24935 2.33329V4.08329C5.24935 4.26441 5.20718 4.44304 5.12618 4.60504C5.04518 4.76704 4.92758 4.90795 4.78268 5.01663L4.50968 5.22138C4.40259 5.30315 4.32711 5.41947 4.29606 5.55058C4.26501 5.68169 4.28031 5.81951 4.33935 5.94063C5.13658 7.55988 6.44776 8.86942 8.06802 9.66463Z" fill="currentColor" />
					</svg>
					<span className="hidden lg:block">Контакты</span>
				</a>
			</div>


			{showFunctional && (
				<div className="absolute pt-4 pb-20 top-full left-0 w-full leading-snug bg-white backdrop-blur-md font-helvetica min-h-95.5">
					<div className="max-w-308 mx-auto px-4 flex gap-10">
						<div className="basis-55">
							<div className='mb-4 text-[#5a6d7c] text-[13px]'>
								Функционал
							</div>
							<div className="flex flex-col text-alig gap-4">
								{functionalMenu.categories.map(cat => (
									<button
										key={cat.id}
										onMouseEnter={() => setActiveTab(cat.id)}
										className={`cursor-pointer text-left text-[16px] text-lg ${activeTab === cat.id ? 'text-black' : 'text-black/40'}`}
									>
										{cat.label}
									</button>
								))}
							</div>
						</div>
						<div>
							<div className="text-[13px] text-[#5a6d7c] mb-4">
								{activeCategory?.label}
							</div>
							<div className="grid gap-y-4">

								{activeCategory?.items.map(item => (
									<Link
										key={item}
										href="/"
										className="text-black text-[16px]"
									>
										{item}
									</Link>
								))}
							</div>
						</div>
						<div className="text-[15px] ml-auto basis-67 text-brand-blue tracking-[-0.01em]">
							<address className="not-italic">г. Москва, Новоданиловская наб., 6к1</address>
							<p className="flex items-center gap-1 text-foreground mb-6">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.64363 1.72126C8.6765 1.65486 8.72728 1.59896 8.79022 1.55988C8.85317 1.5208 8.92579 1.50009 8.99988 1.50009C9.07398 1.50009 9.1466 1.5208 9.20955 1.55988C9.27249 1.59896 9.32327 1.65486 9.35614 1.72126L11.0886 5.23051C11.2028 5.46149 11.3712 5.66132 11.5796 5.81285C11.788 5.96439 12.03 6.0631 12.2849 6.10051L16.1594 6.66751C16.2328 6.67815 16.3018 6.70912 16.3585 6.75691C16.4152 6.80471 16.4575 6.86742 16.4804 6.93797C16.5033 7.00851 16.5061 7.08407 16.4883 7.15609C16.4706 7.22811 16.433 7.29373 16.3799 7.34551L13.5779 10.074C13.3931 10.2541 13.2548 10.4764 13.175 10.7217C13.0952 10.9671 13.0762 11.2282 13.1196 11.4825L13.7811 15.3375C13.7941 15.4109 13.7862 15.4864 13.7583 15.5555C13.7303 15.6246 13.6836 15.6845 13.6233 15.7283C13.563 15.772 13.4916 15.798 13.4173 15.8032C13.3429 15.8084 13.2687 15.7925 13.2029 15.7575L9.73938 13.9365C9.51117 13.8167 9.25727 13.7541 8.99951 13.7541C8.74175 13.7541 8.48785 13.8167 8.25963 13.9365L4.79688 15.7575C4.73113 15.7923 4.65693 15.808 4.58272 15.8027C4.50851 15.7974 4.43727 15.7714 4.37711 15.7277C4.31694 15.6839 4.27026 15.6242 4.24238 15.5552C4.21449 15.4862 4.20653 15.4108 4.21938 15.3375L4.88013 11.4833C4.92378 11.2288 4.90487 10.9676 4.82504 10.722C4.7452 10.4765 4.60684 10.2541 4.42188 10.074L1.61988 7.34626C1.56633 7.29454 1.52838 7.22881 1.51036 7.15657C1.49233 7.08433 1.49496 7.00847 1.51794 6.93765C1.54093 6.86683 1.58334 6.80389 1.64034 6.756C1.69735 6.70811 1.76666 6.67719 1.84038 6.66676L5.71413 6.10051C5.96933 6.06339 6.21168 5.9648 6.42032 5.81325C6.62897 5.6617 6.79766 5.46171 6.91188 5.23051L8.64363 1.72126Z"
										fill="#E27500"
										stroke="#E27500"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<span>4,9 рейтинг</span>
							</p>
							<div className='mb-6'>
								<a href="tel:+740122344555">+7 (4012) 234-45-55</a> <br />
								<span className="text-[#acacac]">Время работы 09:00 - 18:00</span>
							</div>
							<a className="mb-6 inline-block" href="mailto:mimismart@gmail.com">mimismart@gmail.com</a>
							{/* Сошиалс! */}
							<div className="grid grid-cols-2 gap-3">
								<a href="" className="border flex items-center justify-center border-[rgba(224, 232, 235)]/40 rounded-xl min-h-13" aria-label='Перейти в App Store'>
									<Image
										src="./images/icons/app/apple.svg"
										alt="App Store"
										width={32}
										height={32}
									/>
								</a>
								<a href="" className="border flex items-center justify-center border-[rgba(224, 232, 235)]/40 rounded-xl min-h-13" aria-label='Перейти в Google Play'>
									<Image
										src="./images/icons/app/android.svg"
										alt="Google Play"
										width={32}
										height={32}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			)
			}

			{
				isOpen && (
					<div className="fixed top-0 z-2 left-0 w-full overflow-auto h-full px-8 pt-20 pb-10 bg-white font-helvetica">

						<nav className="flex flex-col gap-5 text-[20px] pb-10">
							<Link href="/">Главная</Link>
							<Link href="/">Услуги</Link>
							<Link href="/">Функционал</Link>
							{/* <button onClick={() => setShowFunctional(true)} className="text-left cursor-pointer">Функционал</button> */}
							<Link href="/">Оборудование</Link>
							<Link href="/">Фурнитура</Link>
							<Link href="/">Готовые решения</Link>
							<Link href="/">Проекты</Link>
							<Link href="/">Цены</Link>
							<Link href="/">О компании</Link>
							<Link href="/">Партнерам</Link>
							<Link href="/">Статьи</Link>
							<Link href="/">Контакты</Link>
						</nav>
						<div className='pt-10 border-t border-[#d9d9d9] leading-tight font-helvetica text-[17px] tracking-[-0.01em]'>
							<div className='mb-10'>
								<div className="flex items-center gap-3 mb-8">
									<div className="w-12.5 h-12.5 bg-white rounded-[10px]">
										<Image
											src="./images/icons/address-decor.svg"
											width={50}
											height={50}
											alt="г. Москва, Новоданиловская наб., 6к1"
										/>
									</div>
									<div>
										<div className="mb-1 text-brand-blue">
											г. Москва, <br />
											Новоданиловская наб., 6к1
										</div>
										<p className="flex items-center gap-1">
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M8.64363 1.72126C8.6765 1.65486 8.72728 1.59896 8.79022 1.55988C8.85317 1.5208 8.92579 1.50009 8.99988 1.50009C9.07398 1.50009 9.1466 1.5208 9.20955 1.55988C9.27249 1.59896 9.32327 1.65486 9.35614 1.72126L11.0886 5.23051C11.2028 5.46149 11.3712 5.66132 11.5796 5.81285C11.788 5.96439 12.03 6.0631 12.2849 6.10051L16.1594 6.66751C16.2328 6.67815 16.3018 6.70912 16.3585 6.75691C16.4152 6.80471 16.4575 6.86742 16.4804 6.93797C16.5033 7.00851 16.5061 7.08407 16.4883 7.15609C16.4706 7.22811 16.433 7.29373 16.3799 7.34551L13.5779 10.074C13.3931 10.2541 13.2548 10.4764 13.175 10.7217C13.0952 10.9671 13.0762 11.2282 13.1196 11.4825L13.7811 15.3375C13.7941 15.4109 13.7862 15.4864 13.7583 15.5555C13.7303 15.6246 13.6836 15.6845 13.6233 15.7283C13.563 15.772 13.4916 15.798 13.4173 15.8032C13.3429 15.8084 13.2687 15.7925 13.2029 15.7575L9.73938 13.9365C9.51117 13.8167 9.25727 13.7541 8.99951 13.7541C8.74175 13.7541 8.48785 13.8167 8.25963 13.9365L4.79688 15.7575C4.73113 15.7923 4.65693 15.808 4.58272 15.8027C4.50851 15.7974 4.43727 15.7714 4.37711 15.7277C4.31694 15.6839 4.27026 15.6242 4.24238 15.5552C4.21449 15.4862 4.20653 15.4108 4.21938 15.3375L4.88013 11.4833C4.92378 11.2288 4.90487 10.9676 4.82504 10.722C4.7452 10.4765 4.60684 10.2541 4.42188 10.074L1.61988 7.34626C1.56633 7.29454 1.52838 7.22881 1.51036 7.15657C1.49233 7.08433 1.49496 7.00847 1.51794 6.93765C1.54093 6.86683 1.58334 6.80389 1.64034 6.756C1.69735 6.70811 1.76666 6.67719 1.84038 6.66676L5.71413 6.10051C5.96933 6.06339 6.21168 5.9648 6.42032 5.81325C6.62897 5.6617 6.79766 5.46171 6.91188 5.23051L8.64363 1.72126Z"
													fill="#E27500"
													stroke="#E27500"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											<span>4,9 рейтинг</span>
										</p>
									</div>
								</div>
								<div className='text-brand-blue flex items-center gap-3 mb-8'>
									<div className='basis-12.5 w-12.5 shadow-[0_0_2px_0_rgba(148,148,148,0.12)]'>

									</div>
									<div>
										<a href="tel:+740122344555">+7 (4012) 234-45-55</a>
										<p className='text-[#acacac]'>Время работы 09:00 - 18:00</p>
									</div>
								</div>
								<div className='text-brand-blue flex items-center gap-3 mb-8'>
									<div className='basis-12.5 w-12.5 shadow-[0_0_2px_0_rgba(148,148,148,0.12)]'>
										<Image
											className="w-full h-auto"
											src="./images/icons/mail-header.svg"
											alt="MiMiSmart"
											width={50}
											height={50}
										/>
									</div>
									<a href="mailto:mimismart@gmail.com">mimismart@gmail.com</a>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-3">
								<a href="" className="border flex items-center justify-center border-[rgba(224, 232, 235)]/40 rounded-xl min-h-14" aria-label='Перейти в App Store'>
									<Image
										src="./images/icons/app/apple.svg"
										alt="App Store"
										width={32}
										height={32}
									/>
								</a>
								<a href="" className="border flex items-center justify-center border-[rgba(224, 232, 235)]/40 rounded-xl min-h-14" aria-label='Перейти в Google Play'>
									<Image
										src="./images/icons/app/android.svg"
										alt="Google Play"
										width={32}
										height={32}
									/>
								</a>
							</div>
						</div>
						{/* дальше */}
					</div>
				)
			}
		</header>
	);
}