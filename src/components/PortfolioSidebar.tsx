import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

export function PortfolioSidebar() {
  return (
    <div className="w-80 md:w-80 sm:w-72 bg-portfolio-sidebar border-r border-border p-4 md:p-6 flex flex-col h-screen overflow-y-auto">
      {/* Profile Section */}
      <div className="text-center mb-6 md:mb-8">
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-3xl overflow-hidden shadow-card">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-portfolio-sidebar-foreground mb-2">
          NANDU RAJESH
        </h1>
        <p className="text-muted-foreground text-sm">AI/ML Engineer</p>
        <p className="text-muted-foreground text-xs">Last updated: June 2025</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 md:space-y-6 flex-1">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-4 h-4 md:w-5 md:h-5 text-secondary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              EMAIL
            </p>
            <p className="text-xs md:text-sm font-medium text-foreground truncate">
              iamnandurajesh@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              PHONE
            </p>
            <p className="text-xs md:text-sm font-medium text-foreground">
              +91 7012749823
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-secondary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              LOCATION
            </p>
            <p className="text-xs md:text-sm font-medium text-foreground">
              Thiruvaniyoor, Ernakulam, Kerala
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
            <Github className="w-4 h-4 md:w-5 md:h-5 text-secondary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              GITHUB
            </p>
            <p className="text-xs md:text-sm font-medium text-foreground">
              @iammnandu
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
            <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-secondary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              LINKEDIN
            </p>
            <p className="text-xs md:text-sm font-medium text-foreground">
              iamnandurajesh
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-3 pt-4 md:pt-6 border-t border-border">
        <a
          href="https://linkedin.com/in/iamnandurajesh"
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/iammnandu"
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="mailto:iamnandurajesh@gmail.com"
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href="tel:+917012749823"
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
