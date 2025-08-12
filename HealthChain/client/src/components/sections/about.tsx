export default function About() {
  return (
    <section id="about" className="glass-panel p-8 mb-8 reveal">
      <h2 className="text-2xl font-bold text-accent-custom mb-5 flex items-center gap-3">
        <i className="fas fa-user"></i>
        About Me
      </h2>
      
      <p className="mb-6 leading-relaxed text-blue-100">
        I'm a cybersecurity enthusiast with a passion for protecting digital assets and designing secure systems. 
        When I'm not analyzing threats or building security frameworks, I'm creating intuitive designs or 
        exploring trading strategies in financial markets.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="text-center p-4">
          <i className="fas fa-shield-alt text-2xl text-accent-custom mb-3 block"></i>
          <div className="font-semibold mb-2">Security Expert</div>
          <div className="text-muted-custom text-sm">Threat analysis & prevention</div>
        </div>
        
        <div className="text-center p-4">
          <i className="fas fa-palette text-2xl text-accent-custom mb-3 block"></i>
          <div className="font-semibold mb-2">Designer</div>
          <div className="text-muted-custom text-sm">UI/UX & Visual Design</div>
        </div>
        
        <div className="text-center p-4">
          <i className="fas fa-chart-line text-2xl text-accent-custom mb-3 block"></i>
          <div className="font-semibold mb-2">Trader</div>
          <div className="text-muted-custom text-sm">Market analysis & strategy</div>
        </div>
      </div>
    </section>
  );
}
