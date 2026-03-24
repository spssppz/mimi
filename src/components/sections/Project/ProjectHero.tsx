import Image from "next/image";

export default function ProjectHero() {
	return (
		<section className="pt-15 overflow-hidden text-black">
			<div className="max-w-368 px-4 mx-auto flex font-bold flex-col items-center text-center -tracking-[0.01em]">
				<div className="mb-7 flex items-center justify-center gap-4 lg:gap-6 text-[15px]">
					<span>Дом</span>
					<span>•</span>
					<span>650 м2</span>
				</div>
				<h1 className="whitespace-nowrap mb-13.5 md:mb-16 lg:mb-22.5 text-[24px] md:text-[32px] lg:text-[48px] xl:text-[64px]">
					Большой дом для большой семьи — Большой дом для большой семьи — Большой дом для большой семьи —
				</h1>
				<div className="relative w-full max-xl:-mx-4 aspect-1440/900">
					<Image
						src="/images/project-page/hero.jpg"
						fill
						alt=""
						quality={95}
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	)
}