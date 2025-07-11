
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer Intern",
      company: "Betechnos Private Limited",
      location: "Remote, Pune",
      period: "2024 - 2025",
      type: "Full-time",
      description: "Developed a cab booking application for the parent company, focusing on mobile app development and team collaboration.",
      achievements: [
        "Contributed to a Company Product 'Cabbmate' a mobile application for cab sharing in urban areas",
        "Led a team of Flutter Developers",
        "Developed scalable mobile solutions for urban transportation",
        "Implemented modern Flutter development practices"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"]
    },
    {
      title: "Android Developer",
      company: "Teachnook EdTech Private Limited",
      location: "Remote, Pune",
      period: "2024 - 2025",
      type: "Virtual Internship",
      description: "Went through a mentor-led learning opportunity focused on Android development with industry experts.",
      achievements: [
        "Learned Android Development by Industry-led Mentors",
        "Built & Contributed to multiple projects",
        "Gained hands-on experience with modern Android development practices",
        "Collaborated with mentors and peers in a virtual learning environment"
      ],
      technologies: ["Android SDK", "Java", "Kotlin", "Mobile Development"]
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
