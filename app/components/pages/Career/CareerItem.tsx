import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export interface CareerItemProps {
  company: string;
  position: string;
  department: string;
  period: string;
  duration: string;
  logo: string;
  projects: {
    title: string;
    description: string;
    techStack: string;
    achievements?: string[];
  }[];
  isInView: boolean;
  index: number;
}

export default function CareerItem({
  company,
  position,
  department,
  period,
  duration,
  projects,
  isInView,
  logo,
  index,
}: CareerItemProps) {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <motion.div
      className="pl-10 mb-12 relative"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-full"></div>

      <motion.div
        className={`absolute -left-5 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center p-1`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.2 + 0.1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Image
          src={`/images/${logo}`}
          alt={company}
          width={24}
          height={24}
          className="rounded-full"
        />
      </motion.div>

      <motion.div
        className="mb-4 bg-gradient-to-r from-gray-900 to-transparent p-4 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
      >
        <div className="flex items-start justify-between flex-wrap">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {company}
            </div>
            <div className="flex flex-wrap text-lg gap-x-2 text-gray-300">
              <span>{department}</span>
              <span>·</span>
              <span className="font-medium">{position}</span>
            </div>
          </div>
          <div className="bg-gray-800 px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg">
            {duration}
          </div>
        </div>
        <div className="text-gray-400 mt-1 text-sm font-medium tracking-wide">
          {period}
        </div>
      </motion.div>

      <div className="space-y-4 mt-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 "
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: index * 0.2 + 0.3 + index * 0.1,
            }}
            whileHover={{
              y: -4,
              transition: { duration: 0.3 },
            }}
          >
            <div
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() =>
                setExpandedProject(expandedProject === index ? null : index)
              }
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-10 rounded-full`}></div>
                <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {project.title}
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedProject === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </motion.div>
            </div>
            <motion.div
              initial={false}
              animate={{
                height: expandedProject === index ? "auto" : 0,
                opacity: expandedProject === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-5 border-t border-gray-700 bg-black bg-opacity-30">
                <p className="mb-4 text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {project.achievements && (
                  <div className="mb-5">
                    <div className="text-sm uppercase tracking-wider text-gray-400 mb-2 font-medium">
                      주요 성과
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-200">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-gradient-to-r from-gray-800 to-black p-3 rounded-lg">
                  <div className="text-sm uppercase tracking-wider text-gray-400 mb-2 font-medium">
                    기술 스택
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className={` bg-opacity-90 px-3 py-1 rounded-full text-white text-sm`}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
