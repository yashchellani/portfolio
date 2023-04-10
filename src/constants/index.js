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
  ];
  
  const services = [
    {
      title: "Software Engineering",
      icon: web,
    },
    {
      title: "Web Development",
      icon: mobile,
    },
    {
      title: "DevOps",
      icon: backend,
    },
    {
      title: "Programming Tutor",
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
      title: "Research Assistant (Software Automation)",
      company_name: "SMU",
      icon: smu,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Dec 2022",
      points: [
        "Programmed an image processing tool using Bash and FFmpeg to process research recordings ~80% faster.",
	      "Configured virtual workspaces and set up data processing pipeline to clean over 3TB of research data.",

      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Bosch",
      icon: bosch,
      iconBg: "#383E56",
      date: "May 2021 - Oct 2021",
      points: [
        "Developed full-stack automation suite for 2,300 test‐cases to facilitate pre‐production testing of Bosch software.",
        "Implemented a new method to index and process internal system data that improved automation speed by ~500%.",
        "Incorporated a message broker with RabbitMQ to decouple test-suite modules and improve app scalability.", 
        
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "GIC",
      icon: gic,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Programmed modules in Django and ReactJS to process FX futures data and speed up trade reconciliation.",
	      "Participated in refactoring of application infrastructure in Kubernetes to optimize system availability and scalability.",
	      "Implemented an event‐streaming service using Redis Pub/Sub to retrieve trade analytics and reduce network traffic by 75%.",

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