"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
// import { personalInfo } from "@/lib/data";
import { FaEnvelope, FaPaperPlane, FaClock, FaGithub, FaLinkedin } from "react-icons/fa6";
import { personalInfo } from "../../../lib/data";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Contact from ${data.name}&body=${data.message}`;
    window.open(mailtoUrl, "_self");
    reset();
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl mb-8"
            >
              Let&apos;s build something{" "}
              <span className="text-accent italic font-light">
                extraordinary
              </span>{" "}
              together.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 text-white/60">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-accent">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-xl text-white">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/60">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-accent">
                  <FaClock size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
                    Current Time
                  </p>
                  <p className="text-xl text-white">GMT+7 (Indonesia)</p>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                {[
                  { icon: FaGithub, href: personalInfo.github },
                  { icon: FaLinkedin, href: personalInfo.linkedin },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl glass hover:bg-accent/20 hover:text-accent transition-all duration-300"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full group relative flex items-center justify-center gap-3 bg-accent text-white font-bold py-5 rounded-xl overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Send Message</span>
                <FaPaperPlane
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
