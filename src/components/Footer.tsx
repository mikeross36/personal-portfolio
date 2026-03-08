import { Twitter, Linkedin, Facebook, Github } from "lucide-react";
import { Link } from "react-router";
import { NAV_LINKS } from "@/data";

const Footer = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => {
  return (
    <footer className="bg-surface border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold text-white tracking-wider mb-2">
              LAURA<span className="text-primary">.DESIGN</span>
            </span>
            <p className="text-gray-400 text-sm">
              Crafting digital experiences that inspire.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start">
            {NAV_LINKS.map((link) => (
              <button
                onClick={() => scrollToSection(link.to)}
                key={link.name}
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-primary hover:shadow-neon transition-all duration-300 p-2 rounded-full hover:bg-white/5"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary hover:shadow-neon transition-all duration-300 p-2 rounded-full hover:bg-white/5"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary hover:shadow-neon transition-all duration-300 p-2 rounded-full hover:bg-white/5"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary hover:shadow-neon transition-all duration-300 p-2 rounded-full hover:bg-white/5"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <Link
          to="https://vladimir-monarov-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 pt-8 border-t border-white/5 text-center capitalize"
        >
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} vladimir monarov. all rights
            reserved.
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
