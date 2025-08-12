import { useQuery } from "@tanstack/react-query";
import type { Experience } from "@shared/schema";

export default function Experience() {
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ['/api/experience'],
  });

  if (isLoading) {
    return (
      <section id="experience" className="glass-panel p-8 mb-8 reveal">
        <h2 className="text-2xl font-bold text-accent-custom mb-5 flex items-center gap-3">
          <i className="fas fa-briefcase"></i>
          Experience & Timeline
        </h2>
        <div className="space-y-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-panel rounded-xl p-6 border border-white/5 animate-pulse">
              <div className="h-4 w-32 bg-muted/20 rounded mb-2"></div>
              <div className="h-6 w-64 bg-muted/20 rounded mb-2"></div>
              <div className="h-4 w-48 bg-muted/20 rounded mb-3"></div>
              <div className="h-16 bg-muted/20 rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="glass-panel p-8 mb-8 reveal">
      <h2 className="text-2xl font-bold text-accent-custom mb-5 flex items-center gap-3">
        <i className="fas fa-briefcase"></i>
        Experience & Timeline
      </h2>
      
      <div className="relative pl-8">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-custom to-accent2"></div>
        
        {experiences?.map((exp, index) => (
          <div
            key={exp.id}
            className="relative mb-8 bg-panel rounded-xl p-6 border border-white/5"
          >
            <div className="absolute -left-6 top-6 w-3 h-3 bg-accent-custom rounded-full border-4 border-bg-2"></div>
            
            <div className="text-accent-custom font-semibold text-sm mb-2">
              {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
            </div>
            
            <h3 className="font-semibold text-lg mb-2">{exp.title}</h3>
            
            <div className="text-muted-custom text-sm mb-3">{exp.company}</div>
            
            <p className="text-muted-custom leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
