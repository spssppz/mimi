import Header from "@/components/layout/Header"
// 
import DetectorExample from "@/components/sections/Detector/DetectorExample"
import Showroom from "@/components/sections/common/Showroom"
import Footer from "@/components/layout/Footer"
import { detectors } from "@/data/detectors"
import { notFound } from "next/navigation"

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function DetectorItemPage({ params }: Props) {
	const { slug } = await params;

	const detector = detectors.find(d => d.slug === slug);
	if (!detector) {
		notFound()
	}

	return (
		<>
			<Header />
			<main>
				{/*  */}
				<DetectorExample example={detector.DetectorExample}></DetectorExample>
				<Showroom />
			</main>
			<Footer />
		</>
	);
}

export async function generateStaticParams() {
	return detectors.map((d) => ({
		slug: d.slug,
	}));
}