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
			<svg
				className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%] animate-gradient"
				viewBox="0 0 590 376"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid slice"
			>
				<g className="blob blob-1" filter="url(#filter0_f_6231_44730)">
					<path fillRule="evenodd" clipRule="evenodd" d="M336.139 254.705C368.537 256.379 386.561 289.45 414.647 305.674C444.814 323.099 504.189 316.859 504.036 351.69C503.87 389.514 430.947 379.806 414.172 413.713C392.866 456.78 451.534 540.363 404.916 552.047C358.629 563.648 375.387 458.595 334.735 433.622C293.394 408.227 225.258 461.142 195.09 423.151C166.902 387.653 196.261 330.653 225.367 295.894C251.655 264.5 295.242 252.592 336.139 254.705Z" fill="#926520" />
				</g>
				<g className="blob blob-2" filter="url(#filter1_f_6231_44730)">
					<path fillRule="evenodd" clipRule="evenodd" d="M548.357 469.722C518.446 457.164 512.701 419.942 491.778 395.157C469.305 368.536 411.33 354.278 423.282 321.561C436.262 286.033 501.575 319.889 528.852 293.676C563.496 260.383 536.638 161.86 584.457 166.672C631.935 171.45 580.556 264.601 610.334 301.876C640.617 339.783 722.657 313.101 738.159 359.07C752.644 402.021 705.699 445.692 666.534 468.526C631.159 489.149 586.116 485.575 548.357 469.722Z" fill="#742092" />
				</g>
				<g className="blob blob-3 mix-blend-overlay" filter="url(#filter2_f_6231_44730)">
					<path d="M-19.5917 276.808C-19.5917 276.808 171.223 321.598 295 321.598C418.777 321.598 609.591 276.808 609.591 276.808V397.011C609.591 397.011 418.777 441.8 295 441.8C171.223 441.8 -19.5917 397.011 -19.5917 397.011V276.808Z" fill="white" />
				</g>
				<g className="blob blob-4 mix-blend-overlay" filter="url(#filter3_f_6231_44730)">
					<path d="M-143.258 244.906C-143.258 244.906 -14.7342 286.906 68.6361 286.906C152.006 286.906 280.53 244.906 280.53 244.906V357.623C280.53 357.623 152.006 399.623 68.6361 399.623C-14.7342 399.623 -143.258 357.623 -143.258 357.623V244.906Z" fill="white" />
				</g>
				<g className="blob blob-5 mix-blend-overlay" filter="url(#filter4_f_6231_44730)">
					<path d="M309.47 244.906C309.47 244.906 437.994 286.906 521.364 286.906C604.734 286.906 733.258 244.906 733.258 244.906V357.623C733.258 357.623 604.734 399.623 521.364 399.623C437.994 399.623 309.47 357.623 309.47 357.623V244.906Z" fill="white" />
				</g>
				<g className="blob blob-6 mix-blend-overlay" filter="url(#filter5_f_6231_44730)">
					<path d="M-19.5916 178.996C-19.5916 178.996 171.223 223.786 295 223.786C418.777 223.786 609.591 178.996 609.591 178.996V299.199C609.591 299.199 418.777 343.988 295 343.988C171.223 343.988 -19.5916 299.199 -19.5916 299.199V178.996Z" fill="#99E1FF" />
				</g>
				<defs>
					<filter id="filter0_f_6231_44730" x="-16.326" y="54.4685" width="720.362" height="698.47" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_6231_44730" />
					</filter>
					<filter id="filter1_f_6231_44730" x="221.677" y="-33.4982" width="719.17" height="716.315" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_6231_44730" />
					</filter>
					<filter id="filter2_f_6231_44730" x="-79.5917" y="216.808" width="749.183" height="284.992" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_6231_44730" />
					</filter>
					<filter id="filter3_f_6231_44730" x="-203.258" y="184.906" width="543.788" height="274.717" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_6231_44730" />
					</filter>
					<filter id="filter4_f_6231_44730" x="249.47" y="184.906" width="543.788" height="274.717" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_6231_44730" />
					</filter>
					<filter id="filter5_f_6231_44730" x="-79.5916" y="118.996" width="749.183" height="284.992" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_6231_44730" />
					</filter>
				</defs>
			</svg>
			<Image
				src="./images/comfort/bg-2.svg"
				alt="bg"
				fill
				className="object-cover"
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
						<Image
							src="./images/comfort/bg-1.svg"
							alt="bg"
							fill
							className="object-cover"
						/>
						<h3 className="relative [text-shadow:1px_-1px_1px_rgba(255,255,255,0.6),-2px_2px_1px_rgba(254,254,254,0.12),-2px_2px_3px_rgba(0,0,0,0.19)] font-bold text-[32px] md:text-[38px] lg:text-[44px] tracking-[-0.05em] mb-3 md:mb-6 bg-clip-text text-transparent bg-black/20">
							Управляйте климатом, освещением, шторами и&nbsp;другим:
						</h3>
						<p className="relative font-helvetica text-[15px] leading-snug text-[#a8a8a9] tracking-[-0.01em] max-w-58">
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
							<h3 className={`text-[24px] lg:max-w-[85%] md:text-[28px] font-bold mb-2.5 leading-tight transition-colors duration-400 ${enabled && 'text-white'}`}>
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