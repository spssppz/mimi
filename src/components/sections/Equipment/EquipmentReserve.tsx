import { RightArrowIcon } from "@/icons/RightArrowIcon"
import Image from "next/image"

export default function EquipmentReserve() {
	return (
		<section className="pt-22.5 lg:pt-27.5 bg-white overflow-hidden">
			<div className="max-w-236 mx-auto px-4 -tracking-[0.01em]">
				<div className="lg:mb-4">
					<div className="font-bold text-[18px] md:text-[24px] lg:text-[32px] leading-tight">Бесперебойное электроснабжение</div>
					<h2 className="mb-6 tracking-0 font-bold text-[86px] md:text-[100px] lg:text-[140px] xl:text-[220px] bg-[linear-gradient(180deg,#0b0d10_0%,#6bf980_100%)] bg-clip-text text-transparent leading-tight flex flex-col">
						Резерв
						<span className="lg:-mt-10 -mt-4 text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px]">когда остальной дом молчит.</span>
					</h2>
					<div className="text-[17px] leading-tight max-w-143 font-helvetica">
						Бесперебойное электроснабжение MiMiSmart сохраняет работу ключевых процессов и безопасности даже при отключении сети.
					</div>
				</div>
				<div className="flex lg:items-center lg:flex-row flex-col-reverse gap-15 lg:gap-20">
					<div className="relative lg:mb-0 -mb-15 flex-none sm:w-122 -ml-30 aspect-488/630">
						<Image
							src="/images/equipment-page/reserve/main.png"
							fill
							alt=""
						/>
					</div>
					<div>
						<p className="mb-4 text-[17px] leading-tight font-helvetica">
							Питание остается на приоритетных контурах — контроллеры, связь/интернет, охрана, сервер, аварийный свет — так что все сценарии умного дома и замки остаются активны без пауз.
						</p>
						<a href="#" className="font-helvetica inline-flex items-center gap-1 text-[15px] font-medium text-brand-blue group">
							Бесперебойное электроснабжение
							<RightArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"></RightArrowIcon>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
