import GalleryItem from "./GalleryItem";
// import { shuffleArray } from "../utils/helpers";
const Gallery = () => {
  const theGallery = [
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image1.webp?alt=media&token=bf993074-e386-4e2d-ad16-a23771fab7bb",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image2.webp?alt=media&token=f3d1ac34-6d1e-4582-b65a-f5542263f3f7",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image3.webp?alt=media&token=57eb7c13-cb04-4d6a-aac2-b64243dbb1ca",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image4.webp?alt=media&token=493d6e1b-45ec-4ea8-ad32-149d428fc9aa",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image7.webp?alt=media&token=7973793b-6027-41a0-a618-ddc7a4974901",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image8.webp?alt=media&token=9813b7b1-b38f-451c-ba27-95a19fa63abd",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image9.webp?alt=media&token=13aea899-61ba-43fe-bc89-42017781a94e",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image10.webp?alt=media&token=16baff59-cc93-47fb-8445-14e6eb41e0a8",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image11.webp?alt=media&token=947df5e9-ca7e-4fbd-89ee-796b036953a2",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image12.webp?alt=media&token=39d4183a-2a32-4197-9bf5-aba3c2d4ae74",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image13.webp?alt=media&token=c6efa112-29ba-422f-b3b1-7fb3fa9b54ff",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image14.webp?alt=media&token=3bd1c1c6-9599-45d3-ba27-2003bbec13df",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image15.webp?alt=media&token=fedd7052-0050-4e1c-a397-3f64f9675297",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image16.webp?alt=media&token=7e8abe9d-f1ea-44ee-9b54-d5d98b525e14",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image18.webp?alt=media&token=0a0f0e84-3ea1-460a-9129-463c9bb45320",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image19.webp?alt=media&token=f2135cfb-f10a-48ce-a387-c818c00a7ef0",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image20.webp?alt=media&token=c57f504b-a4ef-4e2f-8d33-6d68a88e063f",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image21.webp?alt=media&token=f38c15dd-d020-4930-90d9-354b9b874b92",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image22.webp?alt=media&token=d8939522-e1d8-44e6-b70b-fdd0acd3d7aa",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/gallery%2Fgallery-image23.webp?alt=media&token=d1549fb1-37ff-4adf-afe5-fc7065219a79",
    },
  ];


  return (
    <div
      id="gallery"
      className="w-full min-h-screen p-3 dark:bg-[#28282A] bg-[#F6F3ED]"
    >
      <h1 className="text-center bg-[#18181B]  dark:bg-[#F5F2EC] dark:text-[#0a0a0a] font-bold uppercase w-max mx-auto  rounded-full text-sm p-2 text-[#f2f5f5]">
        The Membres Haven Experience
      </h1>
      <h2 className="text-center text-[#D9A74A] uppercase text-4xl m-2 font-semibold">
        Gallery
      </h2>
      <div className="w-full columns-1 sm:columns-2 lg:columns-4">
        {theGallery.map((img, index) => (
          <>
          <GalleryItem key={index} link={img.link} index={index} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
