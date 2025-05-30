'use client'
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="lg:w-[95%] w-full relative xl:min-h-[85vh] mb-4 min-h-[60vh] m-auto lg:mt-6 lg:p-6 lg:bg-[top_center] bg-contain lg:rounded-[40px]  bg-[#F6F3ED] dark:bg-[#28282A] bg-no-repeat  bg-[url(/images/about-bg.png)]"
    >
      <h3 className="text-center absolute top-10 font-semibold text-[#28282A] left-1/2 py-1 px-2 rounded-full uppercase text-[11px] bg-white w-max">
        about us
      </h3>
      <div className="flex lg:flex-row flex-col-reverse xl:min-h-[80vh] min-h-[60vh]">
        <div className="lg:w-1/2 mt-12 relative">
          <Image
          fill
            src="https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fabout-bg.webp?alt=media&token=9e6cdd39-f8ea-4811-8169-3470c3277436"
            alt=""
            className="w-full lg:h-[90vh] object-cover object-[left_center] h-[45vh] lg:rounded-2xl"
          />
               </div>
        <div className="lg:mt-12 mt-16 lg:w-1/2 flex gap-4 flex-col items-center sm:p-6 p-2">
          <h1 className="xl:text-5xl text-4xl font-bold dark:text-white text-[#18181B]">
          Discover Your Inner
          Peace Wellness.
          </h1>
          <p className="text-gray-500 text-justify dark:text-white text-[15px]">
            Our story unfolds as a testament to the transformative power of
            wellness innovation. Founded on the belief that everyone deserves
            personalized well being, we embark on a journey dedicated to
            empowering lives.
          </p>
          <p className="text-gray-500 dark:text-white text-[15px]">Saunas or Steam baths, provide a wet heat experience by using high humidity and steam:</p>
          <div className="flex mt-3 sm:gap-0 gap-4 sm:justify-between sm:flex-row flex-col  w-full sm:items-center">
            <ul className="flex flex-col sm:gap-8 gap-4">
              <li className="font-bold flex items-center gap-2 text-[#18181B] dark:text-white text-lg">
              <MdVerified className="text-3xl text-[#D9A74A]"/>  Helps relieve pain
              </li>
              <li className="font-bold flex items-center gap-2 text-[#18181B] dark:text-white text-lg">
              <MdVerified className="text-3xl text-[#D9A74A]"/> Ease chronic pain
              </li>
            </ul>
            <ul className="flex flex-col sm:gap-8 gap-4">
              <li className="font-bold flex items-center gap-2 text-[#18181B] dark:text-white text-lg">
              <MdVerified className="text-3xl text-[#D9A74A]"/> Reduce Body Stress
              </li>
              <li className="font-bold flex items-center gap-2 text-[#18181B] dark:text-white text-lg">
              <MdVerified className="text-3xl text-[#D9A74A]"/> Boost your mood
              </li>
            </ul>
          </div>
          <Link
            to="contact"
            offset={-150}
            smooth={true}
            duration={1500}
            className="bg-[#18181B] dark:bg-white dark:text-[#18181B] dark:hover:text-white dark:hover:bg-[#D9A74A] hover:bg-white hover:text-[#0A132E] transition duration-300 ease-linear self-start ml-10 mt-1 p-3 flex items-center rounded-full gap-2 text-center cursor-pointer text-white font-semibold text-lg"
          >
            Contact Us
            <GoArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
