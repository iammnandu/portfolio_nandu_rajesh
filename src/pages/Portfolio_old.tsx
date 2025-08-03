import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full-Stack",
      image: "/api/placeholder/300/200",
      description: "Full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com/nandurajesh/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "Task Management App", 
      category: "Frontend",
      image: "/api/placeholder/300/200",
      description: "Modern task management application built with React and TypeScript. Features drag-and-drop functionality and real-time updates.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      github: "https://github.com/nandurajesh/task-manager",
      demo: "https://task-manager-demo.vercel.app"
    },
    {
      title: "REST API Server",
      category: "Backend", 
      image: "/api/placeholder/300/200",
      description: "Scalable REST API server with authentication, rate limiting, and comprehensive documentation.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
      github: "https://github.com/nandurajesh/rest-api-server"
    },
    {
      title: "Weather App",
      category: "Frontend",
      image: "/api/placeholder/300/200",
      description: "Responsive weather application with location-based forecasts and beautiful UI animations.",
      technologies: ["React", "CSS3", "Weather API", "Geolocation"],
      github: "https://github.com/nandurajesh/weather-app",
      demo: "https://weather-app-demo.vercel.app"
    },
    {
      title: "React Native Fitness App",
      category: "Mobile",
      image: "/api/placeholder/300/200",
      description: "Cross-platform fitness tracking app with workout plans and progress monitoring.",
      technologies: ["React Native", "Expo", "AsyncStorage", "Charts"],
      github: "https://github.com/nandurajesh/fitness-app"
    },
    {
      title: "Real-time Chat Application",
      category: "Full-Stack", 
      image: "/api/placeholder/300/200",
      description: "Real-time chat application with multiple rooms, file sharing, and user presence indicators.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com/nandurajesh/chat-app",
      demo: "https://chat-app-demo.vercel.app"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      <div className="max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Portfolio</h1>
          <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter 
                  ? "bg-gradient-primary text-primary-foreground" 
                  : "hover:bg-accent"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{project.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary text-primary-foreground"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
                </h3>
                <Badge variant="secondary" className="text-xs mb-2">
                  {project.category}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}