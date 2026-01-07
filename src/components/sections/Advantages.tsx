import Image from "next/image";
import { Title } from "../UI/Title";

export default function Advantages() {
	return (
		<section className="pt-30 pb-22.5">
			<div className="max-w-308 mx-auto px-4">
				<Title className="mb-10">Преимущества умного <br />
					дома MiMiSmart</Title>
				<a href="#" className="mb-10 inline-flex items-center gap-1 text-[15px] font-medium text-brand-blue group">
					Узнать больше
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
						<path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</a>
			</div>
		</section>
	);
};