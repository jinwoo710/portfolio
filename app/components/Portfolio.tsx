"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TRex from "./decorations/TRex";
import Cloud from "./decorations/Cloud";
import Ground from "./decorations/Ground";
import Title from "./pages/Title";
import Skill from "./pages/Skill";
import Career from "./pages/Career";
import Cactus from "./decorations/Cactus";

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
    <div
      className="relative h-auto "
      ref={containerRef}
      style={{
        background:
          "linear-gradient(to bottom, #f7f7f7, #d0d0d0 25%, #a0a0a0 50%, #505050 75%, #202020 100%)",
      }}
    >
      <div className="fixed top-4 right-4 z-50  p-2 rounded-md text-2xl font-bold text-gray-800">
        SCORE: {scrollCount * 10}
      </div>
      <TRex state={characterState === 1 ? "RIGHT" : "LEFT"} />
      <Cactus
        left={80}
        from={0}
        end={-1000}
        scrollYProgress={scrollYProgress}
      />
      <Cactus
        left={70}
        from={1000}
        end={10}
        scrollYProgress={scrollYProgress}
      />
      <Cactus
        left={40}
        from={0}
        end={-1400}
        scrollYProgress={scrollYProgress}
        isBottom
      />
      <Cactus
        left={90}
        from={1480}
        end={-1400}
        scrollYProgress={scrollYProgress}
        isBottom
      />

      <Cloud
        top={20}
        left={80}
        from={0}
        end={-1400}
        scrollYProgress={scrollYProgress}
      />
      <Cloud
        top={10}
        left={40}
        from={0}
        end={-800}
        scrollYProgress={scrollYProgress}
      />
      <Cloud
        top={10}
        left={90}
        from={400}
        end={-200}
        scrollYProgress={scrollYProgress}
      />
      <Cloud
        top={20}
        left={90}
        from={800}
        end={-1200}
        scrollYProgress={scrollYProgress}
      />

      <Ground goal={-1000} scrollYProgress={scrollYProgress} />
      <Title />
      <Skill />
      <Career characterState={characterState} />
    </div>
  );
};

export default Portfolio;
