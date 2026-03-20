import Image from "next/image";

export default function CinemaHomeSlogan() {
	return (
		<div className="pt-22.5 pb-22.5 lg:pb-30">
			<div className="max-w-235.5 px-4 mx-auto flex flex-col items-center text-center">
				<div className="mb-10 max-md:max-w-50">
					<Image
						src="/images/cinema-home-page/slogan-decor.png"
						width={239}
						height={240}
						alt=""
					/>
				</div>
				<div className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.67] font-semibold bg-linear-to-b from-foreground to-transparent bg-clip-text text-transparent">
					Умные домашние кинотеатры представляют собой интегрированные системы, которые позволяют с легкостью управлять всеми видами оборудования в кинозале.
				</div>
			</div>
		</div>
	)
}