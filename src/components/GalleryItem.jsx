import Image from "next/image";

const GalleryItem = ({ link, index }) => {
    return (
      <div
        className="bg-[#F6F3ED] cursor-pointer relative gallery w-11/12 md:w-1/4 lg:w-[23%] m-1 rounded-xl overflow-hidden h-[200px]"
      >
        {/* Overlay */}
        <div
          className="w-full h-full absolute transition-colors ease-in-out duration-300  hover:bg-[#1414148e] flex items-center justify-center text-white text-xl"
          aria-label={`Overlay for gallery image ${index + 1}`}
        ></div>
  
        {/* Image */}
        <Image
        fill
        sizes="100%"
          src={link}
          className="w-full h-full object-cover object-[center_center] transition-transform duration-300 ease-in-out hover:scale-105"
          alt={`Gallery image ${index + 1}`}
          loading="lazy"
        />
      </div>
    );
  };
  
  export default GalleryItem;
  