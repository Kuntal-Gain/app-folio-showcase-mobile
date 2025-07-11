
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Code, Palette, Database, Cloud, Settings } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Mobile Frameworks",
      skills: ["React Native", "Flutter", "Expo", "Ionic", "Xamarin"]
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Native Development",
      skills: ["Swift (iOS)", "Kotlin", "Java", "Objective-C", "Android SDK"]
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      title: "UI/UX Design",
      skills: ["Figma", "Sketch", "Adobe XD", "Material Design", "Human Interface Guidelines"]
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Backend & APIs",
      skills: ["Firebase", "Supabase", "REST APIs", "GraphQL", "Node.js"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-yellow-400" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "App Store Connect", "Play Console", "CI/CD"]
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-400" />,
      title: "Tools & Testing",
      skills: ["Git", "Jest", "Detox", "Flipper", "Android Studio", "Xcode"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building world-class mobile applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover-scale">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-white/10 text-gray-300 hover:bg-purple-500/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
