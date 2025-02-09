import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    original: "/paintings/images/almond_blossom/almond_blossom.jpg",
    versions: [
      "/paintings/images/almond_blossom/filtered_img_1.png",
      "/paintings/images/almond_blossom/filtered_img_2.png",
      "/paintings/images/almond_blossom/filtered_img_3.png",
      "/paintings/images/almond_blossom/filtered_img_4.png",
      // "/paintings/images/almond_blossom/filtered_img_5.jpg",
      // "/paintings/images/almond_blossom/filtered_img_6.jpg",
      // "/paintings/images/almond_blossom/filtered_img_7.jpg",
      // "/paintings/images/almond_blossom/filtered_img_8.jpg",
      // "/paintings/images/almond_blossom/filtered_img_9.jpg",
      // "/paintings/images/almond_blossom/filtered_img_10.jpg",
      // "/paintings/images/almond_blossom/almond-blossom.jpg",
    ],
  },
  {
    original: "/paintings/images/lilacs/lilacs.jpeg",
    versions: [
      "/paintings/images/lilacs/filtered_img_1.jpg",
      "/paintings/images/lilacs/filtered_img_2.jpg",
      "/paintings/images/lilacs/filtered_img_3.jpg",
      "/paintings/images/lilacs/filtered_img_4.jpg",
      "/paintings/images/lilacs/filtered_img_5.jpg",
      "/paintings/images/lilacs/filtered_img_6.jpg",
      "/paintings/images/lilacs/filtered_img_7.jpg",
      "/paintings/images/lilacs/filtered_img_8.jpg",
      "/paintings/images/lilacs/filtered_img_9.jpg",
      "/paintings/images/lilacs/filtered_img_10.jpg",
      "/paintings/images/lilacs/lilacs.jpeg",
    ],
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVersion, setCurrentVersion] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setCurrentVersion(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setCurrentVersion(0);
  };

  const nextVersion = () => {
    setCurrentVersion((prev) => (prev + 1) % slides[currentSlide].versions.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-[600px] h-[400px] mx-auto">
        {/* Display the image */}
        <img
          src={slides[currentSlide].versions[currentVersion]}
          alt="slideshow"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 flex gap-4 w-full px-4 justify-between">
          <Button variant="ghost" size="icon" onClick={prevSlide}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={nextSlide}>
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <Button className="mt-4" onClick={nextVersion}>
        Next Version
      </Button>
    </div>
  );
}

// export default function Slideshow() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [currentVersion, setCurrentVersion] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setCurrentVersion(0);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setCurrentVersion(0);
//   };

//   const nextVersion = () => {
//     setCurrentVersion((prev) => (prev + 1) % slides[currentSlide].versions.length);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
//       <div className="relative w-[600px] h-[400px] mx-auto">
//         <AnimatePresence>
//           <motion.img
//             key={slides[currentSlide].versions[currentVersion]}
//             src={slides[currentSlide].versions[currentVersion]}
//             alt="slideshow"
//             className="w-full h-full object-cover rounded-2xl shadow-lg absolute"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           />
//         </AnimatePresence>
//         <div className="absolute top-1/2 left-0 -translate-y-1/2 flex gap-4 w-full px-4 justify-between">
//           <Button variant="ghost" size="icon" onClick={prevSlide}>
//             <ChevronLeft className="w-6 h-6" />
//           </Button>
//           <Button variant="ghost" size="icon" onClick={nextSlide}>
//             <ChevronRight className="w-6 h-6" />
//           </Button>
//         </div>
//       </div>
//       <Button className="mt-4" onClick={nextVersion}>
//         Next Version
//       </Button>
//     </div>
//   );
// }

