import Image from 'next/image';
import { Title } from '../UI/Title';

export default function Solutions() {
	return (

		<section className="bg-foreground py-30">
			<div className="max-w-308 mx-auto px-4">

				<Title className="text-white mb-20">Комплексные решения</Title>

				<ul className="grid md:grid-cols-2 gap-6 md:gap-5">

					<li className="border border-[#5A5D64] min-h-76 md:min-h-89 rounded-xl p-8 flex flex-col justify-center items-center text-center">
						<div className="mb-4">

							<Image
								src="/images/solutions/1.png"
								alt="Для квартиры"
								width={100}
								height={100}
							/>
						</div>

						<h3 className="tracking-[-0.01em] text-[17px] text-white font-medium mb-4">Для квартиры</h3>
						<div className="mb-4 font-helvetica text-brand-gray text-[15px] tracking-[-0.01em]">
							От проектирования до настройки - создаём умную квартиру, где всё связано и работает согласованно
						</div>

						<a href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-brand-blue group">
							Узнать больше
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
								<path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>
					</li>
					<li className="border border-[#5A5D64] min-h-76 md:min-h-89 rounded-xl p-8 flex flex-col justify-center items-center text-center">
						<div className="mb-4">

							<Image
								src="/images/solutions/2.png"
								alt="Для дома"
								width={165}
								height={100}
							/>
						</div>

						<h3 className="tracking-[-0.01em] text-[17px] text-white font-medium mb-4">Для дома</h3>
						<div className="mb-4 font-helvetica text-brand-gray text-[15px] tracking-[-0.01em]">
							От проектирования до настройки - создаём умную квартиру, где всё связано и работает согласованно
						</div>

						<a href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-brand-blue group">
							Узнать больше
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
								<path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>
					</li>

				</ul>
			</div>
		</section>
	);
};