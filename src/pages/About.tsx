import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import { ABOUT_ITEMS } from "@/data";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

const About = () => {
  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transforms
  const blobX = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const blobY = useTransform(mouseY, [0, window.innerHeight], [-30, 30]);

  const gridX = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  const gridY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  return (
    <SectionWrapper
      id="about"
      className="bg-surface/30 relative overflow-hidden"
    >
      {/* Floating Parallax Blobs */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="absolute top-10 left-20 w-64 h-64 bg-primary/30 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/30 rounded-full blur-[140px]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            animate={{
              textShadow: ["0 0 10px #f0f", "0 0 20px #0ff", "0 0 10px #f0f"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl md:text-5xl font-bold"
          >
            Behind the <span className="text-accent text-glow">Pixels</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            I believe that great design is more than just aesthetics—it's about
            problem-solving and connection. With a background in both
            traditional art and software engineering, I bridge the gap between
            creative vision and technical reality.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            My mission is to empower brands to stand out in the digital noise
            through bold visuals and seamless interactions.
          </motion.p>

          {/* Animated About Items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {ABOUT_ITEMS.map(({ Icon, title, desc }, index) => (
              <div
                key={index}
                className="p-4 bg-background/50 rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 group"
              >
                <Icon
                  className="text-accent mb-3 transition-transform duration-500 group-hover:rotate-[360deg]"
                  size={24}
                />
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.1, rotate: -2 }} className="pt-6">
            <Button variant="primary">Download Resume</Button>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br 
                       from-gray-900 to-black border border-white/10 flex items-center 
                       justify-center relative"
          >
            <motion.div
              style={{ x: gridX, y: gridY }}
              className="absolute inset-0 bg-grid-white/[0.05] bg-size[30px_30px]"
            />
            <motion.img
              src="https://cdn.dribbble.com/userupload/17683227/file/original-a0ac3f7d5d23f9f2fbcd887079e2b29b.jpeg?resize=1024x768&vertical=center"
              alt="Abstract About Visual"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full object-cover relative z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
