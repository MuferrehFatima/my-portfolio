import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Home, User, Briefcase, Award, Phone } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Create static stars
    const createStaticStars = () => {
      const container = document.getElementById('static-stars-container');
      if (!container) return;
      
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'static-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        const size = Math.random() * 2.5 + 1.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        container.appendChild(star);
      }
    };
    
    createStaticStars();

    // Create falling stars
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'falling-star';
      
      // Start from well above the screen
      const startX = Math.random() * 120 - 10;
      star.style.left = startX + '%';
      
      // Random duration for varied speeds
      star.style.animationDuration = (Math.random() * 1.5 + 2.5) + 's';
      
      // Random size for falling stars (1.5px to 4px)
      const size = Math.random() * 2.5 + 1.5;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      
      document.getElementById('stars-container')?.appendChild(star);
      
      setTimeout(() => star.remove(), 6000);
    };

    const interval = setInterval(createStar, 300);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack online shopping platform with payment integration, user authentication, and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative productivity tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with data visualization, location-based forecasts, and historical weather data.',
      tags: ['React', 'Chart.js', 'Weather API'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop'
    }
  ];

  const skills = [
    { name: 'Frontend Development', icon: Code, items: ['React', 'Vue.js', 'Bootstrap', 'Tailwind CSS'] },
    { name: 'Backend Development', icon: Zap, items: ['Node.js', 'Spring Boot', 'Django', 'MongoDB'] },
    { name: 'Design & Tools', icon: Palette, items: ['Figma', 'Git', 'Docker', 'AWS'] }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Static Twinkling Stars Background */}
      <div id="static-stars-container" className="fixed inset-0 pointer-events-none z-0"></div>
      
      {/* Falling Stars Container */}
      <div id="stars-container" className="fixed inset-0 pointer-events-none z-0"></div>
      
      <style>{`
        .static-star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .falling-star {
          position: absolute;
          top: -300px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 15px 6px rgba(255, 255, 255, 0.9);
          animation: fall linear forwards;
          transform: rotate(-30deg);
        }
        
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0) rotate(-30deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 300px)) translateX(calc((100vh + 300px) * 0.5)) rotate(-30deg);
            opacity: 0;
          }
        }
        
        .falling-star::before {
          content: '';
          position: absolute;
          width: 2px;
          height: 180px;
          background: linear-gradient(to top, 
            rgba(255, 255, 255, 1), 
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform-origin: bottom center;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }
      `}</style>
      {/* Left Sidebar Navigation - Hidden on mobile */}
      <nav className="hidden md:fixed md:flex left-0 top-0 h-full w-24 bg-gray-900/80 backdrop-blur-md z-50 border-r border-emerald-500/20 flex-col items-center py-8">
        <div className="mb-12">
          <div className="w-14 h-14 rounded-full shadow-lg shadow-emerald-500/50 overflow-hidden border-2 border-emerald-500/50 hover:border-emerald-400 transition-all duration-300 hover:scale-110 animate-pulse">
            <img 
              src="/haha.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          {[
            { id: 'home', icon: Home },
            { id: 'about', icon: User },
            { id: 'projects', icon: Briefcase },
            { id: 'skills', icon: Award },
            { id: 'contact', icon: Phone }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group flex flex-col items-center transition-all duration-300 ${
                  activeSection === item.id ? 'scale-110' : 'hover:scale-110'
                }`}
              >
                {/* Icon */}
                <Icon
                  size={28}
                  className={`transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-emerald-400 scale-125'
                      : 'text-gray-400 group-hover:text-emerald-400 group-hover:scale-125'
                  }`}
                />
                
                {/* Active Indicator */}
                {activeSection === item.id && (
                  <div className="absolute -right-5 w-1 h-8 bg-gradient-to-b from-emerald-400 to-green-500 rounded-full animate-pulse" />
                )}
                
                {/* Tooltip */}
                <div className="absolute left-full ml-6 px-3 py-1 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-emerald-500/20">
                  <span className="capitalize text-sm">{item.id}</span>
                  <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45 border-l border-b border-emerald-500/20" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-4 mt-8">
          <a
            href="https://github.com/MuferrehFatima"
            className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 transform"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 transform"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/Muferreh-Fatima/"
            className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 transform"
            title="LeetCode"
          >
            <Code size={20} />
          </a>
          <a
            href="mailto:mufrrehfatima@gmail.com"
            className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 transform"
            title="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </nav>

      <button
        className="fixed top-4 right-4 z-50 md:hidden p-3 bg-gray-900/80 backdrop-blur-md rounded-full border border-emerald-500/20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-3xl capitalize font-bold transition-all duration-500 transform ${
                  activeSection === section
                    ? 'text-emerald-400 scale-125'
                    : 'text-gray-300 hover:text-emerald-400 hover:scale-110'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content - Add left padding for sidebar on desktop */}
      <div className="md:ml-24">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Hi, I'm Muferreh Fatima
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Full Stack Developer & Creative Problem Solver
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-emerald-400 rounded-full font-semibold hover:bg-emerald-400/10 transition-all"
              >
                Get In Contact
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className={`max-w-4xl transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate full-stack developer with 5+ years of experience building modern web applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical writing and mentoring.
              </p>
              <p className="text-lg text-gray-300">
                I believe in writing clean, maintainable code and creating exceptional user experiences that make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className={`max-w-6xl w-full transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400 hover:bg-emerald-500/5 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30"
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                      View Project <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className={`max-w-5xl w-full transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all">
                    <Icon className="w-12 h-12 mb-4 text-emerald-400" />
                    <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className={`max-w-2xl w-full transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Get In Contact</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
              <p className="text-lg text-gray-300 mb-8 text-center">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex justify-center gap-6 mb-8">
                <a href="https://github.com/MuferrehFatima" className="p-4 bg-gray-700/50 rounded-full hover:bg-emerald-500/20 transition-all transform hover:scale-110" title="GitHub">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="p-4 bg-gray-700/50 rounded-full hover:bg-emerald-500/20 transition-all transform hover:scale-110" title="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="https://leetcode.com/u/Muferreh-Fatima/" className="p-4 bg-gray-700/50 rounded-full hover:bg-emerald-500/20 transition-all transform hover:scale-110" title="LeetCode">
                  <Code size={24} />
                </a>
                <a href="mailto:mufrrehfatima@gmail.com" className="p-4 bg-gray-700/50 rounded-full hover:bg-emerald-500/20 transition-all transform hover:scale-110" title="Email">
                  <Mail size={24} />
                </a>
              </div>
              <div className="text-center">
                <a
                  href="mailto:mufrrehfatima@gmail.com"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-105"
                >
                  Send Me an Email
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900/50 border-t border-emerald-500/20 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2026 Muferreh Fatima.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}