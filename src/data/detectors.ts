import { Detector } from "@/types/detector";

export const detectors: Detector[] = [
	{
		slug: 'smoke',
		title: "Датчик дыма",
		subtitle: "Тревога вовремя.",
		icon: '/images/detector-page/icons/1.svg',
		image: "/images/detector-page/cols/1.png",
		bg: "bg-foreground text-white",
		linkHover: "hover:text-white",

		DetectorExample: {
			bg: 'bg-foreground',
			bodyClasses: 'bg-black text-white',
			title: "GS2",
			text: "Датчик дыма в умном доме — это базовый элемент безопасности. Он распознаёт задымление на ранней стадии.",
			image: "/images/detector-page/example/1.png",
			imageWidth: 390,
			imageHeight: 390,
		}
	},
	{
		slug: 'wet',
		title: "Датчик влажности",
		subtitle: "Влажность в норме.",
		icon: '/images/detector-page/icons/2.svg',
		image: "/images/detector-page/cols/2.png",
		bg: "bg-white",
		linkHover: "hover:text-foreground",
		DetectorExample: {
			bodyClasses: 'bg-background',
			title: "HS2",
			text: "Оптимальный микроклимат помещений — это достаточная влажность. Сухость воздуха — одна из причин ухудшения самочувствия человека, комнатные растения от нее также страдают.",
			image: "/images/detector-page/example/2.png",
			imageWidth: 390,
			imageHeight: 390,
		}
	},
	{
		slug: 'temperature',
		title: "Датчик температуры",
		subtitle: "Тепло по графику.",
		icon: '/images/detector-page/icons/3.svg',
		image: "/images/detector-page/cols/3.png",
		bg: "bg-white",
		linkHover: "hover:text-foreground",
		DetectorExample: {
			bodyClasses: 'bg-background',
			title: "Геркон",
			text: "Пара: геркон и магнит. Пока магнит рядом, контакты замкнуты, когда створка уходит - размыкаются и фиксируется «открыто».",
			image: "/images/detector-page/example/3.png",
			imageWidth: 390,
			imageHeight: 390,
		}
	},
	{
		slug: 'moving',
		title: "Датчик движения",
		subtitle: "Свет по присутствию.",
		icon: '/images/detector-page/icons/4.svg',
		image: "/images/detector-page/cols/4.png",
		bg: "bg-white",
		linkHover: "hover:text-foreground",
		DetectorExample: {
			bodyClasses: 'bg-background',
			title: "IRT2",
			text: "Это «виртуальный пульт», который посылает устройствам те же команды, что и ваш ручной пульт.",
			image: "/images/detector-page/example/4.png",
			imageWidth: 400,
			imageHeight: 390,
		}
	},
	{
		slug: 'infared-sensor',
		title: "Инфракрасные датчики",
		subtitle: "Техника по ИК.",
		icon: '/images/detector-page/icons/5.svg',
		image: "/images/detector-page/cols/5.png",
		bg: "bg-[#f8f8f8]",
		linkHover: "hover:text-foreground",
		DetectorExample: {
			bodyClasses: 'bg-background',
			title: "TS2",
			text: "Датчик — это термопара, подсоединенная к устройству обработки информации. Датчик температуры в умном доме MimiSmart совершенно незаметен в интерьере и располагается за рамкой выключателя, измеряя температуру на высоте головы сидящего человека, именно в том месте где чаще всего находится человек.",
			image: "/images/detector-page/example/5.png",
			imageWidth: 390,
			imageHeight: 390,
		}
	},
	{
		slug: 'opening',
		title: "Датчик открытия",
		subtitle: "Окна и двери.",
		icon: '/images/detector-page/icons/6.svg',
		image: "/images/detector-page/cols/6.png",
		bg: "bg-white",
		linkHover: "hover:text-foreground",
		DetectorExample: {
			bodyClasses: 'bg-background',
			title: "MS2",
			text: "Использование датчиков движения в умном доме — одно из самых правильных решений во всей системе. Вы сразу преобразите свою квартиру или дом. Параллельно с этим многие отказываются от идеи их применения из-за громоздкости и странного внешнего вида.",
			image: "/images/detector-page/example/6.png",
			imageWidth: 410,
			imageHeight: 288,
		}
	},
	{
		slug: 'leak',
		title: "Датчик протечки",
		subtitle: "Вода перекрыта.",
		icon: '/images/detector-page/icons/7.svg',
		image: "/images/detector-page/cols/7.png",
		bg: "bg-white",
		isWide: true, // 👈 спец-кейс
		linkHover: "hover:text-foreground",
		DetectorExample: {
			bodyClasses: 'bg-background',
			title: "WLS4",
			text: "Одна из основных функций умного дома — использование датчиков протечки воды. Они популярны, но одновременно неудобны, если вы уже сталкивались с их работой — сразу все поймете.",
			image: "/images/detector-page/example/7.png",
			imageWidth: 483,
			imageHeight: 390,
		}
	},
]