import React from 'react';
import { Layout, Server, Database, Layers } from 'lucide-react';

export const skills = [
  { name: 'Frontend', icon: <Layout className="w-6 h-6" />, items: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3'] },
  { name: 'Backend', icon: <Server className="w-6 h-6" />, items: ['Python', 'Django', 'REST APIs', 'Authentication'] },
  { name: 'Database', icon: <Database className="w-6 h-6" />, items: ['MySQL', 'SQLite', 'Query Optimization', 'Data Modeling'] },
  { name: 'Tools & Core', icon: <Layers className="w-6 h-6" />, items: ['Git & GitHub', 'Docker (Basic)', 'Data Structures', 'OOP'] }
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
