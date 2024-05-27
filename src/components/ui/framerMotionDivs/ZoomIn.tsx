"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ZoomIn({ children, className, delay }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: delay || 0 }}
      className={className || ""}
    >
      {children}
    </motion.div>
  );
}
