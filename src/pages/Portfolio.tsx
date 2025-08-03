import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "AI/ML",
    "Computer Vision",
    "Robotics",
    "Web Development",
  ];

  const projects = [
    {
      title: "Autonomous Industrial AGV Cart",
      category: "Robotics",
      description:
        "Self-navigating cart for industrial automation and parts transportation using advanced computer vision and navigation algorithms.",
      technologies: [
        "ROS2",
        "YOLO",
        "Jetson Orin Nano",
        "Computer Vision",
        "Python",
      ],
      github: "https://github.com/iammnandu/agv-cart",
    },
    {
      title: "AI Jewelry Stock Measurement System",
      category: "Computer Vision",
      description:
        "Automated inventory system with high accuracy in stock counting using computer vision and deep learning techniques.",
      technologies: [
        "YOLOv8",
        "Paddle OCR",
        "Python",
        "OpenCV",
        "Deep Learning",
      ],
      github: "https://github.com/iammnandu/jewelry-measurement",
    },
    {
      title: "Big Fuse Detector for EV Units",
      category: "Computer Vision",
      description:
        "Automated fuse detection system for power distribution box quality control in electric vehicles.",
      technologies: [
        "YOLOv8",
        "Computer Vision",
        "Industrial Automation",
        "Python",
      ],
      github: "https://github.com/iammnandu/fuse-detector",
    },
    {
      title: "SnapFlow - AI Event Photography Management",
      category: "AI/ML",
      description:
        "AI-powered photo sorting with face recognition and privacy controls for event management.",
      technologies: [
        "MERN",
        "Django",
        "OpenCV",
        "DeepFace",
        "ArcFace",
        "MySQL",
        "Celery",
      ],
      github: "https://github.com/iammnandu/snapflow",
      demo: "https://snapflow-demo.vercel.app",
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "Personal portfolio website built with React, TypeScript, and Tailwind CSS showcasing projects and experience.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "shadcn/ui",
      ],
      github: "https://github.com/iammnandu/portfolio",
      demo: "https://nandurajesh.dev",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
            <Card
              key={index}
              className="group overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {project.title}
                    </p>
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
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary text-primary-foreground"
                      onClick={() => window.open(project.demo, "_blank")}
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
            <p className="text-muted-foreground">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
