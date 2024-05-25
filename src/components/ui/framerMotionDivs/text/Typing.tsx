import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  text: string;
}

export default function Typing({ className, text }: Props) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      for (let i = 0; i <= text.length; i++) {
        timeout = setTimeout(() => {
          setVisibleText(text.substring(0, i));
        }, i * 50); // Adjust the duration here (e.g., 100ms)
      }
    };

    animateText();

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div className={className ? `${className} inline-block` : "inline-block"}>
      {visibleText.split("").map((char, index) => (
        <motion.span key={index} style={{ display: "inline-block" }}>
          {char}
        </motion.span>
      ))}
    </div>
  );
}
