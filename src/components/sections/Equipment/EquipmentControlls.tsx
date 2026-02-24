import { RightArrowIcon } from "@/icons/RightArrowIcon"
import Image from "next/image"

export default function EquipmentControlls() {
	return (
		<section className="pt-22.5 lg:pt-27.5 bg-white">
			<div className="max-w-236 mx-auto px-4 -tracking-[0.01em]">
				<div className="mb-4">
					<div className="font-helvetica font-bold tracking-[0.05em] text-[18px] md:text-[24px] lg:text-[32px] leading-tight">Контроллеры</div>
					<h2 className="mb-6 font-helvetica tracking-0 font-bold text-[64px] md:text-[100px] lg:text-[140px] xl:text-[220px] bg-[linear-gradient(180deg,#0b0d10_0%,#516076_100%)] bg-clip-text text-transparent leading-tight flex flex-col">
						Основа
						<span className="-mt-4 text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px]">автоматизации.</span>
					</h2>
					<div className="text-[17px] leading-tight max-w-143">Система децентрализована, не имеет "центрального мозга", что позволяет поднять надежность системы на новый уровень.</div>
				</div>
				<div className="flex lg:items-center lg:flex-row flex-col-reverse gap-15 lg:gap-17">
					<div className="relative flex-none sm:w-111 sm:-ml-17 aspect-409/551">
						<Image
							src="/images/equipment-page/controlls/main.png"
							fill
							alt=""
						/>
					</div>
					<div className="lg:mt-30">
						<p className="mb-4 text-[17px] leading-tight ">Оборудование MiMiSmart подключается к большому числу пользователей и поддерживает более 200 модулей расширения для передачи сигналов. Устройства обладают большим запасом памяти и высокой производительностью для решения ряда специфических задач.</p>
						<a href="#" className="font-helvetica inline-flex items-center gap-1 text-[15px] font-medium text-brand-blue group">
							Узнать больше о контроллерах
							<RightArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"></RightArrowIcon>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
