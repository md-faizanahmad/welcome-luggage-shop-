"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Skeleton } from "@mui/material";

// Array of banner images with school-themed alt text for SEO
const banners = [
  {
    src: "/banner/Banner1.png",
    alt: "One-Stop Solution for All Bag & Trolley Repairs in Gaya",
  },
  {
    src: "/banner/Banner2.png",
    alt: "All Types of Luggage Handles – Strong, Comfortable & Long-Lasting ",
  },
  {
    src: "/banner/Banner3.png",
    alt: "All Types Runner & zipper chain Available on Wholesale Price",
  },
  {
    src: "/banner/Banner4.png",
    alt: "All Types of Trolley & Luggage Wheels – Durable Replacements That Roll Smoothly",
  },
  {
    src: "/banner/Banner5.png",
    alt: "All Types of Trolley & Luggage Parts & Repair",
  },
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isPaused]);

  // Simulate image load (remove in production if images load instantly)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // Simulate delay
    return () => clearTimeout(timer);
  }, []);

  // Handle Next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle Previous button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle touch/swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (diffX > 50) {
      handleNext(); // Swipe left
      setTouchStartX(null);
    } else if (diffX < -50) {
      handlePrev(); // Swipe right
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  return (
    <div
      className="max-w-screen-x1 mx-auto w-full relative pt-2 h-[250px] sm:h-[300px] lg:h-[600px] overflow-hidden rounded-xl px-2 sm:px-4 lg:px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Skeleton loader while image is loading */}
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          className="w-full h-full rounded-xl"
          animation="pulse"
          height={600}
        />
      ) : (
        <>
          {/* Banner Image with Gradient Overlay */}
          <div className="relative w-full h-full transition-opacity duration-500">
            <Image
              src={banners[currentIndex].src}
              alt={banners[currentIndex].alt}
              fill
              className="object-fill rounded-xl"
              priority={currentIndex === 0}
              onLoad={() => setIsLoading(false)}
            />
            {/* Gradient Overlay for Professional Look */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent rounded-xl" />
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-red-800 scale-125"
                    : "bg-gray-900/50 hover:bg-sky-500"
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
