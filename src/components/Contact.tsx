import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ParticleBackground } from './ParticleBackground';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert the form data into Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            service: formData.service,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      // Show success message
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '', service: 'general' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      
      // Check if it's a table not found error
      if (error?.code === 'PGRST205' || error?.message?.includes('table')) {
        setErrorMessage('Database setup required. Please run the SQL commands from SUPABASE_SETUP.md to create the contacts table.');
      } else {
        setErrorMessage('Failed to submit form. Please try again or contact us directly at xavira.group@gmail.com');
      }
      
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setErrorMessage('');
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-32 px-6 pb-20">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4 text-white">Get In Touch</h1>
          <p className="text-xl text-gray-400">Let's build the future together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <GlassCard delay={0}>
              <div
                className="p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(126, 34, 206, 0.2) 100%)',
                }}
              >
                <h2 className="mb-6 text-white">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-violet-400 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg focus:border-violet-500 focus:outline-none text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-violet-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg focus:border-violet-500 focus:outline-none text-white placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-violet-400 mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg focus:border-violet-500 focus:outline-none text-white placeholder-gray-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-violet-400 mb-2">Service Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg focus:border-violet-500 focus:outline-none text-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="ai-systems">AI Systems</option>
                      <option value="web3">Web 3.0</option>
                      <option value="backend">Backend Scalability</option>
                      <option value="design">Design Services</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="innovation">Innovation Labs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-violet-400 mb-2">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg focus:border-violet-500 focus:outline-none text-white placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-900 to-violet-900 rounded-lg hover:shadow-[0_0_40px_rgba(126,34,206,0.6)] transition-all text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="space-y-6">
              <GlassCard delay={0}>
                <div className="p-8">
                  <h3 className="mb-6 text-white">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-violet-500/20 border border-violet-500/30 rounded-lg">
                        <Mail className="w-6 h-6 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-violet-400 mb-1">Email</p>
                        <a
                          href="mailto:xavira.group@gmail.com"
                          className="text-white hover:text-violet-400 transition-colors block mb-1"
                        >
                          xavira.group@gmail.com
                        </a>
                        <p className="text-sm text-gray-400">
                          CEO & Founder:{' '}
                          <a
                            href="mailto:vishnuvardhanburri19@gmail.com"
                            className="text-gray-400 hover:text-violet-400 transition-colors"
                          >
                            vishnuvardhanburri19@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-violet-500/20 border border-violet-500/30 rounded-lg">
                        <MapPin className="w-6 h-6 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-violet-400 mb-1">Location</p>
                        <p className="text-white">Global Operations</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-violet-500/20 border border-violet-500/30 rounded-lg">
                        <Phone className="w-6 h-6 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-violet-400 mb-1">Availability</p>
                        <p className="text-white">24/7 Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.2}>
                <div className="p-8">
                  <h3 className="mb-4 text-white">Office Hours</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-violet-400">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-violet-400">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-violet-400">Closed</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.4}>
                <div className="p-8 bg-gradient-to-br from-blue-900/20 to-violet-900/20">
                  <h3 className="mb-4 text-white">Response Time</h3>
                  <p className="text-gray-300 mb-4">
                    We typically respond to inquiries within 24 hours. For urgent matters, please indicate "URGENT" in your message subject.
                  </p>
                  <div className="flex items-center gap-2 text-violet-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Fast & Professional Support</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div
              className="backdrop-blur-xl bg-gradient-to-r from-violet-900/80 to-purple-900/80 rounded-2xl border border-violet-500/50 p-6 shadow-[0_0_40px_rgba(126,34,206,0.6)]"
            >
              <div className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-white">Message Sent!</h3>
                  <p className="text-violet-300">We'll get back to you soon.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 max-w-2xl mx-4"
          >
            <div
              className="backdrop-blur-xl bg-gradient-to-r from-red-900/90 to-orange-900/90 rounded-2xl border border-red-500/50 p-6 shadow-[0_0_40px_rgba(239,68,68,0.6)]"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-white mb-2">Submission Failed</h3>
                  <p className="text-red-200 text-sm mb-3">
                    {errorMessage || 'Please try again or email us directly.'}
                  </p>
                  {errorMessage.includes('Database setup') && (
                    <div className="bg-black/30 rounded-lg p-3 text-xs text-gray-300 mt-2">
                      <p className="mb-2">Quick Fix:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Open your Supabase dashboard</li>
                        <li>Go to SQL Editor</li>
                        <li>Run the SQL from SUPABASE_SETUP.md</li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
