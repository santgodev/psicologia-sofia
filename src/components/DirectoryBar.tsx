"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DirectoryBar() {
  const directories = [
    { name: "Psychology Today", label: "Psychology Today" },
    { name: "Doctoralia", label: "Doctoralia" },
    { name: "Top Doctors", label: "Top Doctors" },
    { name: "GoodTherapy", label: "GoodTherapy" },
    { name: "Theravive", label: "theravive" },
  ];

  return (
    <section className="w-full py-12 border-y border-stone-200/60 bg-[#FAF7F2]/50">
      <div className="max-w-[1240px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium tracking-wider text-stone-500 uppercase mb-8"
        >
          Destacadas y avaladas en los principales directorios de psicología
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {directories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-stone-800 font-serif font-bold text-lg sm:text-xl tracking-tight transition-colors cursor-default"
            >
              {item.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
