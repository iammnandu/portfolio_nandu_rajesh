import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Linkedin, Github, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact</h1>
          <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Map Section */}
          <Card className="p-6 bg-gradient-card border-0 shadow-card overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/70 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📍</div>
                  <p className="text-lg font-semibold">Bangalore, Karnataka, India</p>
                  <p className="text-sm opacity-80">Interactive Map View</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                View larger map
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Reach Out Via Email</h2>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </Label>
                <Input 
                  id="name"
                  placeholder="May I know your name?" 
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="Your email here.." 
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </Label>
                <Textarea 
                  id="message"
                  placeholder="your thoughts/queries..." 
                  className="bg-background border-border min-h-32"
                />
              </div>

              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Social Media & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect with me</h3>
              <div className="space-y-3">
                <a 
                  href="https://linkedin.com/in/nandu-rajesh" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span className="text-foreground">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/nandurajesh" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                  <span className="text-foreground">GitHub</span>
                </a>
                <a 
                  href="mailto:nandurajesh003@gmail.com" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="text-foreground">Email</span>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-foreground">+91 9632587410</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="text-foreground">nandurajesh003@gmail.com</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Feel free to reach out for collaboration, job opportunities, or just to say hello!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}