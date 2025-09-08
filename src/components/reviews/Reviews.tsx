"use client";
import { useState } from "react";
import { Star, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  rating: number;
  review: string;
}

interface Review {
  name: string;
  email: string;
  rating: number;
  review: string;
}

export default function ReviewSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    rating: 0,
    review: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [staticReviews, setStaticReviews] = useState<Review[]>([
    {
      name: "Priya Sharma",
      email: "priya@example.com",
      rating: 5,
      review:
        "Amazing service! My phone screen was fixed in just an hour. Highly recommend TechFix!",
    },
    {
      name: "Rohan Patel",
      email: "rohan@example.com",
      rating: 4,
      review:
        "Great experience with laptop repair. The technician was knowledgeable and friendly.",
    },
    {
      name: "Anjali Gupta",
      email: "anjali@example.com",
      rating: 5,
      review:
        "Excellent support team! Battery replacement was quick and affordable.",
    },
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.rating && formData.review) {
      setStaticReviews((prev) => [...prev, { ...formData }]);
      setFormData({ name: "", email: "", rating: 0, review: "" }); // Reset form
      setIsModalOpen(false); // Close modal
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mx-auto text-white block bg-gradient-to-r from-blue-500 to-green-500 cursor-pointer px-4 py-2 rounded-lg hover:from-blue-600 hover:to-green-600 transition-colors text-sm sm:text-base mb-8"
        >
          Please Review
        </button>

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
              <p className="text-gray-500 text-xs sm:text-sm">{review.email}</p>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 15, stiffness: 100 }}
                className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 max-w-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-4"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-black">
                    Leave a Review
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-black text-sm font-medium mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder:text-black"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-black text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder:text-black"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black text-sm font-medium mb-2">
                      Rating
                    </label>
                    <div className="flex space-x-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 cursor-pointer ${
                            i < formData.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill={i < formData.rating ? "currentColor" : "none"}
                          onClick={() => handleRating(i + 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-black text-sm font-medium mb-2"
                      htmlFor="review"
                    >
                      Review
                    </label>
                    <textarea
                      id="review"
                      name="review"
                      value={formData.review}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder:text-black"
                      placeholder="Write your review here..."
                      rows={4}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-lg hover:from-blue-600 hover:to-green-600 transition-colors text-sm"
                  >
                    Submit Review
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
