
import Header from "@/components/layout/Header";
import HimidityHero from "@/components/sections/Himidity/HimidityHero";
import FeaturesGrid from "@/components/sections/common/FeaturesGrid";
import HimidityTypes from "@/components/sections/Himidity/HimidityTypes";
import Scripts from "@/components/sections/common/Scripts";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

import { routes } from "@/config/routes";

const FeaturesСols = [
	{
		image: '/images/himidity-page/features/1.jpg',
		cap: 'Зональное увлажнение.',
		descr: 'В каждой комнате свой целевой уровень, обычно держим комфортные 50-60%.',
	},
	{
		image: '/images/himidity-page/features/2.jpg',
		cap: 'Сценарии по сезону и задачам',
		descr: 'Профили Зима, Сон, Детская и Работа поддерживают нужную влажность без ручных настроек.',
	},
	{
		image: '/images/himidity-page/features/3.jpg',
		cap: 'Связка с приточной вентиляцией.',
		descr: 'Форсуночное увлажнение работает в канале притока, модулируется по расходу воздуха и не даёт “мокрых” поверхностей.',
	},
	{
		image: '/images/himidity-page/features/4.jpg',
		cap: 'Защита от переувлажнения.',
		descr: 'Учитывается температура и точка росы, система снижает подачу при риске конденсата.',
	},
]


export const metadata = {
	title: routes.Himidity.title
}

export default function HimidityPage() {
	return (
		<>
			<Header />
			<main>
				<HimidityHero></HimidityHero>
				<FeaturesGrid title="Возможности системы" items={FeaturesСols}></FeaturesGrid>
				<HimidityTypes></HimidityTypes>
				<Scripts></Scripts>
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
}