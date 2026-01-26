import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function CinemaTV() {
	return (
		<section className="pt-43 relative min-h-250 py-10 bg-foreground text-center">
			<Image
				src="/images/cinema-page/tv/bg-pc.jpg"
				fill
				alt="bg"
				className="object-cover"
			/>
			<div className="max-w-308 mx-auto px-4 relative flex flex-col items-center">
				<Title className="mb-4 text-white">CinemaHero</Title>
				<div className="max-w-143 text-[17px] leading-tight -tracking-[0.01em] text-brand-gray">
					Несмотря на большое количество колонок, вы не увидите в интерьере ничего лишнего. Все оборудование и коммуникации скрыты от глаз или хорошо сочетается с интерьером.
				</div>
			</div>
		</section>
	);
}