import Image from "next/image";

export default function IntercomSystemOverview() {
	return (
		<section className="pb-22.5 pt-22.5 lg:pt-30 relative">
			<div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white to-[#27579a]"></div>
			<div className="max-w-235.5 px-4 mx-auto relative">
				<ul className="grid md:grid-cols-2 mb-4 md:mb-15 lg:mb-22.5 gap-4 lg:gap-5">
					<li className="bg-white overflow-hidden rounded-[20px] p-6 md:p-8 lg:p-10 md:col-span-2 min-h-100 relative">
						<div className="space-y-4 relative z-10">
							<div className="max-md:max-w-8">
								<Image
									src="/images/intercom-system-page/overview/icon-1.svg"
									width={42}
									height={42}
									alt=""
								/>
							</div>
							<h3 className="font-semibold text-[22px] md:text-[28px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">IP-видеодомофон</h3>
							<div className="text-[15px] leading-[1.4] -tracking-[0.01em] font-helvetica">Работает без интернета и Bluetooth</div>
						</div>
						<div className="absolute right-0 bottom-0 aspect-614/368 w-full md:w-[67.5%]">
							<Image
								src="/images/intercom-system-page/overview/1.png"
								alt=""
								fill
							/>
						</div>
					</li>
					<li className="bg-white overflow-hidden rounded-[20px] p-6 md:p-8 lg:p-10 lg:min-h-150">
						<div>
							<h3 className="mb-4 font-semibold text-[22px] md:text-[28px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">Электрозамок</h3>
							<div className="text-[15px] leading-[1.4] -tracking-[0.01em] font-helvetica">Работает без интернета и Bluetooth</div>
						</div>
						<div className="relative w-[103%] aspect-388/463 -mr-10 -mb-10">
							<Image
								src="/images/intercom-system-page/overview/2.png"
								alt=""
								fill
							/>
						</div>
					</li>
					<li className="bg-white overflow-hidden rounded-[20px] p-6 md:p-8 lg:p-10 lg:min-h-150">
						<div className="mb-15">
							<h3 className="mb-4 font-semibold text-[22px] md:text-[28px] lg:text-[32px] leading-[1.3] -tracking-[0.01em]">Сенсорная панель управления</h3>
							<div className="text-[15px] leading-[1.4] -tracking-[0.01em] font-helvetica">Работает без интернета и Bluetooth</div>
						</div>
						<div className="ml-auto -mr-10 relative aspect-378/285 max-w-94.5">
							<Image
								src="/images/intercom-system-page/overview/3.jpg"
								alt=""
								fill
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
				<div className="bg-white overflow-hidden rounded-[20px] px-6 md:px-10 lg:px-15 py-10 text-center flex flex-col items-center space-y-6">
					<div className="max-md:max-w-8">
						<Image
							src="/images/intercom-system-page/overview/icon-2.svg"
							width={64}
							height={64}
							alt=""
						/>
					</div>
					<div className="font-semibold text-[17px] leading-[1.4] -tracking-[0.01em]">
						Дополнительно домофон может быть оборудован датчиками движения, подсветкой, несколькими камерами и другими устройствами, расширяющими его функционал.
					</div>
				</div>

			</div>
		</section>
	)
}