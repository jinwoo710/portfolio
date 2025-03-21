"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export interface TrexProps {
  state: "RIGHT" | "LEFT";
}

export default function TRex({ state }: TrexProps) {
  return (
    <motion.div
      className="fixed left-1/3 bottom-32 z-40 transform -translate-x-1/2"
      animate={{ y: [0, -60, 0] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 4,
        ease: ["easeInOut"],
      }}
    >
      <Image
        src={`/images/rex_${state.toLocaleLowerCase()}.png`}
        alt="T-Rex"
        width={80}
        height={80}
      />
    </motion.div>
  );
}
