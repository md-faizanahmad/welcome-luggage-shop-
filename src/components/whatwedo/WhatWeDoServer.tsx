// // components/whatwedo/WhatWeDoServer.tsx
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// const WhatWeDoList = [
//   {
//     title: "Luggage Repair",
//     desc: "Expert restoration for all brands.",
//     src: "/services/repairall.png",
//     link: "/services/repairing-of-luggage",
//   },
//   {
//     title: "Wholesale Parts",
//     desc: "Genuine hardware at bulk prices.",
//     src: "/services/saleall.png",
//     link: "/services/wholesale-parts",
//   },
//   {
//     title: "Custom Covers",
//     desc: "Tailored protection for your gear.",
//     src: "/services/customcovers.png",
//     link: "/services/custom-covers",
//   },
//   {
//     title: "Dress Alterations",
//     desc: "Precision tailoring and fitting.",
//     src: "/services/4.png",
//     link: "/services/dress-alterations",
//   },
// ];

// export default function WhatWeDoServer() {
//   return (
//     <section className="py-16 bg-transparent overflow-hidden">
//       <div className="max-w-[1400px] mx-auto px-6">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb- gap-4">
//           <div>
//             <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">
//               Services
//             </span>
//             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-2">
//               What We Do
//             </h2>
//           </div>
//           <p className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed">
//             Expert luggage care and restoration.
//           </p>
//           <p className="text-slate-500  md:hidden max-w-xs text-sm font-medium leading-relaxed">
//             --- Swipe for More ---
//           </p>
//         </div>

//         {/* The Layout: Swipeable on Mobile, Grid on Desktop */}
//         <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar -mx-6 md:mx-0 md:px-0">
//           {WhatWeDoList.map((service, index) => (
//             <div
//               key={index}
//               className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center service-card-container"
//             >
//               <Link href={service.link} className="group relative block h-full">
//                 <div className="relative h-[420px] w-full overflow-hidden rounded-[2.5rem]   transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-100 group-hover:-translate-y-2">
//                   {/* Image Container */}
//                   <div className="absolute inset-0 p-10 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
//                     <Image
//                       src={service.src}
//                       alt={service.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       className="object-contain"
//                     />
//                   </div>

//                   {/* Glassmorphism Label */}
//                   <div className="absolute m-auto bottom-6 left-6 right-6 p-5 rounded-3xl bg-white/80 backdrop-blur-lg border border-white shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:border-blue-500">
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors tracking-tight">
//                           {service.title}
//                         </h3>
//                         <p className="text-xs text-slate-500 group-hover:text-blue-100 transition-colors mt-0.5">
//                           {service.desc}
//                         </p>
//                       </div>
//                       <div className="bg-blue-600 text-white p-2.5 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-all">
//                         <ArrowUpRight size={18} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const WhatWeDoList = [
  {
    title: "Luggage Repair",
    desc: "Expert restoration for all brands.",
    src: "/services/repairall.png",
    link: "/services/repairing-of-luggage",
  },
  {
    title: "Wholesale Parts",
    desc: "Genuine hardware at bulk prices.",
    src: "/services/saleall.png",
    link: "/services/wholesale-parts",
  },
  {
    title: "Custom Covers",
    desc: "Tailored protection for your gear.",
    src: "/services/customcovers.png",
    link: "/services/custom-covers",
  },
  {
    title: "Dress Alterations",
    desc: "Precision tailoring and fitting.",
    src: "/services/4.png",
    link: "/services/dress-alterations",
  },
];

export default function WhatWeDoServer() {
  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-2">
              What We Do
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed">
            Expert luggage care and restoration.
          </p>
        </div>

        {/* The Layout */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar -mx-6 md:mx-0 md:px-0">
          {WhatWeDoList.map((service, index) => (
            <div
              key={index}
              className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center service-card-container"
            >
              <Link href={service.link} className="group relative block h-full">
                <div className="relative h-[420px] w-full overflow-hidden rounded-[2.5rem]  transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-100 group-hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="absolute inset-0 p-10 flex items-center justify-center transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-8">
                    <Image
                      src={service.src}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </div>

                  {/* Glassmorphism Label - Upgraded Design */}
                  <div
                    className="absolute bottom-6 left-6 right-6 p-5 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl 
                                  opacity-0 translate-y-8 pointer-events-none
                                  transition-all duration-500 ease-out
                                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                                   group-hover:border-blue-500"
                  >
                    <div className="flex justify-between items-center">
                      <div className="overflow-hidden">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs text-black group-hover:text-black transition-colors mt-0.5 line-clamp-1">
                          {service.desc}
                        </p>
                      </div>
                      <div className="flex-shrink-0 bg-blue-600 text-black p-2.5 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-all ml-2">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
