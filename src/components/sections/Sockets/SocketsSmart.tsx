import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function SocketsSmart() {
	return (
		<section className="py-22.5 bg-white">
			<div className="max-w-308 px-4 mx-auto">
				<Title className="mb-2">Умные розетки</Title>
				<div className="xl:pr-20 max-md:flex-col flex gap-10 md:gap-3 md:items-center justify-between">
					<div className="relative aspect-780/622 max-w-100 md:w-[65%] -ml-5">
						<Image
							src="/images/sockets-page/smart-decor.png"
							fill
							alt=""
						/>
					</div>
					<div className="md:max-w-86.75">
						<Image
							src="/images/partners-page/for-dealer/icon.svg"
							width={54}
							height={54}
							alt=""
							className="mb-6"
						/>
						<p className="font-helvetica text-[17px] leading-[1.4] -tracking-[0.01em] text-brand-gray">Вы можете включать и выключать приборы с помощью приложения на смартфоне или планшете, а также настраивать таймеры и сценарии работы. Эта функция особенно полезна, когда вы вдали от дома и хотите включить или выключить приборы перед вашим возвращением.</p>
					</div>
				</div>
			</div>
		</section>
	)
}