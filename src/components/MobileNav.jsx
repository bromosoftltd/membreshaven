import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { Link } from "react-scroll";

const menuItems = [
  { label: "Home", to: "home" },
  { label: "About Us", to: "about" },
  { label: "Gallery", to: "gallery" },
  { label: "Services", to: "services" },
  { label: "Contact", to: "contact" },
];

const MobileNav = ({ open, handleOpen }) => {
  return (
    <nav
      onClick={handleOpen}
      className={`${
        open ? "translate-x-0" : "translate-x-[110vw]"
      } fixed top-0 right-0 w-screen h-screen bg-[#141414e7] z-50 duration-700 ease-in-out transform lg:hidden`}
      aria-hidden={!open}
      aria-expanded={open}
    >
      {/* Navigation Panel */}
      <ul
        className={`${
          open ? "translate-x-0" : "translate-x-[84%]"
        } absolute right-0 w-5/6 h-full flex flex-col bg-[#F6F3ED] dark:bg-[#0A132E] transform duration-700`}
      >
        <img
          src="/images/logo.png"
          className="w-32 mx-auto my-6"
          alt="Logo"
        />
        {/* Menu Items */}
        {menuItems.map((item) => (
          <li
            key={item.to}
            className="flex  text-2xl font-semibold border-y border-gray-600 dark:border-white dark:text-white text-gray-800"
          >
            <Link
              key={item.to}
              className="w-full py-4 px-6"
              activeClass="text-[#D9A74A] font-bold"
              to={item.to}
              spy={true}
              hashSpy={true}
              duration={1000}
              offset={-150}
              onClick={handleOpen}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <h2 className="mt-10 dark:text-white underline-offset-4 underline text-2xl font-semibold text-center">Get In Touch</h2>
        <div className="flex *:bg-white  *:p-3 *:rounded-full justify-evenly mt-3 *:dark:text-black *:text-gray-700 hover:*:text-[#D9A74A] transition-colors duration-500 ease-out *:text-xl items-center">
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
      </ul>
    </nav>
  );
};

export default MobileNav;
