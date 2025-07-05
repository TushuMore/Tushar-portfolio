"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-background text-white px-6 py-24 font-sans pt-40 relative overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:150px_150px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_0px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_0px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_0px,transparent_1px),linear-gradient(to_bottom,#262626_0px,transparent_1px)]"
        )}
      />
       {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_5%,background)]"></div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary drop-shadow-md">
            About Me
          </h1>
          <p className="text-primary/30 mt-4 text-lg">
            Turning ideas into responsive websites with code & creativity.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-64 h-64 rounded-3xl shadow-2xl border-4 border-primary hover:scale-105 transform transition duration-500"
          >
            <Image
              src="/images/about.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-3xl"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-primary/50 space-y-5 text-center md:text-left"
          >
            <p className="text-xl leading-relaxed">
              I&apos;m <span className="font-bold text-primary">Tushar More</span>, a web developer & UI/UX designer from India.
              With a strong command of <span className="text-primary font-semibold">Next.js</span>,{" "}
              <span className="text-primary font-semibold">Tailwind CSS</span>, and{" "}
              <span className="text-primary font-semibold">TypeScript</span>, I craft digital experiences that look amazing and perform even better.
            </p>
            <p className="text-foreground/70">
              My strength lies in combining development and design — bringing clean code and creative vision together.
              I thrive in solving user problems, building interfaces, and pushing aesthetic boundaries.
            </p>

            {/* Contact Info */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Link href="mailto:tusharmore2143@gmail.com" className="flex items-center gap-2">
                <FaEnvelope /> tushar@example.com
              </Link>
              <Link href="tel:9011476615" className="flex items-center gap-2">
                <FaPhone /> +91 9011476615
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <FaLinkedin /> LinkedIn/tushumore
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <FaYoutube /> YouTube/Tushar More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 bg-primary/5 p-10 rounded-3xl backdrop-blur-md border border-white/7 shadow-2xl"
        >
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">🚀 Technical Skills</h3>
            <ul className="space-y-2 text-primary/50">
              <li>Next.js</li>
              <li>React.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>HTML / CSS / JS</li>
            </ul>
          </div>

          {/* Strengths */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">🧠 Strengths</h3>
            <ul className="space-y-2 text-primary/50">
              <li>Pixel-perfect UI Implementation</li>
              <li>Problem Solving with Design Thinking</li>
              <li>Figma to Code</li>
              <li>UI/UX Strategy</li>
              <li>Clean Reusable Codebase</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">💬 Soft Skills</h3>
            <ul className="space-y-2 text-primary/50">
              <li>Communication</li>
              <li>Creative Thinking</li>
              <li>Self Learning</li>
              <li>Teamwork</li>
              <li>Time Management</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
