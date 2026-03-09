import { Button } from "@/components/UI/Button";
import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function ElectricLockHero() {
	return (
		<section className="min-h-181.5 md:min-h-245.5 overflow-hidden relative py-23.5 md:py-22">
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 aspect-1076/976 w-172.5 md:w-269">

				<Image
					src="/images/electric-lock-page/hero/door.png"
					fill
					alt=""
				/>
			</div>
			<div className="max-w-235.5 px-4 mx-auto flex flex-col items-center relative">
				<Title className="mb-6">Электрозамок</Title>
				<Button className="justify-center py-1.75!">Подобрать замок</Button>
			</div>
		</section>
	);
}