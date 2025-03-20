"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export interface GroundProps {
  goal: number;
  scrollYProgress: MotionValue<number>;
}

export default function Ground({ goal, scrollYProgress }: GroundProps) {
  const groundX = useTransform(scrollYProgress, [0, 1], [0, goal]);
  const [groundRandomNumber, setGroundRandomNumber] = useState<number[][]>([]);
  useEffect(() => {
    const newGround = [...Array(20)].map(() => {
      return [...Array(5)].map(() => {
        return Math.floor(Math.random() * 6);
      });
    });
    setGroundRandomNumber(newGround);
  }, []);
  return (
    <div className="fixed bottom-0 left-0 right-0 h-36 border-t border-black overflow-hidden z-30">
      <motion.div
        className="absolute bottom-0 h-32 flex"
        style={{ x: groundX }}
      >
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-40 grid grid-cols-5 h-full flex-shrink-0">
            {[...Array(5)].map((_, j) => {
              return (
                <div
                  key={j}
                  className={`border-black ${
                    groundRandomNumber[i] && groundRandomNumber[i][j] < 2
                      ? "border-t"
                      : ""
                  }`}
                />
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
