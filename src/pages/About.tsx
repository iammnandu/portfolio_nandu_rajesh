import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Globe, Smartphone, Server } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
          <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <p className="text-foreground mb-4">
              I'm a passionate Software Engineer with 3+ years of experience in building scalable web applications 
              and working with cutting-edge technologies. Currently based in Bangalore, India.
            </p>
            <p className="text-foreground mb-6">
              I specialize in full-stack development with expertise in React, Node.js, and cloud technologies. 
              I love creating efficient, user-friendly solutions and am always eager to learn new technologies 
              and take on challenging projects.
            </p>

            {/* Quote */}
            <div className="bg-accent/50 border-l-4 border-primary p-4 rounded-r-lg">
              <blockquote className="text-foreground italic">
                "The only way to do great work is to love what you do."
              </blockquote>
              <cite className="text-muted-foreground text-sm mt-2 block">— Steve Jobs</cite>
            </div>
          </Card>

          {/* What I'm Actually Into */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">What I'm Passionate About</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Full-Stack Development</h3>
                    <p className="text-muted-foreground">Building end-to-end web applications with modern technologies like React, Node.js, and TypeScript.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cloud & DevOps</h3>
                    <p className="text-muted-foreground">Experienced with AWS, containerization, and CI/CD pipelines for scalable deployments.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Database Design</h3>
                    <p className="text-muted-foreground">Designing efficient database schemas and working with both SQL and NoSQL databases.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Mobile Development</h3>
                    <p className="text-muted-foreground">Creating responsive web apps and working with React Native for cross-platform mobile solutions.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Now Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Currently Working On</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Portfolio Enhancement</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Building an impressive portfolio website</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>⚛️ React</span>
                    <span>🎨 TypeScript</span>
                    <span>💨 Tailwind</span>
                  </div>
                </div>
                <p className="text-sm text-foreground">Creating a modern, responsive portfolio to showcase my work and skills.</p>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Skill Development</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Continuous learning and improvement</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>☁️ AWS</span>
                    <span>🐳 Docker</span>
                    <span>⚡ Next.js</span>
                  </div>
                </div>
                <p className="text-sm text-foreground">Exploring cloud technologies and modern frameworks to stay current with industry trends.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}