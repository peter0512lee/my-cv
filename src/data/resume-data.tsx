import { GitHubIcon, LinkedInIcon } from "@/components/icons";


export const RESUME_DATA = {
  name: "Jie-Ying (Peter) Li",
  initials: "JYL",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/@25.0856257,121.3963464,11z/data=!3m1!4b1!4m6!3m5!1s0x3442ac6b61dbbd8b:0xbcd1baad5c06a482!8m2!3d25.0329636!4d121.5654268!16zL20vMGZ0a3g?entry=ttu",
  about:
    "Software Engineer, interested in AI Algorithm and Data Backend Development",
  summary:
    "M.S. in Information Systems from National Tsing Hua University. Expert in AI and software engineering, showcased through roles at OmniEyes and TSMC, refining ADAS algorithms and optimizing data processing. Groundbreaking research in computer vision, scholarly publications, and top ranks in hackathons underscore advanced skills in Python, SQL, machine learning, and Docker/CI/CD.",
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
      company: "OmniEyes",
      link: "https://www.theomnieyes.com/en",
      badges: [],
      title: "AI Algorithm Engineer",
      start: "2024.03",
      end: "Present",
      description: 
        "Spearheaded the development and optimization of ADAS (Advanced Driver Assistance Systems) algorithms, achieving a 20\% increase in accuracy. \
        Implemented enhancements that resulted in a reduction of false positives by 15%, enhancing the system’s reliability in real-world scenarios.",
      skills: ["Python", "Kotlin", "TensorFlow", "OpenCV", "Android", "MongoDB"]
    },
    {
      company: "Taiwan Semiconductor Manufacturing Company (TSMC)",
      link: "https://www.tsmc.com",
      badges: [],
      title: "Software Engineer",
      start: "2023.11",
      end: "2024.03",
      description:
        "Led development of 7+ User Requirement Documents aligned with stakeholder needs and project goals. \
        Designed and optimized 50+ ETL pipelines and an Airflow ETL system, achieving significant improvements in efficiency, and query speed.",
      skills: ["Python", "Pandas", "SQL", "Airflow", "MSSQL Server", "Docker", "Kubernetes"],
    },
    {
      company: "NeuinX",
      link: "https://neuinx.com/",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "2023.09",
      end: "2023.11",
      description:
        "Developing a Chatbot for introducing the company's products and services to customers.",
      skills: ["JavaScript", "Node.js", "Express.js", "Line Messaging API"],
    },
    {
      company: "Multimedia Information System Lab",
      link: "https://mislab.cs.nthu.edu.tw/",
      badges: ["Min-Chun Hu"],
      title: "Research Assistant",
      start: "2021.04",
      end: "2023.09",
      description:
        "Spearheaded the development and deployment of a cutting-edge Computer Vision-based algorithm for egocentric gesture recognition, achieving state-of-the-art performance metrics, including a recognition accuracy of 95% on public datasets.\
        ",
      skills: ["Python", "PyTorch", "OpenCV", "Scikit-Learn", "NumPy", "Pandas", "Unity"],
    },
    {
      company: "Trunk Studio",
      link: "https://monosparta.org/",
      badges: ["Internship"],
      title: "Software Engineer",
      start: "2021.01",
      end: "2021.04",
      description:
        "Collaborated in a team of 8 to develop a web app providing hiking information for over 500 trails, utilizing React, Material-UI, Firebase, and Google Cloud Platform.\
        ",
      skills: ["React", "Laravel", "Materail UI", "MySQL", "Firebase", "Heroku"],
    },
  ],
  skills: [
    "Computer Vision", "Data Science", "Data Engineering", "Backend Development",
    // "Python", "Kotlin", "SQL", "Docker", "CI/CD", "PyTorch", "Airflow", "MSSQL Server", "Android Studio",
  ],
  projects: [
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
