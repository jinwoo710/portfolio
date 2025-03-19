import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export interface CloudProps {
  top: number;
  left: number;
  from: number;
  end: number;
  scrollYProgress: MotionValue<number>;
}

export default function Cloud({
  top,
  left,
  from,
  end,
  scrollYProgress,
}: CloudProps) {
  const position = useTransform(scrollYProgress, [0, 1], [from, end]);
  return (
    <motion.div
      className={`fixed top-${top} left-${left} z-10`}
      style={{ x: position }}
    >
      <Image src="/images/cloud.png" alt="Cloud" width={120} height={120} />
    </motion.div>
  );
}
