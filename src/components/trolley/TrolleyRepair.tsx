"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Settings, CheckCircle2, MoveRight } from "lucide-react";

export function TrolleyRepairSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Decorative background element */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

          <div className="relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/Trolley_Repair.png"
              alt="Close up of suitcase wheels and handle repair"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Status Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
              <p className="text-blue-600 font-bold text-sm">
                Spare Parts in Stock
              </p>
              <p className="text-gray-900 text-xs font-medium">
                Wheels, Handles & Locks
              </p>
            </div>
          </div>
        </motion.div>

        {/* Text Side */}
        <div className="space-y-8">
          <header>
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
              <Settings size={18} className="animate-spin-slow" /> Engineering
              Quality
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
              Is your luggage <br />
              <span className="text-blue-400">hard to roll?</span>
            </h2>
          </header>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            From cracked shells to jammed telescopic handles, we restore your
            travel gear to factory condition. Specializing in high-performance
            wheel alignments and heavy-duty hardware replacement.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Spinner Wheel Swap",
              "Telescopic Fix",
              "TSA Lock Reset",
              "Body Patching",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-slate-700 font-semibold"
              >
                <CheckCircle2 size={20} className="text-blue-500" />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <a
              href="tel:+919430965836"
              className="group inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-400 transition-all shadow-xl shadow-slate-200"
            >
              Book a Repair{" "}
              <MoveRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
