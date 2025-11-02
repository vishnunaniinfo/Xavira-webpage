import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Target, Award, ChevronDown, Mail } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import founderPhoto from 'figma:asset/0562f0e6e0030c30896e2ca2a9067e3044a02c06.png';

export function About() {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);

  const milestones = [
    {
      year: '2023',
      title: 'Tech Labs Founded',
      description: 'Vishnu Vardhan Burri establishes Xavira Group: Tech Labs with a vision to revolutionize the tech industry.',
      details: 'Started with a small team of passionate developers and designers, focused on creating innovative solutions for complex problems.',
    },
    {
      year: '2023',
      title: 'First Major Client',
      description: 'Secured NeoFin AI as flagship client, delivering cutting-edge fraud detection system.',
      details: 'Developed a hybrid AI-Cloud solution that reduced fraud by 50% and increased ROI by 35%.',
    },
    {
      year: '2024',
      title: 'Expansion into Web3',
      description: 'Launched blockchain and Web3 development division.',
      details: 'Successfully delivered EcoStyle E-Com platform, combining ML with Web3 technology.',
    },
    {
      year: '2024',
      title: 'AR/VR Innovation',
      description: 'Pioneered AR surveillance systems and holographic interfaces.',
      details: 'Created SecureVault Tech\'s AR + AI surveillance system, improving response time by 40%.',
    },
    {
      year: '2025',
      title: 'Global Recognition',
      description: 'Established as a leading tech and design powerhouse.',
      details: 'Expanding services globally with a focus on AI, cybersecurity, and immersive design.',
    },
  ];

  const clientStories = [
    {
      title: 'NeoFin AI',
      subtitle: 'Hybrid AI-Cloud Fraud Detection',
      metrics: '50% fraud reduction, +35% ROI',
      testimonial: '"Xavira Group transformed our security infrastructure with cutting-edge AI solutions."',
    },
    {
      title: 'EcoStyle E-Com',
      subtitle: 'ML + Web3 Hybrid Platform',
      metrics: '30% engagement increase, 1K+ users',
      testimonial: '"The innovative Web3 integration gave us a competitive edge."',
    },
    {
      title: 'SecureVault Tech',
      subtitle: 'AR + AI Surveillance System',
      metrics: '40% faster incident response',
      testimonial: '"The AR surveillance system revolutionized our security operations."',
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Founder Bio Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative backdrop-blur-2xl bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-3xl border border-violet-500/40 p-12"
            style={{
              boxShadow: '0 0 60px rgba(126, 34, 206, 0.4), inset 0 0 40px rgba(30, 58, 138, 0.2)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-blue-600/40 rounded-2xl blur-2xl" />
                  <img
                    src={founderPhoto}
                    alt="Vishnu Vardhan Burri - Founder & CEO"
                    className="relative rounded-2xl border-2 border-violet-500/50 w-full object-cover"
                  />
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h2 className="mb-4 text-white">Vishnu Vardhan Burri</h2>
                  <p className="text-xl text-violet-400 mb-6">Founder & CEO</p>
                  
                  <p className="text-gray-300 mb-6">
                    A visionary technologist and design innovator, Vishnu Vardhan Burri founded Xavira Tech Labs as part of Xavira Group with a mission to bridge the gap between cutting-edge technology and elegant design. With expertise spanning AI/ML, blockchain, cybersecurity, and immersive interfaces, he leads a team dedicated to pushing the boundaries of what's possible.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Target className="w-5 h-5 text-violet-400" />
                      <span>Mission: Scaling the impossible through innovation</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Award className="w-5 h-5 text-violet-400" />
                      <span>Expertise: AI, Web3, Cybersecurity, AR/VR</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Users className="w-5 h-5 text-violet-400" />
                      <span>Leading a team of world-class innovators</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="w-5 h-5 text-violet-400" />
                      <a
                        href="mailto:vishnuvardhanburri19@gmail.com"
                        className="hover:text-violet-400 transition-colors"
                      >
                        vishnuvardhanburri19@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Interactive Timeline */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white">Our Journey</h2>
            <p className="text-gray-400">Key milestones in our evolution</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-blue-600 to-violet-500" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <GlassCard delay={0}>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-5 h-5 text-violet-400" />
                          <span className="text-violet-400">{milestone.year}</span>
                        </div>
                        <h3 className="mb-2 text-white">{milestone.title}</h3>
                        <p className="text-gray-400 mb-4">{milestone.description}</p>

                        <AnimatePresence>
                          {expandedMilestone === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <p className="text-gray-300 text-sm">{milestone.details}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button
                          onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
                          className="mt-4 text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2"
                        >
                          {expandedMilestone === index ? 'Show Less' : 'Learn More'}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedMilestone === index ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </GlassCard>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-black shadow-[0_0_20px_rgba(126,34,206,0.8)]" />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Accordion */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard delay={0}>
              <div className="p-8">
                <h2 className="mb-6 text-white">Our Mission & Values</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="mission" className="border-violet-500/30">
                    <AccordionTrigger className="text-violet-400 hover:text-violet-300">
                      Our Mission
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      As part of Xavira Group, Xavira Tech Labs aims to revolutionize the tech and design landscape by delivering innovative, scalable solutions that empower businesses to achieve the impossible. We combine cutting-edge technology with visionary design to create transformative experiences.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="vision" className="border-violet-500/30">
                    <AccordionTrigger className="text-violet-400 hover:text-violet-300">
                      Our Vision
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      To be the global leader in tech innovation, setting new standards for excellence in AI, blockchain, cybersecurity, and immersive design. We envision a future where technology seamlessly integrates with human creativity.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="values" className="border-violet-500/30">
                    <AccordionTrigger className="text-violet-400 hover:text-violet-300">
                      Our Core Values
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <ul className="space-y-2">
                        <li>• Innovation: Pushing boundaries and exploring new frontiers</li>
                        <li>• Excellence: Delivering world-class quality in every project</li>
                        <li>• Integrity: Building trust through transparency and honesty</li>
                        <li>• Collaboration: Working together to achieve extraordinary results</li>
                        <li>• Impact: Creating solutions that make a meaningful difference</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Client Stories Carousel */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white">Client Success Stories</h2>
            <p className="text-gray-400">Transforming businesses with innovative solutions</p>
          </motion.div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {clientStories.map((story, index) => (
                <CarouselItem key={index}>
                  <GlassCard delay={0}>
                    <div className="p-12 text-center">
                      <h3 className="mb-2 text-white">{story.title}</h3>
                      <p className="text-violet-400 mb-6">{story.subtitle}</p>
                      
                      <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-blue-900/30 to-violet-900/30 border border-violet-500/30">
                        <p className="text-2xl text-blue-300">{story.metrics}</p>
                      </div>

                      <p className="text-gray-300 italic text-lg">{story.testimonial}</p>
                    </div>
                  </GlassCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-violet-500/20 border-violet-500/30 hover:bg-violet-500/30" />
            <CarouselNext className="bg-violet-500/20 border-violet-500/30 hover:bg-violet-500/30" />
          </Carousel>
        </section>
      </div>
    </div>
  );
}
