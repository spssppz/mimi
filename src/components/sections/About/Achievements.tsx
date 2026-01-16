import { MimiLogo } from "@/components/UI/MimiLogo";
import { Title } from "@/components/UI/Title";
import Image from "next/image";

export default function Achievements() {
	return (
		<section className="pt-22.5 lg:py-30 hidden">
			<div className="max-w-308 mx-auto px-4">
				<MimiLogo className="mb-7"></MimiLogo>
				<div className="max-w-165 font-helvetica text-[20px] tracking-[-0.01em] mb-20">
					Мы в MiMiSmart создаем технологии для того, чтобы каждый человек мог наслаждаться комфортом умного дома, избавляясь от бытовых хлопот и повышая качество жизни.
				</div>
			</div>
		</section>
	);
};
