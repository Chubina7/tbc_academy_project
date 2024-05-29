"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function VariantsList({ children, className }: Props) {
  return (
    <motion.ul
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className={className ? className : ""}
      style={{overflow: "hidden"}}
    >
      {children}
    </motion.ul>
  );
}
