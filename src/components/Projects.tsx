
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Smartphone, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Socialseed",
      description: "A Dynamic Social Media for modern users with AI powered captioning, image compressions, MFA authentication",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Firebase", "REST", "Gemini API"],
      featured: true,
      metrics: ["AI Powered", "MFA Auth", "Image Compression"],
      githubUrl: "https://github.com/Kuntal-Gain/Socialseed"
    },
    {
      title: "SmartJournal",
      description: "An AI based Journal System for modern users with exceptional UX, AI memory stored to a vector DB can remember any previous occurrences.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Pinecone Vector DB", "Gemini Embedding"],
      featured: true,
      metrics: ["AI Memory", "Vector DB", "Smart Recall"],
      githubUrl: "https://github.com/Kuntal-Gain/SmartJournal"
    },
    {
      title: "flutter_datetime_format",
      description: "A Flutter Plugin for developing date time providers for developers with less code",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Dart"],
      featured: false,
      metrics: ["Flutter Plugin", "Developer Tool", "Easy Integration"],
      githubUrl: "https://github.com/Kuntal-Gain/flutter_datetime_format"
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
            A showcase of mobile applications and tools that demonstrate modern development practices
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
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-gray-800"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Source Code
                      </a>
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
