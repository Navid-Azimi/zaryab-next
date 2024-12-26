'use client';
import { useState } from "react";

const ImageSlider = () => {

    const images = ['paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png'
        , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png'
        , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png'
        , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png'];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleForward = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleBackward = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
            {/* Images */}
            <div className="w-full h-full relative">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out
              ${index === currentIndex ? "translate-x-0" :
                            index < currentIndex ? "-translate-x-full" : "translate-x-full"}`}
                    >
                        <img
                            src={`/assets/img/${image}`}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handleBackward}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                ◀
            </button>
            <button
                onClick={handleForward}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                ▶
            </button>
        </div>
    );
};

export default ImageSlider;
