"use client";
import { motion, useInView } from "framer-motion";
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

  const techStack = ["REACT", "NEXT.JS", "SVELTE", "TYPESCRIPT"];
  const skillRef = useRef<HTMLElement>(null);
  const isInView = useInView(skillRef, { amount: 0.7 });
  const [isMouseHover, setIsMouseHover] = useState(false);

  return (
    <section
      className="w-full h-[100vh] flex justify-center items-start z-100 relative"
      ref={skillRef}
    >
      <div className="border-3 border-black rounded-xl w-3/4 min-h-7/10">
        <motion.div
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.2s",
          }}
          animate={{ rotateY: isInView ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
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
                A _ _
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
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.2s",
          }}
          animate={{ rotateY: isInView ? 0 : 180 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full flex flex-col p-10 absolute"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="w-full flex items-center flex-col space-y-4">
              <div
                className="relative"
                onMouseEnter={() => setIsMouseHover(true)}
                onMouseLeave={() => setIsMouseHover(false)}
              >
                <Image
                  src={
                    isMouseHover
                      ? "/images/profile_color.png"
                      : "/images/profile.png"
                  }
                  width={250}
                  height={250}
                  alt="profile"
                  className="border-2 border-gray-800 rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <motion.div className="flex" whileHover={{ scale: 1.1 }}>
                  <Link
                    href="mailto:jinwoo710@naver.com"
                    className="text-2xl w-full p-2 px-4 rounded-full text-center bg-gray-800"
                  >
                    jinwoo710@naver.com
                  </Link>
                </motion.div>
                <motion.div className="flex" whileHover={{ scale: 1.1 }}>
                  <Link
                    href="https://github.com/jinwoo710"
                    className="text-2xl w-full p-2 px-4 rounded-full text-center bg-gray-800"
                  >
                    GITHUB
                  </Link>
                </motion.div>
              </div>
              <div className="text-2xl text-center">TECH STACK</div>
              <div className="w-full grid grid-cols-2 gap-4 max-w-[400px]">
                {techStack.map((tech) => (
                  <div className="border-white w-full border-4 flex justify-center items-center rounded-full text-xl md:text-2xl px-4 cursor-default">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
