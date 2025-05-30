import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLocationDot,
    FaTiktok,
    FaXTwitter,
  } from "react-icons/fa6";
  import { MdMail, MdPhone } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full relative p-3 lg:flex hidden gap-32 items-center dark:bg-[#28282A] bg-[#F6F3ED]">
    <h6 className="flex items-center gap-2 text-sm dark:text-white text-[#18181B]">
      <FaLocationDot className="text-lg text-[#ECB394]" />
      <Link
        target="__blank"
        rel="noopener noreferrer"
        href="https://maps.app.goo.gl/tEvuGnBbhVywPzbk6"
      >

      123 Kamiti Rd, Nairobi
      </Link>
    </h6>
    <h6 className="flex items-center gap-2 text-sm dark:text-white text-[#18181B]">
      <MdMail className="text-lg text-[#ECB394]" />{" "}
      <Link
        target="__blank"
        rel="noopener noreferrer"
        href="mailto:membreshaven@gmail.com"
      >
        membreshaven@gmail.com
      </Link>
    </h6>
    <div className="flex absolute right-3 gap-3 *:dark:text-white *:text-gray-700 *:hover:text-[#D9A74A] transition-colors duration-500 ease-out *:text-lg items-center">
      <Link
        target="__blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/share/14Ymndgdk"
      >
        <FaFacebookF />
      </Link>
      <Link
        target="__blank"
        rel="noopener noreferrer"
        href="https://www.tiktok.com/@membres.haven"
      >
        <FaTiktok />
      </Link>
      <Link
        target="__blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/membreshaven"
      >
        <FaInstagram />
      </Link>
      <Link
        target="__blank"
        rel="noopener noreferrer"
        href="https://www.x.com/membres_haven"
      >
        <FaXTwitter />
      </Link>
      <Link
        target="__blank"
        rel="noopener noreferrer"
        href="tel:+254790918806"
      >
        <MdPhone />
      </Link>
    </div>
  </header>
  )
}

export default Header