
import Header from "@/components/layout/Header";
import DimmingHero from "@/components/sections/Dimming/DimmingHero";
import FeaturesGrid from "@/components/sections/common/FeaturesGrid";
import DimmingImplement from "@/components/sections/Dimming/DimmingImplement";
import Scripts from "@/components/sections/common/Scripts";
import Features from "@/components/sections/Features";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

import { routes } from "@/config/routes";

const FeaturesСols = [
	{
		image: '/images/dimming-page/features/1.jpg',
		cap: 'Плавная регулировка яркости.',
		descr: 'Больше не нужно ходить по комнатам и задавать нужную температуру отопления.',
	},
	{
		image: '/images/dimming-page/features/2.jpg',
		cap: 'Готовые уровни под разные сценарии одним действием.',
		descr: 'Вам нравится засыпать в прохладе, а просыпаться в тепле? Задайте нужные параметры, и система автоматически подготовит спальню, ванную, коридор за час до вашего пробуждения.',
	},
	{
		image: '/images/dimming-page/features/3.jpg',
		cap: 'Аккуратный вид без пересвеченных зон и бликов на экранах.',
		descr: 'Специальная конструкция делает домофон устойчивым к любым погодным условиям.',
	},
	{
		image: '/images/dimming-page/features/4.jpg',
		cap: 'Комфорт вечером и «тихий» свет ночью.',
		descr: 'При возникновении аварийной ситуации вам придет оповещение на телефон.',
	},
]

export const metadata = {
	title: routes.Dimming.title
}

export default function DimmingPage() {
	return (
		<>
			<Header />
			<main>
				<DimmingHero></DimmingHero>
				<FeaturesGrid title="Возможности системы" items={FeaturesСols}></FeaturesGrid>
				<DimmingImplement></DimmingImplement>
				<Scripts></Scripts>
				<Features title="Удобное управление" />
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
}