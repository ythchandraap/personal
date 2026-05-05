"use client";

import { motion } from "framer-motion";
// import { personalInfo } from "../../lib/data";
import { personalInfo } from "../../../lib/data";
import { Mail, ArrowDownRight, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-32 flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium tracking-wider uppercase"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Available for freelance
      </motion.div>

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl font-display font-black mb-6 tracking-tighter"
        >
          {personalInfo.name.toUpperCase()}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-white/60 font-medium mb-12 max-w-2xl leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-accent text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work{" "}
              <ArrowDownRight
                size={20}
                className="group-hover:rotate-45 transition-transform"
              />
            </span>
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Hire Me <ExternalLink size={18} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 flex gap-6"
      >
        {[
          { icon: Mail, href: personalInfo.github },
          { icon: Mail, href: personalInfo.linkedin },
          { icon: Mail, href: `mailto:${personalInfo.email}` },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-accent/20 hover:text-accent transition-all duration-300"
          >
            <social.icon size={20} />
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowDownRight size={24} className="rotate-45" />
      </motion.div>
    </section>
  );
}
