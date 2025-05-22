"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    id: 1,
    name: "Jen Jose Jeeson",
    role: "Full Stack App Alchemist",
    image: "/placeholder.svg?height=400&width=400",
    skills: ["React Native", "MongoDB", "Express.js", "React", "Node.js"],
    bio: "Builds smooth, high-quality apps across web and mobile using the MERN stack and React Native.",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Jefin Francis",
    role: "Full Stack Flutter Alchemist",
    image: "/placeholder.svg?height=400&width=400",
    skills: ["Flutter", "MongoDB", "Express.js", "React", "Node.js"],
    bio: "Combines Flutter and MERN to create scalable apps that perform well on all platforms.",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Mahadev P Nair",
    role: "Web & Data Synergist",
    image: "/placeholder.svg?height=400&width=400",
    skills: ["React", "Django", "SQL"],
    bio: "Works on both frontend and backend, building reliable systems with clean design and strong logic.",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "R Sanjay",
    role: "Backend Systems Architect",
    image: "/placeholder.svg?height=400&width=400",
    skills: ["Django", "SQL"],
    bio: "Specializes in backend systems with a focus on performance, data integrity, and security.",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
]



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function TeamSection() {
  const [activeId, setActiveId] = useState(null)

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {teamMembers.map((member) => (
        <motion.div
          key={member.id}
          className="cyberpunk-card p-6 h-full flex flex-col"
          variants={item}
          onMouseEnter={() => setActiveId(member.id)}
          onMouseLeave={() => setActiveId(null)}
        >
          <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 ease-out"
              style={{
                transform: activeId === member.id ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
          </div>

          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-purple-400 mb-3">{member.role}</p>

          <p className="text-gray-400 text-sm mb-4 flex-grow">{member.bio}</p>

          <div className="mb-4">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-auto">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" asChild>
              <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" asChild>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" asChild>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
