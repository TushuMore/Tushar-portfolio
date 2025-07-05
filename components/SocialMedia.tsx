"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import Heading from "./Heading";

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/tushu_more",
    color: "#E1306C",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://youtube.com/@TSMCode",
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/https://www.linkedin.com/in/tushar-more-987a69258/",
    color: "#0077B5",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/TushuMore",
    color: "gray",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://x.com/TusharMore21",
    color: "#1DA1F2",
  },
];

export default function SocialMedia() {
  return (
    <section className="py-24 bg-background text-primary">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <Heading text="Let's connect!" className="mt-0"/>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-20"
        >
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-md shadow-xl border border-white/10 flex items-center justify-center transition duration-300 hover:shadow-[0_0_20px] hover:shadow-primary group"
                style={{ color: social.color }}
              >
                <Icon className="text-2xl sm:text-3xl group-hover:scale-110 transition" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
