"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn, ZoomOut, MessageCircle, Share2 } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  const openPreview = () => {
    setIsOpen(true);
    setIsZoomed(false);
  };

  const closePreview = () => {
    setIsOpen(false);
    setIsZoomed(false);
  };

  const handleTouch = () => {
    const now = Date.now();

    if (now - lastTap < 300) {
      openPreview();
    }
    setLastTap(now);
  };

  const shareOnWhatsApp = () => {
    const message = `Namaste! Mujhe "${product.name.trim()}" service ke baare mein jaankari chahiye.\n\nImage: ${window.location.origin}${product.image}\n\nPlease details aur price batayein.`;
    const whatsappUrl = `https://wa.me/919430965836?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Product image */}
      <article className="w-full">
        <button
          type="button"
          onTouchEnd={handleTouch}
          onDoubleClick={openPreview}
          onClick={() => {
            // Prevent a single mobile tap from opening the preview.
            // Double-tap is handled by handleTouch.
            if ("ontouchstart" in window) return;
            openPreview();
          }}
          className="
            group relative block w-full cursor-zoom-in
            overflow-hidden rounded-xl text-left
          "
          aria-label={`Open image preview for ${product.name}`}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            // MOBILE IMAGE SIZE: controlled by the mobile card width in ProductCatalogClient.tsx.
            // DESKTOP IMAGE SIZE: controlled by the grid column width in ProductCatalogClient.tsx.
            // These sizes tell Next.js which image resolution to download.
            sizes="(max-width: 639px) 60vw, (max-width: 767px) 260px, (max-width: 1279px) 30vw, 25vw"
            className="
              block h-auto w-full object-contain
              transition-transform duration-300 ease-out
              group-hover:scale-[1.03]
            "
            priority={product.id === 1}
          />

          {/* Desktop hover indicator */}
          <span className="pointer-events-none absolute bottom-2 right-2 hidden rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
            <ZoomIn size={17} />
          </span>
        </button>

        {/* Service name and WhatsApp button below the image */}
        <div className="flex flex-col gap-3 pt-3">
          <h3 className="text-sm text-center font-bold leading-5 text-brand-navy sm:text-base">
            {product.name.trim()}
          </h3>

          <button
            type="button"
            onClick={shareOnWhatsApp}
            className="
              inline-flex w-full items-center justify-center gap-2
              rounded-lg bg-brand-green px-4 py-2.5
              text-sm font-semibold text-white
              transition-colors hover:bg-brand-green-dark
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-brand-green focus-visible:ring-offset-2
            "
          >
            <MessageCircle size={17} />
            Enquiry via Msg
            <Share2 size={15} />
          </button>
        </div>
      </article>

      {/* Full-screen image preview */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview: ${product.name}`}
        >
          <button
            type="button"
            onClick={closePreview}
            className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Close image preview"
          >
            <X size={24} />
          </button>

          <div
            className="relative flex h-[75vh] w-full max-w-5xl items-center justify-center overflow-auto"
            onClick={(event) => event.stopPropagation()}
            onDoubleClick={() => setIsZoomed((previous) => !previous)}
          >
            <div
              className={`relative h-full w-full transition-transform duration-300 ${
                isZoomed
                  ? "scale-150 cursor-zoom-out"
                  : "scale-100 cursor-zoom-in"
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Preview actions */}
          <div
            className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3 px-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsZoomed((previous) => !previous)}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-navy transition-colors hover:bg-gray-100"
            >
              {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
              {isZoomed ? "Zoom Out" : "Zoom In"}
            </button>

            <button
              type="button"
              onClick={shareOnWhatsApp}
              className="flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark"
            >
              <MessageCircle size={18} />
              Enquiry via Msg
            </button>
          </div>
        </div>
      )}
    </>
  );
}
