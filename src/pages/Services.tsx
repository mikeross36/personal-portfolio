import { motion } from "motion/react";
import SectionWrapper from "../components/SectionWrapper";
import { SERVICES } from "@/data";

const Services = () => {
  return (
    <SectionWrapper
      id="services"
      className="bg-surface/50 relative overflow-hidden"
    >
      {/* Floating Parallax Background Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-56 h-56 bg-secondary/20 rounded-full blur-[100px]"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/20 rounded-full blur-[60px]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          My <span className="text-primary text-glow">Expertise</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Combining creativity with technical precision.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="group p-8 rounded-2xl bg-background border border-white/5 
                   hover:border-primary/30 hover:shadow-neon transition-all duration-300 
                   relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="text-primary mb-6"
            >
              <service.icon size={32} />
            </motion.div>

            <motion.h3
              whileHover={{ color: "#3b82f6" }}
              className="text-xl font-bold mb-3"
            >
              {service.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="text-gray-400 text-sm leading-relaxed"
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
