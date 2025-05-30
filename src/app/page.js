'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="w-full min-h-screen dark:bg-[#18181B] relative bg-[#FAFBFE]">
      <Header />
      <Navbar />
      <HomePage />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <Link
        to="home"
        offset={-150}
        smooth={true}
        className="fixed cursor-pointer z-40 bottom-3 right-4 text-white rounded-full hover:bg-[#D9A74A] transition-colors duration-500 hover:dark:text-[#18181B] dark:hover:bg-[#f6f3ed] bg-[#18181B] dark:bg-[#D9A74A] p-3"
      >
        <FaArrowUp />
      </Link>
    </div>
  );
}
