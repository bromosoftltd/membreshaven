import Image from "next/image";

const GalleryItem = ({ link, index }) => {
  return (
    <div className="bg-[#F6F3ED] w-full h-[350px] my-4 cursor-pointer relative gallery  m-1 rounded-xl overflow-hidden">
      {/* Overlay */}
      <div
        className="w-full h-[350px] absolute transition-colors ease-in-out duration-300  hover:bg-[#1414148e] flex items-center justify-center text-white text-xl"
        aria-label={`Overlay for gallery image ${index + 1}`}
      ></div>

      {/* Image */}
      <Image
        fill
        sizes="100%"
        src={link}
        className=" w-full h-full object-cover object-[center_center] transition-transform duration-300 ease-in-out hover:scale-105"
        alt={`Gallery image ${index + 1}`}
        loading="lazy"
      />
    </div>
  );
};

export default GalleryItem;
