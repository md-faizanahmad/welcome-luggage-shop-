"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Zap, PhoneCall } from "lucide-react";

export function ZipperReplacementSection() {
  return (
    <section className="py-12 px-4 md:px-8 w-full">
      <article className="max-w-7xl mx-auto py-16 px-8 md:px-16 bg-slate-900 text-white rounded-[4rem] overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-black mb-6 italic tracking-tight leading-none">
                Don&apos;t Toss It. <br />
                <span className="text-blue-400 underline decoration-white/20 underline-offset-8">
                  Zip It.
                </span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
                We replace sliders and full zipper tracks for high-end
                backpacks, jackets, and luxury handbags. Precision stitching
                that matches your original design.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3 p-6 bg-white/5 rounded-3xl border border-white/10">
                <Scissors className="text-blue-400" size={32} />
                <h4 className="font-bold text-xl">Industrial Grade</h4>
                <p className="text-slate-400 text-sm">
                  Nylon bonded threads for maximum zipper life.
                </p>
              </div>
              <div className="space-y-3 p-6 bg-white/5 rounded-3xl border border-white/10">
                <Zap className="text-blue-400" size={32} />
                <h4 className="font-bold text-xl">Express Service</h4>
                <p className="text-slate-400 text-sm">
                  Most sliders replaced while you wait.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919430965836"
              className="flex items-center justify-center gap-3 w-full sm:w-fit bg-blue-500 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-slate-900 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
            >
              <PhoneCall size={20} />
              WhatsApp Price Quote
            </a>
          </div>

          {/* Bento Grid Images with Unsplash */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative h-72 md:h-96 w-full rounded-[2rem] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop"
                alt="Close up of a heavy duty zipper"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative h-72 md:h-96 w-full rounded-[2rem] overflow-hidden mt-12"
            >
              <Image
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop"
                alt="Suitcase repair professional at work"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </article>
    </section>
  );
}
