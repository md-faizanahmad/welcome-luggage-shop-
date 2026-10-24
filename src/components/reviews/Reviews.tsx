"use client";

import { useRef, useState } from "react";
import { Star } from "lucide-react";
import Link from "next/link";

interface Review {
  name: string;
  rating: number;
  review: string;
}

const staticReviews: Review[] = [
  {
    name: "Priya Sharma",
    rating: 3,
    review: "Amazing service!",
  },
  {
    name: "Rohan Patel",
    rating: 4,
    review: "Great experience with Luggages",
  },
  {
    name: "Anjali Gupta",
    rating: 5,
    review: "Excellent support team!",
  },
];

export default function ReviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const containerCenter =
      container.getBoundingClientRect().left +
      container.getBoundingClientRect().width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter =
        card.getBoundingClientRect().left +
        card.getBoundingClientRect().width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToReview = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement | undefined;

    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(index);
  };

  return (
    <section className="overflow-hidden py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-brand-navy sm:mb-10 sm:text-3xl">
          Customer <span className="text-brand-red">Reviews</span>
        </h2>

        {/* Mobile horizontal swipe; desktop responsive grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          aria-label="Customer reviews"
          className="
            -mx-4 flex snap-x snap-mandatory gap-4
            overflow-x-auto overscroll-x-contain
            px-4 pb-4
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:-mx-6 sm:gap-6 sm:px-6
            md:mx-0 md:grid md:grid-cols-2
            md:gap-6 md:overflow-visible md:px-0 md:pb-0
            lg:grid-cols-3
          "
        >
          {staticReviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="
                w-[82vw] cursor-pointer max-w-[340px] shrink-0 snap-center
                rounded-lg bg-white/90 p-4 shadow-lg
                backdrop-blur-md transition-shadow duration-300
                hover:shadow-xl
                sm:w-[70vw] sm:max-w-[380px] sm:p-6
                md:w-auto md:max-w-none
              "
            >
              <div
                className="mb-2 flex items-center sm:mb-4"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < review.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mb-2 text-sm text-brand-navy sm:mb-4 sm:text-base">
                {review.review}
              </p>

              <p className="text-sm font-medium text-brand-navy sm:text-base">
                {review.name}
              </p>
            </article>
          ))}
        </div>

        {/* Navigation dots on mobile */}
        <div className="mt-3 flex items-center justify-center gap-2 md:hidden">
          {staticReviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => scrollToReview(index)}
              aria-label={`Show review ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-brand-red"
                  : "w-2.5 bg-brand-navy/20 hover:bg-brand-red/50"
              }`}
            />
          ))}
        </div>

        {/* Google Reviews button */}
        <div className="mb-8 mt-8 text-center sm:mt-10">
          <Link
            href="https://g.page/r/CZrs6WrrwRnoEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check Google Business Reviews"
            className="
              inline-block cursor-pointer rounded-lg
              bg-brand-red px-4 py-2
              text-sm text-white transition-colors
              hover:bg-brand-red-dark
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-brand-red focus-visible:ring-offset-2
              sm:text-base
            "
          >
            Check Google Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
