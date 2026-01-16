import Image from "next/image";
import { Title } from "../UI/Title";
import { RightArrowIcon } from "@/icons/RightArrowIcon";

export default function Advantages() {
	return (
		<section className="pt-30 pb-22.5">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-10">Преимущества умного <br />
					дома MiMiSmart</Title>
				<a href="#" className="mb-10 inline-flex items-center gap-1 text-[15px] font-medium text-brand-blue group">
					Узнать больше
					<RightArrowIcon className="w-5 h-5"></RightArrowIcon>
				</a>
				<ul className="grid sm:grid-cols-2 lg:flex gap-4 sm:gap-5 flex-wrap">
					<li className="shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] tracking-[-0.01em] lg:w-[32%] p-6 min-h-65 rounded-[20px] bg-[#d8d8d8] overflow-hidden relative">
						<span className="absolute bottom-3 left-4 leading-tight font-bold text-[64px] text-black">Навсегда</span>
						<div className="blur-anim">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<h3 className="relative mb-1 font-medium text-[16px]">Пожизненная гарантия.</h3>
						<p className="relative font-helvetica text-[15px] text-brand-gray">
							Самая высокая гарантия на рынке в мире и круглосуточная поддержка.
						</p>
						<a href="" className="items-center justify-center flex rounded-full w-8.5 h-8.5 bg-white overflow-hidden absolute right-2.5 bottom-2.5">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path

									d="M4.58337 11H17.4167"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M11 4.5835V17.4168"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</li>
					<li className="lg:w-[42.75%] tracking-[-0.01em] p-6 min-h-65 rounded-[20px] bg-[#0f1015] overflow-hidden relative">
						<Image
							src="/images/advantages/2.png"
							alt="background"
							fill
							className="object-cover"
						/>
						<h3 className="relative mb-1 font-medium text-white text-[16px]">Произведение искусства.</h3>
						<p className="relative font-helvetica text-[15px] text-brand-gray">
							Самые миниатюрные и технологичные датчики для автоматизации в мире.
						</p>
						<a href="" className="items-center justify-center flex rounded-full w-8.5 h-8.5 bg-white overflow-hidden absolute right-2.5 bottom-2.5">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4.58337 11H17.4167"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M11 4.5835V17.4168"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</li>
					<li className="hidden xl:block lg:w-[21.75%] min-h-65 relative">

						<Image
							src="/images/advantages/decor-1.svg"
							alt="background"
							fill
							className="object-cover"
						/>
					</li>
					<li className="lg:ml-auto lg:w-[22%] tracking-[-0.01em] p-6 min-h-65 rounded-[20px] bg-[#0f1015] overflow-hidden relative">
						<Image
							src="/images/advantages/3.png"
							alt="background"
							fill
							className="object-cover"
						/>
						<h3 className="relative mb-1 font-medium text-white text-[16px]">5000+ объектов на системе MiMiSmart.</h3>
						<p className="relative font-helvetica text-[15px] text-brand-gray">
							53 представительства <br />по всему Миру.
						</p>
						<a href="" className="items-center justify-center flex rounded-full w-8.5 h-8.5 bg-white overflow-hidden absolute right-2.5 bottom-2.5">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4.58337 11H17.4167"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M11 4.5835V17.4168"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</li>
					<li className="lg:w-[22%] tracking-[-0.01em] p-6 min-h-65 rounded-[20px] bg-[#d8d8d8] overflow-hidden relative">
						<Image
							src="/images/advantages/4.png"
							alt="background"
							fill
							className="object-cover"
						/>
						<h3 className="relative mb-1 font-medium text-[16px]">Децентрализация.</h3>
						<p className="relative font-helvetica text-[15px] text-brand-gray">
							Высокая надежность при любых авариях.
						</p>
						<a href="" className="items-center justify-center flex rounded-full w-8.5 h-8.5 bg-white overflow-hidden absolute right-2.5 bottom-2.5">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4.58337 11H17.4167"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M11 4.5835V17.4168"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</li>
					<li className="relative lg:w-[32%] tracking-[-0.01em] p-6 min-h-65 rounded-[20px] bg-[#d8d8d8] overflow-hidden">
						<Image
							src="/images/advantages/5.png"
							alt="background"
							fill
							className="object-cover"
						/>
						<h3 className="relative mb-1 font-medium text-[16px]">Гибкость.</h3>
						<p className="relative font-helvetica text-[15px] text-brand-gray">
							Подключаем выключатели и оборудование любых брендов.
						</p>
						<a href="" className="items-center justify-center flex rounded-full w-8.5 h-8.5 bg-white overflow-hidden absolute right-2.5 bottom-2.5">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4.58337 11H17.4167"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M11 4.5835V17.4168"
									stroke="#0A051A"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};
