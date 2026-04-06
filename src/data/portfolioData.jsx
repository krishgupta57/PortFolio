import React from 'react';
import { Layout, Server, Database, Layers, Globe, Code2, Command, ShieldCheck, Box, GraduationCap, BookOpen, Award } from 'lucide-react';

export const skills = [
  { 
    name: 'React.js', 
    label: 'Frontend Library', 
    details: 'Next.js, Redux, Context API, Hooks', 
    percentage: 90, 
    color: '#3b82f6', 
    icon: <Layout className="w-6 h-6" /> 
  },
  { 
    name: 'JavaScript', 
    label: 'Core Language', 
    details: 'ES6+, TypeScript (Basic), DOM, Promises', 
    percentage: 90, 
    color: '#eab308', 
    icon: <Code2 className="w-6 h-6" /> 
  },
  { 
    name: 'Tailwind CSS', 
    label: 'Styling Framework', 
    details: 'SASS, Animations, Responsive Design', 
    percentage: 95, 
    color: '#06b6d4', 
    icon: <Command className="w-6 h-6" /> 
  },
  { 
    name: 'Django', 
    label: 'Backend Framework', 
    details: 'DRF, ORM, Middleware, Security', 
    percentage: 75, 
    color: '#10b981', 
    icon: <Server className="w-6 h-6" /> 
  },
  { 
    name: 'Python', 
    label: 'Programming', 
    details: 'OOP, Scripting, Automation', 
    percentage: 80, 
    color: '#6366f1', 
    icon: <Code2 className="w-6 h-6" /> 
  },
  { 
    name: 'REST APIs', 
    label: 'Integration Layer', 
    details: 'Postman, JWT Auth, API Design', 
    percentage: 80, 
    color: '#f97316', 
    icon: <Globe className="w-6 h-6" /> 
  },
  { 
    name: 'MySQL', 
    label: 'Relational Database', 
    details: 'Query Optimization, Data Modeling', 
    percentage: 80, 
    color: '#0ea5e9', 
    icon: <Database className="w-6 h-6" /> 
  },
  { 
    name: 'Git & GitHub', 
    label: 'Version Control', 
    details: 'Branching, Pull Requests, Workflows', 
    percentage: 90, 
    color: '#ef4444', 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
  { 
    name: 'System Design', 
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
    description: "Gained foundational knowledge in Science and Mathematics, consistently maintaining high academic performance and participating in various technical workshops.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "#a855f7"
  }
];

export const projects = [
  {
    title: 'Work At Home – Job Portal',
    category: 'Full Stack',
    tags: ['React.js', 'Django', 'MySQL', 'REST API'],
    description: 'Developed a full-stack job portal with role-based authentication. Integrated REST APIs, optimized database queries improving response times, and built responsive UI components.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#'
  },
  {
    title: 'Credit Management System',
    category: 'FinTech',
    tags: ['React.js', 'Django', 'MySQL'],
    description: 'Built a financial tracking system for managing credit/debit transactions with real-time updates. Implemented scalable backend APIs and integrated a dynamic dashboard for data visualization.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#'
  },
  {
    title: 'Quiz Application System',
    category: 'EdTech',
    tags: ['Templates', 'Django', 'SQLite'],
    description: 'Developed a quiz platform with strict admin controls, automated scoring, and real-time result calculations via an efficiently designed API-driven architecture.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#'
  }
];
