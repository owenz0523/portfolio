import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    pillthought,
    apple,
    openswiki,
    reviewkit,
    martinrea,
    pharmfill,
    pipaws,
    beacons,
    gymmanager,
    stockbot,
    portfolio,
    threejs,
    python,
    opencv,
    cpp,
    tensorflow,
    aws,
    postman,
    sql,
    waterloo,
    fx,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "AI Developer",
      icon: backend,
    },
    {
      title: "Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "SQL",
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
      name: "OpenCV",
      icon: opencv,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack App Development Intern",
      company_name: "Our Wave Hub x Apple",
      icon: apple,
      iconBg: "#383E56",
      date: "Jul 2022 - Aug 2022",
      points: [
        "Collaborated with Apple engineers and interns to conceptualize, design, and build an iOS productivity app",
        "Developed the app from scratch by using Swift and Xcode to code, test, and debug features",
        "Applied key principles of UI/UX thinking to create wireframes/prototypes highlighting the theme, branding, and functionalities",
        "Identified issues with the app related to optimization/security and resolving them with object-oriented programming/sandboxing",
      ],
    },
    {
      title: "Business & Web Development Intern",
      company_name: "Opens.wiki",
      icon: openswiki,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Dec 2022",
      points: [
        "Oversaw finances, assets, marketing strategies, product roadmaps, and business relations alongside the CEO",
        "Developed a website using React/Node.JS/MongoDB/Figma to promote the Blueberry Pill Dispenser",
      ],
    },
    {
      title: "Full Stack Develoepr",
      company_name: "Reviewkit.me",
      icon: reviewkit,
      iconBg: "#383E56",
      date: "Dec 2023 - Present",
      points: [
        "Delivered key user experience features including keyboard shortcuts and improved zooming with React and Node.js",
        "Integrated Google Analytics with the web application to gauge user interactions and collect statistics for future improvements",
      ],
    },
    {
      title: "Software Developer",
      company_name: "PillThought",
      icon: pillthought,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web/mobile applications using React, Node.js, and SupaBase",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
        "Implementing responsive design and ensuring cross-browser compatibility for users",
      ],
    },
    {
      title: "Machine Learning Developer",
      company_name: "Martinrea International",
      icon: martinrea,
      iconBg: "#383E56",
      date: "Incoming May 2024",
      points: [
        "Developing AI tools with TensorFlow, Keras, YOLO, OpenCV, and NoSQL",
      ],
    },
  ];
  
  const education = [
    {
      program: "Software Engineering",
      school: "University of Waterloo",
      date: "Sep 2023 - Present",
      iconBg: "#E6DEDD",
      description: "4.0 GPA",
      image: waterloo,
    },
    {
      program: "IB Diploma",
      school: "St. Francis Xavier Secondary School",
      date: "Sep 2019 - Jun 2023",
      iconBg: "#383E56",
      description: "99% Average",
      image: fx,
    },
  ];
  
  const projects = [
    {
      name: "PharmFill",
      description:
        "Medical productivity based mobile app to streamline the process of prescriptions for physicians, patients, and pharmacies.",
      tags: [
        {
          name: "reactnative",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "gemini",
          color: "pink-text-gradient",
        },
        {
          name: "redis",
          color: "white-text-gradient",
        },
      ],
      image: pharmfill,
      source_code_link: "https://github.com/AkkuB0Y/PharmFill",
    },
    {
      name: "PiPaws",
      description:
        "Remote pet feeding allowing users to dispense food through a web application.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "arduino",
          color: "pink-text-gradient",
        },
        {
          name: "opencv",
          color: "red-text-gradient",
        },
      ],
      image: pipaws,
      source_code_link: "https://github.com/owenz0523/pet-feeder",
    },
    {
      name: "Beacons",
      description:
        "Mobile app to enhance event planning modelled off Instagram's interface.",
      tags: [
        {
          name: "reactnative",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "springboot",
          color: "white-text-gradient",
        },
      ],
      image: beacons,
      source_code_link: "https://github.com/willi-li-am/beacons",
    },
    {
      name: "GymManager",
      description:
        "Comprehensive gym management desktop application for gym owners and clients.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "qtcreator",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: gymmanager,
      source_code_link: "https://github.com/owenz0523/GymManager",
    },
    {
      name: "StockBot",
      description:
        "Discord bot allowing users to trade and analyze stocks in a simulated environment.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "numpy",
          color: "green-text-gradient",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
        {
          name: "yfinance",
          color: "white-text-gradient",
        },
      ],
      image: stockbot,
      source_code_link: "https://github.com/owenz0523/stockbot",
    },
    {
      name: "Portfolio",
      description:
        "This website! My personal portfolio showcasing my work, experiences, and education.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/owenz0523/portfolio",
    },
  ];
  
  export { services, technologies, experiences, education, projects };