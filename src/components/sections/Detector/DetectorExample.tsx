import { Title } from "@/components/UI/Title"
import { DetectorExampleData } from "@/types/detector"
import Image from "next/image"

type Props = {
	example?: DetectorExampleData
}

export default function DetectorExample({ example }: Props) {
	if (!example) return null

	return (
		<div className={`${example.theme === 'dark' ? 'bg-foreground text-white' : 'bg-white'} pt-10 md:pt-15 lg:pt-22.5 pb-15 md:pb-22.5 lg:pb-30`}>
			<div className="max-w-308 px-4 mx-auto">
				<div className={`${example.theme === 'dark' ? 'bg-black' : 'bg-background'} max-lg:flex-col px-4 md:px-10 lg:px-20 pt-10 lg:py-15 flex justify-between gap-10 items-center`}>
					<div className="lg:max-w-130">
						<Title className="mb-6">{example.title}</Title>
						<div className="font-helvetica text-[17px] -tracking-[0.01em]">
							{example.text}
						</div>
					</div>
					<div className="max-w-100">
						<Image
							width={example.imageWidth || 390}
							height={example.imageHeight || 390}
							alt={example.title}
							src={example.image}
							quality={95}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}