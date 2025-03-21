import { useRef } from "react";
import CareerItem from "./components/CareerItem";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Career() {
  const careerRef = useRef<HTMLElement>(null);
  const isInView = useInView(careerRef, { amount: 0.4 });
  const isActivityInView = useInView(careerRef, { amount: 0.6 });

  return (
    <section
      className="w-full h-[100vh] max-w-[1000px] mx-auto flex justify-center items-start z-100 relative"
      ref={careerRef}
    >
      <div className="w-3/4 min-h-1/2 flex flex-col space-y-4">
        <div className="w-full flex flex-col items-end border-r-4 space-y-4 pb-10 relative">
          <div className="w-50 h-10 border-4 border-r-0 text-2xl flex justify-center items-center py-6 mb-10">
            <span>CAREER</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CareerItem
              company="주식회사지지엠컴퍼니"
              startDate="2020.10"
              endDate="2021.05"
              position="개발팀 • 개발자"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CareerItem
              company="휴브알엔씨주식회사"
              startDate="2021.06"
              endDate="2021.10"
              position="개발팀 • 인턴"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CareerItem
              company="휴브알엔씨주식회사"
              startDate="2021.10"
              endDate="2024.08"
              position="개발팀 • 연구원"
            />
          </motion.div>
        </div>
        <div className="w-full flex flex-col items-start border-l-4 space-y-4 pb-10">
          <div className="w-50 h-10 border-4 border-l-0 text-2xl flex justify-center items-center py-6 mb-10">
            <span>ACTIVITY</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActivityInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CareerItem
              company="HUFSTORY"
              startDate="2013.03"
              endDate="2015.07"
              position="외대 IT 학생자치기구"
              isLeft
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActivityInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CareerItem
              company="경기게임아카데미"
              startDate="2018.10"
              endDate="2019.03"
              position="게임 스타트업 5기"
              isLeft
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActivityInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CareerItem
              company="굳굳맨게임즈"
              startDate="2018.10"
              endDate="2020.02"
              position="게임 개발 스타트업 설립"
              isLeft
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
