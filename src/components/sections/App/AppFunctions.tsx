import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function AppFunctions() {
	return (
		<section className="pt-30 pb-22.5">
			<Title className="mb-10 max-w-308 px-4 mx-auto">Основные функции</Title>
			<div className="max-w-348 px-4 mx-auto">
				<div className="rounded-3xl bg-white max-md:gap-5 flex max-lg:gap-10 max-md:flex-col-reverse items-center px-6 md:px-10 lg:py-15 py-10 lg:px-20">
					<div>
						<Image
							src="/images/app-page/functions-decor.png"
							width={544}
							height={787}
							alt=""
							className="max-lg:hidden"
						/>
						<Image
							src="/images/app-page/functions-decor-mob.png"
							width={273}
							height={557}
							alt=""
							className="lg:hidden"
						/>
					</div>
					<div className="max-md:self-start max-w-lg font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">
						Удобное управление системами безопасности дома и прилегающей территории
					</div>
				</div>
			</div>
		</section>
	)
}