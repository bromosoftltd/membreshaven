import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Sauna",
      id: "sauna",
      description:
        "Relax and rejuvenate in our state-of-the-art sauna facilities. Experience the soothing heat that helps detoxify your body, improve blood circulation, and promote overall wellness. Ideal for stress relief and muscle relaxation.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fsauna.webp?alt=media&token=fabc3da8-846a-47c1-be7c-7a9756765916",
    },
    {
      title: "Manicure & Pedicure",
      id: "manicure-pedicure",
      description:
        "Pamper your hands and feet with our luxurious manicure and pedicure services. Whether you're looking for a quick refresh or a complete transformation, our skilled professionals are here to treat you to a rejuvenating experience. Relax in a tranquil atmosphere while we shape, polish, and moisturize, leaving your nails and skin perfectly groomed. Indulge in an added layer of self-care with exfoliation and massages that make your hands and feet look and feel revitalized.",
      image: "/images/manicure-pedicure.jpg",
    },
    {
      title: "Dyieng & Shampoo",
      id: "manicure-pedicure",
      description:
        "Enhance your hair's natural beauty with our professional dyeing and shampoo services. Whether you're looking for a bold new color or simply maintaining your signature shade, our experts use high-quality products to achieve stunning, lasting results. Finish with a refreshing shampoo session that cleanses and nourishes your hair, leaving it silky smooth and full of life. Experience a personalized touch that caters to your style preferences and hair needs.",
      image: "/images/dye-shampoo.jpg",
    },
    {
      title: "Steam Bath",
      id: "steam-bath",
      description:
        "Indulge in a luxurious steam bath to open up your pores, cleanse your skin, and leave you feeling refreshed. The warm steam improves respiratory function, reduces tension, and provides a deeply hydrating experience.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fsteam-bath.webp?alt=media&token=47e9fc24-95a5-4448-b490-99b1baafd92b",
    },
    {
      title: "Body Massage",
      id: "body-massage",
      description:
        "Our professional body massage services are tailored to your needs. Whether you want to relieve muscle tension, reduce stress, or simply enjoy relaxation, we offer techniques like Swedish, deep tissue, and aromatherapy massages.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fbody-massage.webp?alt=media&token=2947ca28-595f-4eec-9570-f880ee77d0cd",
    },
    {
      title: "Facial Treatments",
      id: "full-facial",
      description:
        "Enhance your natural glow with our facial treatments designed to suit all skin types. From cleansing to hydrating masks and anti-aging solutions, we provide personalized care for a radiant and youthful appearance.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Ffacial.webp?alt=media&token=90c8ba36-ec8b-4bcc-9a1f-34617995b67c",
    },
    {
      title: "Waxing",
      id: "waxing",
      description:
        "Achieve smooth, hair-free skin with our expert waxing services. Our gentle techniques ensure minimal discomfort while leaving your skin soft and flawless. We offer a variety of waxing options for all areas.",
      image: "/images/waxing.jpg",
    },
    {
      title: "Body Scrubbing",
      id: "body-scrubbing",
      description:
        "Rejuvenate your skin with our exfoliating body scrubbing treatments. Our techniques remove dead skin cells, leaving your skin smooth, soft, and glowing. Perfect for improving skin texture and hydration.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fbody-scrubbing.webp?alt=media&token=e6a60442-a4b7-40b3-9a20-43b6b98d6b62",
    },
    {
      title: "Barbershop",
      id: "barbershop",
      description:
        "Look sharp with our expert barbershop services. From precision cuts to modern styles, we ensure you leave with a confident, polished look. Our skilled barbers are dedicated to exceeding your expectations.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fbarbershop.webp?alt=media&token=6aecb371-d39f-4496-ab85-d5272d9cc241",
    },
    {
      title: "Nail Art",
      id: "nail-art",
      description:
        "Transform your nails into stunning works of art with our creative nail designs. We use premium products and techniques to ensure long-lasting, beautiful results that suit your style and personality.",
      image: "/images/nail-art.webp",
    },
    {
      title: "Dreadlocks and Retouch",
      id: "dreadlocks-retouch",
      description:
        "Refresh and maintain your dreadlocks with our expert retouching services. From starting new locks to styling and upkeep, we cater to your unique look, ensuring your hair stays healthy and vibrant.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fdye-shampoo.webp?alt=media&token=831d474e-aa7a-467d-b864-67e0c0744ffc",
    },
  ];

  return (
    <div
      id="services"
      className="w-full xl:min-h-[85vh] min-h-[50vh] relative md:p-4"
    >
      <h1 className="text-center absolute z-20 top-10 font-semibold text-gray-600 left-10  py-1 px-2 rounded-full uppercase text-[11px] bg-[#F5F2EC] w-max">
        our services
      </h1>
      <h3 className="mt-16 md:text-5xl sm:text-[32px] text-[26px] font-bold dark:text-white text-gray-700">
        The luxury experience
      </h3>
      <div className="w-full flex flex-col items-center pb-3">
        {services.map((service, index) => (
          <div
            id={service.id}
            key={index}
            className="w-11/12 md:min-h-[450px]   md:mx-3    dark:bg-gray-700 bg-[#F5F2EC] mt-16 rounded-2xl overflow-hidden shadow-md flex md:flex-row flex-col"
          >
            {/* Image Section */}
            <Image
              width={400}
              height={400}
              className="md:w-1/2 w-full object-cover h-[450px]   max-md:h-[300px] object-[center_center] md:rounded-l-2xl"
              src={service.image}
              loading="lazy"
              alt={service.title}
            />

            {/* Content Section */}
            <div className="md:w-1/2 w-full md:p-2 p-1 pl-0 max-md:h-1/4 bg-[#F5F2EC] dark:bg-gray-700 flex flex-col justify-center">
              <h2 className="text-xl lg:text-2xl font-bold dark:text-[#F6F3ED] text-gray-800 mb-2 pl-4 lg:pl-6">
                {service.title}
              </h2>
              <hr className="border-gray-300 m-2 ml-0 w-full" />
              <p className="text-gray-600 text-justify dark:text-[#F6F3ED] text-sm lg:text-base pl-4 lg:pl-6">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
