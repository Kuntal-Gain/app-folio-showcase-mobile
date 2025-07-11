
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "FoodieHub",
      description: "A comprehensive food delivery app with real-time tracking, AI-powered recommendations, and seamless payment integration. Built for both iOS and Android with React Native.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Stripe API", "Google Maps"],
      featured: true,
      metrics: ["2M+ Downloads", "4.8★ Rating", "150+ Cities"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "MindfulSpace",
      description: "A meditation and wellness app featuring guided sessions, progress tracking, and community features. Designed with a focus on mental health and user engagement.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Dart", "Supabase", "Stripe"],
      featured: true,
      metrics: ["500K+ Users", "4.9★ Rating", "Premium Features"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "CryptoTracker Pro",
      description: "Advanced cryptocurrency portfolio management app with real-time market data, price alerts, and comprehensive analytics dashboard.",
      image: "/placeholder.svg",
      technologies: ["Swift", "iOS", "Core Data", "REST APIs"],
      featured: false,
      metrics: ["1M+ Downloads", "4.7★ Rating", "Real-time Data"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "FitnessCoach AI",
      description: "Personalized fitness app with AI-powered workout recommendations, progress tracking, and social features for motivation and accountability.",
      image: "/placeholder.svg",
      technologies: ["Kotlin", "Android", "TensorFlow", "Firebase"],
      featured: false,
      metrics: ["750K+ Users", "4.6★ Rating", "AI Powered"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of mobile applications that have made an impact in the market
          </p>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 ${project.featured ? 'border-purple-500/30' : ''}`}>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 relative">
                  <div className="aspect-video lg:aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Smartphone size={48} className="text-purple-400" />
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                      <Star size={12} className="mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                
                <div className="lg:w-2/3 p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-purple-400/50 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                    {project.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        {metric}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Github size={16} className="mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
