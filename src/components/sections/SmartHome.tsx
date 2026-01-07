"use client";

import Image from 'next/image';
import { Title } from '../UI/Title';
import { Button } from '../UI/Button';
import { useState } from 'react';

export default function SmartHome() {
	const [enabled, setEnabled] = useState(false);
	return (

		<section className="min-h-205">
			<div className="max-w-308 mx-auto px-4">
				<div className='pt-13.5 lg:pl-36 lg:pt-30'>
					<button
						type="button"
						onClick={() => setEnabled(!enabled)}
						aria-pressed={enabled}
						className="inline-flex items-center gap-4 cursor-pointer group select-none mb-5"
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

						{/* Текст кнопки */}
						<span className="font-helvetica tracking-[-0.01em] text-[14px] bg-gradient-to-r from-[#dbdbdb] to-brand-light-gray bg-clip-text text-transparent">
							Увидеть в действии
						</span>
					</button>
					<Title className="mb-2">Умный дом под&nbsp;ключ</Title>
					<p className='font-helvetica text-[17px] mb-10 md:mb-20 tracking-[-0.01em] leading-tight'>
						Производство и монтаж современной электрики. Автоматическое управление всеми системами дома.
					</p>
					<Button>Узнать больше</Button>
				</div>
			</div>
		</section>
	);
};