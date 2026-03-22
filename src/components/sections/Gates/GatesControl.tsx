import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function GatesControl() {
	return (
		<section className="py-22.5 overflow-hidden">
			<div className="max-w-308 px-4 mx-auto">
				<div className="mb-10 lg:mb-22.5 flex flex-col items-center text-center">
					<div className="font-bold text-[17px] md:text-[20px] lg:text-[24px] -tracking-[0.01em] text-brand-blue">Это удобно</div>
					<Title className="mb-10 lg:mb-6">Удаленное управление</Title>
					<div className="max-w-217 text-brand-gray text-[17px] lg:text-[19px] leading-[1.3] -tracking-[0.01em] font-helvetica">Где бы вы не находились, по датчику открытия/закрытия, вы всегда можете проверить, в каком положении находятся ворота. Находясь в отъезде, откройте ворота для въезда садовника с инвентарем, проконтролируйте его работу через камеры видеонаблюдения, а после закройте за ним ворота, поставив двор на сигнализацию охраны периметра.</div>
				</div>
				<div className="flex max-md:flex-col md:items-center gap-10 md:gap-24 lg:pr-20 justify-between">
					<div className="md:w-[66.6%] max-md:max-w-110 shrink-0 grow-0 -ml-6 md:-ml-[10%] relative aspect-800/434">
						<Image
							src="/images/gates-page/control/decor.png"
							fill
							alt=""
						/>
					</div>
					<div className="max-w-86.5">
						<Image
							src="/images/gates-page/control/icon.svg"
							width={54}
							height={54}
							alt=""
							className="mb-6"
						/>
						<div className="font-helvetica text-[17px] leading-[1.4] -tracking-[0.01em] text-brand-gray">Управление воротами в умном доме производится через домашнюю сеть WiFi, удаленно через интернет, и как резервный способ - через GSM-канал по звонку на номер вашего Умного дома.</div>
					</div>
				</div>
			</div>
		</section>
	)
}