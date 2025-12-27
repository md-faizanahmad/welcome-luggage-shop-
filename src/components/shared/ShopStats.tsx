"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { CalendarHeart, Percent, Users2, Verified } from "lucide-react";

const StatsCounter = () => {
  //   const [dailyRepairs, setDailyRepairs] = useState(0);
  //   const [dailyPartsSupplied, setDailyPartsSupplied] = useState(0);

  //   useEffect(() => {
  //     // Generate client-only random values
  //     setDailyRepairs(Math.floor(Math.random() * (8 - 3 + 1)) + 3);
  //     setDailyPartsSupplied(Math.floor(Math.random() * (8 - 3 + 1)) + 3);
  //   }, []);

  const stats = [
    {
      label: "Lakh of Satisfied Customers",
      value: 100000,
      icon: <Users2 className="text-4xl text-blue-600" />,
      //   extra: "Daily Visits: 100+", // static
    },
    {
      label: "Years of Expert Repairs",
      value: 15,
      icon: <CalendarHeart className="text-4xl text-blue-600" />,
    },
    {
      label: "Parts Supplied",
      value: 50000,
      icon: <Verified className="text-4xl text-blue-600" />,
      //   extra: `Daily Min: 3, Avg: 5, Max: 8 (Currently: ${dailyPartsSupplied})`,
    },
    {
      label: "Customer Satisfaction",
      value: 98,
      icon: <Percent className="text-4xl text-blue-600" />,
      extra: "%",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b mb-10 from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Stats
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-4xl font-extrabold text-gray-900">
                <CountUp end={item.value} duration={2} />
                {item.extra === "%" ? "%" : "+"}
              </h2>
              <p className="text-gray-700 mt-1">{item.label}</p>
              {item.extra && item.extra !== "%" && (
                <p className="text-gray-500 text-sm mt-1">{item.extra}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
