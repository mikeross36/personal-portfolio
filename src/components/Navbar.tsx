import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data";

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
};

const Navbar = ({ isOpen, setIsOpen, scrollToSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      try {
        if (typeof window !== "undefined" && window !== null) {
          setScrolled(window.scrollY > 20);
        }
      } catch (error) {
        console.error("Error handling scroll event:", error);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-primary/20"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div onClick={() => scrollToSection("hero")} className="shrink-0">
            <span className="text-2xl font-bold text-white tracking-wider cursor-pointer">
              LAURA<span className="text-primary">.DESIGN</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.to)}
                  className="text-gray-300 hover:text-primary hover:text-glow transition-all duration-300 px-3 py-2 
                  rounded-md text-sm lg:text-lg font-medium uppercase tracking-wide cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <Link
                to="/login"
                className="border border-primary text-primary hover:bg-primary/10 hover:shadow-neon px-3 py-1
                rounded-md transition-all duration-300 text-sm lg:text-lg font-semibold uppercase tracking-wide text-center cursor-pointer"
              >
                Log In
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 cursor-pointer"
            >
              {isOpen ? (
                <X size={40} strokeWidth={3} />
              ) : (
                <Menu size={40} strokeWidth={3} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-primary/20 animate-in slide-in-from-top-5">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.to);
                  handleCloseMobileMenu();
                }}
                className="block text-gray-300 hover:text-primary hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </button>
            ))}
            <Link
              to="/login"
              className="text-center mt-4 border border-primary text-primary px-3 py-2 rounded-md text-base font-medium 
              hover:shadow-neon hover:bg-primary/10 block"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
