"use client";

import { FaArrowUp } from "react-icons/fa6";
import { personalInfo } from "../../../lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 text-sm text-white/40">
          Built with <span className="text-white font-medium">Next.js 15</span>{" "}
          & <span className="text-accent animate-pulse">❤️</span>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:text-white transition-all group"
        >
          <FaArrowUp
            size={20}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
}
