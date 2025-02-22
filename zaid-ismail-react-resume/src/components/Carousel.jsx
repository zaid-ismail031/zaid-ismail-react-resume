import { useState } from "react";

const Carousel = () => {
    const images = [
      { src: "https://via.placeholder.com/600x300", description: "Image 1 Description" },
      { src: "https://via.placeholder.com/600x300", description: "Image 2 Description" },
      { src: "https://via.placeholder.com/600x300", description: "Image 3 Description" },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="w-full max-w-lg mx-auto mt-8 text-center">
        <img src={images[currentIndex].src} alt="carousel" className="w-full h-auto rounded-lg shadow-md" />
        <p className="mt-2 text-gray-700">{images[currentIndex].description}</p>
        <div className="flex justify-between mt-4">
          <button onClick={prevSlide} className="bg-gray-800 text-white px-4 py-2 rounded">Previous</button>
          <button onClick={nextSlide} className="bg-gray-800 text-white px-4 py-2 rounded">Next</button>
        </div>
      </div>
    );
};

export default Carousel;