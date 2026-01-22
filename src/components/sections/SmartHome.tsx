"use client";

import Image from 'next/image';
import { Title } from '../UI/Title';
import { Button } from '../UI/Button';
import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

function LivingRoom() {
	const { enabled } = useTheme()
	useEffect(() => {
		// ищем контейнер зоны и датчик
		const zone = document.querySelector<HTMLDivElement>('.living-zone')
		const sensor = document.getElementById('motion-sensor') as HTMLElement | null

		if (!zone || !sensor) return

		// обработчик движения мыши
		const onMove = (event: MouseEvent) => {
			const sensorRect = sensor.getBoundingClientRect()
			const mouseX = event.clientX
			const mouseY = event.clientY

			const sensorX = sensorRect.left + sensorRect.width / 2
			const sensorY = sensorRect.top + sensorRect.height / 2

			const dx = mouseX - sensorX
			const dy = mouseY - sensorY
			const distance = Math.sqrt(dx * dx + dy * dy)

			const maxDistance = 300 // радиус реакции

			if (distance < maxDistance) {
				const intensity = 1 - distance / maxDistance
				const speed = 1.8 - intensity * 1.2 // от 1.8s до 0.6s
				sensor.style.setProperty('--pulse-speed', `${speed}s`)
				sensor.classList.add('active')
			} else {
				sensor.classList.remove('active')
			}
		}

		// когда курсор покидает зону
		const onLeave = () => {
			sensor.classList.remove('active')
		}

		zone.addEventListener('mousemove', onMove)
		zone.addEventListener('mouseleave', onLeave)

		return () => {
			zone.removeEventListener('mousemove', onMove)
			zone.removeEventListener('mouseleave', onLeave)
		}
	}, [])


	return (
		<div className="living-zone">
			<span className={`living-cctv transition-all duration-400 ${enabled && 'brightness-30'}`}>
				<Image src="/images/smarthome/cctv.png" width={85} height={78} alt="" />
			</span>

			<span className="step step-left step-1">
				<Image src="/images/smarthome/step-left.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-right step-2">
				<Image src="/images/smarthome/step-right.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-left step-3">
				<Image src="/images/smarthome/step-left.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-right step-4">
				<Image src="/images/smarthome/step-right.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-left step-5">
				<Image src="/images/smarthome/step-left.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-right step-6">
				<Image src="/images/smarthome/step-right.png" width={28} height={19} alt="" />
			</span>

			<div className="sensor" id="motion-sensor">
				<div className={`sensor-icon transition-all duration-400 ${enabled && 'brightness-30'}`}>
					<Image
						src="/images/smarthome/fire-detector.png"
						width={24}
						height={24}
						alt="Датчик движения"
					/>
				</div>
				<span className="pulse pulse1"></span>
				<span className="pulse pulse2"></span>
				<span className="pulse pulse3"></span>
			</div>

		</div>
	)
}

export default function SmartHome() {
	const { enabled, toggle } = useTheme()

	return (

		<section className={`overflow-hidden min-h-205 relative transition-colors duration-400 ${enabled && 'bg-foreground'}`}>
			<div className='absolute lg:block hidden w-117.5 aspect-470/683 top-0 right-0'>
				<Image
					src='/images/smarthome/decor.png'
					alt="background image"
					fill
					className='object-cover'
				/>

			</div>
			<div className='absolute lg:block hidden w-160 aspect-square -top-[12%] left-[59%]'>
				<Image
					src='/images/smarthome/decor-2.png'
					alt="background image"
					fill
					className='object-cover'
				/>

			</div>
			<div className="absolute -top-13.75 left-3 sm:left-1/2 sm:-translate-x-1/2 w-360 aspect-1440/820">
				<Image
					src='/images/smarthome/bg.png'
					alt="background image"
					fill
					className={`object-cover transition-opacity duration-400 ${enabled && 'opacity-0'}`}
				/>
				<Image
					src='/images/smarthome/bg-dark.png'
					alt="background image"
					fill
					className={`left-1.75! top-0.5! object-cover transition-opacity duration-400 ${!enabled && 'opacity-0'}`}
				/>
				<LivingRoom />

				<div className={`bedroom-zone ${enabled && 'dark-theme'}`}>
					<span className='curtain curtain-open'>
						<Image src="/images/smarthome/curtain-open.png" width={193} height={186} alt="" />
					</span>
					<span className={`curtain curtain-close ${enabled && 'brightness-20'}`}>
						<Image src="/images/smarthome/curtain-close.png" width={193} height={186} alt="" />
					</span>
					<span className='lamp lamp-off'>
						<Image src="/images/smarthome/lamp-off.png" width={89} height={80} alt="" />
					</span>
					<span className='lamp lamp-on '>
						<Image src="/images/smarthome/lamp-on.png" width={89} height={80} alt="" />
					</span>
				</div>
				<div className={`kitchen-zone ${enabled && 'dark-theme'}`}>
					<div className='kitchen-zone-2'>
						<span className={`conditioner conditioner-off ${enabled && 'brightness-30'}`}>
							<Image src="/images/smarthome/conditioner-off.png" width={100.8} height={121.8} alt="" />
						</span>
						<span className='conditioner conditioner-on'>
							<Image src="/images/smarthome/conditioner-on.png" width={100.8} height={121.8} alt="" />
						</span>
					</div>
					<span className='lamp lamp-off'>
						<Image src="/images/smarthome/lamp-off.png" width={89} height={80} alt="" />
					</span>
					<span className='lamp lamp-on'>
						<Image src="/images/smarthome/lamp-on.png" width={89} height={80} alt="" />
					</span>
				</div>

				<div className="garage-zone">
					<span className={`garage-cctv transition-all duration-400 ${enabled && 'brightness-30'}`}>
						<Image src="/images/smarthome/cctv.png" width={85} height={78} alt="" />
					</span>
				</div>
				<div className="sitting-zone">
					<span className={`curtain curtain-open ${enabled && 'opacity-0'}`}>
						<Image src="/images/smarthome/curtain-open.png" width={193} height={186} alt="" />
					</span>
					<span className={`curtain curtain-close brightness-20 ${!enabled && 'opacity-0'}`}>
						<Image src="/images/smarthome/curtain-close.png" width={193} height={186} alt="" />
					</span>
				</div>
			</div>

			<div className="max-w-308 mx-auto px-4">
				<div className='pt-13.5 lg:pl-36 lg:pt-30'>
					<button
						type="button"
						onClick={toggle}
						aria-pressed={enabled}
						className="font-helvetica relative inline-flex items-center gap-4 cursor-pointer group select-none mb-5"
					>

						<span
							className={`relative w-15 h-7.5 rounded-full transition-colors duration-300 bg-linear-to-b ${enabled ? 'from-[#333333] to-[#4D4D4D]' : 'from-[#C6C6C6] to-[#FFFFFF]'} shadow-[0_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-start`}
						>
							<span className={`absolute top-px left-px right-px transition-colors duration-300  bottom-px ${enabled ? 'bg-[#444]' : 'bg-[#d8d8d8]'} rounded-full`}>

							</span>
							<span
								className={`transform relative transition-transform duration-300 rounded-full ${enabled ? 'translate-x-0' : 'translate-x-7.5'}`}
							>
								<Image
									src='/images/icons/theme-btn-circle.svg'
									alt="Dark/Light theme btn icon"
									width={29}
									height={29}
									className="object-cover "
								/>
								<span className={`absolute top-[50%] left-[50%] transition-colors duration-300 -translate-1/2 rounded-full shadow-[inset_1px_1px_1px_0_rgba(0,0,0,0.35)] w-1 h-1 ${enabled ? 'bg-[#ff383c]' : 'bg-[#1eb02f]'}`}></span>
							</span>
						</span>

						<span className="tracking-[-0.01em] text-[14px] bg-linear-to-r from-[#dbdbdb] to-brand-light-gray bg-clip-text text-transparent transition-opacity group-hover:opacity-70">
							Увидеть в действии
						</span>
					</button>
					<Title className={`mb-2 transition-colors duration-400 max-w-[80%] relative ${enabled && 'text-white'}`}>Умный дом под&nbsp;ключ</Title>
					<p className={`font-helvetica relative text-[17px] mb-10 md:mb-20 tracking-[-0.01em] transition-colors duration-400 leading-tight ${enabled && 'text-[#d9dadc]/60'}`}>
						Производство и монтаж современной электрики. <br />
						Автоматическое управление всеми системами дома.
					</p>
					<Button>Узнать больше</Button>
				</div>
			</div>
		</section>
	);
};