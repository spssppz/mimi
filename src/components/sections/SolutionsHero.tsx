"use client"

import Image from "next/image";
import { Button } from "../UI/Button";
import { Title } from "../UI/Title";
import { ReactNode, useState } from "react";
import { ApplicationModal } from "../modals/ApplicationModal";

type Props = {
	title: ReactNode
	image: string
	className?: string
}

export default function SolutionsHero({
	title,
	image,
	className
}: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<section className={`lg:min-h-195 min-h-198 py-18 md:pt-22 lg:py-25 relative flex items-end ${className}`}>
				<Image
					fill
					className="object-cover"
					alt=""
					src={image}
				/>
				<div className="absolute left-0 w-full bottom-0 h-[40%] bg-linear-to-b from-[#F4F4F4]/0 to-[#F4F4F4]"></div>
				<div className="max-w-308 px-4 mx-auto max-md:flex-col relative flex items-start md:items-end justify-between gap-6 lg:gap-10 w-full">
					<Title>{title}</Title>
					<Button
						onClick={() => setIsModalOpen(true)}
						className="justify-center py-1.75!"
					>
						Оставить заявку
					</Button>
				</div>
			</section>

			{isModalOpen && (
				<ApplicationModal onClose={() => setIsModalOpen(false)} />
			)}
		</>
	)
}