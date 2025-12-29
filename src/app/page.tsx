import Articles from "@/components/sections/Articles";
import Cases from "@/components/sections/Cases";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Showroom from "@/components/sections/Showroom";
import Solutions from "@/components/sections/Solutions";

export default function Home() {
  return (
    <main>
      <Solutions />
      {/*  */}
      <Features />
      <Showroom />
      <Cases />
      <Articles />
      <Footer />
    </main>
  );
} 