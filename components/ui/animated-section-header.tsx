"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionHeaderProps {
  title: string;
  description: string;
}

export function AnimatedSectionHeader({ title, description }: AnimatedSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
        {title}
      </h2>
      <p className="text-blue-800/80 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
} 