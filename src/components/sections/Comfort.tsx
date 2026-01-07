import Image from "next/image";
import { Title } from "../UI/Title";

export default function Comfort() {
	return (
		<section className="py-22.5 lg:pb-22.5 lg:pt-30">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-2">Комфорт в каждом движении</Title>
				<p className="lg:max-w-120 font-helvetica text-[17px] tracking-[-0.01em] text-[#303236] leading-tight mb-10">Интеллектуальная система заботится о вашем доме: <br />
					от освещения до климата — всегда под вашим контролем.</p>
				<div className="grid md:grid-cols-2 gap-20 md:gap-5">

					<div className="overflow-hidden relative rounded-[20px] bg-[#d8d8d8] p-5 md:p-7 lg:p-8 min-h-111.5 lg:min-h-auto">
						<h3 className="font-bold text-[32px] md:text-[38px] lg:text-[44px] tracking-[-0.05em] mb-3 md:mb-6 text-black/7 \">
							Управляйте климатом, освещением, шторами и другим:
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
							<h3 className="text-[24px] md:text-[28px] font-bold mb-2.5 leading-tight">
								Создавайте сценарии крайне просто, справится даже ребенок.
							</h3>
							<p className="font-helvetica text-[15px] text-[#303236] leading-snug">
								Прямо с телефона, буквально за 20 секунд.
							</p>
						</div>

						<div className="relative overflow-hidden rounded-[20px] bg-[#121212] px-5 lg:px-8 pt-6 lg:pt-7 min-h-94 flex flex-col">
							<Image
								src="./images/comfort/bg-2.png"
								alt="Фон"
								fill
							/>
							<div className="relative flex justify-between items-start mb-10 md:mb-4.5 gap-3">
								<div className="flex flex-col items-start space-y-3">
									<button className="cursor-pointer font-semibold text-[16px] text-[#d1d1d1] leading-tight tracking-[-0.01em]">Наступило утро</button>
									<button className="cursor-pointer font-semibold text-[16px] text-[#d1d1d1] leading-tight tracking-[-0.01em] opacity-30">Я ушел или пришел</button>
									<button className="cursor-pointer font-semibold text-[16px] text-[#d1d1d1] leading-tight tracking-[-0.01em] opacity-30">Случилась протечка</button>
								</div>

								<div className="w-20 lg:w-25 h-20 lg:h-25 rounded-full bg-white">
								</div>
							</div>

							<ul className="relative flex-auto bg-linear-to-b max-w-88 from-[#27272b] to-[#101011] shadow-[inset_-4px_4px_3px_0_rgba(0,0,0,0.25)] rounded-t-xl py-5 px-4 font-helvetica leading-tight text-[14px] tracking-[-0.01em] text-[#f6f9ff] space-y-5 md:space-y-4">
								<li className="flex items-center gap-3">
									<Image
										src="./images/icons/comfort-check.svg"
										alt="check"
										width={24}
										height={24}
										className="basis-6"
									/>
									<span>За час начнут прогреваться теплые полы</span>
								</li>
								<li className="flex items-center gap-3">
									<Image
										src="./images/icons/comfort-check.svg"
										alt="check"
										width={24}
										height={24}
										className="basis-6"
									/>
									<span>Отопление перейдет в дневной режим</span>
								</li>
								<li className="flex items-center gap-3">
									<Image
										src="./images/icons/comfort-check.svg"
										alt="check"
										width={24}
										height={24}
										className="basis-6"
									/>
									<span>Плавно откроются шторы, естественно пробуждая солнечными лучами</span>
								</li>
								<li className="flex items-center gap-3">
									<Image
										src="./images/icons/comfort-check.svg"
										alt="check"
										width={24}
										height={24}
										className="basis-6"
									/>
									<span>Вместо будильника, тихая музыка аккуратно встретит с новым днем</span>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};