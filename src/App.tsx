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
    ],
  },
  {
    original: "/paintings/images/pink_roses/pink-roses-latour-min.jpg",
    versions: [
      "/paintings/images/pink_roses/filtered_img_1.png",
      "/paintings/images/pink_roses/filtered_img_2.png",
      "/paintings/images/pink_roses/filtered_img_3.png",
      "/paintings/images/pink_roses/filtered_img_4.png",
      "/paintings/images/pink_roses/filtered_img_5.png",
      "/paintings/images/pink_roses/filtered_img_6.png",
      "/paintings/images/pink_roses/filtered_img_7.png",
      "/paintings/images/pink_roses/filtered_img_8.png",
      "/paintings/images/pink_roses/filtered_img_9.png",
      "/paintings/images/pink_roses/filtered_img_10.png",
      "/paintings/images/pink_roses/pink-roses-latour-min.jpg",
    ],
  },
  {
    original: "/paintings/images/summer_flowers/latour-summer-flowers-min.jpg",
    versions: [
      "/paintings/images/summer_flowers/filtered_img_1.png",
      "/paintings/images/summer_flowers/filtered_img_2.png",
      "/paintings/images/summer_flowers/filtered_img_3.png",
      "/paintings/images/summer_flowers/filtered_img_4.png",
      "/paintings/images/summer_flowers/filtered_img_5.png",
      "/paintings/images/summer_flowers/filtered_img_6.png",
      "/paintings/images/summer_flowers/filtered_img_7.png",
      "/paintings/images/summer_flowers/filtered_img_8.png",
      "/paintings/images/summer_flowers/filtered_img_9.png",
      "/paintings/images/summer_flowers/filtered_img_10.png",
      "/paintings/images/summer_flowers/latour-summer-flowers-min.jpg",
    ],
  },
  {
    original: "/paintings/images/roses/roses-latour-min.jpg",
    versions: [
      "/paintings/images/roses/filtered_img_1.png",
      "/paintings/images/roses/filtered_img_2.png",
      "/paintings/images/roses/filtered_img_3.png",
      "/paintings/images/roses/filtered_img_4.png",
      "/paintings/images/roses/filtered_img_5.png",
      "/paintings/images/roses/filtered_img_6.png",
      "/paintings/images/roses/filtered_img_7.png",
      "/paintings/images/roses/filtered_img_8.png",
      "/paintings/images/roses/filtered_img_9.png",
      "/paintings/images/roses/filtered_img_10.png",
      "/paintings/images/roses/roses-latour-min.jpg",
    ],
  },
  {
    original: "/paintings/images/peonies/vase-peonies-latour-min.jpg",
    versions: [
      "/paintings/images/peonies/filtered_img_1.png",
      "/paintings/images/peonies/filtered_img_2.png",
      "/paintings/images/peonies/filtered_img_3.png",
      "/paintings/images/peonies/filtered_img_4.png",
      "/paintings/images/peonies/filtered_img_5.png",
      "/paintings/images/peonies/filtered_img_6.png",
      "/paintings/images/peonies/filtered_img_7.png",
      "/paintings/images/peonies/filtered_img_8.png",
      "/paintings/images/peonies/filtered_img_9.png",
      "/paintings/images/peonies/filtered_img_10.png",
      "/paintings/images/peonies/vase-peonies-latour-min.jpg",
    ],
  },
  {
    original: "/paintings/images/picard/picard-min.jpg",
    versions: [
      "/paintings/images/picard/filtered_img_1.png",
      "/paintings/images/picard/filtered_img_2.png",
      "/paintings/images/picard/filtered_img_3.png",
      "/paintings/images/picard/filtered_img_4.png",
      "/paintings/images/picard/filtered_img_5.png",
      "/paintings/images/picard/filtered_img_6.png",
      "/paintings/images/picard/filtered_img_7.png",
      "/paintings/images/picard/filtered_img_8.png",
      "/paintings/images/picard/filtered_img_9.png",
      "/paintings/images/picard/filtered_img_10.png",
      "/paintings/images/picard/picard-min.jpg",
    ],
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVersion, setCurrentVersion] = useState(0);

  const nextSlide = () => {
    setCurrentVersion(0);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
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
        {/* Test comment */}
        {slides[currentSlide].versions.map((version, index) => (
          <img
            key={index}
            src={version}
            alt="slideshow"
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-lg transition-opacity ${currentVersion > 0 ? "duration-500" : "duration-0"} ${
              index <= currentVersion ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <Button className="mt-4" onClick={nextVersion}>
        {currentVersion == 10 ? "Zeige Liza nächstes Bild" : "Zeige Liza nächste Farbe"}
      </Button>
    </div>
  );
}
