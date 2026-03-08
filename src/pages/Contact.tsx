import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <SectionWrapper
      id="contact"
      className="bg-surface/30 relative overflow-hidden"
    >
      {/* Floating background accents */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-primary/20 rounded-full blur-[100px]"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 bg-secondary/20 rounded-full blur-[120px]"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <motion.h2
              animate={{
                textShadow: [
                  "0 0 10px #3b82f6",
                  "0 0 20px #9333ea",
                  "0 0 10px #3b82f6",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Let's <span className="text-primary text-glow">Collaborate</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let's build something extraordinary
              together.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: <Mail size={20} />, text: "hello@laura.design" },
              { icon: <Phone size={20} />, text: "+1 (555) 123-4567" },
              { icon: <MapPin size={20} />, text: "San Francisco, CA" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center space-x-4 text-gray-300 cursor-pointer"
              >
                <div className="p-3 bg-white/5 rounded-full text-primary">
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 bg-background/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.03 }} className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Name</label>
              <input
                type="text"
                className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Subject</label>
            <select className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
              <option>Project Inquiry</option>
              <option>Freelance Opportunity</option>
              <option>Other</option>
            </select>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Message</label>
            <textarea
              rows={4}
              className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="Tell me about your project..."
            ></textarea>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
