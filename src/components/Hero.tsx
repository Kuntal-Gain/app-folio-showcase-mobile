
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Smartphone } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Smartphone size={48} className="text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Kuntal Gain
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Mobile App Developer & UI/UX Designer
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative mobile experiences with Flutter, React Native, and Android development. 
            Passionate about creating apps that users love and businesses need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Kuntal-Gain/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors hover-scale">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/kuntal-gain/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors hover-scale">
              <Linkedin size={24} />
            </a>
            <a href="mailto:work.kuntalgain@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors hover-scale">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};
