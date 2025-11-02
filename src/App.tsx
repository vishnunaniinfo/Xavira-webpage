import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { AdminPanel } from './components/AdminPanel';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // SEO: Update page title and meta description based on current page
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Xavira Tech Labs | Redefining Tech & Design Excellence',
      about: 'About Us | Xavira Tech Labs - Founded by Vishnu Vardhan Burri',
      services: 'Our Services | Web Development, AI, Design & More | Xavira Tech Labs',
      portfolio: 'Portfolio | Our Work & Case Studies | Xavira Tech Labs',
      careers: 'Careers | Join the Xavira Family | Xavira Tech Labs',
      contact: 'Contact Us | Get In Touch | Xavira Tech Labs',
    };

    const descriptions: Record<string, string> = {
      home: 'Xavira Tech Labs - Part of Xavira Group. A futuristic tech and design powerhouse offering AI-driven solutions, Web 3.0 development, cybersecurity, and visionary design services.',
      about: 'Learn about Xavira Tech Labs, founded by Vishnu Vardhan Burri. Specializing in AI, blockchain, cybersecurity, and immersive design solutions. Part of Xavira Group.',
      services: 'Comprehensive tech services from Xavira Tech Labs: Web & App Development, AI & Automation, Branding, UI/UX Design, Digital Marketing, Cybersecurity, and more.',
      portfolio: 'Explore Xavira Tech Labs portfolio of successful projects including NovaSecure, StellarApp, and BrandLift. Case studies and results showcased.',
      careers: 'Join Xavira Tech Labs family. Open positions in AI, Cybersecurity, Full Stack Development, DevOps, Creative Design, and Operations. Freshers and experienced welcome.',
      contact: 'Contact Xavira Tech Labs for innovative tech and design solutions. Email: xavira.group@gmail.com. Part of Xavira Group.',
    };

    document.title = titles[currentPage] || titles.home;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descriptions[currentPage] || descriptions.home);

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Xavira Tech Labs, Xavira Group, Vishnu Vardhan Burri, Web Development, AI Solutions, Cybersecurity, UI/UX Design, Digital Marketing, Blockchain, Web3, Machine Learning');
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio setCurrentPage={setCurrentPage} />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className={`min-h-screen bg-black ${darkMode ? 'dark' : ''}`}>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="min-h-screen">
            {renderPage()}
          </main>
          <Footer onNavigateToAdmin={() => setCurrentPage('admin')} />
          <AIAssistant />
        </div>
      )}
    </>
  );
}
