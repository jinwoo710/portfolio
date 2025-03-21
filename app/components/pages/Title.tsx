"use client";
import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Title() {
  const titleRef = useRef<HTMLElement>(null);
  const isInView = useInView(titleRef);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start", "end start"],
  });

  const nameX = useTransform(scrollYProgress, [0.05, 0.8], [0, -2000]);
  const jobX = useTransform(scrollYProgress, [0.05, 0.8], [0, 2000]);
  const scrollTextOpacity = useTransform(scrollYProgress, [0, 0.05], [0.8, 0]);

  return (
    <section
      className="w-full overflow-hidden h-[100vh] flex justify-center items-center flex-col z-100 relative"
      ref={titleRef}
    >
      {isInView && (
        <>
          <motion.span
            className="text-4xl sm:text-8xl fixed top-2/5 text-gray-800"
            style={isInView ? { x: nameX } : {}}
          >
            SONG JIN WOO
          </motion.span>
          <motion.span
            style={isInView ? { x: jobX } : {}}
            className="text-4xl sm:text-8xl fixed top-1/2 text-gray-800"
          >
            FRONTEND
          </motion.span>
          <motion.div
            className="fixed top-2/3 flex flex-col text-2xl text-gray-800"
            transition={{
              repeat: Infinity,
              repeatType: "loop",
            }}
            animate={{
              y: [0, 10, 0],
            }}
            style={{ opacity: scrollTextOpacity }}
          >
            <span>▼ scroll down ▼</span>
          </motion.div>
        </>
      )}
    </section>
  );
}
