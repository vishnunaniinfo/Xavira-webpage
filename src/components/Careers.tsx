import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Shield, Code, Cloud, Palette, Briefcase, X, Upload, Mail, Phone, User, FileText, Send, ChevronRight, Clock, DollarSign, Award } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner@2.0.3';

interface Division {
  id: string;
  icon: any;
  title: string;
  description: string;
  roles: string[];
  modalDescription: string;
  gradient: string;
}

const divisions: Division[] = [
  {
    id: 'ai',
    icon: Brain,
    title: 'Artificial Intelligence Division',
    description: 'Build intelligent systems that redefine what technology can do.',
    roles: [
      'AI Engineer (Freshers & Experienced)',
      'Data Scientist',
      'MLOps Engineer',
      'AI Research Intern'
    ],
    modalDescription: 'Join our AI division and work on advanced automation, machine learning, and neural networks. You\'ll collaborate with innovators who bring ideas to life — from AI models to real-world applications.',
    gradient: 'from-violet-600 to-purple-600'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity Division',
    description: 'Protect the digital world and make the internet a safer place.',
    roles: [
      'Cybersecurity Analyst (Freshers & Experienced)',
      'Ethical Hacker / Penetration Tester',
      'SOC Engineer / Threat Hunter',
      'Security Intern'
    ],
    modalDescription: 'Join our elite Cybersecurity Division to defend, detect, and defeat digital threats. You\'ll work on live systems, CTF-style challenges, and enterprise-grade security operations.',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'fullstack',
    icon: Code,
    title: 'Full Stack Development',
    description: 'Build beautiful, scalable, and secure web experiences.',
    roles: [
      'Full Stack Developer (Freshers & Experienced)',
      'Frontend Developer (React / Next.js)',
      'Backend Developer (Node / Python)',
      'QA Engineer'
    ],
    modalDescription: 'Join our Full Stack team to craft high-performance web platforms and cloud-based solutions. From frontend finesse to backend logic, your code will shape global innovations.',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'devops',
    icon: Cloud,
    title: 'DevOps & Cloud Division',
    description: 'Deploy with precision. Scale with confidence.',
    roles: [
      'DevOps Engineer',
      'Cloud Engineer (AWS / Azure / GCP)',
      'Site Reliability Engineer',
      'Automation Intern'
    ],
    modalDescription: 'Be part of our infrastructure backbone — where reliability meets innovation. You\'ll automate deployments, optimize performance, and architect scalable cloud environments.',
    gradient: 'from-indigo-600 to-blue-600'
  },
  {
    id: 'creative',
    icon: Palette,
    title: 'Creative & Branding Division',
    description: 'Design experiences that speak louder than words.',
    roles: [
      'UI/UX Designer',
      'Graphic & Motion Designer',
      'Content Strategist / Copywriter',
      'Marketing Intern'
    ],
    modalDescription: 'Creativity drives everything at Xavira. From sleek product interfaces to brand storytelling — your imagination shapes our identity.',
    gradient: 'from-pink-600 to-rose-600'
  },
  {
    id: 'operations',
    icon: Briefcase,
    title: 'Operations & Management',
    description: 'Lead, organize, and grow the Xavira ecosystem.',
    roles: [
      'Project Manager',
      'HR & People Relations Lead',
      'Business Development Executive',
      'Operations Intern'
    ],
    modalDescription: 'Our Operations division keeps Xavira running smoothly — managing teams, projects, and partnerships. Join us if you thrive on structure, leadership, and impact.',
    gradient: 'from-amber-600 to-orange-600'
  }
];

export function Careers() {
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    role: '',
    resume: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Validate file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        toast.error('Please upload a PDF or Word document');
        return;
      }
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size should be less than 5MB');
        return;
      }
      setFormData({ ...formData, resume: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.mobile || !formData.role || !formData.resume) {
      toast.error('Please fill all fields and upload your resume');
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload resume to Supabase Storage
      const fileExt = formData.resume.name.split('.').pop();
      const fileName = `${Date.now()}_${formData.name.replace(/\s+/g, '_')}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(fileName, formData.resume);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        toast.error('Failed to upload resume. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Get public URL for the resume
      const { data: { publicUrl } } = supabase.storage
        .from('resumes')
        .getPublicUrl(fileName);

      // Save application to database
      const { data, error } = await supabase
        .from('career_applications')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            division: selectedDivision?.title,
            role: formData.role,
            resume_url: publicUrl,
            resume_filename: formData.resume.name,
          }
        ])
        .select();

      if (error) {
        console.error('Database error:', error);
        
        // Provide helpful error messages
        if (error.message.includes('relation "career_applications" does not exist')) {
          toast.error(
            'Database setup incomplete. Please contact the administrator to set up the career applications table.',
            { duration: 5000 }
          );
        } else if (error.message.includes('storage')) {
          toast.error('Resume storage not configured. Please contact the administrator.');
        } else {
          toast.error('Failed to submit application. Please try again or contact us directly at xavira.group@gmail.com');
        }
        
        setIsSubmitting(false);
        return;
      }

      toast.success(
        <div>
          <p className="font-semibold">Application submitted successfully!</p>
          <p className="text-sm mt-1">Welcome to the Xavira Family! We'll review your application and get back to you soon.</p>
        </div>,
        { duration: 6000 }
      );

      // Reset form and close modal
      setFormData({ name: '', email: '', mobile: '', role: '', resume: null });
      setSelectedDivision(null);
    } catch (err) {
      console.error('Unexpected error:', err);
      toast.error('An unexpected error occurred. Please contact us at xavira.group@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/40 rounded-full text-sm text-violet-300">
              Join Our Team
            </span>
          </motion.div>
          
          <h1 className="mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Build the Future with Xavira
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Xavira Tech Labs, you're not just an employee — you're family. Whether you're a fresher eager to grow or an expert ready to lead, your journey starts here.
          </p>
        </motion.div>

        {/* Internship Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-white mb-3">Internship Program</h2>
            <p className="text-gray-400">Start your career with our comprehensive 3-month internship</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-violet-500/30 p-8 hover:border-violet-400/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-2 text-center">3 Months</h3>
                <p className="text-gray-400 text-center">Internship Period</p>
                <p className="text-sm text-gray-500 mt-3 text-center">Structured learning and hands-on experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-blue-500/30 p-8 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-2 text-center">Stipend-Based</h3>
                <p className="text-gray-400 text-center">Domain-Specific</p>
                <p className="text-sm text-gray-500 mt-3 text-center">Competitive compensation based on your field</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-purple-500/30 p-8 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-2 text-center">Full-Time Offer</h3>
                <p className="text-gray-400 text-center">For High Performers</p>
                <p className="text-sm text-gray-500 mt-3 text-center">Outstanding interns receive permanent positions</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divisions Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-3">Open Positions</h2>
            <p className="text-gray-400">Explore our divisions and find your perfect role</p>
          </motion.div>

          <div id="divisions" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${division.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                  
                  <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-violet-500/30 hover:border-violet-400/60 transition-all duration-300 h-full">
                    <div className="p-8">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${division.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-white mb-3">{division.title}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{division.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        <p className="text-sm text-violet-400">Open Roles:</p>
                        <div className="space-y-2">
                          {division.roles.map((role, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${division.gradient} mt-2 flex-shrink-0`}></div>
                              <span className="text-sm text-gray-300">{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        onClick={() => setSelectedDivision(division)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${division.gradient} text-white transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(126,34,206,0.5)]`}
                      >
                        <span>Apply Now</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative backdrop-blur-xl bg-black/40 rounded-3xl border border-violet-500/40 p-12 text-center">
              <h2 className="text-white mb-4">Ready to Join Xavira Family?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Take the first step towards an exciting career in technology, innovation, and impact.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl text-white hover:shadow-[0_0_40px_rgba(126,34,206,0.6)] transition-all duration-300"
              >
                View Open Positions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedDivision && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedDivision(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative backdrop-blur-2xl bg-black/60 rounded-3xl border border-violet-500/40 p-8 shadow-[0_0_60px_rgba(126,34,206,0.4)]">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedDivision(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-xl bg-violet-500/20 hover:bg-violet-500/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Division Header */}
                <div className="mb-8">
                  <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${selectedDivision.gradient} items-center justify-center mb-4`}>
                    <selectedDivision.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-white mb-4">{selectedDivision.title}</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">{selectedDivision.modalDescription}</p>
                  <div className="p-5 rounded-xl bg-violet-500/10 border border-violet-500/30 space-y-3">
                    <p className="text-gray-300">Compensation will be finalized during your final interview with our CEO.</p>
                    <p className="text-gray-300">Welcome to Xavira Family — where passion meets purpose.</p>
                  </div>
                </div>

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black/40 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black/40 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black/40 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Role Applying For
                    </label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black/40 border border-violet-500/30 rounded-xl text-white focus:outline-none focus:border-violet-400 transition-colors"
                    >
                      <option value="" className="bg-gray-900">Select a role</option>
                      {selectedDivision.roles.map((role, idx) => (
                        <option key={idx} value={role} className="bg-gray-900">{role}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2 flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Upload Resume (PDF or Word, max 5MB)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center justify-center gap-3 w-full px-4 py-3.5 bg-black/40 border border-violet-500/30 rounded-xl text-gray-400 hover:border-violet-400 cursor-pointer transition-colors"
                      >
                        <Upload className="w-5 h-5" />
                        <span className="truncate">
                          {formData.resume ? formData.resume.name : 'Click to upload resume'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 rounded-xl bg-gradient-to-r ${selectedDivision.gradient} text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_30px_rgba(126,34,206,0.6)]'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Application
                        </>
                      )}
                    </motion.button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Your application will be sent to <span className="text-violet-400">xavira.group@gmail.com</span>
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
