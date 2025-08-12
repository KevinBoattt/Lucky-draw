const certifications = [
  { id: 1, name: "CISSP", issuer: "(ISC)²", icon: "fas fa-shield-alt" },
  { id: 2, name: "CEH", issuer: "EC-Council", icon: "fas fa-bug" },
  { id: 3, name: "AWS Security", issuer: "Amazon", icon: "fab fa-aws" },
  { id: 4, name: "UX Design", issuer: "Google", icon: "fas fa-paint-brush" },
];

export default function Certifications() {
  return (
    <div className="glass-panel p-6 reveal">
      <h3 className="text-lg font-semibold text-accent-custom mb-5 flex items-center gap-2">
        <i className="fas fa-certificate"></i>
        Certifications
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-panel rounded-xl p-4 border border-white/5 text-center transition-all duration-300 hover:bg-panel-hover hover:-translate-y-1"
          >
            <i className={`${cert.icon} text-2xl text-accent-custom mb-2 block`}></i>
            <div className="font-semibold text-sm mb-1">{cert.name}</div>
            <div className="text-muted-custom text-xs">{cert.issuer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
