'use client'
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaXTwitter,
  } from "react-icons/fa6";
  import { MdPhone } from "react-icons/md";
  import { Link } from "react-scroll";
  
  const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="w-full flex lxl:gap-6 flex-col lg:pb-10 items-center dark:bg-gray-700 bg-[#F6F3ED] justify-center xl:min-h-[65vh] min-h-[60vh] bg-center-all bg-scroll bg-no-repeat bg-contain  bg-[url(/images/footer-bg.png)]">
        <div className="w-full flex flex-wrap items-center xl:gap-3 p-3 justify-between">
          <div className="xl:w-1/4 md:w-1/3 w-full">
            <h2 className="font-semibold mb-6 text-gray-700 dark:text-[#f6f3ed] text-xl md:text-start text-center">
              Useful Links
            </h2>
            <div className="flex items-center md:gap-8 md:justify-start justify-between ">
              <div className="flex gap-2 max-md:w-1/4 flex-col">
                <Link
                  to="gallery"
                  duration={1000}
                  offset={-50}
                  className="cursor-pointer text-[15px] text-gray-700 dark:text-[#f6f3ed] hover:text-[#D9A74A] transition duration-500 ease-in-out"
                >
                  Gellery
                </Link>
                <Link
                  to="services"
                  duration={1000}
                  offset={-50}
                  className="cursor-pointer dark:text-[#f6f3ed] text-[15px] text-gray-700 hover:text-[#D9A74A] transition duration-500 ease-in-out"
                >
                  Services
                </Link>
                <Link
                  to="about"
                  duration={1000}
                  offset={-50}
                  className="cursor-pointer dark:text-[#f6f3ed] text-[15px] text-gray-700 hover:text-[#D9A74A] transition duration-500 ease-in-out"
                >
                  About Us
                </Link>
                <Link
                  to="about"
                  duration={1000}
                  offset={-50}
                  className="cursor-pointer dark:text-[#f6f3ed] text-[15px] text-gray-700 hover:text-[#D9A74A] transition duration-500 ease-in-out"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex gap-2 max-md:w-1/4 flex-col md:items-start items-end">
                <Link
                  to="barbershop"
                  offset={-150}
                  className="cursor-pointer dark:text-[#f6f3ed] text-[15px] text-gray-700 hover:text-[#D9A74A] transition duration-500 ease-in-out"
                >
                  Barbershop
                </Link>
                <Link
                  to="sauna"
                  offset={-150}
                  className="cursor-pointer dark:text-[#f6f3ed] text-[15px] text-gray-700 hover:text-[#D9A74A] transition duration-500 ease-in-out"
                >
                  Sauna
                </Link>
  
                <Link
                  to="full-facial"
                  offset={-150}
                  className="cursor-pointer text-[15px] dark:text-[#f6f3ed] text-gray-700 hover:text-[#D9A74A] transition duration-500 ease-in-out"
                >
                  Full Facial
                </Link>
                <Link
                  to="steam-bath"
                  offset={-150}
                  className="cursor-pointer  sm:text-[15px] dark:text-[#f6f3ed] text-[14px] text-gray-700 hover:text-[#D9A74A] transition duration-500 ease-in-out"
                >
                  Steam Bath
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col gap-6 xl:items-center items-center justify-center md:items-end xl:justify-center lg:justify-end">
            <img className="w-36" src="/images/logo.png" alt="logo" />
            <h5 className="text-gray-700 text-[15px] xl:text-center dark:text-[#f6f3ed] text-center md:text-end">
              Peerly Spa: Your ultimate destination for relaxation, rejuvenation,
              and holistic wellness experiences.
            </h5>
            <div className="flex w-max  gap-3   items-center">
              <a
                className="bg-white p-3 text-xl rounded-full text-gray-700 hover:bg-[#D9A74A] hover:text-white transition-colors duraion-500 ease-in-out"
                target="__blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61557183773453&mibextid=ZbWKwL"
              >
                <FaFacebookF />
              </a>
              <a
                className="bg-white p-3 text-xl rounded-full text-gray-700 hover:bg-[#D9A74A] hover:text-white transition-colors duraion-500 ease-in-out"
                target="__blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@membres.haven"
              >
                <FaTiktok />
              </a>
              <a
                className="bg-white p-3 text-xl rounded-full text-gray-700 hover:bg-[#D9A74A] hover:text-white transition-colors duraion-500 ease-in-out"
                target="__blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/membreshaven"
              >
                <FaInstagram />
              </a>
              <a
                className="bg-white p-3 text-xl rounded-full text-gray-700 hover:bg-[#D9A74A] hover:text-white transition-colors duraion-500 ease-in-out"
                target="__blank"
                rel="noopener noreferrer"
                href="https://www.x.com/membres_haven"
              >
                <FaXTwitter />
              </a>
              <a
                className="bg-white p-3 text-xl rounded-full text-gray-700 hover:bg-[#D9A74A] hover:text-white transition-colors duraion-500 ease-in-out"
                target="__blank"
                rel="noopener noreferrer"
                href="tel:+254790918806"
              >
                <MdPhone />
              </a>
            </div>
            <div></div>
          </div>
          <div className="xl:w-1/4 w-full  flex flex-col xl:justify-start justify-center xl:items-end">
            <h2 className="font-semibold mb-6 dark:text-[#f6f3ed] text-gray-700 text-center  text-xl">
              Working Hours
            </h2>
            <div className="flex flex-col gap-2">
              <h3 className="flex dark:text-[#f6f3ed] text-gray-700 items-center text-[15px] gap-10 justify-between">
                <p>Monday to Saturday</p> <p>8.30 - 21.30 hrs</p>
              </h3>
              <h3 className="flex dark:text-[#f6f3ed] items-center text-gray-700 text-[15px] gap-10 justify-between">
                <p>Sunday</p> <p>10.00 - 19.00 hrs</p>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex p-2 rounded-xl overflow-hidden items-center justify-center w-full">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.941385426931!2d36.8980302!3d-1.2013033999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3e387b5ac57b%3A0x4e97db14acf2854b!2s123%20Kamiti%20Rd%2C%20Githurai!5e0!3m2!1sen!2ske!4v1734772001507!5m2!1sen!2ske"
            width="600"
            height="450"
            className="border-none rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="sm:w-[90%] flex  items-center justify-center sm:mb-7 shadow-sm shadow-gray-50 sm:rounded-full sm:border-none dark:shadow-none border-t-[1px] sm:p-7 p-4 sm:bg-white sm:dark:bg-[#0A132E]">
          <h4 className="text-sm text-gray-700 dark:text-[#f6f3ed] font-normal md:text-start text-center">
            &copy; Copyright {year} Membres Haven All Rights Reserved
          </h4>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  