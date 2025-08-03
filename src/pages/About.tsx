import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, Bot, Camera, Code, Cpu } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h1>
          <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Introduction */}
          <Card className="p-4 md:p-6 bg-gradient-card border-0 shadow-card">
            <p className="text-foreground mb-4 text-sm md:text-base">
              I'm a passionate AI/ML Engineer currently pursuing B.Tech in
              Artificial Intelligence at Muthoot Institute of Technology and
              Science. I specialize in computer vision,
              robotics, and full-stack development.
            </p>
            <p className="text-foreground mb-6 text-sm md:text-base">
              I have hands-on experience developing autonomous systems,
              implementing deep learning models, and working with cutting-edge
              technologies like ROS2, YOLO, and various AI frameworks. I combine
              technical expertise in AI with practical hardware experience using
              embedded systems.
            </p>

            {/* Quote */}
            <div className="bg-accent/50 border-l-4 border-primary p-4 rounded-r-lg">
              <blockquote className="text-foreground italic text-sm md:text-base">
                "The future belongs to those who believe in the beauty of their
                dreams."
              </blockquote>
              <cite className="text-muted-foreground text-xs md:text-sm mt-2 block">
                — Eleanor Roosevelt
              </cite>
            </div>
          </Card>

          {/* What I'm Actually Into */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What I'm Passionate About
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Computer Vision
                    </h3>
                    <p className="text-muted-foreground">
                      Developing advanced computer vision solutions using YOLO,
                      OpenCV, and deep learning for object detection and image
                      processing.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Robotics & Automation
                    </h3>
                    <p className="text-muted-foreground">
                      Building autonomous systems with ROS2, working on AGV
                      carts and industrial automation projects.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Machine Learning & AI
                    </h3>
                    <p className="text-muted-foreground">
                      Implementing ML models with PyTorch, TensorFlow, and
                      developing AI-powered solutions for real-world problems.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Full-Stack Development
                    </h3>
                    <p className="text-muted-foreground">
                      Building web applications with MERN stack, Django, and
                      integrating AI capabilities into user-friendly interfaces.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Now Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Currently Working On
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">
                      R&D Internship at Enproducts
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Industrial automation & AI solutions
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>🤖 ROS2</span>
                    <span>👁️ YOLO</span>
                    <span>� AGV</span>
                  </div>
                </div>
                <p className="text-sm text-foreground">
                  Developing autonomous AGV carts, AI jewelry measurement
                  systems, and computer vision solutions for industrial
                  automation.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">
                      100xDevs Full Stack Training
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    MERN stack development with Harkirat Singh
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>⚛️ React</span>
                    <span>🟢 Node.js</span>
                    <span>🍃 MongoDB</span>
                  </div>
                </div>
                <p className="text-sm text-foreground">
                  Building scalable web applications with modern technologies
                  and best practices in full-stack development.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
