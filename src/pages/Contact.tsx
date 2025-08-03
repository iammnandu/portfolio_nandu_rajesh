import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Linkedin, Github, Mail, Phone } from "lucide-react";
import Map from "@/components/Map";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`);

    window.location.href = `mailto:iamnandurajesh@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact
          </h1>
          <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Map Section */}
          <Card className="p-4 md:p-6 bg-gradient-card border-0 shadow-card overflow-hidden">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Location
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Kerala, India
              </p>
            </div>
            <Map className="border border-border shadow-sm" />
          </Card>

          {/* Contact Form */}
          <Card className="p-4 md:p-6 bg-gradient-card border-0 shadow-card">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Reach Out Via Email
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Your Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="May I know your name?"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email here.."
                  className="bg-background border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="your thoughts/queries..."
                  className="bg-background border-border min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Social Media & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Connect with me
              </h3>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/iammnandu"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span className="text-foreground">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/iammnandu"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                  <span className="text-foreground">GitHub</span>
                </a>
                <a
                  href="mailto:iamnandurajesh@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="text-foreground">Email</span>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-foreground">+91 7012749823</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="text-foreground">
                    iamnandurajesh@gmail.com
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Feel free to reach out for collaboration, job opportunities,
                  or just to say hello!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
