import { GitHubIcon, LinkedInIcon } from "@/components/icons";


export const RESUME_DATA = {
  name: "Jie-Ying (Peter) Li",
  initials: "JYL",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/@25.0856257,121.3963464,11z/data=!3m1!4b1!4m6!3m5!1s0x3442ac6b61dbbd8b:0xbcd1baad5c06a482!8m2!3d25.0329636!4d121.5654268!16zL20vMGZ0a3g?entry=ttu",
  about:
    "Software Engineer, Open Source Contributor",
  summary:
    "2 years of experience in software engineering, specializing in AI, data science, and backend development.\
    Proficient in Python, C++, and various machine learning frameworks.\
    Strong background in computer vision and data engineering.\
    Proven ability to develop and optimize machine learning algorithms for real-world applications.\
    Excellent problem-solving skills and a passion for continuous learning.",
  avatarUrl: "https://avatars.githubusercontent.com/u/35570826?v=4",
  personalWebsiteUrl: "peter0512lee.github.io",
  contact: {
    email: "peter0512lee@gmail.com",
    tel: "+886986036591",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/peter0512lee",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jie-ying-li/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "National Tsing Hua University",
      degree: "Master's Degree in Information Systems and Applications, GPA: 4.23/4.30",
      start: "2021",
      end: "2023",
    },
    {
      school: "Yuan Ze University",
      degree: "Bachelor's Degree in Computer Science and Engineering, GPA: 3.79/4.00",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "TrendMicro",
      link: "https://www.trendmicro.com/en_us/business.html",
      badges: [],
      title: "AI/ML Engineer",
      start: "2025.02",
      end: "Present",
      description: 
        "Developed and optimized machine learning algorithms for cybersecurity applications.",
      skills: ["Python", "C++", "HuggingFace", "PyTorch", "ONNX", "GCP", "Vertex AI"],
    },
    {
      company: "OmniEyes",
      link: "https://www.theomnieyes.com/en",
      badges: [],
      title: "Software Engineer",
      start: "2024.02",
      end: "2025.02",
      description: 
        "Developed Advanced Driver Assistance Systems (ADAS) and CRM systems.",
      skills: ["Python", "Kotlin", "TensorFlow", "OpenCV", "PostgreSQL", "MongoDB", "Serverless", "AWS", "Docker"],
    },
    {
      company: "Taiwan Semiconductor Manufacturing Company (TSMC)",
      link: "https://www.tsmc.com",
      badges: [],
      title: "Software Engineer",
      start: "2023.11",
      end: "2024.02",
      description:
        "Developed and optimized 50+ ETL pipelines using Airflow for data processing and analysis.",
      skills: ["Python", "Pandas", "SQL", "Airflow", "MSSQL Server", "Docker", "Kubernetes", "Azure", "CI/CD"],
    },
  ],
  skills: [
    "ML/DL", "Model Deployment", "Model Optimization", "Data Engineering", "Backend Development",
  ],
  projects: [
    {
      title: "Shopping Cart System",
      techStack: [
        "Go",
        "Gin",
        "MongoDB",
        "Docker"
      ],
      link: {
        label: "Shopping Cart System",
        href: "https://github.com/peter0512lee/shopping-cart-system-go",
      },
      description: "A simple e-commerce shopping cart system built with Go (backend) and React (frontend), featuring real-time cart updates and a responsive design.",
    },
    {
      title: "MIT 6.824 Distributed Systems",
      techStack: [
        "Go",
        "Distrubuted System",
      ],
      link: {
        label: "MIT 6.824 Distributed Systems",
        href: "https://github.com/peter0512lee/MIT6.824-Distributed-Systems",
      },
      description: "The labs from MIT6.824-Distributed-Systems",
    },
    {
      title: "Efficient Hand Gesture Recognition using Multi Task Multi Modal Learning and Self Distillation",
      techStack: [
        "PyTorch",
        "OpenCV",
      ],
      link: {
        label: "Efficient Hand Gesture Recognition using Multi Task Multi Modal Learning and Self Distillation",
        href: "https://github.com/peter0512lee/Efficient-Hand-Gesture-Recognition-using-Multi-Task-Multi-Modal-Learning-and-Self-Distillation",
      },
      description: "PyTorch implementation of the thesis project.",
    },
    {
      title: "MedEX",
      techStack: [
        "React",
        "Flask",
        "sqlite",
        "PyTorch",
      ],
      link: {
        label: "MedEX",
        href: "https://github.com/MIS-MedEX",
      },
      description: "An explainable medical reporting system for chest X-ray images.",
    },
    {
      title: "PapMon",
      techStack: [
        "Ruby",
        "Slim",
        "Roda",
        "PostgreSQL",
      ],
      link: {
        label: "PapMon",
        href: "https://github.com/9AMPYLO/PapMon",
      },
      description: "PapMon is a web app that will recommend the latest papers, related source code and datasets in the field of Computer Science.",
    },
    {
      title: "LeetCode",
      techStack: [
        "Python",
      ],
      link: {
        label: "LeetCode",
        href: "https://github.com/peter0512lee/LeetCode",
      },
      description: "This repository contains my LeetCode practice records, covering a wide range of algorithm and data structure problems.",
    },
  ],
  certifications: [
    {
      title: "Lyft Back-End Engineering Job Simulation",
      content: "\
        Completed the Back-End Engineering job simulation, taking over development of an unfinished project for the Lyft Rentals team.\
        Drafted a UML class diagram representing a new reorganized architecture.\
        Refactored a messy codebase inherited from another team to accurately reflect my new design.\
        Implemented unit tests and added new functionality using test-driven development.\
        ",
      time: "2024.04",
      link: "https://github.com/peter0512lee/forage-lyft-starter-repo"
    },
    {
      title: "Ford Digital (University 3rd-4th Year) Job Simulation on Forage",
      content: "\
        Completed a job simulation that involved building containers for one of Ford's backend development teams.\
        Developed a backend to stream engine temperature sensor readings from cars to mobile phones.\
        Connected a Flask server to a Redis instance using Docker Compose.\
        ",
      time: "2024.04",
      link: "https://github.com/peter0512lee/tributary"
    },
    {
      title: "AWS APAC Solutions Architecture virtual experience program on Forage",
      content: "\
        Designed and simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times.\
        Described my proposed architecture in plain language ensuring my client understood how it works and how costs will be calculated for it.\
        ",
      time: "2024.04",
      link: ""
    },
  ],
} as const;
