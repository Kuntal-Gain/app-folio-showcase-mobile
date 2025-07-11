
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Mobile Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead mobile development team building enterprise-grade applications. Architected and developed 5 major mobile apps using React Native and Flutter, serving over 3 million users worldwide.",
      achievements: [
        "Increased app performance by 40% through optimization",
        "Led team of 6 developers across multiple projects",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior developers and established coding standards"
      ],
      technologies: ["React Native", "Flutter", "AWS", "GraphQL"]
    },
    {
      title: "Mobile App Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained consumer-facing mobile applications from concept to App Store. Collaborated with design and product teams to create intuitive user experiences.",
      achievements: [
        "Built 3 apps from scratch with 1M+ combined downloads",
        "Achieved 4.8+ star rating across all published apps",
        "Reduced app crash rate by 85% through robust testing",
        "Integrated multiple third-party APIs and payment systems"
      ],
      technologies: ["Swift", "Kotlin", "Firebase", "REST APIs"]
    },
    {
      title: "Junior iOS Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: "Focused on iOS development for various client projects. Gained expertise in native iOS development and app store optimization strategies.",
      achievements: [
        "Developed 10+ client iOS applications",
        "Improved app store rankings through ASO techniques",
        "Collaborated with international teams across time zones",
        "Maintained 99% client satisfaction rate"
      ],
      technologies: ["Swift", "Objective-C", "Core Data", "UIKit"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300">
            My journey through the mobile development landscape
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 p-6 lg:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <div className="flex items-center text-purple-400">
                      <Building size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 lg:ml-4">
                  <Badge variant="outline" className="border-blue-400/50 text-blue-300">
                    <Calendar size={12} className="mr-1" />
                    {exp.period}
                  </Badge>
                  <Badge variant="outline" className="border-green-400/50 text-green-300">
                    {exp.type}
                  </Badge>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-white/10 text-gray-300">
                    {tech}
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
