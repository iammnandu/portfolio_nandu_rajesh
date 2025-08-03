import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavigationProps {
  className?: string;
}

export function PortfolioNavigation({ className }: NavigationProps) {
  const isMobile = useIsMobile();

  const navItems = [
    { to: "/", label: "About" },
    { to: "/resume", label: "Resume" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className={cn("p-4 md:p-6 flex justify-center", className)}>
      <nav className="bg-black/80 backdrop-blur-sm rounded-2xl px-4 md:px-8 py-3 shadow-lg overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 md:px-6 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap",
                  isActive
                    ? "bg-white text-black shadow-sm"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
