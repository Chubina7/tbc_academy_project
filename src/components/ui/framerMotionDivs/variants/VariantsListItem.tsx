"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function VariantsListItem({ children, className }: Props) {
  return (
    <motion.li
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className={className ? className : ""}
    >
      {children}
    </motion.li>
  );
}
