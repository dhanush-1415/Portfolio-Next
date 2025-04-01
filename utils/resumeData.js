export const resumeData = {
  personalInfo: {
    name: "Dhanush J",
    title: "Senior Full Stack Developer",
    email: "workofdhanu@gmail.com",
    phone: "+91 9398263767",
    location: {
      address: "3-85/3, Gandhi Nagar st",
      city: "Nagari",
      state: "Andhra Pradesh",
      zipCode: "517590"
    }
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/dhanush-1415",
      icon: "GitHub", // This references the MUI icon name
      display: true // Optional flag to show/hide in UI
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhanush-j-ba92b8165",
      icon: "LinkedIn",
      display: true
    },
    {
      name: "Email",
      url: "mailto:workofdhanu@gmail.com", // mailto: will be added when using
      icon: "Email",
      display: true
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/9398263767", // Use international format without + or 00
      icon: "WhatsApp",
      display: true
    },
  ],

  summary: "Senior Full Stack Developer with 3+ years of specialized experience in React.js, Node.js, and MySQL. Expert in creating sophisticated, scalable web applications with exceptional UI/UX. Known for developing robust RESTful APIs, implementing complex database architectures, and delivering high-performance frontend interfaces that drive business growth. Passionate about implementing modern development practices, optimizing application performance, and mentoring junior developers. Consistently delivers innovative solutions that exceed client expectations while adapting quickly to emerging technologies.",

  experiences: [
    {
      type: "work",
      company: "7vachan Service Pvt Ltd",
      title: "Frontend Developer",
      location: "Bengaluru",
      startDate: "April 2023",
      endDate: "Present",
      responsibilities: [
        "Developed and maintained scalable web applications using React.js and MUI, enhancing UI consistency and usability",
        "Designed and implemented responsive admin dashboards with MUI, improving operational efficiency for internal teams",
        "Built and optimized React Native (Expo) mobile applications using React Native Paper",
        "Integrated Firebase for authentication, and push notifications, enhancing user engagement",
        "Implemented real-time updates and push notifications using Firebase Cloud Messaging (FCM) for seamless user interactions",
        "Optimized application performance, achieving scores in performance and accessibility",
        "Developed reusable UI components, reducing development time by 35% across web and mobile applications",
        "Collaborated with cross-functional teams to enhance user experience and streamline frontend workflows",
        "Mentored junior developers and enforced best coding practices, improving code maintainability and performance"
      ]
    },
    {
      type: "work",
      company: "Isometrica Experiences Pvt Ltd",
      title: "Full Stack Developer",
      location: "Hyderabad",
      startDate: "February 2022",
      endDate: "March 2023",
      responsibilities: [
        "Developed scalable Node.js/Express backend services supporting concurrent users",
        "Designed and optimized MySQL database architecture for handling large-scale user data and analytics",
        "Implemented admin panel using Express and React.js for managing users, content, and platform settings",
        "Built dynamic dashboards to visualize user statistics, engagement trends, and key business metrics",
        "Created comprehensive RESTful APIs with authentication, validation, and proper error handling",
        "Optimized database queries, reducing response times by 45% for critical operations",
        "Integrated third-party payment gateways and APIs into applications",
        "Automated reporting and data aggregation pipelines to streamline analytics processing",
        "Enhanced security and scalability of backend services, ensuring data integrity and performance",
        "Automated data extraction, web scraping, and testing workflows using Selenium with Python",
      ]
    }
  ],

  education: [
    {
      type: "education",
      school: "S V University, Tirupati",
      degree: "Bachelor's Degree in Computer Science",
      field: "Computer Science Graduate",
      location: "SRDC College Affiliated",
      startDate: "2018",
      endDate: "2021",
      description: "Completed Bachelor's Degree in Computer Science with a focus on software development and programming fundamentals."
    },
    {
      type: "education",
      school: "XII Pre Degree, Nagari",
      degree: "Pre-University",
      field: "MPC",
      location: "",
      startDate: "2016",
      endDate: "2018",
      description: "Completed Pre-University education with a focus on Mathematics, Physics, and Chemistry."
    }
  ],

  frontendSkills: [
    {
      name: "React.js",
      percentage: 95,
      description: "Advanced hooks, context API, performance optimization with memoization, code splitting",
      icon: "Code"
    },
    {
      name: "React Native",
      percentage: 92,
      description: "Expo framework, cross-platform development, native module integration",
      icon: "BoxIcon"
    },
    {
      name: "JavaScript/TypeScript",
      percentage: 96,
      description: "ES6+ features, async programming, type systems, functional programming",
      icon: "Code"
    },
    {
      name: "State Management",
      percentage: 94,
      description: "Redux Toolkit, Context API, Zustand, SWR for data fetching",
      icon: "Layers"
    },
    {
      name: "Material UI",
      percentage: 93,
      description: "Custom themes, responsive layouts, component customization",
      icon: "Palette"
    },
    {
      name: "Framer Motion",
      percentage: 90,
      description: "Complex animations, gesture handling, scroll-triggered effects",
      icon: "Zap"
    }
  ],

  backendSkills: [
    {
      name: "Node.js/Express",
      percentage: 93,
      description: "REST API development, middleware architecture, error handling",
      icon: "Server"
    },
    {
      name: "MySQL",
      percentage: 95,
      description: "Database design, query optimization, transactions, indexing",
      icon: "Database"
    },
    {
      name: "RESTful API Design",
      percentage: 94,
      description: "Resource modeling, proper status codes, documentation with Swagger",
      icon: "Network"
    },
    {
      name: "Authentication",
      percentage: 89,
      description: "JWT, session management, OAuth 2.0, role-based access control",
      icon: "Lock"
    },
    {
      name: "Socket.io",
      percentage: 87,
      description: "Real-time features, event-driven architecture, room management",
      icon: "Globe"
    },
    {
      name: "TypeScript",
      percentage: 88,
      description: "Type safety, interfaces, generics in backend development",
      icon: "Code"
    }
  ],

  devOpsSkills: [
    {
      name: "Firebase",
      percentage: 88,
      description: "Authentication, Firestore, Cloud Functions, Hosting",
      icon: "Flame"
    },
    {
      name: "Docker",
      percentage: 83,
      description: "Containerization, multi-stage builds, Docker Compose",
      icon: "BoxIcon"
    },
    {
      name: "CI/CD Pipelines",
      percentage: 80,
      description: "GitHub Actions, automated testing, deployment workflows",
      icon: "GitBranch"
    },
    {
      name: "AWS Basics",
      percentage: 75,
      description: "EC2, S3, Lambda functions, basic infrastructure",
      icon: "Cloud"
    }
  ],

  additionalSkills: [
    {
      name: "Git/GitHub",
      icon: "GitBranch",
      description: "Version control, collaborative workflows, PR reviews"
    },
    {
      name: "TailwindCSS",
      icon: "Palette",
      description: "Utility-first CSS, responsive design, theming"
    },
    {
      name: "Three.js",
      icon: "Cube",
      description: "Basic 3D rendering, scene composition, animations"
    },
    {
      name: "GraphQL",
      icon: "Network",
      description: "Apollo Client, queries/mutations, schema design"
    },
    {
      name: "Jest/Testing",
      icon: "TestTube",
      description: "Unit testing, integration tests, React Testing Library"
    },
    {
      name: "Stripe API",
      icon: "CreditCard",
      description: "Payment processing, subscriptions, webhook handling"
    },
    {
      name: "Python Automation",
      icon: "Terminal",
      description: "Scripting, web scraping, data processing"
    },
    {
      name: "Performance Opt",
      icon: "Gauge",
      description: "Lighthouse audits, React profiling, bundle analysis"
    }
  ],

  // frontendSkills: [
  //   { name: "React.js", percentage: 95 },
  //   { name: "React Native(Expo)", percentage: 92 },
  //   { name: "HTML5/CSS3", percentage: 98 },
  //   { name: "JavaScript (ES6+)", percentage: 96 },
  //   { name: "Redux/Context API", percentage: 94 },
  //   { name: "Framer Motion", percentage: 90 }
  // ],

  // backendSkills: [
  //   { name: "Node.js", percentage: 93 },
  //   { name: "Express.js", percentage: 91 },
  //   { name: "MySQL", percentage: 95 },
  //   { name: "TypeScript", percentage: 88 },
  //   { name: "RESTful API Design", percentage: 94 },
  //   { name: "Socket.io", percentage: 87 }
  // ],

  // additionalSkills: [
  //   { name: "Git/GitHub", icon: "GitBranch" },
  //   { name: "Material UI", icon: "Palette" },
  //   { name: "TailwindCSS", icon: "Layers" },
  //   { name: "Three.js", icon: "Cube" },
  //   { name: "GraphQL", icon: "Network" },
  //   { name: "CI/CD Pipelines", icon: "GitMerge" },
  //   { name: "AWS", icon: "Cloud" },
  //   { name: "Firebase", icon: "FlameIcon" },
  //   { name: "Docker", icon: "Box" },
  //   { name: "Performance Optimization", icon: "Gauge" },
  //   { name: "Jest/React Testing", icon: "TestTube" },
  //   { name: "Stripe Integration", icon: "CreditCard" }
  // ],

  projects: [
    {
      id: 1,
      title: "LandsIndia – E-commerce Based Real Estate Platform",
      description: "Developed a high-performance real estate e-commerce platform using Vite and React. Built an intuitive frontend with Material UI for the site and Tailwind CSS for the admin panel. Ensured seamless property listings, advanced filtering, and a user-friendly dashboard for buyers and sellers.",
      category: "Web",
      technologies: ["React", "Vite", "MUI", "TailwindCSS"],
      githubUrl: "#",
      demoUrl: "#",
      imageUrl: ""
    },
    {
      id: 2,
      title: "AppBowl – B2C Software Marketplace",
      description: "Engineered a software-selling platform for digital products like Microsoft and Azure licenses. Designed the frontend with MUI, Tailwind for admin, and integrated secure payment gateways. Focused on improving user experience with optimized UI and a smooth checkout flow.",
      category: "Web",
      technologies: ["React", "Vite", "MUI", "TailwindCSS", "Stripe API"],
      githubUrl: "#",
      demoUrl: "#",
      imageUrl: ""
    },
    {
      id: 3,
      title: "WedClub – Vendor & User Mobile Applications",
      description: "Built two React Native Expo applications for Wedly, streamlining the wedding industry. The vendor app allows businesses to manage bookings, listings, and profiles. The user app provides seamless vendor discovery, booking, and service comparison for photographers, makeup artists, and more.",
      category: "Mobile",
      technologies: ["React Native", "Expo", "React Native Paper", "Firebase", "Push Notifications"],
      githubUrl: "#",
      demoUrl: "#",
      imageUrl: ""
    }
  ],

  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Tamil", proficiency: "Fluent" },
    { name: "Telugu", proficiency: "Native" }
  ],

  strengths: [
    "Technical Leadership & Mentoring",
    "Problem-Solving & Critical Thinking",
    "System Architecture Design",
    "Performance Optimization",
    "Cross-functional Collaboration",
    "Agile Methodology Expertise",
    "Continuous Learning & Adaptation",
    "User-Centered Development"
  ]
};


// export const resumeData = {
//   personalInfo: {
//     name: "Dhanush J",
//     title: "Senior Full Stack Developer",
//     email: "workofdhanu@gmail.com",
//     phone: "+91 9398263767",
//     website: "yourportfolio.com", // Added portfolio link
//     linkedin: "linkedin.com/in/dhanushj", // Added LinkedIn
//     github: "github.com/dhanushj", // Added GitHub
//     location: {
//       address: "3-85/3, Gandhi Nagar st",
//       city: "Nagari",
//       state: "Andhra Pradesh",
//       zipCode: "517590"
//     }
//   },

//   summary: "Innovative Senior Full Stack Developer with 3+ years of experience building scalable web and mobile applications. Specialized in JavaScript ecosystems (React, Node.js, React Native) with expertise in UI/UX design, database architecture, and cloud integration. Proven track record of delivering high-performance solutions that drive business growth. Passionate about clean code architecture, performance optimization, and mentoring junior developers. Adept at bridging the gap between technical implementation and business objectives.",

//   experiences: [
//     {
//       type: "work",
//       company: "7vachan Service Pvt Ltd",
//       title: "Frontend Developer",
//       location: "Bengaluru (Remote)",
//       startDate: "April 2023",
//       endDate: "Present",
//       achievements: [
//         "Led frontend architecture for 3 major products, improving Lighthouse scores by 40%",
//         "Reduced bundle size by 35% through code splitting and lazy loading implementation",
//         "Mentored 2 junior developers, improving team velocity by 25%"
//       ],
//       responsibilities: [
//         "Architected and developed scalable React applications using modern hooks and context API patterns",
//         "Implemented design systems with Material UI and custom theme configurations",
//         "Built cross-platform mobile apps with React Native (Expo) and React Native Paper",
//         "Integrated Firebase services (Auth, Firestore, Cloud Functions) for backend functionality",
//         "Optimized React Native performance through memoization and FlatList optimizations",
//         "Established CI/CD pipelines for mobile apps using Fastlane and GitHub Actions",
//         "Conducted code reviews and established frontend best practices across the team",
//         "Collaborated with UX designers to implement responsive, accessible interfaces"
//       ],
//       technologies: ["React", "React Native", "Expo", "Firebase", "Material UI", "Redux", "Framer Motion"]
//     },
//     {
//       type: "work",
//       company: "Isometrica Experiences Pvt Ltd",
//       title: "Full Stack Developer",
//       location: "Hyderabad",
//       startDate: "February 2022",
//       endDate: "March 2023",
//       achievements: [
//         "Reduced API response times by 45% through query optimization and caching",
//         "Automated reporting system saved 20+ hours/month in manual work",
//         "Implemented security measures that reduced vulnerabilities by 60%"
//       ],
//       responsibilities: [
//         "Developed RESTful APIs with Node.js/Express handling 10K+ daily requests",
//         "Designed and optimized MySQL schemas for complex relational data",
//         "Built admin dashboard with React and Express for business analytics",
//         "Implemented JWT authentication with role-based access control",
//         "Integrated payment gateways (Razorpay, Stripe) with webhook handling",
//         "Created data visualization dashboards using Chart.js and D3.js",
//         "Automated testing with Jest and React Testing Library (80% coverage)",
//         "Containerized applications with Docker for consistent deployments",
//         "Implemented Redis caching for high-traffic endpoints",
//         "Developed Python scripts for data processing and web scraping"
//       ],
//       technologies: ["Node.js", "Express", "MySQL", "React", "Docker", "Redis", "Jest", "Python"]
//     }
//   ],

//   education: [
//     {
//       type: "education",
//       school: "S V University, Tirupati",
//       degree: "Bachelor's Degree in Computer Science",
//       field: "Computer Science Graduate",
//       location: "SRDC College Affiliated",
//       startDate: "2018",
//       endDate: "2021",
//       highlights: [
//         "Specialized in software engineering and database systems",
//         "Completed coursework in algorithms, data structures, and web technologies",
//         "Senior project: E-commerce platform with React and Node.js"
//       ]
//     },
//     {
//       type: "education",
//       school: "XII Pre Degree, Nagari",
//       degree: "Pre-University",
//       field: "MPC (Mathematics, Physics, Chemistry)",
//       location: "",
//       startDate: "2016",
//       endDate: "2018",
//       highlights: [
//         "Developed strong analytical and problem-solving skills",
//         "Participated in science fairs and programming competitions"
//       ]
//     }
//   ],

//   skills: {
//     frontend: [
//       { 
//         name: "React.js", 
//         percentage: 95,
//         description: "Advanced hooks, context API, performance optimization" 
//       },
//       { 
//         name: "React Native", 
//         percentage: 92,
//         description: "Expo, cross-platform development, native modules" 
//       },
//       { 
//         name: "JavaScript/TypeScript", 
//         percentage: 96,
//         description: "ES6+, async programming, type systems" 
//       },
//       { 
//         name: "State Management", 
//         percentage: 94,
//         description: "Redux, Context API, Zustand, SWR" 
//       },
//       { 
//         name: "UI Frameworks", 
//         percentage: 93,
//         description: "Material UI, TailwindCSS, Styled Components" 
//       },
//       { 
//         name: "Animation", 
//         percentage: 90,
//         description: "Framer Motion, GSAP, Three.js basics" 
//       }
//     ],
//     backend: [
//       { 
//         name: "Node.js/Express", 
//         percentage: 93,
//         description: "REST APIs, middleware architecture, authentication" 
//       },
//       { 
//         name: "Databases", 
//         percentage: 91,
//         description: "MySQL, MongoDB, Firebase Firestore" 
//       },
//       { 
//         name: "API Design", 
//         percentage: 94,
//         description: "REST, GraphQL basics, OpenAPI/Swagger" 
//       },
//       { 
//         name: "Authentication", 
//         percentage: 89,
//         description: "JWT, OAuth, Firebase Auth" 
//       },
//       { 
//         name: "WebSockets", 
//         percentage: 87,
//         description: "Socket.io, real-time features" 
//       },
//       { 
//         name: "Serverless", 
//         percentage: 85,
//         description: "Firebase Functions, AWS Lambda basics" 
//       }
//     ],
//     devOps: [
//       { name: "Docker", percentage: 83 },
//       { name: "CI/CD", percentage: 80 },
//       { name: "AWS Basics", percentage: 75 },
//       { name: "Firebase", percentage: 88 }
//     ],
//     methodologies: [
//       { name: "Agile/Scrum", percentage: 90 },
//       { name: "TDD", percentage: 85 },
//       { name: "Git Flow", percentage: 92 }
//     ]
//   },

//   tools: [
//     { 
//       name: "Version Control", 
//       items: ["Git", "GitHub", "GitLab"],
//       icon: "GitBranch" 
//     },
//     { 
//       name: "UI/UX", 
//       items: ["Figma", "Storybook", "Chromatic"],
//       icon: "Palette" 
//     },
//     { 
//       name: "Testing", 
//       items: ["Jest", "React Testing Library", "Cypress"],
//       icon: "TestTube" 
//     },
//     { 
//       name: "CI/CD", 
//       items: ["GitHub Actions", "Fastlane", "CircleCI"],
//       icon: "GitMerge" 
//     },
//     { 
//       name: "Cloud", 
//       items: ["Firebase", "AWS S3/EC2", "Vercel"],
//       icon: "Cloud" 
//     },
//     { 
//       name: "Performance", 
//       items: ["Lighthouse", "Chrome DevTools", "React Profiler"],
//       icon: "Gauge" 
//     }
//   ],

//   projects: [
//     {
//       id: 1,
//       title: "LandsIndia – Real Estate Platform",
//       role: "Lead Frontend Developer",
//       description: "Full-featured real estate marketplace with property listings, advanced search, and admin dashboard. Implemented map integrations, virtual tours, and lead management systems.",
//       achievements: [
//         "Improved page load speed by 40% through code splitting",
//         "Implemented lazy loading for images saving 30% bandwidth",
//         "Reduced bounce rate by 25% with UI/UX improvements"
//       ],
//       category: "Web Application",
//       technologies: ["React", "Vite", "MUI", "TailwindCSS", "Mapbox", "Firebase"],
//       githubUrl: "#",
//       demoUrl: "#",
//       imageUrl: ""
//     },
//     {
//       id: 2,
//       title: "AppBowl – Digital Marketplace",
//       role: "Full Stack Developer",
//       description: "B2C platform for software licenses with inventory management, affiliate system, and secure checkout flow. Integrated multiple payment gateways and fraud detection.",
//       achievements: [
//         "Processed 500+ transactions monthly with 99.9% uptime",
//         "Reduced checkout abandonment by 35%",
//         "Automated license delivery saving 15 hours/week"
//       ],
//       category: "E-commerce",
//       technologies: ["React", "Node.js", "MySQL", "Stripe", "SendGrid"],
//       githubUrl: "#",
//       demoUrl: "#",
//       imageUrl: ""
//     },
//     {
//       id: 3,
//       title: "WedClub – Wedding Vendor Platform",
//       role: "Mobile Developer",
//       description: "Dual mobile apps (vendor and client) for wedding services marketplace. Features include booking system, reviews, payments, and real-time messaging.",
//       achievements: [
//         "Achieved 4.8/5 App Store rating",
//         "Reduced crash rate to <0.5%",
//         "Onboarded 200+ vendors in first 3 months"
//       ],
//       category: "Mobile Application",
//       technologies: ["React Native", "Expo", "Firebase", "Push Notifications"],
//       githubUrl: "#",
//       demoUrl: "#",
//       imageUrl: ""
//     }
//   ],

//   certifications: [
//     {
//       name: "AWS Certified Developer - Associate",
//       issuer: "Amazon Web Services",
//       date: "2023",
//       credentialId: "AWS123456"
//     },
//     {
//       name: "Advanced React",
//       issuer: "Frontend Masters",
//       date: "2022"
//     }
//   ],

//   languages: [
//     { name: "English", proficiency: "Professional Working Proficiency" },
//     { name: "Tamil", proficiency: "Full Professional Proficiency" },
//     { name: "Telugu", proficiency: "Native or Bilingual Proficiency" }
//   ],

//   strengths: [
//     {
//       title: "Technical Leadership",
//       description: "Mentoring junior developers and establishing best practices"
//     },
//     {
//       title: "Performance Optimization",
//       description: "Identifying and resolving bottlenecks in web and mobile apps"
//     },
//     {
//       title: "Full Stack Mindset",
//       description: "Understanding both frontend and backend requirements holistically"
//     },
//     {
//       title: "Problem Solving",
//       description: "Breaking down complex problems into manageable solutions"
//     }
//   ],

//   metrics: [
//     { value: "3+", label: "Years Experience" },
//     { value: "15+", label: "Projects Completed" },
//     { value: "99%", label: "Client Satisfaction" },
//     { value: "40%", label: "Performance Improved" }
//   ]
// };