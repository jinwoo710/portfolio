"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TRex from "./TRex";
import Cloud from "./Cloud";
import Ground from "./Ground";

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollCount, setScrollCount] = useState(0);
  const [characterState, setCharacterState] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollCount(Math.floor(latest * 100));
      if (Math.floor(latest * 40) % 2 === 0) {
        setCharacterState(1);
      } else {
        setCharacterState(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="relative h-auto bg-sky-300" ref={containerRef}>
      <div className="fixed top-4 left-4 z-50 bg-white/80 p-2 rounded-md text-2xl font-bold">
        {scrollCount}
      </div>
      <TRex state={characterState === 1 ? "RIGHT" : "LEFT"} />
      <Cloud
        top={20}
        left={10}
        from={0}
        end={100}
        scrollYProgress={scrollYProgress}
      />
      <Cloud
        top={40}
        left={0}
        from={-100}
        end={200}
        scrollYProgress={scrollYProgress}
      />
      <Cloud
        top={20}
        left={10}
        from={0}
        end={1000}
        scrollYProgress={scrollYProgress}
      />
      <Cloud
        top={20}
        left={10}
        from={0}
        end={100}
        scrollYProgress={scrollYProgress}
      />
      <Cloud
        top={20}
        left={10}
        from={0}
        end={100}
        scrollYProgress={scrollYProgress}
      />

      <Ground goal={-1000} scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default Portfolio;
