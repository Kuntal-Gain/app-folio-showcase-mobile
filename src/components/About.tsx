
import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      title: "6 Months Experience",
      description: "Building mobile apps with modern frameworks and native technologies"
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: "5 Apps Developed",
      description: "Successfully deployed apps with great user experiences across platforms"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Cross-Platform Expert",
      description: "Specialized in Flutter, React Native, and Android development"
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      title: "Design-First Approach",
      description: "Creating beautiful, intuitive user experiences with modern design principles"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate mobile app developer with a keen eye for design and a love for creating 
            seamless user experiences. My journey in mobile development has led me to work with 
            startups and enterprises, building apps that solve real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover-scale">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border-purple-500/20 p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              "I believe great mobile apps are born from the perfect blend of cutting-edge technology, 
              intuitive design, and deep understanding of user needs. Every line of code I write and 
              every pixel I place is crafted with the user's journey in mind."
            </p>
            <p className="text-purple-400 font-semibold mt-4">- Kuntal Gain</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
