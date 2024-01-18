import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jie-Ying (Peter) Li",
  initials: "JYL",
  location: "Hsinchu, Taiwan",
  locationLink: "https://maps.app.goo.gl/gFTKvVq22qCJmAqi8",
  about:
    "Passionate about Software Development and Computer Vision. Sufficient teamwork experience with people from different professions.",
  summary:
    "As a Software Engineer...",
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
      degree: "Master's Degree in Information Systems and Applications",
      start: "2021",
      end: "2023",
    },
    {
      school: "Yuan Ze University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Taiwan Semiconductor Manufacturing Company (TSMC)",
      link: "https://www.tsmc.com",
      badges: [],
      title: "Data Engineer",
      // logo: ParabolLogo,
      start: "2023.11",
      end: "Present",
      description:
        "Designing 50+ ETL pipelines to enable automated cost management workflows with a 100% reduction in manual intervention with Airflow. Technologies: Python, Pandas, SQL, Airflow, MSSQL Server, Docker, Kubernetes",
    },
    {
      company: "NeuinX",
      link: "https://neuinx.com/",
      badges: ["Remote"],
      title: "Software Engineer",
      // logo: ClevertechLogo,
      start: "2023.09",
      end: "2023.11",
      description:
        "Developing a Chatbot for introducing the company's products and services to customers. Technologies: JavaScript, Node.js, Line Messaging API",
    },
    {
      company: "Multimedia Information System Lab (Min-Chun Hu)",
      link: "https://mislab.cs.nthu.edu.tw/",
      badges: [],
      title: "Graduate Student Reseacher",
      // logo: ClevertechLogo,
      start: "2021.03",
      end: "2023.09",
      description:
        "Researched and implemented innovative solutions for egocentric gesture recognition based on recent research. Technologies: Python, PyTorch, OpenCV, Unity",
    },
    {
      company: "Trunk Studio",
      link: "https://monosparta.org/",
      badges: ["Internship"],
      title: "Software Engineer Intern",
      // logo: JojoMobileLogo,
      start: "2021.01",
      end: "2021.04",
      description:
        "Worked in a team of 8 to build a web app which helps hikers get useful hiking information for over 500 different hiking trails. Technologies: JavaScript, React, Laravel, Materail UI, MySQL, Firebase",
    },
  ],
  skills: [
    "Python", "JavaScript", "React", "Node.js", "SQL", "Docker", "Kubernetes", "Azure", "PyTorch", "OpenCV", "Unity", "Airflow", "MSSQL Server", "MySQL", "Firebase",
  ],
  projects: [
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A platform to build and grow your online business",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
  ],
} as const;
