import Image from "next/image";
import { Title } from "@/components/UI/Title";
import { Button } from "@/components/UI/Button";

export default function SmartSwitchesHero() {
	return (
		<section className="lg:min-h-225 min-h-198 py-22.5 flex items-center relative overflow-hidden">
			<div className="absolute top-1/2 -translate-y-1/2 left-1/2 min-w-[300%] md:min-w-[200%] lg:min-w-360 -translate-x-1/2 w-full aspect-1658/1082">
				<Image
					src="/images/smart-switches-page/hero-decor.png"
					fill
					alt=""
				/>
			</div>
			<div className="max-w-235.5 px-4 relative mx-auto flex flex-col text-center items-center w-full">
				<div className="max-lg:hidden font-bold text-[64px]">Фурнитура.</div>
				<Title className="bg-linear-to-r from-brand-blue to-[#f00] bg-clip-text text-transparent mb-6">Умные выключатели</Title>
				<div className="mb-6 max-w-140 -tracking-[0.01em] text-[17px] leading-[1.3]">Управление светом и сценариями в эстетичном исполнении.</div>
				<Button className="justify-center py-1.75!">Подобрать дизайн</Button>
			</div>
		</section>
	)
}