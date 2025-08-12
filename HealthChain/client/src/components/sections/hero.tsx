import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const { toast } = useToast();
  const [typedText, setTypedText] = useState("");
  const fullText = "Cybersecurity Expert • Designer • Trader";

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  const handleResumeDownload = () => {
    const resumeHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Abele Ifeanyi Kelvin - Resume</title>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; color: #333; }
          h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
          h2 { color: #34495e; margin-top: 30px; }
          .contact-info { background: #ecf0f1; padding: 15px; border-radius: 5px; margin: 20px 0; }
          .skills { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }
          .skill-item { background: #3498db; color: white; padding: 8px 12px; border-radius: 20px; text-align: center; font-size: 14px; }
          .experience-item { margin-bottom: 20px; padding: 15px; border-left: 4px solid #3498db; background: #f8f9fa; }
          .date { color: #7f8c8d; font-style: italic; }
          ul { padding-left: 20px; }
          li { margin-bottom: 5px; }
        </style>
      </head>
      <body>
        <h1>Abele Ifeanyi Kelvin</h1>
        <p><em>Cybersecurity Expert • UI/UX Designer • Trading Analyst</em></p>
        
        <div class="contact-info">
          <strong>Contact Information</strong><br>
          📧 kevokeka6@gmail.com<br>
          📱 WhatsApp: +2348160729143<br>
          🔗 GitHub: github.com/kevinboattt<br>
          📍 Available for remote work
        </div>
        
        <h2>Professional Summary</h2>
        <p>Passionate cybersecurity professional with expertise in threat detection, secure system design, and risk assessment. Experienced in creating intuitive user interfaces for security applications and developing automated trading strategies. Committed to continuous learning and staying current with emerging threats and technologies.</p>
        
        <h2>Core Skills</h2>
        <div class="skills">
          <div class="skill-item">Network Security</div>
          <div class="skill-item">Threat Analysis</div>
          <div class="skill-item">UI/UX Design</div>
          <div class="skill-item">Python Programming</div>
          <div class="skill-item">Risk Management</div>
          <div class="skill-item">Trading Analysis</div>
        </div>
        
        <h2>Experience</h2>
        <div class="experience-item">
          <h3>Senior Cybersecurity Analyst</h3>
          <div class="date">2024 - Present | SecureTech Solutions</div>
          <ul>
            <li>Leading threat hunting initiatives and implementing advanced security monitoring systems</li>
            <li>Reduced security incidents by 40% through proactive threat detection and response automation</li>
            <li>Developed and maintained security protocols for enterprise environments</li>
          </ul>
        </div>
        
        <div class="experience-item">
          <h3>UI/UX Designer</h3>
          <div class="date">2023 - 2024 | DesignCorp Studio</div>
          <ul>
            <li>Designed user interfaces for enterprise security applications and financial trading platforms</li>
            <li>Improved user engagement by 35% through data-driven design decisions and usability testing</li>
            <li>Created design systems for consistent user experience across multiple products</li>
          </ul>
        </div>
        
        <h2>Key Projects</h2>
        <ul>
          <li><strong>SecureNet Monitoring Dashboard:</strong> Real-time network security monitoring platform with AI-powered threat detection</li>
          <li><strong>CryptoTrader Pro:</strong> Advanced cryptocurrency trading bot with machine learning algorithms</li>
          <li><strong>DesignFlow Studio:</strong> Collaborative design platform with real-time collaboration features</li>
        </ul>
        
        <h2>Technical Expertise</h2>
        <ul>
          <li><strong>Security Tools:</strong> SIEM platforms, vulnerability scanners, penetration testing tools</li>
          <li><strong>Programming:</strong> Python, JavaScript, SQL, bash scripting</li>
          <li><strong>Design Tools:</strong> Figma, Adobe Creative Suite, Sketch</li>
          <li><strong>Trading Platforms:</strong> MetaTrader, TradingView, custom algorithmic solutions</li>
        </ul>
        
        <h2>Certifications & Learning</h2>
        <ul>
          <li>Pursuing CISSP (Certified Information Systems Security Professional)</li>
          <li>CEH (Certified Ethical Hacker) - In Progress</li>
          <li>AWS Security Specialty - Studying</li>
          <li>Continuous learning through industry conferences and online platforms</li>
        </ul>
        
        <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ecf0f1; text-align: center; color: #7f8c8d;">
          <p>Generated from professional portfolio | kevokeka6@gmail.com</p>
        </footer>
      </body>
      </html>
    `;
    
    const blob = new Blob([resumeHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Abele_Ifeanyi_Kelvin_Resume.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Resume Downloaded!",
      description: "Your resume has been saved as an HTML file for easy printing or sharing.",
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kevokeka6@gmail.com');
      toast({
        title: "Email Copied!",
        description: "kevokeka6@gmail.com has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy email",
        description: "Please copy manually: kevokeka6@gmail.com",
        variant: "destructive",
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-28 pb-16 text-center relative">
      <div className="max-w-site mx-auto px-5">
        <div className="max-w-3xl mx-auto reveal">
          <div className="text-sm font-medium text-muted-custom mb-4 uppercase tracking-wider">
            Student • Builder • No-nonsense
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            Abele Ifeanyi <span className="gradient-text">Kelvin</span>
          </h1>
          
          <div className="text-xl text-accent-custom font-semibold mb-5 min-h-[28px]">
            {typedText}
          </div>
          
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about securing digital landscapes, crafting elegant designs, and navigating financial markets. 
            I solve complex problems through systematic thinking and continuous learning.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-custom to-accent2 text-slate-900 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </button>
            
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/10 text-accent-custom rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:border-accent-custom"
            >
              <i className="fas fa-envelope"></i>
              Copy Email
            </button>
            
            <a
              href="https://wa.me/2348160729143"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/10 text-accent-custom rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:border-accent-custom"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
            
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/10 text-accent-custom rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:border-accent-custom"
            >
              <i className="fas fa-paper-plane"></i>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
