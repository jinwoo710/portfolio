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
      content: "보드게임 모임 내의 게임 목록과 중고거래를 위한 라이브 서비스",
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
      className="w-full h-[100vh] flex flex-col justify-center items-start z-100 relative"
    >
      <span className="mx-auto text-3xl">SELECT STAGE</span>

      <div className="max-w-[1000px] w-full sm:w-3/4 px-4 mx-auto  mt-10 space-y-4 flex flex-col">
        <div className="flex justify-between gap-4">
          {ITEMS.map((item, i) => (
            <motion.div
              onClick={() => handleSelectStage(item.index)}
              whileHover={{ scale: 1.05 }}
              key={item.title + i}
              className="w-1/3 cursor-pointer flex max-w-[300px] flex-col border-4 border-white rounded-2xl "
            >
              <div className="w-full h-8 sm:h-12 flex items-center justify-center text-xl sm:text-2xl border-b-2">
                STAGE 0{item.index}
              </div>
              <motion.div
                className="w-full relative overflow-hidden"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { height: 0 },
                  visible: { height: "auto" },
                }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.2 }}
              >
                <div className="w-full h-[100px] sm:h-40 relative">
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
                  {selectedStage === item.index && (
                    <motion.div
                      className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2z-10"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/images/check.png"
                        alt="check"
                        width={60}
                        height={60}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
              <div className="w-full h-5 sm:h-8 border-t-2"></div>
            </motion.div>
          ))}
        </div>
        <div
          className="flex flex-col lg:flex-row border-white border-4 rounded-2xl min-h-[250px] bg-white"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <div className="flex-1 flex flex-col space-y-2 p-8 ">
            <span className="text-3xl">{ITEMS[selectedStage - 1].title}</span>
            <span className="text-xl">{ITEMS[selectedStage - 1].content}</span>
            <div className="">
              기술 스택: {ITEMS[selectedStage - 1].techSkill.join(", ")}
            </div>
          </div>
          <div className="lg:w-1/4 flex shrink-0 w-full lg:flex-col justify-center space-x-10 lg:space-x-0 pb-6 lg:pb-0 lg:space-y-6 items-center">
            {selectedStage !== 1 && (
              <Link
                href={ITEMS[selectedStage - 1].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="rounded-full border-2 border-white p-2 px-8 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  사이트 보기
                </motion.div>
              </Link>
            )}
            <Link
              href={ITEMS[selectedStage - 1].githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="rounded-full border-2 border-white p-2 px-8 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GITHUB 보기
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
