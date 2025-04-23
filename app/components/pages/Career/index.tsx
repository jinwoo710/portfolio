"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CareerItem from "./CareerItem";

export default function Career() {
  const careerRef = useRef<HTMLElement>(null);
  const isInView = useInView(careerRef, { amount: 0.2, once: false });

  return (
    <section
      ref={careerRef}
      className="w-full min-h-screen py-20 flex flex-col justify-start items-center z-100 relative text-gray-800"
    >
      <motion.div
        className="mb-16 text-center relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-5xl font-bold mb-2 text-white">CAREER JOURNEY</div>
      </motion.div>

      <div className="max-w-5xl w-full px-4 sm:px-6 relative">
        <motion.div
          className="w-full relative z-10"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {careerData.map((career, index) => (
            <CareerItem
              key={index}
              logo={career.logo}
              company={career.company}
              position={career.position}
              department={career.department}
              period={career.period}
              duration={career.duration}
              projects={career.projects}
              isInView={isInView}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const careerData = [
  {
    company: "휴브알엔씨",
    position: "연구원",
    department: "개발팀",
    period: "2021.11 ~ 2024.08",
    duration: "2년 10개월",
    logo: "hbrc-icon.svg",
    projects: [
      {
        title: "쇼핑몰 관리자 사이트 신규 개발",
        description:
          "기존 관리자 사이트는 데이터가 파편화되어 구조가 매우 복잡했습니다. 새로운 관리자 사이트를 개발하면서, 빠르고 정확한 배송과 물류 관리를 위해 지원관리팀의 업무 흐름을 분석하고 한번에 연계된 정보 확인이 가능한 최적화된 UX를 설계했습니다.",
        techStack: "NextJS, TypeScript, TailwindCSS, React-Query",
        achievements: [
          "회원 관리, 주문/배송 관리, 콘텐츠 관리 등 관리자 사이트 프론트엔드 기획 및 개발",
          "기존 관리자 사이트와의 호환성을 위한 엑셀 데이터 관리 기능을 개발",
          "팝업 및 공지사항 관리 시스템과 물류 관리 기능을 구현하여 지원관리팀의 업무 효율성을 크게 향상",
        ],
      },
      {
        title: "쇼핑몰 사이트 신규 개발",
        description:
          "기존의 신경심리 도구 쇼핑몰과 언어 검사 도구 쇼핑몰을 하나로 통합한 새로운 쇼핑몰을 개발하며, 전체 프론트엔드 구축을 주도했습니다.",
        techStack: "SvelteKit, TypeScript, TailwindCSS",
        achievements: [
          "다양한 디바이스에서 접근이 가능하도록 태블릿 및 모바일을 고려한 반응형 레이아웃으로 구현",
          "Modal, Input Form, Carousel 등 재사용 가능한 공용 컴포넌트들을 구축",
          "마이 페이지를 통한 기존 쇼핑몰의 특수성 등을 개선하여 전화 주문 고객의 약 70% 이상을 쇼핑몰 주문 고객으로 전환",
          "Sentry를 활용한 실시간 에러 모니터링을 통해 신속하게 버그를 대응",
        ],
      },
      {
        title: "아동용 발음 평가 검사(APAC-R) 서비스 개발",
        description:
          "기존 종이 기반 검사를 웹 기반 시스템으로 전환하는 작업을 수행했습니다. 종이 검사의 한계와 비효율성을 해결하기 위해 검사부터 결과 분석까지의 프론트엔드 기획 및 개발에 참여했습니다.",
        techStack: "React, Tailwind CSS, Typescript, React-Query",
        achievements: [
          "입력된 아동 데이터의 음소를 자동으로 분석하는 알고리즘 개발에 참여",
          "복잡한 분석 데이터 입력을 직관적인 UI로 기획 및 구현",
          "실사용자들의 행동 패턴을 분석하여 서비스에 여러 편의성을 제공하여, 검사 시간을 30% 단축",
        ],
      },
      {
        title: "(구) 쇼핑몰 마이그레이션",
        description:
          "PHP 코드 베이스로 짜여진 웹을 Laravel을 통한 마이그레이션을 진행했습니다.",
        techStack: "PHP, Tailwind CSS, Typescript",
        achievements: [
          "개발 효율성과 코드 일관성 향상을 위해 재사용 가능한 UI 컴포넌트 라이브러리를 설계하고 구현",
          "마이그레이션 과정에서 기존에 구현되지 않았던 워크숍 페이지를 새롭게 개발하여 동영상 강의 시청 및 자료 다운로드 기능을 구현",
        ],
      },
      {
        title: "치매검사(SNSB) 개발",
        description:
          "기존 앱과 종이 용지로 진행되던 치매 검사 시스템(SNSB)을 웹 기반 플랫폼으로 성공적으로 마이그레이션하는 프로젝트를 수행했습니다.",
        techStack:
          "React, Tailwind CSS, Typescript, DaisyUI, React-Query, Redux",
        achievements: [
          "검사자들의 키보드 타이핑 패턴, 마우스 스크롤 행동, 데이터 입력 흐름 등 실제 사용 패턴을 UI에 적용",
          "검사 소요 시간을 약 30% 단축하고 데이터 입력 정확도도 향상",
        ],
      },
    ],
  },
  {
    company: "휴브알엔씨",
    position: "인턴/수습",
    department: "개발팀",
    period: "2021.06 ~ 2021.10",
    logo: "hbrc-icon.svg",
    duration: "5개월",
    projects: [
      {
        title: "검사 통합 솔루션 사이트 신규 개발",
        description:
          "치매, 아동 발음 검사 등 다양한 임상 검사를 종합적으로 관리할 수 있는 병원 통합 솔루션 개발에 참여하였습니다.",
        techStack:
          "React, Tailwind CSS, Typescript, DaisyUI, React-Query, Redux",
        achievements: [
          "의료진이 여러 검사 도구들의 진행 상황과 결과지를 직관적으로 파악할 수 있는 대시보드를 설계하고 구현",
          "환자 정보와 관련 검사 이력을 통합적으로 추적하고 관리할 수 있는 페이지를 개발",
          "UI 컴포넌트의 StoryBook 제작을 담당",
        ],
      },
    ],
  },
  {
    company: "지지엠컴퍼니",
    position: "개발자",
    department: "개발팀",
    period: "2020.10 ~ 2021.05",
    duration: "8개월",
    logo: "ggm-logo.png",
    projects: [
      {
        title: "협업툴 관리 플랫폼 사이트 개발",
        description:
          "분산된 여러 협업툴 사용으로 인한 업무 비효율 문제를 해결하기 위한 통합 관리 플랫폼의 웹 프론트엔드 개발에 참여했습니다.",
        techStack: "TypeScript, React, Redux, Styled-Components, Jest",
        achievements: [
          "관리자 페이지와 통합된 알림 및 업데이트를 한눈에 볼 수 있는 대시보드 페이지를 개발",
          "Draft.js 기반의 텍스트 에디터, 모달 등 재사용 가능한 컴포넌트 구축하여 개발 속도를 높이는데 일조",
          "Jest를 활용하여 컴포넌트들의 테스트 코드를 작성하여 안정성을 높이는 작업",
        ],
      },
    ],
  },
];
