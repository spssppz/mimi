'use client'

import Image from "next/image";
import { Title } from "../UI/Title";
import { useState } from 'react'

import { useTheme } from '@/context/ThemeContext'
import { Tabs } from "@/data/comfort";
import { TabKey } from "@/types/comfort";

function TabsCard() {
	const [activeTab, setActiveTab] = useState<TabKey>('morning')

	return (
		<div className="relative overflow-hidden rounded-[20px] bg-[#121212] px-5 lg:px-8 pt-6 lg:pt-7 min-h-94 flex flex-col">
			<Image
				src="./images/comfort/bg-2.png"
				alt="Фон"
				fill
			/>

			<div className="relative flex justify-between items-start mb-10 md:mb-4.5 gap-3">
				<div className="flex flex-col items-start space-y-3">
					{Object.entries(Tabs).map(([key, tab]) => (
						<button
							key={key}
							onClick={() => setActiveTab(key as TabKey)}
							className={`font-semibold text-[16px] leading-tight tracking-[-0.01em] transition cursor-pointer
			${activeTab === key
									? 'text-[#d1d1d1]'
									: 'text-[#d1d1d1] opacity-30 hover:opacity-60'}
		`}
						>
							{tab.title}
						</button>
					))}

				</div>



				<div className="flex items-center justify-center relative w-20 lg:w-25 aspect-square rounded-full bg-[radial-gradient(53.7%_53.7%_at_30.56%_38.36%,rgba(207,231,247,0.2)_0%,rgba(121,111,17,0.1)_100%)] shadow-[0px_54px_15px_rgba(0,0,0,0.02),0px_34px_14px_rgba(0,0,0,0.15),0px_19px_12px_rgba(18,18,18,0.5),0px_2px_5px_rgba(0,0,0,0.98),inset_0px_-2px_1px_rgba(0,0,0,0.55)]">
					<Image
						src={Tabs[activeTab].icon}
						alt={Tabs[activeTab].title}
						width={76}
						height={76}
					/>
				</div>
			</div>
			<ul className="relative flex-auto bg-linear-to-b max-w-88 from-[#27272b] to-[#101011] shadow-[inset_-4px_4px_3px_0_rgba(0,0,0,0.25)] rounded-t-xl py-5 px-4 font-helvetica leading-tight text-[14px] tracking-[-0.01em] text-[#f6f9ff] space-y-5 md:space-y-4">
				{Tabs[activeTab].items.map((text, i) => (
					<li key={i} className="flex items-center gap-3">
						<Image
							src="./images/icons/comfort-check.svg"
							alt="check"
							width={24}
							height={24}
							className="basis-6"
						/>
						<span>{text}</span>
					</li>
				))}
			</ul>
			<div className="absolute -bottom-[4%] left-0 w-full h-[34%] bg-[linear-gradient(180deg,rgba(37,37,41,0)_0%,#252529_82.91%)] pointer-events-none"></div>
		</div >
	)
}

export default function Comfort() {
	const { enabled } = useTheme()
	return (
		<section className={`py-22.5 lg:pb-22.5 lg:pt-30 transition-colors duration-400 ${enabled && 'bg-foreground'}`}>
			<div className="max-w-308 mx-auto px-4">
				<Title className={`mb-2 transition-colors duration-400 ${enabled && 'text-white'}`}>Комфорт в каждом движении</Title>
				<p className={`lg:max-w-120 font-helvetica text-[17px] tracking-[-0.01em] transition-colors duration-400 ${enabled ? 'text-[#d9dadc]' : 'text-[#303236]'} leading-tight mb-10`}>Интеллектуальная система заботится о вашем доме: <br />
					от освещения до климата — всегда под вашим контролем.</p>
				<div className="grid md:grid-cols-2 gap-20 md:gap-5">

					<div className="overflow-hidden relative rounded-[20px] bg-[#d8d8d8] p-5 md:p-7 lg:p-8 min-h-111.5 lg:min-h-auto">
						<h3 className="font-bold text-[32px] md:text-[38px] lg:text-[44px] tracking-[-0.05em] mb-3 md:mb-6 text-black/7">
							Управляйте климатом, освещением, шторами и&nbsp;другим:
						</h3>
						<p className="font-helvetica text-[15px] leading-snug text-[#a8a8a9] tracking-[-0.01em] max-w-58">
							с помощью голоса, смартфона, привычных выключателей или полностью автоматической системы.
						</p>
						<div className="absolute bottom-0 right-0 w-[72%] aspect-square pointer-events-none">
							<Image
								src="./images/comfort/1.png"
								alt="Колонки Алиса"
								fill
							/>
						</div>
					</div>

					<div className="lg:pt-17">
						<div className="tracking-[-0.01em] mb-6 lg:px-8">
							<h3 className={`text-[24px] md:text-[28px] font-bold mb-2.5 leading-tight transition-colors duration-400 ${enabled && 'text-white'}`}>
								Создавайте сценарии крайне просто, справится даже ребенок.
							</h3>
							<p className={`font-helvetica text-[15px] transition-colors duration-400 ${enabled ? 'text-[#d9dadc]' : 'text-[#303236]'} leading-snug`}>
								Прямо с телефона, буквально за 20 секунд.
							</p>
						</div>

						<TabsCard />
					</div>

				</div>
			</div>
		</section>
	);
};