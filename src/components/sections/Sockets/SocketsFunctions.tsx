import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function SocketsFunctions() {
	return (
		<section className="py-22.5 bg-white">
			<div className="max-w-308 px-4 mx-auto">
				<Title className="mb-10">Функции умной розетки</Title>
				<ul className="-tracking-[0.01em] max-lg:flex-col flex gap-5">
					<li className="bg-background rounded-[20px] min-h-135 relative p-6">
						<div className="max-lg:hidden absolute top-0 right-0 aspect-446/403 w-[59.3%]">
							<Image
								src="/images/sockets-page/functions/decor.png"
								fill
								className="object-cover"
								alt=""
							/>
						</div>
						<div className="relative h-full flex flex-col">
							<Image
								src="/images/sockets-page/functions/1.png"
								width={346}
								height={346}
								alt=""
							/>
							<h3 className="self-start mt-auto mb-2 font-medium text-[17px]">Встроенный термостат.</h3>
							<div className="self-start font-helvetica text-[15px] text-brand-gray">Вы можете настроить розетку, чтобы включить свет каждый вечер в определенное время или выключить компьютер через несколько минут после использования. Это особенно удобно, когда вам нужно вовремя выключить утюг или лампу.</div>
						</div>
					</li>
					<li className="basis-[32%] grow-0 shrink-0 bg-background rounded-[20px] min-h-135 p-6 flex flex-col items-center">
						<Image
							src="/images/sockets-page/functions/2.png"
							width={200}
							height={319}
							alt=""
						/>
						<h3 className="self-start mt-auto mb-2 font-medium text-[17px]">Таймер для автоматического включения и выключения приборов.</h3>
						<div className="self-start font-helvetica text-[15px] text-brand-gray">Вы можете настроить розетку таким образом, чтобы включить обогреватель, когда комната становится холодной, и выключить его, когда достигается нужная температура.</div>
					</li>
				</ul>
			</div>
		</section>
	)
}