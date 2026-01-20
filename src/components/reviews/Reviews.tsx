"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import Link from "next/link";

// interface FormData {
//   name: string;

//   rating: number;
//   review: string;
// }

interface Review {
  name: string;

  rating: number;
  review: string;
}

export default function ReviewSection() {
  // const [formData, setFormData] = useState<FormData>({
  //   name: "",

  //   rating: 0,
  //   review: "",
  // });
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [staticReviews, setStaticReviews] = useState<Review[]>([
  const [staticReviews] = useState<Review[]>([
    {
      name: "Priya Sharma",
      rating: 3,
      review: "Amazing service! ",
    },
    {
      name: "Rohan Patel",

      rating: 4,
      review: "Great experience with Luggages",
    },
    {
      name: "Anjali Gupta",

      rating: 5,
      review: "Excellent support team! ",
    },
  ]);

  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-6 sm:mb-10">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {staticReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-2 sm:mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 sm:w-5 h-4 sm:h-5 ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill={i < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-black text-sm sm:text-base mb-2 sm:mb-4">
                {review.review}
              </p>
              <p className="text-black font-medium text-sm sm:text-base">
                {review.name}
              </p>
              {/* <p className="text-gray-500 text-xs sm:text-sm">{review.email}</p> */}
            </div>
          ))}
        </div>
        <button className="mx-auto mt-10 text-white block bg-gradient-to-r from-blue-500 to-green-500 cursor-pointer px-4 py-2 rounded-lg hover:from-blue-600 hover:to-green-600 transition-colors text-sm sm:text-base mb-8">
          <Link
            href="https://g.page/r/CZrs6WrrwRnoEBM/review"
            target="_blank"
            aria-label="Check Google Business Rewview"
          >
            Check Google Reviews
          </Link>
        </button>
      </div>
    </div>
  );
}
