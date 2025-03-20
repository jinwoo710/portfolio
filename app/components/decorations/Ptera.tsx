"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export interface PteraProps {
  state: "UP" | "DOWN";
}

export default function Ptera({ state }: PteraProps) {
  return (
    <motion.div animate={{ y: state === "UP" ? 0 : 10 }}>
      <Image
        src={`/images/ptera_${state}.png`}
        className={`z-40`}
        alt="Ptera"
        width={100}
        height={66}
      />
    </motion.div>
  );
}
