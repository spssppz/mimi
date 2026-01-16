import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function Team() {
	return (
		<section className="bg-foreground">
			<div className="py-22.5 lg:py-0 max-w-308 mx-auto px-4 flex lg:items-center flex-col lg:flex-row gap-20 lg:gap-10 justify-between">
				<div className="lg:py-20 flex-none lg:w-135">
					<Title className="mb-4 bg-linear-to-br from-white to-[#999] bg-clip-text text-transparent">Креативная команда MiMiSmart</Title>
					<div className="font-helvetica text-[17px] tracking-[-0.01em] max-w-89 text-brand-gray">Выкатили пятое поколение нашего приложения, которое считаем самым успешным и удобным.</div>
				</div>
				<div className="lg:-mr-20 lg:flex gap-2.5 lg:max-h-195 overflow-hidden">
					<ul className="lg:space-y-2.5 lg:min-w-65 flex gap-2.5 lg:block">
						<li className="min-w-65 lg:min-w-0 relative flex flex-col items-start justify-end px-4 py-3 aspect-260/290 tracking-[-0.01em] rounded-xl overflow-hidden">
							<Image
								src="/images/team/1.jpg"
								fill
								alt="Фон"
							/>
							<div className="bg-linear-to-b from-transparent to-black absolute bottom-0 left-0 w-full aspect-260/81"></div>
							<div className="relative font-medium text-[17px] text-white mb-1.5">Андрей</div>
							<div className="relative font-helvetica text-[#acacac] backdrop-blur-sm bg-[rgba(63, 63, 63)]/50 rounded-[50px] py-1 px-3 text-[14px]">Менеджер по продажам</div>
						</li>
						<li className="min-w-65 lg:min-w-0 relative flex flex-col items-start justify-end px-4 py-3 aspect-260/290 tracking-[-0.01em] rounded-xl overflow-hidden">
							<Image
								src="/images/team/2.jpg"
								fill
								alt="Фон"
							/>
							<div className="bg-linear-to-b from-transparent to-black absolute bottom-0 left-0 w-full aspect-260/81"></div>
							<div className="relative font-medium text-[17px] text-white mb-1.5">Андрей</div>
							<div className="relative font-helvetica text-[#acacac] backdrop-blur-sm bg-[rgba(63, 63, 63)]/50 rounded-[50px] py-1 px-3 text-[14px]">Менеджер по продажам</div>
						</li>
						<li className="min-w-65 lg:min-w-0 relative flex flex-col items-start justify-end px-4 py-3 aspect-260/290 tracking-[-0.01em] rounded-xl overflow-hidden">
							<Image
								src="/images/team/3.jpg"
								fill
								alt="Фон"
							/>
							<div className="bg-linear-to-b from-transparent to-black absolute bottom-0 left-0 w-full aspect-260/81"></div>
							<div className="relative font-medium text-[17px] text-white mb-1.5">Андрей</div>
							<div className="relative font-helvetica text-[#acacac] backdrop-blur-sm bg-[rgba(63, 63, 63)]/50 rounded-[50px] py-1 px-3 text-[14px]">Менеджер по продажам</div>
						</li>
					</ul>
					<ul className="lg:space-y-2.5 lg:min-w-65 flex gap-2.5 lg:block">
						<li className="min-w-65 lg:min-w-0 relative flex flex-col items-start justify-end px-4 py-3 aspect-260/290 tracking-[-0.01em] rounded-xl overflow-hidden">
							<Image
								src="/images/team/4.jpg"
								fill
								alt="Фон"
							/>
							<div className="bg-linear-to-b from-transparent to-black absolute bottom-0 left-0 w-full aspect-260/81"></div>
							<div className="relative font-medium text-[17px] text-white mb-1.5">Андрей</div>
							<div className="relative font-helvetica text-[#acacac] backdrop-blur-sm bg-[rgba(63, 63, 63)]/50 rounded-[50px] py-1 px-3 text-[14px]">Менеджер по продажам</div>
						</li>
						<li className="min-w-65 lg:min-w-0 relative flex flex-col items-start justify-end px-4 py-3 aspect-260/290 tracking-[-0.01em] rounded-xl overflow-hidden">
							<Image
								src="/images/team/5.jpg"
								fill
								alt="Фон"
							/>
							<div className="bg-linear-to-b from-transparent to-black absolute bottom-0 left-0 w-full aspect-260/81"></div>
							<div className="relative font-medium text-[17px] text-white mb-1.5">Андрей</div>
							<div className="relative font-helvetica text-[#acacac] backdrop-blur-sm bg-[rgba(63, 63, 63)]/50 rounded-[50px] py-1 px-3 text-[14px]">Менеджер по продажам</div>
						</li>
						<li className="min-w-65 lg:min-w-0 relative flex flex-col items-start justify-end px-4 py-3 aspect-260/290 tracking-[-0.01em] rounded-xl overflow-hidden">
							<Image
								src="/images/team/6.jpg"
								fill
								alt="Фон"
							/>
							<div className="bg-linear-to-b from-transparent to-black absolute bottom-0 left-0 w-full aspect-260/81"></div>
							<div className="relative font-medium text-[17px] text-white mb-1.5">Андрей</div>
							<div className="relative font-helvetica text-[#acacac] backdrop-blur-sm bg-[rgba(63, 63, 63)]/50 rounded-[50px] py-1 px-3 text-[14px]">Менеджер по продажам</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
