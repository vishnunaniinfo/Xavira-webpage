import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: 'Hi! I\'m Xavira Tech Labs AI Assistant. I can help you with our services, portfolio, pricing, or any questions. What would you like to know?', 
      isUser: false,
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Smart, Concise AI Responses
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Greetings - Short and friendly
    if (message.includes('hello') || message.includes('hi ') || message.includes('hey') || message === 'hi' || message === 'hello') {
      return `Hello! 👋 I can help you with:
• Our services
• Portfolio & case studies
• Pricing & quotes
• Technologies we use
• Getting started

What interests you?`;
    }

    // Services - Concise list
    if (message.includes('service') || message.includes('what do you do') || message.includes('offerings')) {
      return `We offer 11 comprehensive services:

💻 Web & App Development
🤖 AI & Automation Solutions
🎨 Branding & Visual Identity
✨ UI/UX Design
📢 Digital Marketing & SEO
✍️ Content Writing & Copywriting
🎬 Video Editing & Production
⚙️ Infrastructure & IT Solutions
🔒 Cybersecurity & Data Protection
📊 Business Consulting & Strategy
🚀 Product Design & Launch Support

Which service would you like to know more about?`;
    }

    // Specific service details
    if (message.includes('web development') || message.includes('website') || message.includes('web app')) {
      return `**Web & App Development:**

We build:
• Full-stack web applications (React, Next.js, Node.js)
• Mobile apps (iOS, Android, Flutter)
• E-commerce platforms
• Progressive Web Apps (PWA)

**Affordable Pricing:**
• Landing Page: $800 - $2,000
• Business Website: $2,500 - $8,000
• E-commerce: $5,000 - $20,000
• Custom App: $8,000 - $35,000

**Timeline:** 2-12 weeks
**Payment Plans Available!**

Need a specific solution?`;
    }

    if (message.includes('ai ') || message.includes('machine learning') || message.includes('automation')) {
      return `**AI & Automation Solutions:**

We specialize in:
• Machine learning models
• NLP & chatbots
• Computer vision
• Predictive analytics
• Process automation (RPA)

**Affordable Pricing:**
• Chatbot: $3,000 - $10,000
• ML Model: $8,000 - $25,000
• AI Integration: $5,000 - $20,000
• Custom AI: $15,000 - $50,000

**Technologies:** TensorFlow, PyTorch, OpenAI

What AI solution are you looking for?`;
    }

    if (message.includes('design') || message.includes('branding') || message.includes('ui/ux')) {
      return `**Design Services:**

**Budget-Friendly Packages:**
• Logo Design: $500 - $2,000
• Brand Identity: $2,000 - $8,000
• UI/UX Design: $3,000 - $12,000
• Complete Rebrand: $8,000 - $25,000

**Includes:** Multiple concepts, revisions, source files

**Tools:** Figma, Adobe Creative Cloud

Want to see our design portfolio?`;
    }

    if (message.includes('cybersecurity') || message.includes('security')) {
      return `**Cybersecurity & Data Protection:**

• Security audits & penetration testing
• 24/7 threat detection
• Compliance (GDPR, HIPAA, SOC 2)
• Data encryption

**Our Success:** 99.9% threat detection rate with NovaSecure project

Interested in security solutions?`;
    }

    if (message.includes('ecommerce') || message.includes('e-commerce') || message.includes('online store')) {
      return `**E-Commerce Solutions:**

We build:
• Custom e-commerce websites
• Multi-vendor marketplaces
• Payment integration
• AI recommendations

**Budget-Friendly Pricing:**
• Basic Store: $3,000 - $8,000
• Standard E-commerce: $8,000 - $18,000
• Advanced Platform: $18,000 - $40,000
• Multi-vendor: $25,000 - $60,000

**Example:** EcoStyle - 30% engagement increase

Ready to launch your store?`;
    }

    if (message.includes('marketing') || message.includes('seo')) {
      return `**Digital Marketing & SEO:**

• Search engine optimization (SEO)
• PPC advertising & social media
• Email marketing & analytics

**Results:** Average 120% increase in online visibility

Ready to boost your digital presence?`;
    }

    // Portfolio - Concise with key projects
    if (message.includes('portfolio') || message.includes('project') || message.includes('work') || message.includes('case stud')) {
      return `**Our Featured Projects:**

🛡️ **NovaSecure** - Cybersecurity Platform
• 99.9% threat detection
• 40% faster response time
• AI-powered real-time monitoring

📊 **StellarApp** - Fintech Dashboard
• 65% user engagement increase
• $10M+ transaction volume
• 25,000+ active users

🎨 **BrandLift** - Corporate Rebranding
• 120% brand recognition boost
• 200% marketing ROI
• 5M+ media impressions

Want details on any specific project?`;
    }

    // Pricing - Quick overview
    if (message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('budget') || message.includes('how much')) {
      return `**Budget-Friendly Pricing:**

💻 **Websites:**
• Landing Page: $800 - $2,000
• Business Website: $2,500 - $8,000
• E-commerce: $5,000 - $20,000
• Custom Web App: $8,000 - $35,000

📱 **Mobile Apps:**
• Simple App: $4,000 - $12,000
• Standard App: $12,000 - $25,000
• Complex App: $25,000 - $60,000

🤖 **AI Solutions:**
• Chatbot: $3,000 - $10,000
• ML Model: $8,000 - $25,000
• AI Integration: $5,000 - $20,000

🎨 **Design:**
• Logo: $500 - $2,000
• Brand Identity: $2,000 - $8,000
• UI/UX Design: $3,000 - $12,000

💡 **Flexible Payment:**
• 30% upfront, 70% on completion
• Installment plans available
• Startup packages with discounts

**Free consultation!**

What's your budget range?`;
    }

    // Technologies - Brief list
    if (message.includes('technology') || message.includes('tech stack') || message.includes('tools')) {
      return `**Our Tech Stack:**

Frontend: React, Next.js, TypeScript
Backend: Node.js, Python, Django
Mobile: Flutter, React Native
AI/ML: TensorFlow, PyTorch, OpenAI
Cloud: AWS, Azure, Google Cloud
Design: Figma, Adobe CC

Need specific tech details?`;
    }

    // Timeline
    if (message.includes('timeline') || message.includes('how long') || message.includes('duration')) {
      return `**Project Timelines:**

⚡ Quick (1-2 weeks): Landing pages, logos, basic edits
📦 Standard (2-6 weeks): Business websites, mobile apps
🏢 Medium (6-12 weeks): E-commerce, AI chatbots
🌐 Complex (3-6 months): Custom platforms, AI systems

**Fast-track available:** Rush delivery with priority

**We can start within 1 week!**

What's your target launch date?`;
    }

    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('get in touch') || message.includes('start')) {
      return `**Get In Touch:**

📧 Email: vishnuvardhanburri19@gmail.com
⏰ Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM
⚡ Response: Within 24 hours

**Next Steps:**
1. Free consultation (30-60 min)
2. Custom proposal & quote
3. Project kickoff!

Ready to start your project?`;
    }

    // About
    if (message.includes('about') || message.includes('vishnu') || message.includes('founder') || message.includes('company')) {
      return `**About Xavira Tech Labs:**

Part of **Xavira Group**
Founded by **Vishnu Vardhan Burri** in 2023

🎯 Mission: Innovative tech & design solutions
🌟 Vision: Global leader in AI, blockchain, cybersecurity
📊 Track Record: 50+ projects, 100% satisfaction

**Why Choose Us:**
• 11+ service offerings
• Cutting-edge technology
• Transparent pricing
• 24/7 support

Want to learn more about our team?`;
    }

    // Process
    if (message.includes('process') || message.includes('how do you work') || message.includes('methodology')) {
      return `**Our Process:**

1️⃣ Discovery (1-2 weeks) - Requirements & planning
2️⃣ Design (2-4 weeks) - UI/UX & architecture
3️⃣ Development (4-16 weeks) - Agile sprints
4️⃣ Testing (1-3 weeks) - QA & optimization
5️⃣ Launch (1-2 weeks) - Deployment & support

**Communication:** Weekly meetings, daily updates

Ready to discuss your project?`;
    }

    // Support
    if (message.includes('support') || message.includes('maintenance') || message.includes('after launch')) {
      return `**Affordable Support Plans:**

🥉 **Basic:** $200-500/month
• Bug fixes & updates
• Monthly backups
• Email support

🥈 **Standard:** $500-1,500/month
• Everything in Basic
• Priority support
• Performance optimization
• 10 hours/month

🥇 **Premium:** $1,500-3,000/month
• 24/7 emergency support
• Dedicated manager
• Unlimited updates

**Free:** 30-60 days post-launch!

Need ongoing support?`;
    }

    // Industry specific - Healthcare
    if (message.includes('healthcare') || message.includes('medical')) {
      return `**Healthcare Solutions:**

• AI diagnostics & medical imaging
• EHR/EMR systems
• Telemedicine platforms
• HIPAA compliance

**Success:** 35% improvement in early detection

Healthcare project in mind?`;
    }

    // E-commerce
    if (message.includes('ecommerce') || message.includes('e-commerce') || message.includes('online store')) {
      return `**E-Commerce Solutions:**

We build:
• Custom e-commerce websites
• Multi-vendor marketplaces
• Payment integration
• AI recommendations

**Pricing:** $15,000 - $50,000
**Example:** EcoStyle - 30% engagement increase

Ready to launch your store?`;
    }

    // Comparison
    if (message.includes('why choose') || message.includes('different') || message.includes('better')) {
      return `**Why Choose Xavira Tech Labs:**

✅ 11+ services under one roof
✅ Budget-friendly pricing (40-60% less than agencies)
✅ Flexible payment plans
✅ Proven track record (50+ projects)
✅ Fast turnaround (1-2 weeks to start)
✅ Free consultation & revisions
✅ Startup-friendly packages

**Client feedback:** ⭐⭐⭐⭐⭐ 100% satisfaction

**Special:** 10% discount for startups & non-profits!

What matters most to you?`;
    }

    // Thank you
    if (message.includes('thank') || message.includes('thanks')) {
      return `You're welcome! 😊

Anything else I can help with?
• Services
• Portfolio
• Pricing
• Getting started`;
    }

    // Goodbye
    if (message.includes('bye') || message.includes('goodbye')) {
      return `Thanks for chatting! 👋

📧 vishnuvardhanburri19@gmail.com
🚀 Ready to start within 1-2 weeks

Feel free to return anytime!`;
    }

    // Yes/No responses
    if (message === 'yes' || message === 'yeah' || message === 'yep') {
      return `Great! What would you like to know more about?

• Detailed pricing
• Project timeline
• Technology details
• Schedule consultation
• See portfolio examples`;
    }

    if (message === 'no' || message === 'nope') {
      return `No problem! Is there something else I can help you with?

Try asking about:
• Our services
• Portfolio projects
• Pricing
• Getting started`;
    }

    // Default - Very short
    return `I can help you with:

• **Services** - What we offer
• **Portfolio** - Our work & case studies
• **Pricing** - Cost estimates
• **Contact** - Get in touch
• **About** - Company info

What would you like to know?`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiResponse: Message = {
        text: getAIResponse(input),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 600 + Math.random() * 600);
  };

  return (
    <>
      {/* Chat Widget */}
      <motion.div
        drag
        dragMomentum={false}
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 rounded-full overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-violet-900/80 to-purple-900/80 border-2 border-violet-500/50 group-hover:border-violet-400"
                style={{
                  boxShadow: '0 0 30px rgba(126, 34, 206, 0.6)',
                }}
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Bot className="w-8 h-8 text-violet-300" />
                <Sparkles className="absolute top-1 right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="absolute bottom-0 right-0 w-[400px] h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: '0 0 60px rgba(126, 34, 206, 0.5)',
              }}
            >
              <div className="h-full backdrop-blur-2xl bg-gradient-to-br from-violet-900/70 to-purple-900/70 border-2 border-violet-500/50 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-violet-500/30 flex items-center justify-between bg-gradient-to-r from-black/30 to-violet-900/30">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-violet-900/80 to-blue-900/80 border-2 border-violet-400/40 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 to-blue-600/40 rounded-full blur-md animate-pulse" />
                      <Bot className="w-6 h-6 text-violet-300 relative z-10" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-white">Xavira AI</h3>
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </div>
                      <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Online
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 transition-colors"
                  >
                    <X className="w-5 h-5 text-violet-400" />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-violet-500/50 scrollbar-track-transparent">
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.isUser ? 'justify-end' : 'justify-start items-end'}`}
                    >
                      {!msg.isUser && (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-900/80 to-blue-900/80 border border-violet-400/40 flex items-center justify-center mr-2 flex-shrink-0">
                          <Bot className="w-4 h-4 text-violet-300" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] p-3 rounded-xl whitespace-pre-line text-sm ${
                          msg.isUser
                            ? 'bg-gradient-to-r from-blue-900 to-violet-900 text-white rounded-br-none'
                            : 'bg-black/50 border border-violet-500/30 text-gray-200 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start items-end"
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-900/80 to-blue-900/80 border border-violet-400/40 flex items-center justify-center mr-2">
                        <Bot className="w-4 h-4 text-violet-300" />
                      </div>
                      <div className="bg-black/50 border border-violet-500/30 p-3 rounded-xl rounded-bl-none">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-violet-500/30 bg-gradient-to-r from-black/30 to-violet-900/30">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask me anything..."
                      className="flex-1 px-4 py-2.5 bg-black/60 border border-violet-500/30 rounded-lg focus:border-violet-400 focus:outline-none text-white placeholder-gray-400 text-sm"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="p-2.5 bg-gradient-to-r from-blue-900 to-violet-900 rounded-lg hover:shadow-[0_0_20px_rgba(126,34,206,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Xavira AI Assistant
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
