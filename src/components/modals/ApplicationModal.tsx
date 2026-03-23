"use client"

import { useEffect, useRef } from "react"
import { Title } from "../UI/ApplicationTitle"
import Image from "next/image"
import { contacts } from "@/config/contacts"
import { brand } from "@/config/brand"

interface ApplicationModalProps {
	onClose: () => void
}

export function ApplicationModal({ onClose }: ApplicationModalProps) {
	const modalRef = useRef<HTMLDivElement | null>(null)

	// Закрытие по ESC
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose()
		}
		document.addEventListener("keydown", onKeyDown)
		return () => document.removeEventListener("keydown", onKeyDown)
	}, [onClose])

	useEffect(() => {
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
		document.body.style.overflow = 'hidden'
		if (scrollbarWidth > 0) {
			document.body.style.paddingRight = `${scrollbarWidth}px`
		}
		return () => {
			document.body.style.overflow = ''
			document.body.style.paddingRight = ''
		}
	}, [])

	const onOverlayClick = (e: React.MouseEvent) => {
		if (!modalRef.current?.contains(e.target as Node)) {
			onClose()
		}
	}

	const phoneClean = contacts.phone.replace(/[^\d]/g, "")
	return (
		<div
			onClick={onOverlayClick}
			className="fixed inset-0 z-100 px-4 py-8 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in"
		>
			<div
				ref={modalRef}
				className="bg-background md:px-10 lg:px-13 px-4 pb-6 md:pb-10 pt-18 lg:pt-16.5 max-w-125 w-full rounded-3xl animate-scale-in relative shadow-2xl"
			>
				<button
					onClick={onClose}
					className="cursor-pointer absolute top-5 right-5 w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center hover:bg-foreground hover:text-white transition-all duration-300 group"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
				<Title className="mb-10 text-center">Оставить заявку</Title>
				<div className='mb-10 space-y-4 leading-snug text-[14px] tracking-[-0.01em] font-helvetica'>
					<div className="flex pb-4 border-b border-black/10 items-center gap-3">
						<div className="w-12.5 h-12.5 bg-white rounded-[10px]">
							<Image
								src="/images/icons/address-decor.svg"
								width={50}
								height={50}
								alt="г. Москва, Новоданиловская наб., 6к1"
							/>
						</div>
						<div className="text-[15px] max-w-49">
							<a className="text-brand-blue" href="" target="_blank">
								{brand.address}
							</a>
						</div>
					</div>
					<div className='text-brand-blue flex items-center gap-3'>
						<div className='basis-12.5 w-12.5'>
							<Image
								className="w-full h-auto"
								src="/images/icons/phone-header.svg"
								alt="MiMiSmart"
								width={50}
								height={50}
							/>
						</div>
						<div>
							<a className="transition-colors duration-300 hover:text-foreground" href={`tel:${phoneClean}`}>{contacts.phone}</a>
							<p className='text-[#acacac]'>Время работы: {contacts.workingHours}</p>
						</div>
					</div>
				</div>
				<form className="w-full flex flex-col">
					<div className="space-y-3 mb-5">
						<label className="block">
							<input
								type="text"
								name="name"
								placeholder="Ваше имя*"
								required
								className="h-10.75 w-full rounded-lg bg-white px-3 text-[15px] text-black placeholder:text-black/40 outline-none transition"
							/>
						</label>
						<label className="block">
							<input
								type="tel"
								name="phone"
								placeholder="Телефон*"
								required
								className="h-10.75 w-full rounded-lg bg-white px-3 text-[15px] text-black placeholder:text-black/40 outline-none transition"
							/>
						</label>
					</div>

					<label className="flex cursor-pointer items-start gap-3 md:gap-2 mb-5 md:mb-6">
						<input
							type="checkbox"
							name="policy"
							required
							className="h-5 w-5 shrink-0 appearance-none rounded-sm bg-[#d9d9d9] checked:bg-[#008dff] focus:outline-none focus:ring-2 focus:ring-[#00aeef]"
						/>

						<span className="text-[13px] leading-[1.2] text-[#999]">
							Нажимая на кнопку “Отправить заявку”, вы соглашаетесь с&nbsp;
							<a
								href="/privacy-policy"
								className="text-brand-blue"
							>
								условиями обработки персональных данных
							</a>
						</span>
					</label>

					<button
						type="submit"
						className="self-center bg-[#00d0ff] duration-300 transition-colors cursor-pointer hover:bg-brand-blue leading-none rounded-[50px] pt-3.5 pb-3 px-10 font-medium text-[14px] text-white"
					>
						Отправить заявку
					</button>
				</form>
			</div>
		</div>
	)
}