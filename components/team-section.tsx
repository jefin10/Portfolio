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
		portfolio: "https://jenjosejeeson.vercel.app/", // Add portfolio URL
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
		skills: [
			"Flutter",
			"React",
			"Express.js",
			"Node.js",
			"MongoDB",
			"TensorFlow",
		],
		bio: "Combines Flutter and MERN to create scalable apps that perform well on all platforms.",
		portfolio: "https://www.jefin.tech/", 
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
		skills: ["React", "Django", "SQL", "Electron", "FastAPI"],
		bio: "Works on both frontend and backend, building reliable systems with clean design and strong logic.",
		portfolio: "https://portfolio.mahadevnair.com", // Add portfolio URL
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
		skills: ["Django", "SQL", "FastAPI", "TensorFlow"],
		bio: "Specializes in backend systems with a focus on performance, data integrity, and security.",
		portfolio: "https://portfolio.rsanjay.com", // Add portfolio URL
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
			className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
		>
			{teamMembers.map((member) => (
				<motion.div
					key={member.id}
					className="flex flex-col h-full p-6 cyberpunk-card"
					variants={item}
					onMouseEnter={() => setActiveId(member.id)}
					onMouseLeave={() => setActiveId(null)}
				>
					<div className="relative w-full mb-4 overflow-hidden rounded-lg aspect-square">
						<Image
							src={member.image || "/placeholder.svg"}
							alt={member.name}
							fill
							className="object-cover transition-transform duration-500 ease-out"
							style={{
								transform:
									activeId === member.id ? "scale(1.05)" : "scale(1)",
							}}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
					</div>

					<h3 className="mb-1 text-xl font-bold">{member.name}</h3>
					<p className="mb-3 text-purple-400">{member.role}</p>

					<p className="flex-grow mb-4 text-sm text-gray-400">
						{member.bio}
					</p>

					<div className="mb-4">
						<h4 className="mb-2 text-xs tracking-wider text-gray-500 uppercase">
							Skills
						</h4>
						<div className="flex flex-wrap gap-2">
							{member.skills.map((skill) => (
								<span
									key={skill}
									className="px-2 py-1 text-xs text-purple-300 border rounded-full bg-purple-900/30 border-purple-500/30"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="flex flex-wrap items-center gap-2 mt-auto">
						<Button
							variant="default"
							size="sm"
							className="flex items-center gap-2 text-white bg-purple-600 rounded-full shadow-md hover:bg-purple-700 shadow-purple-500/20"
							asChild
						>
							<a
								href={member.portfolio}
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									className="w-3.5 h-3.5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path>
									<path d="M3 12h18"></path>
									<path d="M12 3a9 9 0 0 1 0 18"></path>
								</svg>
								<span className="text-xs">Portfolio</span>
							</a>
						</Button>

						<div className="flex gap-1.5">
							{Object.entries(member.social).map(([platform, url]) => (
								<Button
									key={platform}
									variant="ghost"
									size="sm"
									className="w-8 h-8 p-0 rounded-full"
									onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
								>
									{platform === 'github' && <Github className="w-4 h-4" />}
									{platform === 'twitter' && <Twitter className="w-4 h-4" />}
									{platform === 'linkedin' && <Linkedin className="w-4 h-4" />}
									<span className="sr-only">{platform}</span>
								</Button>
							))}
						</div>
					</div>
				</motion.div>
			))}
		</motion.div>
	)
}
