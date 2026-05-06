import { 
  Layout, Server, Database, Layers, Globe, Code2, Command, 
  ShieldCheck, Box, GraduationCap, BookOpen, Award, 
  Palette, Braces, Atom, Terminal, Cpu, GitBranch, Send, Brackets
} from 'lucide-react';

export const skills = [
  { 
    name: 'HTML', 
    category: 'Frontend',
    label: 'Structure', 
    details: 'HTML5, Semantic Tags, SEO Basics', 
    percentage: 95, 
    color: '#ff4b2b', 
    icon: <Code2 className="w-6 h-6" /> 
  },
  { 
    name: 'CSS', 
    category: 'Frontend',
    label: 'Styling', 
    details: 'Flexbox, Grid, Animations', 
    percentage: 90, 
    color: '#2965f1', 
    icon: <Palette className="w-6 h-6" /> 
  },
  { 
    name: 'JavaScript', 
    category: 'Frontend',
    label: 'Core Logic', 
    details: 'ES6+, DOM, Async/Await, Promises', 
    percentage: 90, 
    color: '#eab308', 
    icon: <Braces className="w-6 h-6" /> 
  },
  { 
    name: 'React.js', 
    category: 'Frontend',
    label: 'UI Framework', 
    details: 'Hooks, Context API, Next.js, Redux', 
    percentage: 90, 
    color: '#3b82f6', 
    icon: <Atom className="w-6 h-6" /> 
  },
  { 
    name: 'Tailwind CSS', 
    category: 'Frontend',
    label: 'Styling Framework', 
    details: 'Responsive Design, Utility-first CSS', 
    percentage: 95, 
    color: '#06b6d4', 
    icon: <Command className="w-6 h-6" /> 
  },
  { 
    name: 'Python', 
    category: 'Backend',
    label: 'Programming', 
    details: 'OOP, Scripting, Automation', 
    percentage: 80, 
    color: '#6366f1', 
    icon: <Terminal className="w-6 h-6" /> 
  },
  { 
    name: 'C++', 
    category: 'Backend',
    label: 'System Prog', 
    details: 'DSA, Memory Management, OOP', 
    percentage: 70, 
    color: '#00599c', 
    icon: <Cpu className="w-6 h-6" /> 
  },
  { 
    name: 'Django', 
    category: 'Backend',
    label: 'Web Framework', 
    details: 'DRF, ORM, Middleware, Security', 
    percentage: 75, 
    color: '#10b981', 
    icon: <Globe className="w-6 h-6" /> 
  },
  { 
    name: 'REST APIs', 
    category: 'Backend',
    label: 'Integration', 
    details: 'Postman, JWT Auth, API Design', 
    percentage: 70, 
    color: '#f97316', 
    icon: <Layers className="w-6 h-6" /> 
  },
  { 
    name: 'MySQL', 
    category: 'Database',
    label: 'Relational DB', 
    details: 'Query Optimization, Data Modeling', 
    percentage: 80, 
    color: '#0ea5e9', 
    icon: <Database className="w-6 h-6" /> 
  },
  { 
    name: 'PostgreSQL', 
    category: 'Database',
    label: 'Modern DB', 
    details: 'JSONB, Advanced Queries', 
    percentage: 50, 
    color: '#336791', 
    icon: <Database className="w-6 h-6" /> 
  },
  { 
    name: 'Git & GitHub', 
    category: 'Tools',
    label: 'Version Control', 
    details: 'Branching, PRs, GitFlow', 
    percentage: 90, 
    color: '#ef4444', 
    icon: <GitBranch className="w-6 h-6" /> 
  },
  { 
    name: 'Postman', 
    category: 'Tools',
    label: 'API Testing', 
    details: 'Testing, Documentation, JWT', 
    percentage: 85, 
    color: '#f97316',
    icon: <Send className="w-6 h-6" /> 
  },
  { 
    name: 'System Design', 
    category: 'Tools',
    label: 'Architecture', 
    details: 'Scalability, Clean Code, OOP', 
    percentage: 80, 
    color: '#a855f7', 
    icon: <Box className="w-6 h-6" /> 
  }
];

export const education = [
  {
    id: 0,
    title: "Full Stack Developer Intern",
    institution: "Cybrom Technology Pvt. Ltd.",
    year: "March 2026 – Present",
    grade: "Internship",
    type: "INTERNSHIP",
    description: "Intensive hands-on experience in building enterprise-grade web applications. Mastering advanced React patterns, Django REST framework optimizations, and industry-standard deployment workflows.",
    icon: <Code2 className="w-6 h-6" />,
    color: "#10b981"
  },
  {
    id: 1,
    title: "B.Tech Computer Science",
    institution: "Lakshmi Narain College of Technology",
    year: "2021 – 2025",
    grade: "CGPA: 7.01",
    type: "UNDERGRADUATE",
    description: "Deep-diving into Full-Stack Development, Data Structures, and RDBMS. Built multiple engineering projects using React and Django with a focus on scalable architecture.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "#3b82f6"
  },
  {
    id: 2,
    title: "Senior Secondary (12th)",
    institution: "Delhi Public School, Satna",
    year: "2021",
    grade: "65%",
    type: "SCHOOLING",
    description: "Specialized in Physics, Chemistry, and Mathematics (PCM). Developed a strong foundation in analytical thinking and complex problem-solving strategies.",
    icon: <Award className="w-6 h-6" />,
    color: "#6366f1"
  },
  {
    id: 3,
    title: "High School (10th)",
    institution: "Delhi Public School, Satna",
    year: "2019",
    grade: "65%",
    type: "SCHOOLING",
    description: "Gained foundational knowledge in Science and Mathematics, consistently maintaining high academic performance and participating in various technical workshops.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "#a855f7"
  }
];

export const projects = [
  {
    title: 'AirBNB Clone – Rental Hub',
    category: 'Full Stack',
    tags: ['React.js', 'Tailwind CSS', 'Django', 'MySQL'],
    specs: ['UX: High Fidelity', 'Search: Geo-Query', 'Sync: Real-time'],
    status: 'SYSTEM_SYNCED',
    description: 'A high-fidelity rental platform with advanced search filters, map integration, and a sophisticated reservation management system. Built with modular architecture for high scalability.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#',
    github: 'https://github.com/krishgupta57/AirBNB_Clone.git',
    featured: false,
    accent: '#f43f5e'
  },
  {
    title: 'Credit Management System',
    category: 'FinTech',
    tags: ['React.js', 'Django', 'MySQL'],
    specs: ['Integrity: Verified', 'latency: 14ms', 'Audit: pass'],
    status: 'DATA_SECURE',
    description: 'Built a financial tracking system for managing credit/debit transactions with real-time updates. Implemented scalable backend APIs.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#',
    github: '#',
    featured: false,
    accent: '#10b981'
  },
  {
    title: 'Work At Home – Job Portal',
    category: 'Full Stack',
    tags: ['React.js', 'Django', 'MySQL', 'REST API'],
    specs: ['Performance: 98%', 'Security: AES-256', 'Uptime: 99.9%'],
    status: 'SYSTEM_STABLE',
    description: 'Developed a full-stack job portal with role-based authentication. Integrated REST APIs, optimized database queries improving response times, and built responsive UI components.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#',
    github: 'https://github.com/krishgupta57/WorkAtHome.git',
    featured: true,
    accent: '#3b82f6'
  },
  {
    title: 'Quiz Application System',
    category: 'EdTech',
    tags: ['Templates', 'Django', 'SQLite'],
    specs: ['Logic: 100%', 'Engine: Stable', 'Concurrency: High'],
    status: 'OPERATIONAL',
    description: 'Developed a quiz platform with strict admin controls, automated scoring, and real-time result calculations via an efficiently designed architecture.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: 'https://quiz-app-bykg-54.vercel.app',
    github: 'https://github.com/krishgupta57/Quiz-App.git',
    featured: false,
    accent: '#a855f7'
  }
];

export const certificates = [
  {
    title: 'AWS Cloud Foundation',
    issuer: 'Amazon Web Services',
    date: '202f',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    link: '/AWS cloud formation.pdf',
    tags: ['AWS', 'Cloud']
  },
  {
    title: 'Full Stack Development',
    issuer: 'Cybrom Technology',
    date: '2026',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    link: '/Krish Gupta - Course Completion Certificate .pdf',
    tags: ['React', 'Django', 'MySQL']
  },
  {
    title: 'Python Backend Specialist',
    issuer: 'OpenEGD & CISCO',
    date: '2025',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    link: '/Programming Essentials in Python.pdf',
    tags: ['Python', 'Django', 'REST API']
  },
  {
    title: 'Cisco Virtual Internship Program 2024',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    link: '/CISCO Virtual Internship Program 2024.pdf',
    tags: ['Networking', 'Security', 'Protocols']
  },
  {
    title: 'Cisco Virtual Internship Program 2023',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    link: '/CISCO Virtual Internship Program 2023.pdf',
    tags: ['Networking', 'Security', 'Protocols']
  }
];
