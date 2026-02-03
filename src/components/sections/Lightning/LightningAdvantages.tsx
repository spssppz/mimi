import { Button } from "@/components/UI/Button";
import Image from "next/image";

export default function LightningAdvantages() {

	return (
		<div className="pt-10 md:py-15 lg:py-30">
			<div className="max-w-235.5 mx-auto px-4">
				<ul className="grid md:grid-cols-3 gap-3 lg:gap-5 mb-5">
					<li className="bg-white rounded-[20px] p-6 text-[15px] -tracking-[0.01em]">
						<Image
							src="/images/lightning-page/advantages/1.svg"
							alt=""
							width={42}
							height={42}
							className="mb-4"
						/>
						<div className="mb-4 font-helvetica font-semibold">Способы управления:</div>
						<ul>
							<li>Голосовое управление</li>
							<li>Приложение</li>
							<li>Датчики движения</li>
							<li>Настенные выключатели</li>
						</ul>
					</li>
					<li className="bg-white rounded-[20px] p-6 text-[15px] -tracking-[0.01em]">
						<Image
							src="/images/lightning-page/advantages/2.svg"
							alt=""
							width={42}
							height={42}
							className="mb-4"
						/>
						<div className="mb-4 font-helvetica font-semibold">Чем сможете управлять:</div>
						<ul>
							<li>Шторы</li>
							<li>Светильники</li>
							<li>Наружное освещение</li>
							<li>Аварийное освещение</li>
						</ul>
					</li>
					<li className="bg-white rounded-[20px] p-6 text-[15px] -tracking-[0.01em]">
						<Image
							src="/images/lightning-page/advantages/3.svg"
							alt=""
							width={42}
							height={42}
							className="mb-4"
						/>
						<div className="mb-4 font-helvetica font-semibold">Контроль света по:</div>
						<ul>
							<li>Яркость</li>
							<li>Цвет</li>
							<li>Плавность включения</li>
						</ul>
					</li>
				</ul>
				<div className="rounded-[20px] p-6 bg-white flex flex-col md:flex-row gap-4 lg:gap-2.5 md:items-center items-start">
					<div className="flex-auto text-[15px] leading-normal -tracking-[0.01em]">
						Отправляйте нам дизайн проект с расстановкой мебели и света – мы предложим варианты, как преобразовать обычное освещение в современную электрику.
					</div>
					<Button className="justify-center">Оставить заявку</Button>
				</div>
			</div>
		</div>
	);
}