/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Code, 
  Globe, 
  Award,
  Star,
  Flag,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Download,
  HeartHandshake,
  ShieldCheck,
  Calendar,
  Monitor,
  Clock,
  Share2,
  BarChart3,
  Users,
  Mic2,
  Presentation,
  FlaskConical,
  Mic,
  UserPlus,
  DollarSign,
  FileText,
  Palette
} from 'lucide-react';

// --- Types ---
interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  details: string;
}

interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  link?: string;
}

// --- Data ---
const DATA = {
  name: "Sajin Ahmmed Joy",
  title: "Student | Entrepreneur | Organizer",
  summary: "A motivated student with a strong passion for continuous learning and student engagement, aspiring to contribute positively to society through organizational activities.",
  contact: {
    phone: "01925-909461",
    email: "sajinahmmedjoy@gmail.com",
    address: "Airport Road, Jashore - 7400",
  },
  education: [
    {
      period: "2025-Present",
      institution: "Daffodil International University",
      degree: "Bachelor in Innovation & Entrepreneurship",
      details: "Faculty of Business & Entrepreneurship"
    },
    {
      period: "2023-2024",
      institution: "Cantonment College Jashore",
      degree: "Higher Secondary Certificate (HSC)",
      details: "GPA - 4.08 (Batch 2025)"
    },
    {
      period: "2021-2022",
      institution: "Rupdia Welfare Academy - Jashore",
      degree: "Secondary School Certificate (SSC)",
      details: "GPA - 5.00 (Batch 2023)"
    }
  ],
  experience: [
    {
      period: "2020-2026",
      role: "President",
      organization: "J.C.B Science Club",
      description: "Affiliated with the Ministry of Science and Technology. Leading scientific initiatives and organizational growth.",
      link: "https://www.facebook.com/share/1EGEZP7yj6/"
    },
    {
      period: "2024-2025",
      role: "Stakeholder Member",
      organization: "NMST",
      description: "Ministry of Science and Technology. Contributing to national science and technology frameworks."
    }
  ],
  skills: [
    { 
      name: "Student Counseling", 
      icon: HeartHandshake,
      description: "Providing guidance and support to students to help them navigate academic and personal challenges.",
      proficiency: "Expert",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Leadership", 
      icon: ShieldCheck,
      description: "Leading teams and organizations with a focus on vision, motivation, and strategic growth.",
      proficiency: "Advanced",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Event Management", 
      icon: Calendar,
      description: "Planning and executing diverse events, from science fairs to divisional competitions.",
      proficiency: "Expert",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Basic Computer Skills", 
      icon: Monitor,
      description: "Proficient in office suites, internet research, and basic technical troubleshooting.",
      proficiency: "Intermediate",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Time Management", 
      icon: Clock,
      description: "Optimizing schedules and prioritizing tasks to ensure timely project delivery.",
      proficiency: "Advanced",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Networking", 
      icon: Share2,
      description: "Building and maintaining professional relationships across various sectors.",
      proficiency: "Advanced",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Market Research", 
      icon: BarChart3,
      description: "Analyzing trends and gathering data to inform business and project strategies.",
      proficiency: "Intermediate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Team Collaboration", 
      icon: Users,
      description: "Working effectively within diverse teams to achieve common goals.",
      proficiency: "Expert",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Debate & Public Speaking", 
      icon: Mic2,
      description: "Articulating ideas clearly and persuasively in front of large audiences.",
      proficiency: "Advanced",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Project Presentation", 
      icon: Presentation,
      description: "Creating and delivering professional presentations for complex projects.",
      proficiency: "Advanced",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Science Project Development", 
      icon: FlaskConical,
      description: "Designing and building innovative science projects and experiments.",
      proficiency: "Advanced",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Anchoring / Event Hosting", 
      icon: Mic,
      description: "Engaging audiences as a professional host for various events.",
      proficiency: "Advanced",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Human Resource Management", 
      icon: UserPlus,
      description: "Managing team dynamics, recruitment, and organizational culture.",
      proficiency: "Intermediate",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Sponsorship Management", 
      icon: DollarSign,
      description: "Securing and managing financial support for events and initiatives.",
      proficiency: "Intermediate",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Report Writing", 
      icon: FileText,
      description: "Drafting comprehensive reports and documentation for projects.",
      proficiency: "Advanced",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Professional Poster Design", 
      icon: Palette,
      description: "Designing visually appealing posters and marketing materials.",
      proficiency: "Intermediate",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
    }
  ],
  languages: ["English", "Bangla"],
  achievements: [
    { title: "Best Student 2024", detail: "Khulna Division", icon: Star, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
    { title: "International Awards", detail: "2 Awards at International Level", icon: Globe, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { title: "National Awards", detail: "8 Awards at National Level", icon: Flag, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { title: "Divisional & Other Awards", detail: "30+ Awards at various levels", icon: Award, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" }
  ]
};

// --- Components ---

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
      {children}
    </h2>
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all ${className}`}
  >
    {children}
  </motion.div>
);

interface SkillCardProps {
  skill: any;
  idx: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, idx }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`cursor-pointer overflow-hidden border transition-all duration-300 ${
        isExpanded 
          ? 'w-full bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20 p-8 rounded-[2rem]' 
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-600/50 p-4 rounded-2xl'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg transition-colors ${isExpanded ? 'bg-white/20 text-white' : 'bg-blue-600/10 text-blue-600'}`}>
            <skill.icon size={isExpanded ? 24 : 18} />
          </div>
          <h3 className={`font-bold tracking-tight ${isExpanded ? 'text-2xl' : 'text-sm text-slate-700 dark:text-slate-300'}`}>
            {skill.name}
          </h3>
        </div>
        {isExpanded && (
          <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
            {skill.proficiency}
          </span>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-blue-50 text-lg leading-relaxed">
                {skill.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-blue-600 tracking-tighter">SAJIN.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-900 dark:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <Nav />

      {/* Hero Section */}
      <header id="home" className="relative pt-32 pb-20 px-6 overflow-hidden scroll-mt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">{DATA.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
              {DATA.title}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2">
                <Download size={18} />
                Download CV
              </a>
              <a href="#contact" className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-72 h-72 md:w-96 md:h-96 relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-6 opacity-10" />
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-[3rem] -rotate-3" />
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl">
              <img 
                src="https://image2url.com/r2/default/images/1774851628455-e8c7fd43-dad6-4c84-a211-aa740fd63b38.jpg" 
                alt={DATA.name} 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12">
              <Award size={40} />
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        
        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <SectionTitle icon={User}>About Me</SectionTitle>
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                {DATA.summary}
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href={`mailto:${DATA.contact.email}`} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-600/50 transition-all group">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</p>
                    <p className="font-medium">{DATA.contact.email}</p>
                  </div>
                </a>
                <a href={`tel:${DATA.contact.phone.replace(/-/g, '')}`} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-600/50 transition-all group">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Phone</p>
                    <p className="font-medium">{DATA.contact.phone}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Location</p>
                    <p className="font-medium">{DATA.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded-xl">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Languages</p>
                    <p className="font-medium">{DATA.languages.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-blue-600 dark:bg-blue-600 text-white border-none">
              <h3 className="text-xl font-bold mb-4">Quick Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award size={20} className="mt-1 shrink-0" />
                  <span>Best Student 2024 - Khulna Division</span>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase size={20} className="mt-1 shrink-0" />
                  <span>President of J.C.B Science Club</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={20} className="mt-1 shrink-0" />
                  <span>Studying Innovation & Entrepreneurship</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-32">
          <SectionTitle icon={GraduationCap}>Education</SectionTitle>
          <div className="space-y-8">
            {DATA.education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-1">{edu.degree}</p>
                <p className="text-slate-500 dark:text-slate-500">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-32">
          <SectionTitle icon={Briefcase}>Professional Experience</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {DATA.experience.map((exp, idx) => (
              <Card key={idx}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.organization}</p>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>
                {exp.link && (
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                  >
                    View Website
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <SectionTitle icon={Code}>Skills & Expertise</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {DATA.skills.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} idx={idx} />
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="scroll-mt-32">
          <SectionTitle icon={Trophy}>Achievements</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA.achievements.map((ach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                className="relative p-8 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-[2rem] text-center group overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${ach.bg}`} />
                
                <div className={`w-16 h-16 ${ach.bg} ${ach.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-sm`}>
                  <ach.icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {ach.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {ach.detail}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ach.icon size={80} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <div className="bg-slate-900 dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-48 -mt-48" />
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's connect and build something great.</h2>
              <p className="text-slate-400 text-lg mb-12">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <a href={`mailto:${DATA.contact.email}`} className="flex items-center gap-4 group">
                  <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-blue-600 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Email Me</p>
                    <p className="text-xl font-medium">{DATA.contact.email}</p>
                  </div>
                </a>
                <a href={`tel:${DATA.contact.phone.replace(/-/g, '')}`} className="flex items-center gap-4 group">
                  <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-indigo-600 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Call Me</p>
                    <p className="text-xl font-medium">{DATA.contact.phone}</p>
                  </div>
                </a>
              </div>

              <div className="mt-16 flex gap-4">
                <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors"><Twitter size={24} /></a>
                <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors"><Github size={24} /></a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
