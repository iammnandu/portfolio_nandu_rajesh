import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title:
        "Building Scalable React Applications: Best Practices and Patterns",
      date: "August 15, 2025",
      author: "Nandu Rajesh",
      excerpt:
        "Learn how to structure and build maintainable React applications using modern patterns and best practices.",
      readTime: "5 min read",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      title: "Node.js Performance Optimization: Tips and Tricks",
      date: "August 10, 2025",
      author: "Nandu Rajesh",
      excerpt:
        "Discover performance optimization techniques to make your Node.js applications faster and more efficient.",
      readTime: "7 min read",
      tags: ["Node.js", "Performance", "Backend"],
    },
    {
      title: "TypeScript in 2025: Advanced Features and Best Practices",
      date: "August 5, 2025",
      author: "Nandu Rajesh",
      excerpt:
        "Explore the latest TypeScript features and how they can improve your development workflow.",
      readTime: "6 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
    },
    {
      title: "Deploying React Apps to AWS: A Complete Guide",
      date: "August 1, 2025",
      author: "Nandu Rajesh",
      excerpt:
        "Step-by-step guide to deploying React applications on AWS using various services and best practices.",
      readTime: "10 min read",
      tags: ["AWS", "React", "Deployment"],
    },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            Thoughts, tutorials, and insights about web development and
            technology.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Message */}
        <Card className="p-6 md:p-8 bg-gradient-card border-0 shadow-card mt-8 text-center">
          <div className="space-y-4">
            <div className="text-4xl">✍️</div>
            <h3 className="text-xl font-semibold text-foreground">
              More Posts Coming Soon!
            </h3>
            <p className="text-muted-foreground">
              I'm working on more articles about web development, cloud
              technologies, and software engineering best practices.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
