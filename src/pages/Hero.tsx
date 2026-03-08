import Button from "../components/Button";
import SectionWrapper from "../components/SectionWrapper";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "../assets/laura_hero.png";

const Hero = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <SectionWrapper id="hero" className="flex items-center min-h-screen pt-20">
      {/* Background Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/30 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 space-y-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-gray-300">
              Available for Freelance Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            Designing the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary text-glow">
              Future of Digital
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Hi, I'm Laura. A visionary digital designer crafting immersive web
            experiences, high-conversion UI, and next-gen brand identities using
            the power of AI and Code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="group"
            >
              View My Work
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 relative"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 group"
          >
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60 z-20" />
            <img
              src={heroImage}
              alt="Laura - Digital Designer"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Decorative Pulsing Circles */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-10 -right-10 w-32 h-32 border-2 border-primary/30 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}
            className="absolute -bottom-10 -left-10 w-24 h-24 border-2 border-secondary/30 rounded-full"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
