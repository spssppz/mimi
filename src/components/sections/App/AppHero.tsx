import ArrowLink from "@/components/UI/ArrowLink";
import { contacts } from "@/config/contacts";
import Image from "next/image";

export default function AppHero() {
	return (
		<section className="pt-15 pb-22.5 overflow-hidden">
			<div className="max-w-235.5 px-4 mx-auto flex flex-col items-center text-center">
				<div className="mb-15 flex flex-col items-center text-center gap-4 font-bold text-[22px] lg:text-[24px] text-black -tracking-[0.01em]">
					<Image
						src="/images/app-page/hero/icon.svg"
						width={100}
						height={100}
						alt=""
					/>
					<span>MiMiSmart</span>
				</div>
				<div className="mb-15 relative">

					<div className="absolute w-95 md:w-160 lg:w-245 xl:w-300 aspect-1201/225 left-1/2 top-1/2 -translate-1/2">
						<Image
							src="/images/app-page/hero/title.png"
							quality={95}
							fill
							alt="Приложение"
						/>
					</div>
					<div className="max-md:max-w-68.25">
						<Image
							src="/images/app-page/hero/phone.png"
							width={340}
							height={696}
							alt=""
							className="relative"
						/>
					</div>
				</div>
				<div className="mb-15 flex gap-15">
					{contacts.apps?.map(app => {
						const IconComponent = app.icon
						return (
							<div key={app.label} className="flex items-center gap-4">
								<IconComponent className="w-8 h-8 text-foreground" />
								<div className="flex flex-col items-start gap-2">
									<span className="font-bold text-[15px] -tracking-[0.01em]">{app.label}</span>
									<ArrowLink href={app.href}>Скачать</ArrowLink>
								</div>
							</div>
						)
					})}
					{/* {contacts.socials?.map(icon => {
								const IconComponent = icon.icon
								return (
									<Link
										key={icon.name}
										href={icon.href}
										target="_blank"
										className="w-4.5 h-4.5 block duration-300 transition-transform ease-in-out hover:scale-125"
									>
										<IconComponent className={`w-4.5 h-4.5 transition duration-300 ${enabled ? "text-blue/40" : "text-[#0B0D10]/40"}`} />
									</Link>
								)
							})} */}
				</div>
				<div className="max-w-150 font-helvetica text-[19px] -tracking-[0.01em] leading-normal">
					Приложение сейчас есть практически у всего и подчас при прочих равных условиях компания или услуга выбирается из-за его удобства. Приложение Умный дом нашей компании бесплатное, в отличии от некоторых конкурентов, и Вы можете скачать его с Google Play или AppStore. Введите в поиске MiMiSmart и вы сразу его найдете.
				</div>
			</div>
		</section>
	)
}