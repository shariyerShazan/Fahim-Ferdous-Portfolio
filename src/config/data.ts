import {
  SkillCategory,
  Experience,
  Project,
  Publication,
  EducationInfo,
  CertificateInfo,
} from "../types";

export const PORTFOLIO_OWNER = {
  name: "Md. Fahim Ferdous",
  email: "fahimferdous61@gmail.com",
  phone: "+8801860868772",
  location: "DSC, Birulia, Dhaka, Bangladeshi",
  linkedin: "https://www.linkedin.com/in/fahim-ferdous-53239b262",
  title: "Firmware and Embedded Systems Developer",
  summary:
    "Firmware and Embedded Systems developer with hands-on experience in STM32, ESP32, and Arduino platforms, specialising in C/C++ bare-metal and HAL-level programming. Currently pursuing BSc in Computer Science at Daffodil International University (CGPA 3.87/4.00), with published research in AI-based computer vision and a strong background in IoT system design and real-time sensor integration. Experienced in communication protocols including UART, SPI, I2C, and MQTT, with a proven ability to bridge hardware and software layers into complete, deployable solutions. IEEE Student Branch Chairperson and active researcher with a passion for building intelligent embedded systems that solve real-world humanitarian and agricultural challenges.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Languages",
    skills: [
      { name: "C", icon: "SiC" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "Java", icon: "FaJava" },
      { name: "Python", icon: "FaPython" },
      { name: "HTML", icon: "FaHtml5" },
      { name: "CSS", icon: "FaCss3Alt" },
      { name: "JavaScript", icon: "FaJsSquare" },
      { name: "MySQL", icon: "DiMysql" },
    ],
  },
  {
    title: "Hardware Protocols",
    skills: [
      { name: "UART", icon: "BsCpu" },
      { name: "SPI", icon: "BsCpu" },
      { name: "I2C", icon: "BsCpu" },
      { name: "MQTT", icon: "MdCloudQueue" },
      { name: "Wi-Fi", icon: "FaWifi" },
      { name: "GPIO", icon: "BsMotherboard" },
    ],
  },
  {
    title: "Software Platforms",
    skills: [
      { name: "STM32CubeIDE", icon: "SiStmicroelectronics" },
      { name: "Arduino IDE", icon: "SiArduino" },
      { name: "Git", icon: "FaGitAlt" },
      { name: "Anydesk", icon: "MdComputer" },
      { name: "TensorFlow", icon: "SiTensorflow" },
      { name: "CNN", icon: "TbBrain" },
      { name: "OpenCV", icon: "SiOpencv" },
      { name: "Scikit-learn", icon: "SiScikitlearn" },
    ],
  },
  {
    title: "Specializations",
    skills: [
      { name: "IoT Prototyping", icon: "FaNetworkWired" },
      { name: "UI/ UX design", icon: "MdDesignServices" },
      { name: "Microsoft 365", icon: "FaMicrosoft" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Chairperson",
    organization: "IEEE CS BDC Secretariat Ex-com",
    period: "03/2026 – Present",
    location: "Dhaka, Bangladesh",
    description:
      "Leading the Secretariat team of IEEE Computer Society Bangladesh Chapter, overseeing operational coordination, documentation, strategic planning, and execution of chapter activities nationwide.",
  },
  {
    role: "Chairperson",
    organization: "IEEE DIU Student Branch",
    period: "01/2026 – Present",
    location: "Dhaka, Bangladesh",
    description:
      "Providing leadership and direction to the Student Branch, managing technical and professional development initiatives, member engagement, and collaboration with IEEE organizational units and industry partners.",
  },
  {
    role: "Chairperson",
    organization: "IEEE SIGHT- DIU",
    period: "04/2025 – 12/2025",
    location: "Dhaka, Bangladesh",
    description:
      "Led technical project teams focused on humanitarian IoT solutions, overseeing firmware design and sensor integration for community-impact prototypes.",
  },
  {
    role: "Intern",
    organization: "International Affairs- DIU",
    period: "07/2024 – 12/2024",
    location: "Dhaka, Bangladesh",
    description:
      "Assisted in coordinating international programs and student exchange activities, and contributed to fostering cross-cultural collaboration and global engagement initiatives.",
  },
  {
    role: "Assistant General Secretary",
    organization: "Embedded System Research Center",
    period: "07/2024 – 12/2025",
    location: "DSC, Dhaka, Bangladesh",
    description:
      "Delivered hands-on Arduino, ESP32, and STM32F446RE firmware workshops, guiding participants through GPIO control, assisted in coordinating embedded system research projects.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Smart Health Monitoring and Fever Control System",
    technologies: "Arduino, ESP32, MAX30102, DS18B20, ECG Sensor",
    description:
      "Developed a wearable health monitoring device measuring body temperature, SpO2, and heart rate using MAX30102, ECG Sensor and DS18B20 sensors interfaced over I2C.",
  },
  {
    title: "Smart Soil Fertility Analysis and Fertilizer Recommendation System",
    technologies: "STM32, NPK Sensor, ML Model, Python",
    description:
      "Engineered a soil analysis system using STM32 to interface with NPK, moisture, and pH sensors via SPI, acquiring real-time soil data for precision agriculture.",
  },
  {
    title: "Automatic Fish Farming and Monitoring System",
    technologies: "ESP32, Arduino, I2C, pH Sensor, DO Sensor",
    description:
      "Developed a fully automated aquaculture monitoring system measuring dissolved oxygen, pH, temperature, and turbidity in real time using embedded sensor arrays.",
  },
  {
    title: "Automatic Wild Elephant Detection System",
    technologies: "ESP32, OpenCV, PIR Sensor, GSM/SMS Alert",
    description:
      "Built an AI-powered wildlife intrusion detection system to protect villages and farmland from elephant encroachment.",
  },
  {
    title: "Home Automation System",
    technologies: "ESP32, MQTT, C, Wi-Fi",
    description:
      "Designed and implemented a Wi-Fi-based home automation system using ESP32, enabling remote control of home appliances via MQTT protocol over a mobile application.",
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "DeepLearning-Based ClassificationofMedicinalPlantLeafDiseasesUsing CNNArchitectureswithWeb-BasedDeployment",
    publisher: "Taylor and Francis",
    date: "12/12/2025",
    description:
      "Developed a CNN-based system for automated medicinal plant leaf disease classification, integrated with a web platform for real-time diagnosis and precision agriculture support.",
  },
  {
    title:
      "AI-MedLeafX: A Large-Scale Computer Vision Dataset for Medicinal Plant Diagnosis",
    publisher: "Data in Brief",
    date: "06/08/2025",
    description:
      "Co-developed a large-scale medicinal plant leaf dataset (10k+ images) for AI, machine learning, and computer vision research in plant disease recognition and precision agriculture.",
  },
];

export const EDUCATION: EducationInfo[] = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Daffodil International University",
    period: "07/2022 – present",
    location: "Dhaka, Bangladesh",
    result: "Current CGPA: 3.87/4.00",
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "Zonail Degree College",
    period: "07/2019 – 12/2021",
    location: "Natore, Bangladesh",
    result: "GPA: 5.00/5.00",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Saint Louis High School",
    period: "01/2014 – 02/2019",
    location: "Natore, Bangladesh",
    result: "GPA: 5.00/5.00",
  },
];

export const CERTIFICATES: CertificateInfo[] = [
  {
    title: "International Summer School, IIT Bombay",
    description: "Certification of Participation",
    fileUrl: "/certificates/placeholder.pdf",
  },
  {
    title: "ICADHI- 2026",
    description: "Certified as General Chair of the Congress",
    fileUrl: "/certificates/placeholder.pdf",
  },
  {
    title: "INDCon 2025",
    description: "First Runner-up in IoT based Project Showcase",
    fileUrl: "/certificates/placeholder.pdf",
  },
  {
    title: "Data Visionary, 2024",
    description: "Official certificate for successfully organizing the contest",
    fileUrl: "/certificates/placeholder.pdf",
  },
  {
    title: "BIM Callocated Event, 2023",
    description: "3rd position in IoT based Project Showcasing",
    fileUrl: "/certificates/placeholder.pdf",
  },
  {
    title: "Science Fair, 2020",
    description: "1st position in Science Project Showcasing",
    fileUrl: "/certificates/placeholder.pdf",
  },
];
