import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import BookBar from "@/components/layout/BookBar";
import Hero from "@/components/sections/Hero";
import Transform from "@/components/sections/Transform";
import Skills from "@/components/sections/Skills";
import Schedule from "@/components/sections/Schedule";
import WhoCanJoin from "@/components/sections/WhoCanJoin";
import Coaches from "@/components/sections/Coaches";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-14 sm:pb-0">
        <Hero />
        <Transform />
        <Skills />
        <Schedule />
        <WhoCanJoin />
        <Coaches />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BookBar />
    </>
  );
}
