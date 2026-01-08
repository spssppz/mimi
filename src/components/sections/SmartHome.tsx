"use client";

import Image from 'next/image';
import { Title } from '../UI/Title';
import { Button } from '../UI/Button';
import { useEffect, useState } from 'react';

function LivingRoom() {
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
			<span className='living-cctv'>
				<Image src="./images/smarthome/cctv.png" width={85} height={78} alt="" />
			</span>

			<span className="step step-left step-1">
				<Image src="./images/smarthome/step-left.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-right step-2">
				<Image src="./images/smarthome/step-right.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-left step-3">
				<Image src="./images/smarthome/step-left.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-right step-4">
				<Image src="./images/smarthome/step-right.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-left step-5">
				<Image src="./images/smarthome/step-left.png" width={28} height={19} alt="" />
			</span>

			<span className="step step-right step-6">
				<Image src="./images/smarthome/step-right.png" width={28} height={19} alt="" />
			</span>

			<div className="sensor" id="motion-sensor">
				<div className="sensor-icon">
					<Image
						src="./images/smarthome/fire-detector.png"
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
	const [enabled, setEnabled] = useState(false);

	return (

		<section className="min-h-205 relative">
			<div className="absolute -top-13.75 left-1/2 -translate-x-1/2 w-360 aspect-1440/820">
				<Image
					src='./images/smarthome/bg.png'
					alt="background image"
					fill
					className="object-cover"
				/>
				<LivingRoom />

				<div className="bedroom-zone">
					<span className='curtain curtain-open'>
						<Image src="./images/smarthome/curtain-open.png" width={193} height={186} alt="" />
					</span>
					<span className='curtain curtain-close'>
						<Image src="./images/smarthome/curtain-close.png" width={193} height={186} alt="" />
					</span>
					<span className='lamp lamp-off'>
						<Image src="./images/smarthome/lamp-off.png" width={89} height={80} alt="" />
					</span>
					<span className='lamp lamp-on'>
						<Image src="./images/smarthome/lamp-on.png" width={89} height={80} alt="" />
					</span>
				</div>
				<div className='kitchen-zone'>
					<div className='kitchen-zone-2'>
						<span className='conditioner conditioner-off'>
							<Image src="./images/smarthome/conditioner-off.png" width={100.8} height={121.8} alt="" />
						</span>
						<span className='conditioner conditioner-on'>
							<Image src="./images/smarthome/conditioner-on.png" width={100.8} height={121.8} alt="" />
						</span>
					</div>
					<span className='lamp lamp-off'>
						<Image src="./images/smarthome/lamp-off.png" width={89} height={80} alt="" />
					</span>
					<span className='lamp lamp-on'>
						<Image src="./images/smarthome/lamp-on.png" width={89} height={80} alt="" />
					</span>
				</div>

				<div className="garage-zone">
					<span className='garage-cctv'>
						<Image src="./images/smarthome/cctv.png" width={85} height={78} alt="" />
					</span>
				</div>
				<div className="sitting-zone">
				</div>
			</div>
			<div className="max-w-308 mx-auto px-4">
				<div className='pt-13.5 lg:pl-36 lg:pt-30'>
					<button
						type="button"
						onClick={() => setEnabled(!enabled)}
						aria-pressed={enabled}
						className="relative inline-flex items-center gap-4 cursor-pointer group select-none mb-5"
					>

						<span
							className={`relative w-15 h-7.5 rounded-full transition-colors duration-300 border border-[#C6C6C6] shadow-[inset_0_3px_8px_0_rgba(0, 0, 0, 0.24] flex items-center`}
						>

							<span
								className={`transform transition-transform duration-300 rounded-[100%] ${enabled ? 'translate-x-0' : 'translate-x-7.5'}`}
							>
								<Image
									src='./images/icons/theme-btn-circle.svg'
									alt="Dark/Light theme btn icon"
									width={29}
									height={29}
									className="object-cover"
								/>
							</span>
						</span>

						<span className="font-helvetica tracking-[-0.01em] text-[14px] bg-linear-to-r from-[#dbdbdb] to-brand-light-gray bg-clip-text text-transparent">
							Увидеть в действии
						</span>
					</button>
					<Title className="mb-2 relative">Умный дом под&nbsp;ключ</Title>
					<p className='font-helvetica relative text-[17px] mb-10 md:mb-20 tracking-[-0.01em] leading-tight'>
						Производство и монтаж современной электрики. <br />
						Автоматическое управление всеми системами дома.
					</p>
					<Button>Узнать больше</Button>
				</div>
			</div>
		</section >
	);
};