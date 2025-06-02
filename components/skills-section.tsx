"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Database, Cpu, PenTool, BarChart, Cloud } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6 text-purple-400" />,
    items: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    items: ["Node.js", "Express", "Python", "Django", "JavaScript", "REST API","SQL", "MongoDB","PHP", "Supabase"],
  },
  {
    category: "Mobile App",
    icon: <PenTool className="w-6 h-6 text-pink-400" />,
    items: ["React Native", "Flutter", "Dart","TypeScript","Expo"],
  },
  
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

function SkillCategory({ category, icon, items }) {
  const badgesRef = useRef(null)

  useEffect(() => {
    if (badgesRef.current) {
      const badges = badgesRef.current.querySelectorAll(".skill-badge")

      gsap.fromTo(
        badges,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: badgesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <motion.div className="p-6 cyberpunk-card" variants={item}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 border rounded-lg bg-black/50 border-purple-500/20">{icon}</div>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>

      <div ref={badgesRef} className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm text-gray-300 transition-colors duration-300 border rounded-full skill-badge bg-black/50 border-purple-500/30 hover:border-purple-500/70 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {skills.map((skill) => (
        <SkillCategory key={skill.category} category={skill.category} icon={skill.icon} items={skill.items} />
      ))}
    </motion.div>
  )
}
