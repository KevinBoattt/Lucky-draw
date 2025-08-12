import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import type { Skill } from "@shared/schema";

export default function Skills() {
  const { data: skills, isLoading } = useQuery<Skill[]>({
    queryKey: ['/api/skills'],
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skills || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width) {
                setTimeout(() => {
                  (bar as HTMLElement).style.width = width;
                }, 300);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skills, isLoading]);

  if (isLoading) {
    return (
      <div className="glass-panel p-6 reveal">
        <h3 className="text-lg font-semibold text-accent-custom mb-5 flex items-center gap-2">
          <i className="fas fa-chart-bar"></i>
          Core Skills
        </h3>
        <div className="space-y-5">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-panel rounded-xl p-5 border border-white/5 animate-pulse">
              <div className="flex justify-between items-center mb-3">
                <div className="h-4 w-24 bg-muted/20 rounded"></div>
                <div className="h-4 w-8 bg-muted/20 rounded"></div>
              </div>
              <div className="h-2 bg-muted/20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="glass-panel p-6 reveal">
      <h3 className="text-lg font-semibold text-accent-custom mb-5 flex items-center gap-2">
        <i className="fas fa-chart-bar"></i>
        Core Skills
      </h3>
      
      <div className="space-y-5">
        {skills?.map((skill) => (
          <div key={skill.id} className="bg-panel rounded-xl p-5 border border-white/5">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-accent-custom font-semibold text-sm">
                {skill.percentage}%
              </span>
            </div>
            
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="skill-progress h-full bg-gradient-to-r from-accent-custom to-accent2 rounded-full transition-all duration-1500 ease-out"
                data-width={`${skill.percentage}%`}
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
