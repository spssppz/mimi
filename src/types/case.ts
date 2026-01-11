import { FC, SVGProps } from 'react'

export type CaseItem = {
	title: string
	description: string
	image: string
	tags: string[]
}

export type Category = {
	icon: FC<SVGProps<SVGSVGElement>>
	label: string
}
