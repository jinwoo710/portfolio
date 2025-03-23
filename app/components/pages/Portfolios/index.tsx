import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Portfolios() {
  const portfolioRef = useRef<HTMLElement>(null);
  const [selectedStage, setSelectedStage] = useState(1);
  const isInView = useInView(portfolioRef, { amount: 0.4 });
  const ITEMS: {
    index: number;
    title: string;
    content: string;
    image: string;
    link: string;
    githubLink: string;
    techSkill: string[];
  }[] = [
    {
      index: 1,
      title: "포트폴리오",
      content: "개인 포트폴리오를 보여주기 위한 사이트",
      image: "/images/stage01.png",
      link: "https://portfolio-jinwoo.pages.dev/",
      githubLink: "https://github.com/jinwoo710/portfolio",
      techSkill: [
        "REACT",
        "NEXT.JS",
        "TYPESCRIPT",
        "TAILWINDCSS",
        "FRAMER-MOTION",
      ],
    },
    {
      index: 2,
      title: "선생님들의 생기부 쓱쓱노트",
      content: "학교 선생님들의 학생 출결, 상담, 숙제 관리를 위한 기록장",
      image: "/images/stage02.png",
      link: "https://ssgssgnote.pages.dev/",
      githubLink: "https://github.com/jinwoo710/ssgssgnote",
      techSkill: ["REACT", "TYPESCRIPT", "TAILWINDCSS", "VITE"],
    },
    {
      index: 3,
      title: "보드게임 관리 웹앱",
      content: "보드게임 모임 내의 게임 목록과 중고거래를 위한 웹앱",
      image: "/images/stage03.png",
      link: "https://hoardname-web.pages.dev/game",
      githubLink: "https://github.com/jinwoo710/hoardname-web",
      techSkill: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWINDCSS"],
    },
  ];

  const handleSelectStage = (index: number) => {
    setSelectedStage(index);
  };

  return (
    <section
      ref={portfolioRef}
      className="w-full h-[100vh] py-20 flex flex-col justify-center items-center z-100 relative"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl font-bold">SELECT STAGE</div>
        <p className="text-gray-400 mt-2">개인 프로젝트 모음</p>
      </motion.div>

      <div className="w-full max-w-5xl px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.index}
              onClick={() => handleSelectStage(item.index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`relative w-full cursor-pointer rounded-xl overflow-hidden ${
                selectedStage === item.index ? "ring-4 ring-yellow-400" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-full bg-gray-800 p-2 text-center font-bold">
                STAGE 0{item.index}
              </div>
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="p-3 bg-gray-900 bg-opacity-80"></div>
            </motion.div>
          ))}
        </div>

        {selectedStage > 0 && (
          <motion.div
            className="bg-gray-900 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            layoutId="stageDetail"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={ITEMS[selectedStage - 1].image}
                  alt={ITEMS[selectedStage - 1].title}
                  fill
                  className="object-cover"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent md:bg-gradient-to-r" />
                <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full">
                  STAGE 0{selectedStage}
                </div>
              </div>

              <div className="p-6 md:p-8 md:w-1/2">
                <div className="text-2xl sm:text-3xl font-bold mb-3">
                  {ITEMS[selectedStage - 1].title}
                </div>
                <p className="text-gray-300 mb-6">
                  {ITEMS[selectedStage - 1].content}
                </p>

                <div className="mb-6">
                  <div className="text-lg font-semibold mb-3">기술 스택</div>
                  <div className="flex flex-wrap gap-2">
                    {ITEMS[selectedStage - 1].techSkill.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {ITEMS[selectedStage - 1].link && (
                    <Link
                      href={ITEMS[selectedStage - 1].link}
                      target="_blank"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-center transition-colors flex-1 flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      사이트 방문
                    </Link>
                  )}
                  <Link
                    href={ITEMS[selectedStage - 1].githubLink}
                    target="_blank"
                    className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg text-center transition-colors flex-1 flex items-center justify-center gap-2"
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
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
