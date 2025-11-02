import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, TrendingUp, Palette, X, Check, ExternalLink, ShoppingCart, Stethoscope, GraduationCap, Building2, Zap } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioProps {
  setCurrentPage: (page: string) => void;
}

export function Portfolio({ setCurrentPage }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'NovaSecure',
      subtitle: 'Real-Time Threat Detection',
      category: 'Cybersecurity',
      icon: <Shield className="w-12 h-12" />,
      heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
      shortDescription: 'Enterprise-grade cybersecurity platform with AI-powered threat detection and real-time monitoring.',
      fullDescription: 'NovaSecure is a comprehensive cybersecurity solution that leverages artificial intelligence and machine learning to detect, analyze, and neutralize security threats in real-time. The platform provides 24/7 monitoring, automated incident response, and detailed threat analytics for enterprise clients.',
      whatWeDid: [
        'Developed AI-powered threat detection algorithms',
        'Built real-time monitoring dashboard with live threat feeds',
        'Implemented automated incident response system',
        'Created comprehensive security analytics and reporting',
        'Integrated with existing security infrastructure',
        'Conducted penetration testing and security audits',
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      results: [
        { label: 'Threat Detection Rate', value: '99.9%' },
        { label: 'Response Time Improvement', value: '40% faster' },
        { label: 'False Positives Reduced', value: '85%' },
        { label: 'Threats Neutralized', value: '50,000+' },
      ],
      color: 'from-red-900/30 to-orange-900/30',
      borderColor: 'border-red-500/30',
    },
    {
      id: 2,
      title: 'StellarApp',
      subtitle: 'Fintech Dashboard',
      category: 'Financial Technology',
      icon: <TrendingUp className="w-12 h-12" />,
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      shortDescription: 'Next-generation fintech dashboard with real-time analytics, AI-driven insights, and seamless transaction management.',
      fullDescription: 'StellarApp is a cutting-edge financial technology platform designed for modern banking and investment management. It provides real-time market data, AI-powered investment recommendations, portfolio tracking, and secure transaction processing with an intuitive, user-friendly interface.',
      whatWeDid: [
        'Designed and developed responsive dashboard interface',
        'Implemented real-time data visualization and charts',
        'Built AI recommendation engine for investment insights',
        'Created secure payment processing system',
        'Developed mobile-responsive progressive web app',
        'Integrated with multiple financial APIs and services',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Python', 'TensorFlow', 'Recharts', 'Stripe API'],
      results: [
        { label: 'User Engagement', value: '+65%' },
        { label: 'Transaction Volume', value: '$10M+' },
        { label: 'Active Users', value: '25,000+' },
        { label: 'App Rating', value: '4.8/5' },
      ],
      color: 'from-blue-900/30 to-cyan-900/30',
      borderColor: 'border-blue-500/30',
    },
    {
      id: 3,
      title: 'BrandLift',
      subtitle: 'Corporate Branding & Media',
      category: 'Design & Media',
      icon: <Palette className="w-12 h-12" />,
      heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      shortDescription: 'Complete brand transformation and media production for a Fortune 500 company.',
      fullDescription: 'BrandLift was a comprehensive rebranding project for a major corporate client, involving complete visual identity redesign, brand strategy, marketing collateral, and multimedia content production. The project spanned 6 months and included everything from logo design to video production.',
      whatWeDid: [
        'Conducted brand strategy workshops and market research',
        'Designed new logo and complete visual identity system',
        'Created brand guidelines and design system',
        'Produced corporate photography and videography',
        'Developed marketing collateral and digital assets',
        'Executed brand launch campaign across all channels',
      ],
      technologies: ['Figma', 'Adobe CC', 'After Effects', 'Premiere Pro', 'Blender', 'Cinema 4D', 'WordPress', 'React'],
      results: [
        { label: 'Brand Recognition', value: '+120%' },
        { label: 'Customer Engagement', value: '+85%' },
        { label: 'Marketing ROI', value: '+200%' },
        { label: 'Media Impressions', value: '5M+' },
      ],
      color: 'from-purple-900/30 to-pink-900/30',
      borderColor: 'border-purple-500/30',
    },
    {
      id: 4,
      title: 'MarketPulse',
      subtitle: 'E-Commerce Platform',
      category: 'E-Commerce & Retail',
      icon: <ShoppingCart className="w-12 h-12" />,
      heroImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
      shortDescription: 'Scalable e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless payment integration.',
      fullDescription: 'MarketPulse is a comprehensive e-commerce solution designed for modern retail businesses. The platform features advanced product recommendation algorithms, real-time inventory synchronization across multiple warehouses, integrated payment processing, and a responsive shopping experience across all devices. Built to handle high traffic volumes and provide detailed analytics for business intelligence.',
      whatWeDid: [
        'Architected scalable microservices infrastructure',
        'Developed AI-powered product recommendation engine',
        'Built real-time inventory management system',
        'Implemented secure payment gateway integration',
        'Created comprehensive admin dashboard and analytics',
        'Designed responsive mobile-first shopping interface',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Stripe', 'AWS Lambda'],
      results: [
        { label: 'Conversion Rate', value: '+45%' },
        { label: 'Average Order Value', value: '+32%' },
        { label: 'Daily Transactions', value: '15,000+' },
        { label: 'Customer Satisfaction', value: '4.7/5' },
      ],
      color: 'from-green-900/30 to-emerald-900/30',
      borderColor: 'border-green-500/30',
    },
    {
      id: 5,
      title: 'HealthConnect',
      subtitle: 'Telemedicine & Patient Management',
      category: 'Healthcare Technology',
      icon: <Stethoscope className="w-12 h-12" />,
      heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
      shortDescription: 'HIPAA-compliant telemedicine platform connecting patients with healthcare providers through secure video consultations and digital health records.',
      fullDescription: 'HealthConnect is a comprehensive healthcare platform that revolutionizes patient care through technology. The system includes secure video consultations, electronic health records management, appointment scheduling, prescription management, and real-time health monitoring integration. Built with privacy and security as top priorities, the platform is fully HIPAA-compliant and includes advanced encryption for all patient data.',
      whatWeDid: [
        'Developed HIPAA-compliant secure infrastructure',
        'Implemented real-time video consultation system',
        'Built electronic health records (EHR) management',
        'Created automated appointment scheduling and reminders',
        'Integrated with medical device APIs for health monitoring',
        'Designed patient portal and provider dashboard',
      ],
      technologies: ['React', 'TypeScript', 'WebRTC', 'Node.js', 'PostgreSQL', 'AWS', 'HL7 FHIR', 'Socket.io'],
      results: [
        { label: 'Consultations Completed', value: '100,000+' },
        { label: 'Patient Satisfaction', value: '96%' },
        { label: 'Average Wait Time', value: '5 min' },
        { label: 'Healthcare Providers', value: '2,500+' },
      ],
      color: 'from-teal-900/30 to-cyan-900/30',
      borderColor: 'border-teal-500/30',
    },
    {
      id: 6,
      title: 'EduFlow',
      subtitle: 'Learning Management System',
      category: 'Education Technology',
      icon: <GraduationCap className="w-12 h-12" />,
      heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
      shortDescription: 'Advanced learning management system with interactive courses, live classes, AI-powered assessments, and comprehensive student progress tracking.',
      fullDescription: 'EduFlow is a next-generation learning management system designed for educational institutions and corporate training programs. The platform features interactive course creation tools, live video classes, AI-powered quiz generation, automated grading, student progress analytics, and gamification elements to enhance engagement. It supports multiple learning formats including video lectures, interactive assignments, peer discussions, and certification programs.',
      whatWeDid: [
        'Built interactive course creation and management system',
        'Developed live streaming and recorded lecture platform',
        'Implemented AI-powered assessment and auto-grading',
        'Created student progress tracking and analytics dashboard',
        'Designed gamification system with badges and leaderboards',
        'Integrated collaboration tools for peer learning',
      ],
      technologies: ['React', 'Next.js', 'Python', 'Django', 'MongoDB', 'WebRTC', 'TensorFlow', 'AWS S3'],
      results: [
        { label: 'Active Students', value: '50,000+' },
        { label: 'Courses Offered', value: '1,200+' },
        { label: 'Completion Rate', value: '78%' },
        { label: 'Student Engagement', value: '+92%' },
      ],
      color: 'from-indigo-900/30 to-purple-900/30',
      borderColor: 'border-indigo-500/30',
    },
    {
      id: 7,
      title: 'PropTech Suite',
      subtitle: 'Real Estate Management Platform',
      category: 'Real Estate Technology',
      icon: <Building2 className="w-12 h-12" />,
      heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      shortDescription: 'Comprehensive property management solution with tenant portals, automated rent collection, maintenance tracking, and detailed financial reporting.',
      fullDescription: 'PropTech Suite is an all-in-one real estate management platform designed for property managers, landlords, and real estate agencies. The system streamlines property listings, tenant applications, lease management, rent collection, maintenance requests, and financial reporting. It includes virtual property tours, automated tenant screening, digital lease signing, and integrated accounting features to simplify property management operations.',
      whatWeDid: [
        'Developed comprehensive property listing and search system',
        'Built automated tenant screening and application processing',
        'Implemented digital lease signing and document management',
        'Created automated rent collection and payment processing',
        'Designed maintenance request tracking and vendor management',
        'Built financial reporting and analytics dashboard',
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Express', 'MySQL', 'Stripe', 'DocuSign API', 'Google Maps API'],
      results: [
        { label: 'Properties Managed', value: '10,000+' },
        { label: 'Rent Collection Rate', value: '99.2%' },
        { label: 'Time Saved', value: '60%' },
        { label: 'User Satisfaction', value: '4.9/5' },
      ],
      color: 'from-orange-900/30 to-amber-900/30',
      borderColor: 'border-orange-500/30',
    },
    {
      id: 8,
      title: 'GridSync',
      subtitle: 'Smart Energy Management',
      category: 'Energy & Sustainability',
      icon: <Zap className="w-12 h-12" />,
      heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80',
      shortDescription: 'IoT-enabled energy management platform for smart buildings with real-time monitoring, predictive analytics, and automated optimization.',
      fullDescription: 'GridSync is an intelligent energy management system that helps commercial buildings and industrial facilities optimize energy consumption and reduce costs. The platform integrates with IoT sensors and smart meters to provide real-time energy monitoring, predictive maintenance alerts, automated HVAC optimization, and detailed sustainability reporting. Machine learning algorithms analyze usage patterns to recommend efficiency improvements and predict future consumption.',
      whatWeDid: [
        'Developed IoT sensor integration and data collection system',
        'Built real-time energy monitoring and visualization dashboard',
        'Implemented machine learning for consumption prediction',
        'Created automated HVAC and lighting control systems',
        'Designed sustainability reporting and carbon footprint tracking',
        'Integrated with renewable energy sources and battery storage',
      ],
      technologies: ['React', 'Python', 'TensorFlow', 'MQTT', 'InfluxDB', 'Grafana', 'Azure IoT Hub', 'Docker'],
      results: [
        { label: 'Energy Savings', value: '35%' },
        { label: 'Carbon Reduction', value: '28%' },
        { label: 'Buildings Connected', value: '500+' },
        { label: 'ROI Period', value: '18 months' },
      ],
      color: 'from-yellow-900/30 to-green-900/30',
      borderColor: 'border-yellow-500/30',
    },
  ];

  const selectedProjectData = projects.find(p => p.id === selectedProject);

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
          <h1 className="mb-4 text-white">Featured Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our expertise through successful client partnerships and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <GlassCard delay={0}>
                <div 
                  className="cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <ImageWithFallback
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-violet-400">
                      {project.icon}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-xs text-violet-400">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-white mb-2">{project.title}</h3>
                    <p className="text-violet-400 mb-3">{project.subtitle}</p>
                    <p className="text-gray-400 text-sm mb-6 flex-1">{project.shortDescription}</p>

                    <button className="w-full py-3 bg-gradient-to-r from-blue-900 to-violet-900 rounded-lg hover:shadow-[0_0_20px_rgba(126,34,206,0.5)] transition-all text-white flex items-center justify-center gap-2">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
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
          className="text-center"
        >
          <GlassCard delay={0}>
            <div className="p-12 bg-gradient-to-br from-blue-900/20 to-violet-900/20">
              <h2 className="mb-4 text-white">Ready to Start Your Project?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create innovative solutions that drive real results for your business.
              </p>
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-900 to-violet-900 rounded-lg hover:shadow-[0_0_40px_rgba(126,34,206,0.6)] transition-all text-white"
              >
                Get In Touch
              </button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProjectData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-2xl bg-gradient-to-br from-violet-900/40 to-purple-900/40 rounded-3xl border border-violet-500/50"
                style={{
                  boxShadow: '0 0 60px rgba(126, 34, 206, 0.5), inset 0 0 40px rgba(30, 58, 138, 0.2)',
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-3 rounded-lg bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <X className="w-6 h-6 text-violet-400" />
                </button>

                {/* Hero Image */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                  <ImageWithFallback
                    src={selectedProjectData.heroImage}
                    alt={selectedProjectData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-10">
                  {/* Title & Category */}
                  <div className="mb-6">
                    <span className="px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400">
                      {selectedProjectData.category}
                    </span>
                    <h2 className="mt-4 mb-2 text-white">{selectedProjectData.title}</h2>
                    <p className="text-xl text-violet-400">{selectedProjectData.subtitle}</p>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedProjectData.fullDescription}
                    </p>
                  </div>

                  {/* What We Did */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-white">What We Did</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProjectData.whatWeDid.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-violet-500/20"
                        >
                          <Check className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-white">Technologies & Tools Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProjectData.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-br from-blue-900/40 to-violet-900/40 border border-blue-500/30 rounded-lg text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="mb-6 text-white">Results & Impact</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedProjectData.results.map((result, idx) => (
                        <div
                          key={idx}
                          className={`p-6 rounded-xl bg-gradient-to-br ${selectedProjectData.color} border ${selectedProjectData.borderColor} text-center`}
                        >
                          <div className="mb-2 text-white">{result.value}</div>
                          <p className="text-sm text-gray-400">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-4">
                    <button 
                      onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                      className="flex-1 py-4 bg-gradient-to-r from-blue-900 to-violet-900 rounded-lg hover:shadow-[0_0_30px_rgba(126,34,206,0.6)] transition-all text-white"
                    >
                      Start Your Project
                    </button>
                    <button className="px-6 py-4 bg-violet-500/20 border border-violet-500/30 rounded-lg hover:bg-violet-500/30 transition-colors text-violet-400">
                      View More Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
