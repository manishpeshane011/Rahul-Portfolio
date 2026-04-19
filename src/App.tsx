/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import myPhoto from "./assets/myphoto.jpg";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Star, 
  Send,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  Award,
  CheckCircle2,
  TrendingUp,
  Users,
  MessageSquare,
  Lightbulb
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          RAHUL <span className="text-primary">WAT</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
        >
          Hire Me
        </motion.a>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const StrengthCard = ({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-4"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
      <Icon size={24} />
    </div>
    <h3 className="font-semibold text-lg">{title}</h3>
  </motion.div>
);

const ExperienceItem = ({ role, company, period, description, points }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 last:pb-0 border-l border-white/10"
  >
    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
    <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">{period}</span>
    <h3 className="text-xl font-bold text-white">{role}</h3>
    <p className="text-gray-400 font-medium mb-3">{company}</p>
    <div className="space-y-2">
      {points.map((pt: string, i: number) => (
        <div key={i} className="flex items-start space-x-2 text-sm text-gray-400">
          <ChevronRight size={14} className="mt-1 text-primary shrink-0" />
          <span>{pt}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const BackgroundElements = () => (
  <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-accent/10 rounded-full blur-[100px]" />
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 lg:pt-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image shown on mobile and desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:order-last w-full max-w-[320px] lg:max-w-none mx-auto"
            >
              <div className="relative z-10 w-full aspect-[4/5] lg:aspect-square rounded-[3rem] lg:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl glass group">
                {/* Replace src with Rahul's actual image URL */}
                <img 
  src={myPhoto}
  alt="Rahul Bhagwan Wat" 
 className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-1">Rahul Wat</h2>
                  <p className="text-primary font-bold tracking-widest uppercase text-[10px] lg:text-xs">Consultant | Strategist</p>
                </div>
              </div>
              
              {/* Decorative Glows */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full" />
              <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-24 h-24 lg:w-32 lg:h-32 bg-secondary/20 blur-2xl -z-10 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] lg:text-xs font-bold tracking-widest uppercase text-primary mb-6">
                <Star size={12} className="fill-primary" />
                <span>Available for new opportunities</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Transforming <span className="text-gradient">Opportunities</span> into Business Success
              </h1>
              
              <p className="text-base lg:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I am <span className="text-white font-semibold">Rahul Bhagwan Wat</span>, a Senior Marketing & Business Development Professional with over 10 years of experience driving growth and building lasting relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold flex items-center justify-center space-x-2 shadow-xl shadow-primary/30"
                >
                  <span>Let's Work Together</span>
                  <Send size={18} />
                </motion.a>
                <motion.a
                  href="#experience"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-bold flex items-center justify-center"
                >
                  View My Experience
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-dark-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 p-1 lg:hidden">
                    <img 
                      src="https://picsum.photos/seed/professional-2/200/200"
                      alt="Rahul" 
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <SectionHeading>
                    Elevating Brands through <span className="text-gradient">Strategic Vision</span>
                  </SectionHeading>
                </div>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Results-driven professional with a decade of experience in marketing strategy, client engagement, and admissions counseling. Known for building strong relationships, understanding customer needs, and driving business growth through effective communication and planning.
                  </p>
                  <p>
                    I believe success comes from consistency, trust, and delivering real value to people. My approach combines data-driven strategy with a deep understanding of human behavior to create impactful business outcomes.
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Experience', value: '10+ Yrs' },
                    { label: 'Location', value: 'India' },
                    { label: 'Role', value: 'Senior' },
                    { label: 'Projects', value: '100+' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 glass rounded-2xl text-center">
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-primary font-bold uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <StrengthCard icon={TrendingUp} title="Strategic Marketing" delay={0.1} />
                <StrengthCard icon={Users} title="Client Relations" delay={0.2} />
                <StrengthCard icon={Lightbulb} title="Business Growth" delay={0.3} />
                <StrengthCard icon={MessageSquare} title="Communication" delay={0.4} />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="A versatile toolkit blending technical precision with modern marketing strategies.">
              Core <span className="text-gradient">Capabilities</span>
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Marketing Strategy', level: 95, color: 'bg-primary' },
                { name: 'Business Development', level: 90, color: 'bg-secondary' },
                { name: 'Communication', level: 98, color: 'bg-accent' },
                { name: 'AutoCAD 2D Drafting', level: 85, color: 'bg-indigo-400' },
                { name: 'Client Retention', level: 92, color: 'bg-primary' },
                { name: 'Strategic Planning', level: 88, color: 'bg-secondary' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-xs font-bold text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-dark-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeading subtitle="A history of excellence across marketing, counseling, and management.">
                  Professional <span className="text-gradient">Journey</span>
                </SectionHeading>
                
                <div className="mt-12 space-y-4">
                  <ExperienceItem 
                    role="Marketing Executive"
                    company="Gurushishya Multiskill Pvt. Ltd."
                    period="4 Years"
                    points={[
                      "Managed high-impact marketing campaigns increasing overall engagement.",
                      "Built and sustained long-term strategic client relationships.",
                      "Executed market research to identify new business avenues."
                    ]}
                  />
                  <ExperienceItem 
                    role="Counselor"
                    company="Admission Council Maharashtra"
                    period="5 Years"
                    points={[
                      "Guided thousands of students in critical career decisions.",
                      "Significantly improved admission conversion rates through personalized counseling.",
                      "Steadily managed admissions workflow and documentation."
                    ]}
                  />
                  <ExperienceItem 
                    role="Business Development Manager"
                    company="Catalyzer Coaching Institute"
                    period="1 Year"
                    points={[
                      "Expanded footprint into new market territories.",
                      "Identified and solidified strategic partnerships for institutional growth.",
                      "Developed sales strategies that exceeded quarterly targets."
                    ]}
                  />
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <SectionHeading>Education</SectionHeading>
                  <div className="space-y-6">
                    {[
                      { degree: 'Draughtsman Civil (2 Years)', school: 'Govt ITI Bhandara', icon: GraduationCap },
                      { degree: 'HSC (Arts)', school: 'State Board', icon: Award },
                      { degree: 'SSC', school: 'State Board', icon: Award },
                    ].map((edu, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center space-x-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                          <edu.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white leading-tight">{edu.degree}</h4>
                          <p className="text-sm text-gray-500">{edu.school}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="glass p-8 rounded-[2rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-10" />
                  <h3 className="text-2xl font-bold mb-6">Why Hire Me?</h3>
                  <div className="space-y-4">
                    {[
                      "10+ Years of proven leadership experience",
                      "Expert in building cross-functional relationships",
                      "Strong communication and high-stakes negotiation",
                      "Reliable, result-oriented, and vision-driven approach"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                        <span className="text-gray-300 text-sm">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeading subtitle="Looking to grow your business or need a professional who delivers results? Let's connect and create something impactful together.">
                  Let's <span className="text-gradient">Connect</span>
                </SectionHeading>
                
                <div className="space-y-8 mt-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                      <a href="mailto:rahulwat15@gmail.com" className="text-white hover:text-primary transition-colors">rahulwat15@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Me</p>
                      <a href="tel:9370623967" className="text-white hover:text-secondary transition-colors">9370623967</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Location</p>
                      <p className="text-white">Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex space-x-4">
                  {[Linkedin, Twitter, Github].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-all"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white resize-none" placeholder="Let's talk about your project..." />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/20"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 bg-dark-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tighter mb-2">RAHUL <span className="text-primary">WAT</span></h3>
            <p className="text-sm text-gray-500">© 2026. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={20} className="-rotate-90" />
          </button>
        </div>
      </footer>
    </div>
  );
}
