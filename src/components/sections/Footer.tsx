import { footerColumns, socialLinks } from "@/data/footer";
import { FooterColumnData } from "@/types/footer";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";
import { contacts } from "@/config/contacts";
import { routes } from "@/config/routes";

export function FooterColumn({ title, links, showOnMobile }: FooterColumnData) {
	return (
		<div className={`break-inside-avoid ${showOnMobile ? 'block' : 'hidden md:block'}`}>
			<h4 className="font-medium text-[14px] mb-3 tracking-wide text-[#0a051a]">
				{title}
			</h4>

			<ul className="flex flex-col gap-2">
				{links.map(({ label, href }) => (
					<li key={`${title}-${label}`}>
						<Link
							href={href}
							className="font-helvetica text-brand-light-gray/60 text-[13px] transition-colors hover:text-brand-light-gray"
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default function Footer() {
	const phoneClean = contacts.phone.replace(/[^\d]/g, "")
	return (
		<footer className="bg-[#efefef] py-10">
			<div className="max-w-308 mx-auto px-4">
				<div className="border-t border-[#d9d9d9] pt-6 pb-10">
					<Link href="/" className="inline-block mb-10">
						<Image
							src={brand.logo.src}
							alt={brand.name}
							width={brand.logo.width}
							height={brand.logo.height}
							priority
						/>
					</Link>

					<div className="columns-2 space-y-10 md:space-y-6 md:columns-3 lg:columns-5 gap-10">
						{footerColumns.map(column => (
							<FooterColumn
								key={column.title}
								title={column.title}
								links={column.links}
								showOnMobile={column.showOnMobile}
							/>
						))}

						<div className="block break-inside-avoid">
							<h4 className="font-medium text-[14px] mb-3 text-[#0a051a] tracking-wide">
								Контакты
							</h4>
							<div className="flex flex-col items-start mb-4">
								<a
									href={`tel:${phoneClean}`}
									className="font-helvetica whitespace-nowrap text-brand-blue text-[14px] mb-4 transition-colors hover:text-brand-light-gray"
								>
									{contacts.phone}
								</a>
								<a
									href={`mailto:${contacts.email}`}
									className="font-helvetica text-brand-blue text-[14px] transition-colors hover:text-brand-light-gray"
								>
									{contacts.email}
								</a>
							</div>
							<nav
								className="flex gap-4"
								aria-label="Социальные сети"
							>
								{socialLinks.map(icon => (
									<Link
										key={icon.name}
										href={icon.href}
										className="w-4.5 h-4.5 block duration-300 transition-transform ease-in-out hover:scale-125"
									>
										<Image
											src={icon.path}
											alt={icon.name}
											width={18}
											height={18}
										/>
									</Link>
								))}
							</nav>
						</div>
					</div>
				</div>
				<div className="font-helvetica text-[#0a051a] border-t text-[13px] border-[#d9d9d9] pt-6 flex flex-col justify-between items-start gap-2.5 md:gap-4 md:flex-row md:items-center">
					<p>&copy; 2025 MiMiSmart. All rights reserved.</p>
					<Link href={`${routes.privacy}`} className="text-brand-light-gray/60 transition-colors hover:text-brand-light-gray">Политика конфиденциальности</Link>
				</div>
			</div>
		</footer>
	)
}