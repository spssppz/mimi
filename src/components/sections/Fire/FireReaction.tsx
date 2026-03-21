import { Title } from "@/components/UI/Title";
import { RightArrowIcon } from "@/icons/RightArrowIcon";
import Image from "next/image";

export default function FireReaction() {
	return (
		<section className="max-md:pb-22.5 pt-22.5 bg-black relative overlfow-hidden">
			<div className="absolute left-0 -bottom-6 w-full h-19.25 bg-linear-to-r from-foreground via-[#804848] to-foreground blur-[30px]"></div>
			<div className="relative max-w-308 px-4 mx-auto">
				<Title className="mb-10 text-center max-w-175 mx-auto bg-linear-to-b from-[#fff4eb] from-[52.2%] to-[#ff4425] bg-clip-text text-transparent">Оперативная
					реакция на пожар</Title>
				<div className="flex justify-end pr-27.5">
					<Image
						src="/images/fire-page/reaction/top-decor.png"
						width={682}
						height={40}
						quality={95}
						alt=""
					/>
				</div>
				<div className="flex items-center max-md:flex-col justify-between gap-5">
					<div className="relative w-[63%] aspect-756/694">

						<Image
							src="/images/fire-page/reaction/smoke.png"
							fill
							quality={95}
							alt=""
						/>
					</div>
					<div className="max-w-86.5 space-y-6">
						<Image
							src="/images/fire-page/reaction/icon.svg"
							width={54}
							height={54}
							alt=""
						/>
						<div className="font-helvetica text-[17px] leading-[1.3] -tracking-[0.01em] text-white">
							Пожарная сигнализация является неотъемлемой частью системы охраны и безопасности умного дома. Она предназначена для раннего обнаружения и предотвращения пожаров в жилых и коммерческих помещениях.
						</div>
						<a href="#" className="inline-flex hover:text-foreground transition-colors duration-300 items-center gap-1 text-[15px] font-medium text-brand-blue group">
							Узнать больше
							<RightArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}