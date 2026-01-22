import Header from "@/components/layout/Header";
import SmartHome from "@/components/sections/SmartHome";
import Comfort from "@/components/sections/Comfort";
import Capabilities from "@/components/sections/Capabilities";
import Solutions from "@/components/sections/Solutions";
import Advantages from "@/components/sections/Advantages";
import Features from "@/components/sections/Features";
import Showroom from "@/components/sections/common/Showroom";
import Cases from "@/components/sections/Cases";
import Articles from "@/components/sections/Articles";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SmartHome />
        <Comfort />
        {/* <Capabilities /> */}
        <Solutions />
        {/* <Advantages /> */}
        <Features title="Удобное управление" />
        <Showroom />
        <Cases />
        <Articles />
      </main>
      <Footer />
    </>
  );
} 