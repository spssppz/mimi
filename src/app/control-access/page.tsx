
import Header from "@/components/layout/Header";
import ControlAccessHero from "@/components/sections/ControlAccess/ControlAccessHero";
import FeaturesGrid from "@/components/sections/common/FeaturesGrid";
import ControlAccessZones from "@/components/sections/ControlAccess/ControlAccessZones";
import Scripts from "@/components/sections/common/Scripts";
import ElectricLockIntegration from "@/components/sections/ElectricLock/ElectricLockIntegration";
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

import { routes } from "@/config/routes";

export const metadata = {
	title: routes.ControlAccess.title
}
const FeaturesСols = [
	{
		image: '/images/control-access-page/features/1.jpg',
		cap: 'Смартфон.',
		descr: 'Изображение с камер выводится на устройства, подключенные к системе.',
	},
	{
		image: '/images/control-access-page/features/2.jpg',
		cap: 'Код или отпечаток пальца.',
		descr: 'Если вас нет дома, гости могут записать аудио- или видеопослания, которые будут отправлены вам на электронную почту;',
	},
	{
		image: '/images/control-access-page/features/3.jpg',
		cap: 'Гостевой доступ по расписанию.',
		descr: 'Специальная конструкция делает домофон устойчивым к любым погодным условиям.',
	},
	{
		image: '/images/control-access-page/features/4.jpg',
		cap: 'Face ID.',
		descr: 'Ограничьте круг пользователей, допущенных к просмотру управления отдельными элементами.',
	},
]

export default function ControlAccessPage() {
	return (
		<>
			<Header />
			<main>
				<ControlAccessHero></ControlAccessHero>
				<FeaturesGrid title="Возможности системы" items={FeaturesСols}></FeaturesGrid>
				<ControlAccessZones></ControlAccessZones>
				<Scripts></Scripts>
				<ElectricLockIntegration></ElectricLockIntegration>
				<Showroom></Showroom>
			</main>
			<Footer />
		</>
	);
}