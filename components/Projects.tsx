"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

// Project Data
const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A beautifully designed portfolio website showcasing my skills, resume, and projects with smooth animations.",
    image: "/images/portfolio.png",
    github: "https://github.com/yourname/portfolio",
    demo: "https://yourportfolio.com",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  }, 
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-background text-primary px-6 py-24 pt-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-extrabold text-primary drop-shadow-md">
          My Projects
        </h2>
        <p className="text-primary/40 mt-3 text-lg">
          Explore some of my recent work — where design meets development.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group bg-primary/5 border border-primary/10 rounded-3xl p-5 backdrop-blur-lg hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-primary mb-1">{project.title}</h3>
            <p className="text-sm text-primary/60 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="text-primary hover:text-primary transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="text-primary hover:text-primary transition"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
