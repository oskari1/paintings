import { useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    original: "/paintings/images/almond_blossom/almond_blossom.jpg",
    versions: [
      "/paintings/images/almond_blossom/filtered_img_1.png",
      "/paintings/images/almond_blossom/filtered_img_2.png",
      "/paintings/images/almond_blossom/filtered_img_3.png",
      "/paintings/images/almond_blossom/filtered_img_4.png",
      "/paintings/images/almond_blossom/filtered_img_5.png",
      "/paintings/images/almond_blossom/filtered_img_6.png",
      "/paintings/images/almond_blossom/filtered_img_7.png",
      "/paintings/images/almond_blossom/filtered_img_8.png",
      "/paintings/images/almond_blossom/filtered_img_9.png",
      "/paintings/images/almond_blossom/filtered_img_10.png",
      "/paintings/images/almond_blossom/almond-blossom-min.jpg",
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

  const nextVersion = () => {
    if ((currentVersion+1) % 11 == 0) {
      nextSlide();
    } else {
      setCurrentVersion((prev) => (prev + 1) % slides[currentSlide].versions.length);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-[600px] h-[400px] mx-auto">
        {/* Display all versions layered on top of each other */}
        {slides[currentSlide].versions.map((version, index) => (
          <img
            key={index}
            src={version}
            alt="slideshow"
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-lg transition-opacity duration-500 ${
              index <= currentVersion ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <Button className="mt-4" onClick={nextVersion}>
        {currentVersion == 10 ? "Zeige nächstes Bild" : "Zeige nächste Farbe"}
      </Button>
    </div>
  );
}
