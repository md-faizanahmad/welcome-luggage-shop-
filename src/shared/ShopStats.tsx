"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { CalendarHeart, Percent, Users2, Verified, Zap } from "lucide-react";

const StatsCounter = () => {
  const [dailyStats, setDailyStats] = useState({ customers: 0, parts: 0 });

  useEffect(() => {
    // Generates the daily average logic: 2-5 customers, 5-10 parts
    const customers = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    const parts = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    setDailyStats({ customers, parts });
  }, []);

  const stats = [
    {
      label: "Happy Clients",
      value: 100000,
      icon: <Users2 size={24} />,
      suffix: "+",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Expertise Years",
      value: 15,
      icon: <CalendarHeart size={24} />,
      suffix: "+",
      color: "bg-slate-50 text-slate-600",
    },
    {
      label: "Total Parts Supplied",
      value: 50000,
      icon: <Verified size={24} />,
      suffix: "+",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Success Rate",
      value: 98,
      icon: <Percent size={24} />,
      suffix: "%",
      color: "bg-slate-50 text-slate-600",
    },
  ];

  return (
    <section className="py-16  overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Dynamic Daily Activity Bar - SEEDS THE IMPACT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16 py-4 border-y border-slate-100"
        >
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-blue-600 fill-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Today&apos;s Activity:
            </span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
            <span className="text-blue-600">{dailyStats.customers}</span> New
            Customers Assisted
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
            <span className="text-blue-600">{dailyStats.parts}</span> Genuine
            Parts Dispatched
          </div>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`p-4 rounded-2xl mb-6 ${item.color}`}>
                {item.icon}
              </div>

              <div className="flex flex-col">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
                  <CountUp
                    end={item.value}
                    duration={3}
                    separator=","
                    enableScrollSpy
                  />
                  <span className="text-blue-600 ml-1">{item.suffix}</span>
                </h3>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mt-2">
                  {item.label}
                </p>
              </div>

              {/* Minimalist decorative background number */}
              <span className="absolute top-4 right-8 text-slate-50 font-black text-6xl -z-10 select-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
