import { Button } from "@/components/UI/Button"
import { Title } from "@/components/UI/Title"
import Image from "next/image"

export default function SecurityHero() {
	return (
		<section className="min-h-245 pt-15 relative">
			<div className="absolute top-0 right-0 w-120 aspect-480/340">
				<Image
					src="/images/security-page/hero/dots-decor.png"
					fill
					alt=""
					className="hidden lg:block"
				/>
			</div>
			<div className="max-w-308 mx-auto px-4 flex flex-col items-center text-center relative">
				<Title className="mb-6 lg:mb-4">Безопасный дом</Title>
				<div className="mb-6 lg:mb-8 max-w-130 text-[17px] leading-tight -tracking-[0.01em]">Системы безопасности в умном доме объединяют в себя все основные разделы безопасности и обеспечивают защиту жилья и безопасное проживание его обитателей.</div>
				<Button className="mb-10">Узнать больше</Button>
				<Image
					src="/images/security-page/hero/main.png"
					width={830}
					height={644}
					alt=""
				/>
			</div>
		</section>
	)
}
