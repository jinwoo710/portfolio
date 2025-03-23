"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Skill() {
  const rankingData = [
    { rank: "1st", score: 67000, name: "A A A", stage: 32 },
    { rank: "2nd", score: 45000, name: "A A A", stage: 30 },
    { rank: "3rd", score: 33000, name: "J I N", stage: 24 },
    { rank: "4th", score: 23000, name: "W O O", stage: 18 },
    { rank: "5th", score: 22000, name: "Z Y X", stage: 12 },
    { rank: "6th", score: 21000, name: "C C C", stage: 12 },
  ];
  const rankingUnderData = [
    { rank: "8nd", score: 11000, name: "A D D", stage: 6 },
    { rank: "9nd", score: 8000, name: "A A A", stage: 4 },
    { rank: "10nd", score: 4000, name: "J I N", stage: 2 },
  ];

  const techStackData = {
    frontend: [
      { name: "REACT", level: 80 },
      { name: "NEXT.JS", level: 85 },
      { name: "SVELTE", level: 70 },
      { name: "TYPESCRIPT", level: 80 },
    ],
    others: [
      { name: "TAILWINDCSS", level: 95 },
      { name: "STYLED-COMPONENTS", level: 85 },
      { name: "GIT", level: 99 },
      { name: "FIGMA", level: 75 },
    ],
  };

  const skillRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [flag, setFlag] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof techStackData>("frontend");

  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value >= 0.4 && !flag) {
        setIsInView(true);
        setFlag(true);
      } else if (value < 0.4 && flag) {
        setIsInView(false);
        setFlag(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, flag]);

  const [isMouseHover, setIsMouseHover] = useState(false);

  const categoryColors = {
    frontend: "#4f46e5",
    others: "#2563eb",
  };

  return (
    <section
      className="w-full h-[150vh] max-w-[1000px] mx-auto flex justify-center items-start z-100 relative"
      ref={skillRef}
    >
      <div
        ref={containerRef}
        className="border-3 border-black rounded-xl w-3/4 min-h-[70vh] bg-black sticky top-[15vh]"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <motion.div
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.2s",
          }}
          animate={{ rotateY: isInView ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        >
          <motion.div
            className="w-full flex flex-col py-10 absolute"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <span className="text-red-700 text-center text-3xl mb-4">
              GAME OVER
            </span>
            <motion.span
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                delay: 1,
              }}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              className="text-gray-800 text-center text-3xl mb-4"
            >
              ENTER YOUR NAME!
            </motion.span>
            <div className="grid grid-cols-4 text-center font-bold text-red-700">
              <div>STAND</div>
              <div>SCORE</div>
              <div>NAME</div>
              <div>STAGE</div>
            </div>
            <div className="grid grid-cols-4 text-center font-bold text-gray-800">
              {rankingData.map((item, index) => (
                <React.Fragment key={`row-${index}`}>
                  <div key={`rank-${index}`}>{item.rank}</div>
                  <div key={`score-${index}`}>{item.score}</div>
                  <div key={`name-${index}`}>{item.name}</div>
                  <div key={`stage-${index}`}>{item.stage}</div>
                </React.Fragment>
              ))}
            </div>
            <div className="grid grid-cols-4 text-center font-bold">
              <div className="text-red-700">7th</div>
              <div className="text-gray-800">20000</div>
              <motion.div
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1,
                }}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                className="text-gray-800"
              >
                J A _
              </motion.div>
              <div className="text-gray-800">10</div>
            </div>
            <div className="grid grid-cols-4 text-center font-bold text-gray-800">
              {rankingUnderData.map((item, index) => (
                <React.Fragment key={`row-${index}`}>
                  <div key={`rank-${index}`}>{item.rank}</div>
                  <div key={`score-${index}`}>{item.score}</div>
                  <div key={`name-${index}`}>{item.name}</div>
                  <div key={`stage-${index}`}>{item.stage}</div>
                </React.Fragment>
              ))}
            </div>
            <motion.div
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                delay: 1,
              }}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              className="w-full flex-col items-center space-x-4 flex justify-center mt-14 text-4xl font-bold"
            >
              PLEASE INSERT COIN
              <span className="text-xl font-bold mx-auto">COIN : 0</span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.2s",
          }}
          animate={{ rotateY: isInView ? 0 : 180 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        >
          <motion.div
            className="w-full flex flex-col p-6 md:p-10 absolute"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="w-full flex flex-col md:flex-row gap-8 items-center">
              <div className="flex flex-col items-center space-y-4">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setIsMouseHover(true)}
                  onMouseLeave={() => setIsMouseHover(false)}
                >
                  <Image
                    src={
                      isMouseHover
                        ? "/images/profile_color.png"
                        : "/images/profile.png"
                    }
                    width={200}
                    height={200}
                    alt="profile"
                    className="border-2 border-gray-800 rounded-full"
                  />
                </motion.div>
                <div className="flex flex-col space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="mailto:jinwoo710@naver.com"
                      className="text-lg md:text-xl w-full p-2 px-4 rounded-full text-center bg-gray-800 flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                      이메일
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://github.com/jinwoo710"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg md:text-xl w-full p-2 px-4 rounded-full text-center bg-gray-800 flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      GITHUB
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <h2 className="text-2xl text-center mb-4 font-bold">
                  TECH STACK
                </h2>

                <div className="flex justify-center mb-6 gap-2 flex-wrap">
                  {(
                    Object.keys(techStackData) as Array<
                      keyof typeof techStackData
                    >
                  ).map((category) => (
                    <motion.button
                      key={category}
                      className={`px-4 py-2 rounded-full text-white text-sm md:text-base cursor-pointer ${
                        activeCategory === category ? "ring-2 ring-white" : ""
                      }`}
                      style={{
                        backgroundColor: categoryColors[category],
                        opacity: activeCategory === category ? 1 : 0.7,
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category.toUpperCase()}
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  key={activeCategory}
                >
                  {techStackData[activeCategory].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-sm">{tech.level}%</span>
                      </div>
                      <div className="w-full h-4 bg-gray-700 bg-opacity-20 rounded-full overflow-hidden relative">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: categoryColors[activeCategory],
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: index * 0.1 + 0.2,
                          }}
                        />
                        <div className="absolute inset-0 flex">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div
                              key={i}
                              className="h-full flex-1 border-r border-black"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="mt-6 p-3 bg-black bg-opacity-10 rounded-lg text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {activeCategory === "frontend" && (
                    <p>
                      프론트엔드 프레임워크와 언어를 활용한 여러 프로젝트 경험이
                      있으며, 특히 React, Next.js와 TypeScript 조합으로 다양한
                      웹 애플리케이션을 개발했습니다.
                    </p>
                  )}
                  {activeCategory === "others" && (
                    <p>
                      TailwindCSS를 주로 사용하며, 다양한 스타일링 방식에
                      능숙합니다. 백엔드와 디자이너와의 많은 협업을 통해 다양한
                      경험을 해왔습니다.
                    </p>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
