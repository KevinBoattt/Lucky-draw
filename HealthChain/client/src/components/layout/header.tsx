import { useTheme } from "@/hooks/use-theme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed left-0 right-0 top-3 flex justify-center pointer-events-none z-50">
      <div className="w-full max-w-site mx-5 glass-panel pointer-events-auto">
        <div className="flex items-center justify-between p-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent2 to-accent-custom flex items-center justify-center text-lg font-extrabold text-slate-900">
              K
            </div>
            <div>
              <div className="text-sm font-bold">Abele Ifeanyi Kelvin</div>
              <div className="text-xs text-muted-custom">cybersecurity • design • trading</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm px-4 py-2 rounded-lg hover:text-accent-custom hover:bg-white/5 transition-all duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-sm px-4 py-2 rounded-lg hover:text-accent-custom hover:bg-white/5 transition-all duration-200"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm px-4 py-2 rounded-lg hover:text-accent-custom hover:bg-white/5 transition-all duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm px-4 py-2 rounded-lg hover:text-accent-custom hover:bg-white/5 transition-all duration-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm px-4 py-2 rounded-lg hover:text-accent-custom hover:bg-white/5 transition-all duration-200"
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="text-sm px-4 py-2 rounded-lg hover:text-accent-custom hover:bg-white/5 transition-all duration-200"
              title="Toggle theme"
            >
              <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
