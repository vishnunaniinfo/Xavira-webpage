import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, Palette, Database, Globe, Shield, Cpu, 
  Megaphone, PenTool, Camera, Server, Lock, 
  TrendingUp, Rocket, ChevronDown, Check 
} from 'lucide-react';
import { GlassCard } from './GlassCard';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

export function Services({ setCurrentPage }: ServicesProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'web-app',
      icon: <Code className="w-8 h-8" />,
      title: 'Web & App Development',
      description: 'Custom web applications, mobile apps, and responsive websites',
      features: [
        'Full-stack web development (React, Node.js, Python)',
        'Native & cross-platform mobile apps (iOS, Android)',
        'Progressive Web Apps (PWA)',
        'E-commerce platforms',
        'API development & integration',
        'Cloud-native applications',
      ],
      technologies: ['React', 'Node.js', 'Python', 'Flutter', 'Next.js', 'AWS'],
    },
    {
      id: 'ai-automation',
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI & Automation Solutions',
      description: 'Intelligent systems and automation to streamline operations',
      features: [
        'Machine learning model development',
        'Natural language processing (NLP)',
        'Computer vision & image recognition',
        'Predictive analytics',
        'Process automation & RPA',
        'AI-powered chatbots',
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Keras', 'Hugging Face'],
    },
    {
      id: 'branding',
      icon: <Palette className="w-8 h-8" />,
      title: 'Branding & Visual Identity',
      description: 'Complete brand identity and visual design systems',
      features: [
        'Logo design & brand identity',
        'Brand strategy & positioning',
        'Visual style guides',
        'Marketing collateral design',
        'Packaging & print design',
        'Brand refresh & evolution',
      ],
      technologies: ['Figma', 'Adobe CC', 'Illustrator', 'After Effects', 'Blender', 'Cinema 4D'],
    },
    {
      id: 'ui-ux',
      icon: <PenTool className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design for exceptional digital experiences',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Interface design (web & mobile)',
        'Design systems & component libraries',
        'Usability testing',
        'Responsive & adaptive design',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Framer'],
    },
    {
      id: 'digital-marketing',
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Digital Marketing & SEO',
      description: 'Data-driven marketing strategies and search optimization',
      features: [
        'Search engine optimization (SEO)',
        'Pay-per-click (PPC) advertising',
        'Social media marketing',
        'Email marketing campaigns',
        'Content marketing strategy',
        'Analytics & performance tracking',
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Ads', 'Mailchimp', 'HubSpot'],
    },
    {
      id: 'content-writing',
      icon: <PenTool className="w-8 h-8" />,
      title: 'Content Writing & Copywriting',
      description: 'Compelling content that engages and converts',
      features: [
        'Website copy & landing pages',
        'Blog posts & articles',
        'Technical documentation',
        'Marketing & advertising copy',
        'Social media content',
        'SEO-optimized content',
      ],
      technologies: ['Grammarly', 'Hemingway', 'Copyscape', 'Google Docs', 'WordPress', 'Notion'],
    },
    {
      id: 'video-production',
      icon: <Camera className="w-8 h-8" />,
      title: 'Video Editing & Production',
      description: 'Professional video editing and media production services',
      features: [
        'Professional video editing & post-production',
        'Corporate videos & promotional content',
        'Motion graphics & animation',
        'Color grading & visual effects',
        'Social media video content',
        'Documentary & storytelling videos',
      ],
      technologies: ['Adobe Premiere', 'Final Cut Pro', 'DaVinci Resolve', 'After Effects', 'GSAP', 'Cinema 4D'],
    },
    {
      id: 'infrastructure',
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure & IT Solutions',
      description: 'Scalable infrastructure and IT management services',
      features: [
        'Cloud infrastructure (AWS, Azure, GCP)',
        'DevOps & CI/CD pipelines',
        'Server management & monitoring',
        'Database administration',
        'Network architecture',
        'Disaster recovery & backup',
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Ansible'],
    },
    {
      id: 'cybersecurity',
      icon: <Lock className="w-8 h-8" />,
      title: 'Cybersecurity & Data Protection',
      description: 'Enterprise-grade security solutions and compliance',
      features: [
        'Security audits & penetration testing',
        'Threat detection & monitoring',
        'Data encryption & protection',
        'Compliance (GDPR, HIPAA, SOC 2)',
        'Incident response planning',
        'Security awareness training',
      ],
      technologies: ['Splunk', 'Wireshark', 'Metasploit', 'Nessus', 'CrowdStrike', 'Cloudflare'],
    },
    {
      id: 'consulting',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Business Consulting & Strategy',
      description: 'Strategic guidance for digital transformation',
      features: [
        'Digital transformation strategy',
        'Technology roadmap planning',
        'Process optimization',
        'Market research & analysis',
        'Competitive analysis',
        'Growth strategy & scaling',
      ],
      technologies: ['Tableau', 'Power BI', 'Excel', 'Miro', 'Notion', 'Asana'],
    },
    {
      id: 'product-design',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Product Design & Launch Support',
      description: 'End-to-end product development and go-to-market strategy',
      features: [
        'Product strategy & roadmap',
        'MVP development',
        'User testing & validation',
        'Go-to-market strategy',
        'Product launch campaigns',
        'Post-launch optimization',
      ],
      technologies: ['Jira', 'Figma', 'Mixpanel', 'Amplitude', 'ProductBoard', 'Intercom'],
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-white">Our Comprehensive Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-spectrum technology and design solutions to transform your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <GlassCard delay={0}>
                <div className="p-6 h-full flex flex-col">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-violet-500/20 border border-violet-500/30 rounded-lg flex-shrink-0">
                      <div className="text-violet-400">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4"
                      >
                        {/* Features */}
                        <div className="mb-4">
                          <p className="text-violet-400 mb-3">Key Features:</p>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                <Check className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <p className="text-violet-400 mb-3">Technologies & Tools:</p>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-xs text-blue-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="mt-auto pt-4 flex items-center justify-between text-violet-400 hover:text-violet-300 transition-colors group"
                  >
                    <span>{expandedService === service.id ? 'Show Less' : 'Learn More'}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        expandedService === service.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <GlassCard delay={0}>
            <div className="p-12 bg-gradient-to-br from-blue-900/20 to-violet-900/20">
              <h2 className="mb-4 text-white">Ready to Get Started?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business and achieve your goals.
              </p>
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-900 to-violet-900 rounded-lg hover:shadow-[0_0_40px_rgba(126,34,206,0.6)] transition-all text-white"
              >
                Request a Consultation
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
