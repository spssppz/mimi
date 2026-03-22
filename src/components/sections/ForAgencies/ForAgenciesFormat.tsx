import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function ForAgenciesFormat() {
	return (
		<section className="py-22.5 lg:py-30">
			<div className="max-w-235.5 px-4 mx-auto">
				<Title className="mb-10">Формат сотрудничества</Title>
				<ul className="grid md:grid-cols-2 gap-5">
					<li className="min-h-125 max-md:flex-col max-md:p-6 md:pl-10 lg:pl-15 flex items-center justify-between md:col-span-2 rounded-3xl bg-white text-[22px] md:text-[26px] lg:text-[32px] font-semibold leading-[1.3] -tracking-[0.01em]">
						<h3 className="self-start">Оплата по этапам.</h3>
						<div className="max-md:max-w-95">
							<Image
								src="/images/for-agencies-page/format/1.svg"
								alt=""
								width={430}
								height={500}
							/>
						</div>
					</li>
					<li className="min-h-125 md:min-h-150 flex flex-col gap-25 max-md:p-6 md:px-15 md:py-9.25 rounded-3xl bg-white text-[22px] md:text-[26px] lg:text-[32px] font-semibold leading-[1.3] -tracking-[0.01em]">
						<h3>Агентское вознаграждение.</h3>
						<div className="self-center min-h-50 flex items-center">
							<Image
								src="/images/for-agencies-page/format/2.svg"
								alt=""
								width={197}
								height={42}
							/>
						</div>
					</li>
					<li className="min-h-125 md:min-h-150 flex flex-col max-md:p-6 md:px-15 md:py-9.25 rounded-3xl bg-white text-[22px] md:text-[26px] lg:text-[32px] font-semibold leading-[1.3] -tracking-[0.01em] gap-35">
						<h3>Белые договора.</h3>
						<div className="self-center min-h-50 flex items-center">
							<Image
								src="/images/for-agencies-page/format/3.png"
								alt=""
								width={170}
								height={170}
							/>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}