import Image from "next/image";

export default function AppBenefits() {
	return (
		<section className="pb-22.5 pt-15 lg:pt-7.5">
			<div className="max-w-235.5 px-4 mx-auto relative">
				<h2 className="bg-linear-to-b from-[#7748aa] to-[#535dff] bg-clip-text text-transparent mb-10 font-bold text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] leading-[1.2] flex flex-col">
					<span className="text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px]">Система</span>
					умного дома.
				</h2>
				<ul className="grid md:grid-cols-2 gap-4 lg:gap-5">
					<li className="bg-white overflow-hidden rounded-[20px] p-6 md:p-8 lg:p-10 md:col-span-2 min-h-100 relative">
						<div className="space-y-4 relative z-10 max-w-82.5">
							<div className="max-md:max-w-8">
								<Image
									src="/images/intercom-system-page/overview/icon-1.svg"
									width={42}
									height={42}
									alt=""
								/>
							</div>
							<h3 className="font-semibold text-[22px] md:text-[28px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">Открывайте ворота
								через телефон
								в любой точке</h3>
							<div className="text-[15px] leading-[1.4] -tracking-[0.01em] font-helvetica">
								Работает без интернета и Bluetooth
							</div>
						</div>
						<div className="absolute right-0 bottom-0 aspect-614/368 w-full md:w-[67.5%]">
							<Image
								src="/images/intercom-system-page/overview/1.png"
								alt=""
								fill
							/>
						</div>
					</li>
					<li className="bg-white overflow-hidden flex flex-col gap-25 rounded-[20px] p-6 md:p-8 lg:p-10 lg:min-h-150">
						<div>
							<h3 className="mb-4 font-semibold text-[22px] md:text-[28px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">Дом на ваших устройствах.</h3>
							<div className="text-[15px] leading-[1.4] -tracking-[0.01em] font-helvetica">iOS, Android, ПК, часы - один аккаунт и синхронизация настроек.</div>
						</div>
						<div className="self-center">
							<Image
								src="/images/app-page/benefits/2.png"
								alt=""
								width={163}
								height={164}
							/>
						</div>
					</li>
					<li className="bg-white overflow-hidden rounded-[20px] pt-6 px-6 md:px-8 md:pt-8 lg:px-10 lg:pt-10 lg:min-h-150">
						<div className="mb-15">
							<h3 className="mb-4 font-semibold text-[22px] md:text-[28px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">Следите за безопасностью дома</h3>
							<div className="text-[15px] leading-[1.4] -tracking-[0.01em] font-helvetica">Работает без интернета и Bluetooth</div>
						</div>
						<div >
							<Image
								src="/images/app-page/benefits/3.png"
								alt=""
								width={370}
								height={421}
							/>
						</div>
					</li>
					<li className="md:min-h-100 bg-white overflow-hidden rounded-[20px] md:col-span-2 flex max-md:flex-col justify-between gap-5 md:pl-10">
						<div className="col-span-2 max-md:p-5 md:py-8 lg:py-10 max-w-97.5 space-y-4">
							<Image
								src="/images/intercom-system-page/overview/icon-1.svg"
								width={42}
								height={42}
								alt=""
							/>
							<h3 className="font-semibold text-[22px] md:text-[28px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">Умный дом полностью в одном приложении</h3>
							<div className="text-[15px] leading-[1.4] -tracking-[0.01em] font-helvetica">Управляйте освещением, климатом и всеми остальными функциями умного дома</div>
						</div>
						<div className="max-md:self-end">
							<Image
								src="/images/intercom-system-page/overview/4.png"
								alt=""
								width={371}
								height={401}
							/>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}