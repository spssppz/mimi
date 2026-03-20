import Image from "next/image"
import { Title } from "@/components/UI/Title"

type Props = {
	title: string,
	text: string,
}

export default function FireHero({ title, text }: Props) {
	return (
		<section className="relative min-h-195  bg-black pb-22.5 lg:pb-30 text-white flex items-end overflow-hidden">
			{/* стеклянные блоки */}
			<div className="pointer-events-none absolute top-0 flex left-1/2 bottom-0 -translate-x-1/2">
				{Array.from({ length: 6 }).map((_, i) => (
					<div
						key={i}
						className="backdrop-blur-md w-27.5 md:w-36 h-full"
					/>
				))}
			</div>

			<div className="max-w-235.5 px-4 mx-auto flex flex-col items-center text-center">
				<div className="max-md:-mx-4 -mb-5">
					<Image
						src="/images/fire-page/hero-decor.png"
						width={498}
						height={498}
						alt=""
					/>
				</div>
				<Title className="relative mb-4 md:mb-6 bg-[linear-gradient(90deg,#fff4eb_0%,#fff4eb_47.6%,#ff4425_100%)] bg-clip-text text-transparent">
					{title}
				</Title>
				<div className="relative font-helvetica -tracking-[0.01em] text-[17px] leading-[1.3] max-w-135.5">
					{text}
				</div>
			</div>
		</section>
	)
}