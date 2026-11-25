// ============================================================
// Portfolio Data - Preeti Joshi
// ============================================================

export const personalInfo = {
  name: "Preeti Joshi",
  firstName: "Preeti",
  lastName: "Joshi",
  role: "Full Stack Developer",
  tagline: "Aspiring Full Stack Developer | Computer Science Engineer",
  email: "preetic1205@gmail.com",
  phone: "+91 9845838204",
  location: "Hubli, India",
  github: "https://github.com/preeti-joshi", // Placeholder - update with actual URL
  linkedin: "https://linkedin.com/in/preeti-joshi", // Placeholder - update with actual URL
  resumeUrl: "/Preeti_Joshi_Resume.pdf", // Place your resume PDF in public folder
  bio: "I build responsive web applications and practical software solutions using modern web technologies. I enjoy solving problems, learning new technologies, and turning ideas into functional applications.",
  aboutSummary: `I'm a passionate Computer Science Engineering student at KLE Institute of Technology, Hubli, with a strong interest in Full Stack Development. I enjoy building end-to-end web applications — from crafting clean, responsive user interfaces to designing robust backend systems and databases.

My journey in software development has equipped me with hands-on experience in both frontend and backend technologies, including HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. I believe in writing clean, maintainable code and continuously improving my skills through real-world projects.

I'm driven by curiosity, a love for problem-solving, and the satisfaction of turning ideas into functional applications. Currently seeking opportunities to apply my skills and grow as a Full Stack Developer in a dynamic team environment.`,
};

export const skills = {
  languages: [
    { name: "Java", icon: "FaJava" },
    { name: "Python", icon: "FaPython" },
    { name: "C", icon: "SiC" },
    { name: "JavaScript", icon: "SiJavascript" },
  ],
  frontend: [
    { name: "HTML5", icon: "FaHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
    { name: "Bootstrap", icon: "SiBootstrap" },
    { name: "Chart.js", icon: "SiChartdotjs" },
  ],
  backend: [
    { name: "Node.js", icon: "FaNodeJs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "Flask", icon: "SiFlask" },
  ],
  databases: [
    { name: "MySQL", icon: "SiMysql" },
    { name: "MongoDB", icon: "SiMongodb" },
  ],
  frameworks: [
    { name: "EJS", icon: "SiEjs" },
    { name: "Passport.js", icon: "SiPassport" },
    { name: "Scikit-learn", icon: "SiScikitlearn" },
    { name: "Pandas", icon: "SiPandas" },
    { name: "NumPy", icon: "SiNumpy" },
  ],
  tools: [
    { name: "Git", icon: "FaGit" },
    { name: "GitHub", icon: "FaGithub" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
    { name: "Eclipse", icon: "SiEclipseide" },
    { name: "Vercel", icon: "SiVercel" },
  ],
  softSkills: [
    { name: "Problem Solving", icon: "MdPsychology" },
    { name: "Logical Thinking", icon: "MdAutoAwesome" },
    { name: "Teamwork", icon: "MdPeople" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI-Based Log Anomaly Detection",
    subtitle: "Machine Learning System for Windows Event Log Analysis",
    description:
      "A machine learning-based system for detecting anomalous patterns in Windows event logs using Isolation Forest. Includes automated log collection, preprocessing, anomaly classification, MongoDB integration, and a Flask-based dashboard for log monitoring and visualization.",
    longDescription: `An intelligent security monitoring system that leverages machine learning to automatically detect anomalous patterns in Windows event logs, enabling proactive threat identification and system health monitoring.

Key features include:
• Automated Windows event log collection and preprocessing pipeline
• Anomaly detection using Isolation Forest algorithm
• Real-time anomaly classification and severity scoring
• MongoDB integration for persistent log storage and querying
• Flask-based interactive dashboard for log monitoring
• Data visualization with Chart.js for anomaly trends
• RESTful API for log ingestion and results retrieval
• Pandas & NumPy powered feature engineering pipeline`,
    technologies: ["Python", "Flask", "Machine Learning", "Isolation Forest", "Pandas", "NumPy", "MongoDB", "HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/PreetiJoshi02/AI-BASED-LOG-ANAMOLY-DETECTION.git",
    live: "https://loganomalysystem.vercel.app/",
    category: "ML / Security",
    featured: true,
    icon: "🔍",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Stayora",
    subtitle: "Full Stack Property Booking Web Application",
    description:
      "A full-stack property booking platform featuring user authentication, role-based access control, CRUD operations, property listings, booking management, and server-side validation. Built with the MVC architecture using Node.js, Express.js, MongoDB, and EJS.",
    longDescription: `Stayora is a comprehensive full-stack property listing and booking platform built with the MVC architecture. The application enables users to browse properties, make bookings, and manage their reservations seamlessly.

Key features include:
• User authentication and authorization with Passport.js
• Role-based access control (host/guest roles)
• Full CRUD operations for property listings and bookings
• Complete booking management system
• Server-side data validation and error handling
• Responsive property browsing interface
• Image upload and management via Cloudinary
• RESTful API architecture`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Passport.js", "REST APIs"],
    github: "https://github.com/PreetiJoshi02/Stayora.git",
    live: "https://stayora-six.vercel.app/listings",
    category: "Full Stack",
    featured: false,
    icon: "🏨",
    color: "from-purple-500 to-blue-600",
  },
  {
    id: 3,
    title: "WeatherPulse",
    subtitle: "Real-time Weather Forecast Application",
    description:
      "A real-time weather web application integrated with the OpenWeather API. Displays current weather conditions and a detailed five-day forecast with a clean, responsive, user-friendly interface.",
    longDescription: `WeatherPulse is a real-time weather forecast application that provides accurate and up-to-date weather information for any location worldwide.

Key features include:
• Real-time weather data via OpenWeather API integration
• Current weather conditions (temperature, humidity, wind speed)
• Detailed 5-day weather forecast
• Search functionality for any city worldwide
• Dynamic weather icons based on conditions
• Responsive design for all screen sizes
• Clean, modern UI with intuitive UX`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Bootstrap", "OpenWeather API"],
    github: "#", // Placeholder - update with actual GitHub URL
    live: "https://weather-pulse-roan-ten.vercel.app/#forecast-section",
    category: "Web App",
    featured: false,
    icon: "🌦️",
    color: "from-blue-500 to-cyan-500",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering – Computer Science",
    institution: "KLE Institute of Technology",
    location: "Hubli, Karnataka",
    duration: "2023 – 2027",
    score: "CGPA: 8.75",
    scoreLabel: "CGPA",
    scoreValue: "8.75",
    icon: "🎓",
    current: true,
    description: "Pursuing BE in Computer Science with focus on software engineering, data structures, algorithms, and web development.",
  },
  {
    id: 2,
    degree: "Pre-University (Class 12th)",
    institution: "Karnataka State Board",
    location: "Karnataka",
    duration: "2022 – 2023",
    score: "573/600 – 95.5%",
    scoreLabel: "Percentage",
    scoreValue: "95.5%",
    icon: "📚",
    current: false,
    description: "Completed Pre-University with distinction in Science stream.",
  },
  {
    id: 3,
    degree: "SSLC (Class 10th)",
    institution: "Karnataka State Board",
    location: "Karnataka",
    duration: "2020 – 2021",
    score: "569/625 – 91.04%",
    scoreLabel: "Percentage",
    scoreValue: "91.04%",
    icon: "🏫",
    current: false,
    description: "Completed secondary education with distinction.",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Programming Fundamentals using Python",
    issuer: "Infosys SpringBoard",
    icon: "🐍",
    color: "from-blue-500 to-indigo-600",
    description: "Completed certification covering Python programming fundamentals, data structures, and problem-solving techniques.",
    credentialUrl: "#", // Placeholder - update with actual credential URL
    year: "2024",
  },
  {
    id: 2,
    title: "Fundamentals of Object Oriented Programming",
    issuer: "NPTEL",
    icon: "⚙️",
    color: "from-purple-500 to-pink-600",
    description: "Completed NPTEL certification on Object-Oriented Programming concepts including classes, inheritance, polymorphism, and encapsulation.",
    credentialUrl: "#", // Placeholder - update with actual credential URL
    year: "2024",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
