import Header from "@/components/layout/Header";
import SecurityHero from "@/components/sections/Security/SecurityHero";
import VideoControl from "@/components/sections/Security/VideoControl";
// 
import FireSafety from "@/components/sections/Security/FireSafety";
import Intercom from "@/components/sections/Security/Intercom";
import Signaling from "@/components/sections/Security/Signaling";
// 
import Showroom from "@/components/sections/common/Showroom";
import Footer from "@/components/layout/Footer";

export const metadata = {
	title: 'Безопасный дом'
}

export default function SecurityPage() {
	return (
		<>
			<Header />
			<main>
				<SecurityHero />
				<VideoControl></VideoControl>
				{/*  */}
				<FireSafety></FireSafety>
				<Intercom></Intercom>
				<Signaling></Signaling>
				{/*  */}
				<Showroom />
			</main>
			<Footer />
		</>
	);
} 