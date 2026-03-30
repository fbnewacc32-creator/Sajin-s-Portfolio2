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
  Palette,
  Laptop,
  Users2,
  Video,
  Crown,
  Brain
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
interface PortfolioData {
  name: string;
  title: string;
  summary: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: {
    name: string;
    category: string;
    icon: any;
    description: string;
    proficiency: string;
    percentage: number;
    image: string;
  }[];
  languages: string[];
  achievements: any[];
  gallery: string[];
}

const DATA: PortfolioData = {
  name: "Prottoy Shaha",
  title: "Online Science Educator | Science Club Organizer | Aspiring Computer Applications Student",
  summary: "A dedicated Online Science Educator and Science Club Organizer with a passion for digital content creation and leadership. Currently an aspiring Computer Applications student, I focus on improving accessibility for students from diverse backgrounds through innovative teaching materials and hands-on learning.",
  contact: {
    phone: "+880-01912428298",
    email: "ppspartho12@gmail.com",
    address: "Narandrapur, Sadar, Jashore, Bangladesh",
  },
  education: [
    {
      period: "2023-2025",
      institution: "Govt. City College, Jashore",
      degree: "Higher Secondary Certificate (HSC)",
      details: "Stream: Science | GPA: 4.17. Participated in science competitions and cultural events."
    },
    {
      period: "2021-2023",
      institution: "Shakharigati M.L. High School",
      degree: "Secondary School Certificate (SSC)",
      details: "Stream: Science | GPA: 5.00 (Golden). Achieved Academic Excellence award and recognized as Top of Batch."
    }
  ],
  experience: [
    {
      period: "2024-Present",
      role: "Online Science Educator",
      organization: "One Time School - OTS",
      description: "Taught SSC science students online, reaching 50+ students weekly. Developed teaching materials using Canva & mobile tools. Focused on improving accessibility for students from diverse backgrounds.",
      link: "https://youtube.com/@onetimeschool-ots-31?si=lRvO3l65Riq2wPGC"
    },
    {
      period: "2019-Present",
      role: "Science Club Organizer",
      organization: "J.C.B Science Club - Bangladesh",
      description: "Organized 2 national-level Science Fairs. Managed participants, judges, and event coordination. Organized 3–4 space & science research camps for rural children, focusing on hands-on learning and STEM awareness.",
      link: "https://www.facebook.com/share/1EGEZP7yj6/"
    },
    {
      period: "2022-Present",
      role: "Graphic Designer (Volunteer)",
      organization: "Volunteer Projects",
      description: "Designed posters and educational content for club events & online presentations."
    }
  ],
  skills: [
    { 
      name: "Online Teaching", 
      category: "Teaching",
      icon: Monitor,
      description: "Experienced in delivering engaging science lessons to large groups of students using digital platforms.",
      proficiency: "Expert",
      percentage: 95,
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Student Counseling", 
      category: "Teaching",
      icon: Users,
      description: "Providing academic guidance and emotional support to students to help them achieve their full potential.",
      proficiency: "Advanced",
      percentage: 85,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Event Management", 
      category: "Leadership",
      icon: Calendar,
      description: "Organizing and coordinating large-scale science fairs, workshops, and educational events.",
      proficiency: "Expert",
      percentage: 95,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Basic Computer Skill", 
      category: "Tech",
      icon: Laptop,
      description: "Proficient in MS Office, internet browsing, and essential digital tools for education and administration.",
      proficiency: "Expert",
      percentage: 90,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Team Collaboration", 
      category: "Leadership",
      icon: Users2,
      description: "Working effectively in diverse teams to achieve shared organizational and educational goals.",
      proficiency: "Advanced",
      percentage: 85,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Professional Graphics Designing", 
      category: "Design",
      icon: Palette,
      description: "Creating professional-grade visual content, posters, and educational materials using Canva and other tools.",
      proficiency: "Advanced",
      percentage: 85,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Project Presentations", 
      category: "Communication",
      icon: Presentation,
      description: "Designing and delivering impactful presentations for science projects and educational workshops.",
      proficiency: "Expert",
      percentage: 95,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Digital Content Creation", 
      category: "Design",
      icon: Video,
      description: "Creating high-quality educational videos and digital media for online learning platforms.",
      proficiency: "Expert",
      percentage: 95,
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Leadership", 
      category: "Leadership",
      icon: Crown,
      description: "Leading teams and organizing large-scale educational initiatives with strategic vision.",
      proficiency: "Expert",
      percentage: 95,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Artificial Intelligence", 
      category: "Tech",
      icon: Brain,
      description: "Leveraging AI tools and technologies to enhance educational content and administrative efficiency.",
      proficiency: "Advanced",
      percentage: 80,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Motivational Speaker", 
      category: "Communication",
      icon: Mic,
      description: "Inspiring students and young minds through powerful speeches on science, leadership, and personal growth.",
      proficiency: "Expert",
      percentage: 90,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
    }
  ],
  languages: ["Bangla", "English"],
  achievements: [
    { title: "Best Organizer", detail: "Honored twice as 'Best Organizer of the Month' in 2025", icon: Star, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
    { title: "International Recognition", detail: "Acknowledged by a trusted American reviewer for SSC excellence (2023)", icon: Globe, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { title: "Academic Excellence", detail: "Top of Batch in SSC with Golden GPA 5.00", icon: Flag, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { title: "Event Participation", detail: "50+ awards for speeches and science event performance", icon: Award, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" }
  ],
  gallery: [
    "https://wsrv.nl/?url=https%3A%2F%2Fimage2url.com%2Fr2%2Fdefault%2Fimages%2F1774874149783-0c50d827-fee6-4c85-9123-a464279b9fd7.jpg&w=800",
    "https://wsrv.nl/?url=https%3A%2F%2Fimage2url.com%2Fr2%2Fdefault%2Fimages%2F1774874183402-4f6bd8de-62e6-4dc4-aaca-a3e42e169470.jpg&w=800",
    "https://wsrv.nl/?url=https%3A%2F%2Fimage2url.com%2Fr2%2Fdefault%2Fimages%2F1774874213364-38db7f96-1c70-4b2d-b421-95e6f0d6cfee.jpg&w=800",
    "https://wsrv.nl/?url=https%3A%2F%2Fimage2url.com%2Fr2%2Fdefault%2Fimages%2F1774874248539-493b20a7-0ad4-4dfe-811a-50927c12a551.jpg&w=800",
    "https://wsrv.nl/?url=https%3A%2F%2Fimage2url.com%2Fr2%2Fdefault%2Fimages%2F1774874278655-4fb624d2-2868-4e87-b18a-d70a512d807c.jpg&w=800"
  ]
};

// --- Components ---

const GallerySlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const images = [...DATA.gallery, ...DATA.gallery, ...DATA.gallery]; // Triple for smoother loop

  return (
    <div 
      className="w-full overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl py-6 border-t border-white/20 dark:border-white/5 shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.3)] relative z-10 select-none"
      onPointerDown={() => setIsPaused(true)}
      onPointerUp={() => setIsPaused(false)}
      onPointerLeave={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600">
            <Palette size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight uppercase">
            Moments & Milestones 🏅
          </h2>
        </div>
      </div>

      <div className="flex whitespace-nowrap">
        <div className={`marquee-container px-6 ${isPaused ? 'paused' : ''}`}>
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 w-56 h-36 rounded-xl overflow-hidden border-2 border-white/50 dark:border-slate-800/50 shadow-xl shadow-blue-900/5 group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img 
                src={src} 
                alt={`Gallery item ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/prottoy-slider-${idx}/600/400`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ 
        delay: idx * 0.05,
        layout: { type: "spring", stiffness: 300, damping: 30 }
      }}
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
          <div>
            <h3 className={`font-bold tracking-tight ${isExpanded ? 'text-2xl' : 'text-sm text-slate-700 dark:text-slate-300'}`}>
              {skill.name}
            </h3>
            {!isExpanded && (
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                {skill.category}
              </span>
            )}
          </div>
        </div>
        {!isExpanded && (
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {skill.proficiency}
            </span>
            <div className="w-12 h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                className="h-full bg-blue-600"
              />
            </div>
          </div>
        )}
        {isExpanded && (
          <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
            {skill.category} • {skill.proficiency}
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
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-blue-100 uppercase tracking-widest">Proficiency</span>
                  <span className="text-sm font-bold text-white">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-white"
                  />
                </div>
              </div>
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

const Nav = ({ onLinkClick }: { onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void }) => {
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
        <a 
          href="#home" 
          onClick={(e) => onLinkClick(e, '#home')}
          className="text-xl font-bold text-blue-600 tracking-tighter"
        >
          PROTTOY.
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => onLinkClick(e, link.href)}
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
                  onClick={(e) => {
                    onLinkClick(e, link.href);
                    setIsMenuOpen(false);
                  }}
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
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(DATA.skills.map(s => s.category))];

  const filteredSkills = activeCategory === "All" 
    ? DATA.skills 
    : DATA.skills.filter(skill => skill.category === activeCategory);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-x-hidden relative">
      {/* Enhanced Atmospheric Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[5%] w-[40%] h-[40%] bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[30%] left-[5%] w-[35%] h-[35%] bg-emerald-400/15 dark:bg-emerald-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-rose-400/5 dark:bg-rose-600/5 rounded-full blur-[180px]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] contrast-150 brightness-100" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <Nav onLinkClick={scrollToSection} />
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32 relative z-10">
        
        {/* Hero Section */}
        <header id="home" className="relative pt-12 pb-20 overflow-hidden scroll-mt-32">
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
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
                <a 
                  href="https://drive.google.com/uc?export=download&id=160rEJpsY05ZXAO2j7DZ3JCJfWN1hgACi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2"
                >
                  <Download size={18} />
                  Download CV
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
                >
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
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <span className="absolute text-sm text-slate-400 font-medium">Loading...</span>
                <img 
                  src="https://i0.wp.com/image2url.com/r2/default/images/1774859991789-aeba964c-0342-4050-a253-358bb0b37347.jpg" 
                  alt={DATA.name} 
                  className="w-full h-full object-cover object-top relative z-10"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12">
                <Award size={40} />
              </div>
            </motion.div>
          </div>
        </header>

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
                  <span>Best Organizer 2025 - J.C.B Science Club</span>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase size={20} className="mt-1 shrink-0" />
                  <span>Online Science Educator at OTS</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={20} className="mt-1 shrink-0" />
                  <span>Golden GPA 5.00 in SSC</span>
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <SectionTitle icon={Code}>Skills & Expertise</SectionTitle>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-600/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, idx) => (
                <SkillCard key={skill.name} skill={skill} idx={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
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
              
              <div className="grid md:grid-cols-2 gap-8">
                <a href={`mailto:${DATA.contact.email}`} className="flex items-center gap-4 group bg-white/5 p-6 rounded-3xl hover:bg-blue-600 transition-all duration-300">
                  <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 group-hover:text-blue-100 font-bold uppercase tracking-widest">Email Me</p>
                    <p className="text-lg font-medium break-all">{DATA.contact.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${DATA.contact.phone.replace(/-/g, '')}`} className="flex items-center gap-4 group bg-white/5 p-6 rounded-3xl hover:bg-indigo-600 transition-all duration-300">
                  <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 group-hover:text-indigo-100 font-bold uppercase tracking-widest">Call Me</p>
                    <p className="text-lg font-medium">{DATA.contact.phone}</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5"><Linkedin size={24} /></a>
                <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5"><Twitter size={24} /></a>
                <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5"><Github size={24} /></a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <GallerySlider />

      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved. 🏅
        </p>
      </footer>
    </div>
  );
}
