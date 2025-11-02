import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, TrendingUp, Users, Award, X, ChevronRight } from 'lucide-react';
import { TechCanvas } from './TechCanvas';
import { GlassCard } from './GlassCard';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const clientStories = [
    {
      title: 'NeoFin AI',
      subtitle: 'Hybrid AI-Cloud Fraud Detection',
      metrics: '50% fraud reduction, +35% ROI',
      testimonial: '"Xavira Group transformed our security infrastructure with cutting-edge AI solutions that exceeded all expectations."',
      details: 'Implemented advanced machine learning algorithms with cloud integration for real-time fraud detection and prevention.',
    },
    {
      title: 'EcoStyle E-Com',
      subtitle: 'ML + Web3 Hybrid Platform',
      metrics: '30% engagement increase, 1K+ active users',
      testimonial: '"The innovative Web3 integration gave us a competitive edge in the sustainable fashion market."',
      details: 'Built a revolutionary e-commerce platform combining machine learning recommendations with blockchain technology.',
    },
    {
      title: 'SecureVault Tech',
      subtitle: 'AR + AI Surveillance System',
      metrics: '40% faster incident response',
      testimonial: '"The AR surveillance system revolutionized our security operations with unprecedented accuracy and speed."',
      details: 'Developed an augmented reality surveillance system powered by AI for enhanced security monitoring.',
    },
  ];

  const features = [
    {
      title: 'Full-Stack Development',
      description: 'AI Systems, Web 3.0, Backend Scalability',
      details: 'End-to-end development solutions leveraging cutting-edge technologies including AI/ML, blockchain, and cloud infrastructure.',
    },
    {
      title: 'Design Department',
      description: 'Holographic Branding, AR Interfaces',
      details: 'Revolutionary design solutions that blend creativity with technology, creating immersive user experiences.',
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced Threat Detection & Prevention',
      details: 'Enterprise-grade security solutions with AI-powered threat detection and real-time monitoring systems.',
    },
    {
      title: 'Innovation Labs',
      description: 'R&D, Emerging Tech, Future Solutions',
      details: 'Exploring tomorrow\'s technologies today, from quantum computing to neural interfaces.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <TechCanvas />
        
        {/* Glassy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center max-w-4xl"
        >
          {/* Brand Text with Pulsing Glow */}
          <motion.div
            className="mb-8"
            animate={{
              textShadow: [
                '0 0 20px rgba(126, 34, 206, 0.8), 0 0 40px rgba(30, 58, 138, 0.6)',
                '0 0 40px rgba(126, 34, 206, 1), 0 0 80px rgba(30, 58, 138, 0.8)',
                '0 0 20px rgba(126, 34, 206, 0.8), 0 0 40px rgba(30, 58, 138, 0.6)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center justify-center gap-4 mb-2">
              <h1 className="text-6xl md:text-8xl tracking-[0.3em] bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                XAVIRA
              </h1>
              <span className="text-3xl md:text-5xl text-white/90 tracking-wider">TECH LABS</span>
            </div>
            <p className="text-sm text-violet-400/70 tracking-[0.2em] mt-2">A DIVISION OF XAVIRA GROUP</p>
          </motion.div>

          <h2 className="mb-6 text-white text-2xl md:text-3xl">
            Redefining Tech & Design Excellence
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            From AI-driven solutions to visionary design, we scale the impossible.
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={() => setShowIntro(true)}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(126, 34, 206, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-white flex items-center gap-2">
              Enter the Future <Sparkles className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </section>

      {/* Intro Panel */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          >
            <div
              className="relative max-w-3xl w-full backdrop-blur-2xl bg-gradient-to-br from-violet-900/40 to-purple-900/40 rounded-3xl border border-violet-500/50 p-12"
              style={{
                boxShadow: '0 0 60px rgba(126, 34, 206, 0.5), inset 0 0 40px rgba(30, 58, 138, 0.2)',
              }}
            >
              <button
                onClick={() => setShowIntro(false)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 transition-colors"
              >
                <X className="w-6 h-6 text-violet-400" />
              </button>

              <h2 className="mb-6 text-violet-300">Welcome to the Future</h2>
              <p className="text-gray-300 mb-4">
                Xavira Group: Tech Labs is a visionary technology and design powerhouse founded by Vishnu Vardhan Burri. We specialize in:
              </p>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
                  <span>AI-driven solutions and machine learning systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
                  <span>Web 3.0 and blockchain technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
                  <span>Holographic branding and AR interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
                  <span>Enterprise cybersecurity solutions</span>
                </li>
              </ul>
              <p className="text-violet-300">
                Join us in redefining what's possible in tech and design.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Client Success Stories */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Client Success Stories</h2>
            <p className="text-gray-400">Transforming businesses with innovative solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientStories.map((story, index) => (
              <GlassCard key={index} delay={index * 0.2}>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-violet-400" />
                    <div>
                      <h3 className="text-white">{story.title}</h3>
                      <p className="text-sm text-violet-400">{story.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-4 rounded-lg bg-blue-900/20 border border-blue-500/30">
                    <p className="text-blue-300">{story.metrics}</p>
                  </div>

                  <p className="text-gray-400 text-sm italic mb-4">{story.testimonial}</p>

                  <AnimatePresence>
                    {expandedStory === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4"
                      >
                        <p className="text-gray-300 text-sm">{story.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setExpandedStory(expandedStory === index ? null : index)}
                    className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2"
                  >
                    {expandedStory === index ? 'Show Less' : 'Learn More'}
                    <ChevronRight className={`w-4 h-4 transition-transform ${expandedStory === index ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Orbit */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Our Expertise</h2>
            <p className="text-gray-400">Comprehensive solutions for the modern digital landscape</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={index} delay={index * 0.15}>
                <div className="p-6 h-full flex flex-col">
                  <h3 className="mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{feature.description}</p>

                  <AnimatePresence>
                    {expandedFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4"
                      >
                        <p className="text-gray-300 text-sm">{feature.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                    className="mt-auto text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2"
                  >
                    Dive In <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
