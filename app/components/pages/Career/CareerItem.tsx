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
      className="border-l-4 border-white pl-10 mb-8 relative"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className="absolute -left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
      >
        <Image src={`/images/${logo}`} alt="flag" width={30} height={30} />
      </motion.div>

      <div className="mb-3">
        <h3 className="text-2xl font-bold">{company}</h3>
        <div className="flex flex-wrap text-lg gap-x-2">
          <span>{department}</span>
          <span>·</span>
          <span>{position}</span>
        </div>
        <div className="text-gray-300">
          <span>{period}</span>
          <span className="ml-2">({duration})</span>
        </div>
      </div>

      <div className="space-y-4 mt-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 rounded-lg p-4 cursor-pointer"
            onClick={() =>
              setExpandedProject(expandedProject === index ? null : index)
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-medium">{project.title}</h4>
              <motion.div
                animate={{ rotate: expandedProject === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                marginTop: expandedProject === index ? 16 : 0,
                padding: expandedProject === index ? 16 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border border-black rounded-lg bg-gray-100"
            >
              <p className="mb-3">{project.description}</p>
              {project.achievements && (
                <ul className="list-disc list-inside space-y-1 mb-3">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
              <div className="bg-black text-white p-2 rounded">
                <span className="font-medium">기술 스택:</span>{" "}
                {project.techStack}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
