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
    <header className="w-full relative p-3 lg:flex hidden gap-32 items-center dark:bg-[#666] bg-[#F6F3ED]">
    <h6 className="flex items-center gap-2 text-sm dark:text-white text-[#0A132E]">
      <FaLocationDot className="text-lg text-[#ECB394]" />
      <a
        target="__blank"
        rel="noopener noreferrer"
        href="https://maps.app.goo.gl/tEvuGnBbhVywPzbk6"
      >

      123 Kamiti Rd, Nairobi
      </a>
    </h6>
    <h6 className="flex items-center gap-2 text-sm dark:text-white text-[#0A132E]">
      <MdMail className="text-lg text-[#ECB394]" />{" "}
      <a
        target="__blank"
        rel="noopener noreferrer"
        href="mailto:membreshaven@gmail.com"
      >
        membreshaven@gmail.com
      </a>
    </h6>
    <div className="flex absolute right-3 gap-3 *:dark:text-white *:text-gray-700 hover:*:text-[#D9A74A] transition-colors duration-500 ease-out *:text-lg items-center">
      <a
        target="__blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/share/14Ymndgdk"
      >
        <FaFacebookF />
      </a>
      <a
        target="__blank"
        rel="noopener noreferrer"
        href="https://www.tiktok.com/@membres.haven"
      >
        <FaTiktok />
      </a>
      <a
        target="__blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/membreshaven"
      >
        <FaInstagram />
      </a>
      <a
        target="__blank"
        rel="noopener noreferrer"
        href="https://www.x.com/membres_haven"
      >
        <FaXTwitter />
      </a>
      <a
        target="__blank"
        rel="noopener noreferrer"
        href="tel:+254790918806"
      >
        <MdPhone />
      </a>
    </div>
  </header>
  )
}

export default Header