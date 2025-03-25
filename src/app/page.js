import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full min-h-screen dark:bg-[#0A132E] relative bg-white">
      <Header />
      <Navbar />
      <HomePage/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}
