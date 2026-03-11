import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function DimmingImplement() {
	return (
		<section className="pt-15 lg:pt-22.5 bg-white">
			<Title className="max-w-308 px-4 mx-auto mb-15 lg:mb-22.5">Как мы реализуем</Title>
			<div className="pt-15 lg:pt-30 pb-30 relative">
				<Image
					fill
					alt=""
					src="/images/dimming-page/implement-bg.jpg"
					quality={95}
					className="object-cover"
				/>
				<div className="max-w-308 px-4 mx-auto relative">
					<div className="max-w-194 space-y-[1em] font-bold text-[24px] md:text-[28px] lg:text-[32px] leading-[1.4] -tracking-[0.01em] bg-linear-to-br from-[#dbbdb1] to-[#ded1cc] bg-clip-text text-transparent">
						<p>Подбираем совместимые драйверы и протокол управления под ваши светильники: DALI/DALI-2, 0–10 В.</p>
						<p>На пусконаладке задаём нижний порог, чтобы свет не опускался на 3–5%, настраиваем время мягкого старта/затухания и синхронизацию групп.</p>
						<p>Всё работает локально и сохраняет настройки даже при отключении электропитания.</p>
					</div>
				</div>

			</div>
		</section>
	);
}