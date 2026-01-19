import { RightArrowIcon } from "@/icons/RightArrowIcon"
import Image from "next/image"

export default function EquipmentApp() {
	return (
		<section className="pt-22.5 lg:pt-27.5 bg-linear-to-b from-foreground to-black text-white">
			<div className="max-w-236 mx-auto px-4 -tracking-[0.01em]">
				<div className="mb-10 md:mb-20 lg:mb-30">
					<div className="font-helvetica font-bold text-[18px] md:text-[24px] lg:text-[32px] leading-tight">Приложение</div>
					<h2 className="mb-6 font-helvetica tracking-0 font-bold text-[64px] md:text-[100px] lg:text-[140px] xl:text-[220px] bg-[linear-gradient(180deg,#7748aa_0%,#ff1457_100%)] bg-clip-text text-transparent leading-tight">
						Система <br />
						<span className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px]">умного дома.</span>
					</h2>
					<div className="text-[17px] leading-tight max-w-143">
						Использование приложения подразумевает под собой любая система умного дома, но его простота и понятность - это намного важнее и до этого дошли немногие.
					</div>
				</div>
				<div className="flex lg:items-center lg:flex-row flex-col-reverse gap-15 lg:gap-20">
					<div className="relative flex-none sm:w-88.25 aspect-353/478">
						<Image
							src="/images/equipment-page/app/main.png"
							fill
							alt=""
							className="object-cover"
						/>
					</div>
					<div>
						<p className="mb-4 text-[17px] leading-tight">
							Наше приложение интуитивно понятно и редактируемое. Можно изменить шапку или столбцы по пожеланию клиента. Можно изменить картинки и их название. Цвет интерфейса и прочие детали. Наш программный продукт вы можете настроить под себя, без каких либо сложностей.
							Скачайте и попробуйте.
						</p>
						<a href="#" className="font-helvetica inline-flex items-center gap-1 text-[15px] font-medium text-brand-blue group">
							Узнать больше о приложении
							<RightArrowIcon className="w-5 h-5"></RightArrowIcon>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
