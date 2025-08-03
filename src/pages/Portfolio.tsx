import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Machine Learning", "Deep Learning", "Web Development", "Python Development"];

  const projects = [
    {
      title: "Player Value Prediction",
      category: "Machine Learning",
      image: "/api/placeholder/300/200",
      description: "Football player market value prediction using machine learning algorithms."
    },
    {
      title: "Movie Recommender System", 
      category: "Machine Learning",
      image: "/api/placeholder/300/200",
      description: "Collaborative filtering based movie recommendation system."
    },
    {
      title: "Cat Vs Dog Classifier",
      category: "Machine Learning", 
      image: "/api/placeholder/300/200",
      description: "Image classification model to distinguish between cats and dogs."
    },
    {
      title: "EDA Projects Collection",
      category: "Machine Learning",
      image: "/api/placeholder/300/200",
      description: "Collection of exploratory data analysis projects."
    },
    {
      title: "Guess The Footballer By Eyes",
      category: "Deep learning",
      image: "/api/placeholder/300/200",
      description: "Deep learning model to identify footballers by their eyes."
    },
    {
      title: "Seq2Seq Chatbot",
      category: "Deep learning", 
      image: "/api/placeholder/300/200",
      description: "Sequence to sequence neural network for chatbot conversations."
    },
    {
      title: "GPT From Scratch",
      category: "Deep learning",
      image: "/api/placeholder/300/200",
      description: "Implementation of GPT architecture from scratch."
    },
    {
      title: "Image Captioning",
      category: "Deep learning",
      image: "/api/placeholder/300/200", 
      description: "Neural network model for generating image captions."
    },
    {
      title: "Spotify Clone",
      category: "Web Development",
      image: "/api/placeholder/300/200",
      description: "Full-stack music streaming application clone."
    },
    {
      title: "Netflix Clone",
      category: "Web Development",
      image: "/api/placeholder/300/200",
      description: "Movie streaming platform with modern UI/UX."
    },
    {
      title: "Blackjack Game",
      category: "Python Development",
      image: "/api/placeholder/300/200",
      description: "Interactive blackjack card game built with Python."
    },
    {
      title: "AI Snake Game", 
      category: "Python Development",
      image: "/api/placeholder/300/200",
      description: "Snake game with AI agent using reinforcement learning."
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
            <Card key={index} className="group overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
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
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
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