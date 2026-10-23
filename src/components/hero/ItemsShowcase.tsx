import Image from "next/image";
import itemsImage from "@/assets/Items.png";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px]">
      <Image
        src={itemsImage}
        alt="Luggage, accessories, and replacement parts"
        priority
        sizes="(max-width: 640px) 260px, (max-width: 1023px) 320px, (max-width: 1279px) 380px, 420px"
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
