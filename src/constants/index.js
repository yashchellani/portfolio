import {
  mobile,
  backend,
  gic,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  django,
  cs,
  sql,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  java,
  cpp,
  smu,
  bosch,
  muo,
  palantir,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "linkedin", 
    title: "LinkedIn"},
    
  { id: "github",
    title: "GitHub"},
];

const services = [
  {
    title: "Software Engineering",
    icon: web,
  },
  {
    title: "Cybersecurity",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C Sharp",
    icon: cs,
  },
  {
    name: "SQL Server",
    icon: sql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Technical Content Creator",
    company_name: "MUO.com",
    icon: muo,
    iconBg: "#383E56",
    date: "Dec 2020 - Jun 2021",
    points: [
      "Researched and produced high-quality, engaging content related to technology, internet culture, and programming",
      "Developed programming tutorials and technical How-Tos for professionals working in tech.",
      "Optimised web content to improve visibility and ranking in search engine results pages (SEO)",
    ],
  },
  {
    title: "Research Assistant (Software Developer)",
    company_name: "SMU",
    icon: smu,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Dec 2022",
    points: [
      "Programmed video processing tools in Python, Bash, and FFmpeg to process research video streams ~80% faster.",
      "Developed and deployed a data processing pipeline using AWS Lambda, Amazon EC2 and S3 to analyze ~3TB to research data.",
      "Created experiment plans detailing the procedures for recording, storing, and processing data collected by field researchers."

    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Bosch",
    icon: bosch,
    iconBg: "#383E56",
    date: "May 2021 - Oct 2021",
    points: [
      "Developed automation suite for 2,300 test‐cases using Python with MySQL to facilitate pre‐production testing of Bosch software.",
      "Implemented a method to use LRU cache indexing for system metadata that improved test automation speed by ~500%.",
      "Actively contributed to quality assurance (QA) efforts by participating in the development of CI/CD test plans.", 
      
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "GIC",
    icon: gic,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Developed modules with Python and ReactJS to streamline FX futures data processing, accelerating trade reconciliation by ~90%.",
      "Initiated refactoring of application infrastructure in Kubernetes to improve system availability and scalability.",
      "Engineered an event-streaming service with Redis Pub/Sub which reduced HTTP request traffic by 75%.",

    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Palantir Technologies",
    icon: palantir,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Built APIs in Java and Typescript with Cassandra integration, enabling internal users to initiate global email campaigns.",
      "Designed and developed a highly available service to enable secure one-click unsubscribe requests on customer newsletters.",
      "Implemented an LLM-driven microservice with Python to recalibrate app metadata at runtime, speeding up handovers by ~40%.",
      "Engineered a logging module using a Kubernetes sidecar for user metrics visualization on Grafana to boost service quality."
    ],
  },
];


const projects = [
  {
    name: "Pay Splits Bot",
    description:
      "Telegram Bot that uses computer vision to read uploaded receipts and automatically itemise splits for group expenses.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "TelegramAPI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/yashchellani/pay-split-bot",
  },
  {
    name: "SimuVest",
    description:
      "Web application that enables users to perform simulated investments by backtesting their algorithmic strategies against real market data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/yashchellani/SimuVest",
  },
  {
    name: "P2P LendConnect",
    description:
      "A proprietary P2P lending platform to enable consumers to connect with each other and provide/take short-term micro-loans from each other.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/yashchellani/P2P-Lending-App-",
  },
];

export { services, technologies, experiences, projects };