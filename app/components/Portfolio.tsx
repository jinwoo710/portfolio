"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import TRex from "./decorations/TRex";
import Cloud from "./decorations/Cloud";
import Ground from "./decorations/Ground";
import Title from "./pages/Title";
import Skill from "./pages/Skill";
import Career from "./pages/Career/index";
import Cactus from "./decorations/Cactus";
import Portfolios from "./pages/Portfolios";
import Ending from "./pages/Ending";

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
      <motion.div
        animate={{
          color: scrollCount > 60 ? "#fff" : "#333",
        }}
        className="fixed top-4 right-4 z-50  p-2 rounded-md text-2xl font-bold"
      >
        SCORE: {scrollCount * 10}
      </motion.div>
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
      <Career />
      <Portfolios />
      <Ending />
    </div>
  );
};

export default Portfolio;
