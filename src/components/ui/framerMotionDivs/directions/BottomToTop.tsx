"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function BottomToTop({ children, className, delay }: Props) {
  return (
    <motion.div
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay || 0 }}
      className={className ? className : ""}
    >
      {children}
    </motion.div>
  );
}
