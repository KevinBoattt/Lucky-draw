import { useEffect } from "react";
import ParticleBackground from "@/components/layout/particle-background";
import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Blog from "@/components/sections/blog";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Testimonials from "@/components/sections/testimonials";
import Skills from "@/components/sidebar/skills";
import Certifications from "@/components/sidebar/certifications";
import Contact from "@/components/sidebar/contact";
import BackToTop from "@/components/ui/back-to-top";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Header />
      
      <Hero />
      
      <div className="max-w-site mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mb-20 items-start">
          {/* Main Content */}
          <main>
            <About />
            <Blog />
            <Projects />
            <Experience />
            <Testimonials />
          </main>

          {/* Sidebar */}
          <aside className="sticky top-24 flex flex-col gap-6">
            <Skills />
            <Certifications />
            <Contact />
          </aside>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
