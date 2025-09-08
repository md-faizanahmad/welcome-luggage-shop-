import Image from "next/image";

const WhatWeDoList = [
  {
    title: "Repairing of luggage",
    description:
      "Expert repairs all travel bags, and trolley bags (VIP, Skybags, Samsonite, Wildcraft & more).",
    src: "/cards_img/card1.png",
  },
  {
    title: "Wholesale parts",
    description: "Quality wheels, handles, runners, covers (plastic & cloth)",
    src: "/cards_img/card2.png",
  },
  {
    title: "Accessories",
    description: "Custom covers and accessories for luggage & travel bags",
    src: "/cards_img/card3.png",
  },
  {
    title: "Dress alterations",
    description:
      "Dress alterations for men, women, and children — neat stitching at reasonable rates",
    src: "/cards_img/card3.png",
  },
];

export default function WhatWeDoServer() {
  return (
    <section
      className="bg-gradient-to-br from-blue-400 shadow-2xl to-white mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-labelledby="WhatWeDo-heading"
    >
      <h1
        id="WhatWeDo-heading"
        className="text-3xl text-black md:text-4xl font-bold  mb-12 text-center bg-clip-text "
      >
        What We Do
      </h1>
      <div className="grid cursor-pointer grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WhatWeDoList.map((service, index) => (
          <article
            key={index}
            className="relative bg-white/30 backdrop-blur-md hover:shadow-xl  rounded-xl p-6 group transform  transition-transform border border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500"
            aria-labelledby={`service-${index}-title`}
          >
            <div className="flex justify-center mb-4">
              <Image
                src={service.src}
                alt={`${service.title} icon`}
                width={58}
                height={58}
                className="object-contain transform  group-hover:rotate-0 transition-transform"
                quality={75}
                priority={index === 0}
              />
            </div>
            <h2
              id={`service-${index}-title`}
              className="text-xl font-semibold text-gray-800 mb-2 text-center"
            >
              {service.title}
            </h2>
            <p className="text-gray-600 text-center">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
