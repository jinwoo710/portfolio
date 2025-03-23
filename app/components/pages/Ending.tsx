"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Ending() {
  const endingRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: endingRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value >= 0.3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const socialLinks = [
    {
      name: "Email",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
      ),
      href: "mailto:jinwoo710@naver.com",
    },
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      ),
      href: "https://github.com/jinwoo710",
    },
  ];

  const gameStatsItems = [
    { label: "SCORE", value: "999,999" },
    { label: "TIME", value: "00:59:59" },
    { label: "LEVEL", value: "MAX" },
    { label: "RANK", value: "S+" },
  ];

  return (
    <section
      ref={endingRef}
      className="w-full h-[100vh] max-w-[1000px] mx-auto flex flex-col justify-start items-center relative pt-40"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-600 mb-2">
          GAME CLEAR
        </div>
        <motion.div
          className="text-lg md:text-xl mt-4 mb-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          포트폴리오를 끝까지 봐주셔서 감사합니다!
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 w-full max-w-[600px]"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {gameStatsItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="bg-gray-800 border-2 border-white bg-opacity-70 p-4 rounded-lg text-center w-[40%] md:w-[42%]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
          >
            <div className="text-sm text-gray-400 mb-1">{item.label}</div>
            <div className="text-2xl md:text-3xl font-bold">{item.value}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-bold mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.05, 1] }}
          transition={{ duration: 0.6 }}
        >
          CONTACT ME
        </motion.h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-4 rounded-full block transition-colors hover:bg-gray-700"
              >
                {link.icon}
              </Link>
              <span className="block text-sm mt-2">{link.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
