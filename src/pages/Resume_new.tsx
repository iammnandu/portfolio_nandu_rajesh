import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, GraduationCap } from "lucide-react";

export default function Resume() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 65 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Git/GitHub", level: 90 },
  ];

  const tools = [
    { name: "React Native", level: 70 },
    { name: "Next.js", level: 80 },
    { name: "Express.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "REST APIs", level: 85 },
    { name: "GraphQL", level: 60 },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resume
            </h1>
            <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
          </div>
          <Button
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity w-full sm:w-auto"
            onClick={() => window.open("/Nandu_Rajesh_Resume.pdf", "_blank")}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Full Resume
          </Button>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Education & Experience */}
          <Card className="p-4 md:p-6 bg-gradient-card border-0 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Education & Experience
              </h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-primary/20 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Bachelor of Engineering in Computer Science
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    2019 — 2023
                  </p>
                  <p className="text-muted-foreground">
                    VTU University, Karnataka, India
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focused on software engineering principles, data structures,
                    algorithms, and full-stack development.
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Software Engineer
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    2023 — Present
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Bangalore, Karnataka, India
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      • Developed and maintained full-stack web applications
                      using React.js and Node.js
                    </p>
                    <p>
                      • Implemented responsive UI components with TypeScript and
                      Tailwind CSS
                    </p>
                    <p>
                      • Collaborated with cross-functional teams to deliver
                      high-quality software solutions
                    </p>
                    <p>
                      • Worked with AWS cloud services for deployment and
                      infrastructure management
                    </p>
                    <p>
                      • Participated in code reviews and maintained clean,
                      efficient codebases
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span>💡</span>
                Skills and Experience - Last updated on August 2025
              </p>
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-4 md:p-6 bg-gradient-card border-0 shadow-card">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Tools & Frameworks */}
          <Card className="p-4 md:p-6 bg-gradient-card border-0 shadow-card">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Tools & Frameworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {tool.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {tool.level}%
                    </span>
                  </div>
                  <Progress value={tool.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
