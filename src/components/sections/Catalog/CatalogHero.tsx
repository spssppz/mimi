import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function CatalogHero() {
	return (
		<section>
			<div className="max-w-308 overflow-hidden mx-auto max-md:pt-10 px-4 flex items-center max-md:flex-col justify-between gap-10">
				<div className="md:py-10 max-md:self-stretch max-w-127.5">
					<Title className="mb-4">Каталог</Title>
					<div className="font-helvetica text-[17px] leading-[1.3] -tracking-[0.01em]">
						Это мозг системы. Принимают сигналы от датчиков и панелей, запускают сценарии и управляют: светом, климатом, шторами и безопасностью. Работают локально даже без интернета.
					</div>
				</div>
				<Image
					width={310}
					height={359}
					alt=""
					src="/images/products/decor.png"
					className="max-md:-mb-20"
				/>
			</div>
		</section>
	);
}