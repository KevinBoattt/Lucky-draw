import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

export default function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  if (isLoading) {
    return (
      <section className="glass-panel p-8 mb-8 reveal">
        <h2 className="text-2xl font-bold text-accent-custom mb-5 flex items-center gap-3">
          <i className="fas fa-quote-left"></i>
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map(i => (
            <div key={i} className="bg-panel rounded-xl p-6 border border-white/5 animate-pulse">
              <div className="h-20 bg-muted/20 rounded mb-5"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted/20 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-muted/20 rounded mb-2"></div>
                  <div className="h-3 bg-muted/20 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="glass-panel p-8 mb-8 reveal">
      <h2 className="text-2xl font-bold text-accent-custom mb-5 flex items-center gap-3">
        <i className="fas fa-quote-left"></i>
        Testimonials
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-panel rounded-xl p-6 border border-white/5 relative"
          >
            <p className="italic mb-5 leading-relaxed">
              "{testimonial.quote}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent2 to-accent-custom flex items-center justify-center text-slate-900 font-bold">
                {testimonial.avatar}
              </div>
              
              <div className="flex-1">
                <div className="font-semibold mb-1">{testimonial.name}</div>
                <div className="text-muted-custom text-sm">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
