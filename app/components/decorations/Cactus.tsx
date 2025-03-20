"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export interface CloudProps {
  left: number;
  from: number;
  end: number;
  isBottom?: boolean;
  scrollYProgress: MotionValue<number>;
}

export default function Cactus({
  left,
  from,
  end,
  isBottom = false,
  scrollYProgress,
}: CloudProps) {
  const position = useTransform(scrollYProgress, [0, 1], [from, end]);
  return (
    <motion.div
      className={`fixed ${isBottom ? "bottom-10" : "bottom-32"} z-40`}
      style={{
        x: position,
        left: `${left}%`,
      }}
    >
      <Image src="/images/cactus.png" alt="cactus" width={40} height={84} />
    </motion.div>
  );
}
