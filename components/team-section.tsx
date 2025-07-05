"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const teamMembers = [
	{
		id: 1,
		name: "Jen Jose Jeeson",
		role: "Full Stack App Alchemist",
		image: "/other/j.jpg",
		skills: ["React Native", "MongoDB", "Express.js", "React", "Node.js"],
		bio: "Builds smooth, high-quality apps across web and mobile using the MERN stack and React Native.",
		portfolio: "https://jenjosejeeson.vercel.app/",
		social: {
			github: "https://github.com/jenjose72",
			linkedin: "https://linkedin.com/in/jenjosejeeson",
		},
	},
	{
		id: 2,
		name: "Jefin Francis",
		role: "Full Stack Flutter Alchemist",
		image: "/other/mine.JPG",
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
			github: "https://github.com/jefin10",
			linkedin: "https://linkedin.com/in/jefinfrancis",
		},
	},
	{
		id: 3,
		name: "Mahadev P Nair",
		role: "Web & Data Synergist",
		image: "/other/image.png",
		skills: ["React", "Django", "SQL", "Electron", "FastAPI"],
		bio: "Works on both frontend and backend, building reliable systems with clean design and strong logic.",
		portfolio: "https://profile-mahadevpnair10s-projects.vercel.app/",
		social: {
			github: "https://github.com/mahadevpnair10",
			linkedin: "https://www.linkedin.com/in/mahadev-p-nair/",
		},
	},
	{
		id: 4,
		name: "R Sanjay",
		role: "Backend Systems Architect",
		image: "/other/ss.png",
		skills: ["Django", "SQL","Flask", "FastAPI", "TensorFlow"],
		bio: "Specializes in backend systems with a focus on performance, data integrity, and security.",
		portfolio: "https://ssanjay.vercel.app/",
		social: {
			github: "https://github.com/Sanju-afk",
			linkedin: "https://www.linkedin.com/in/sanjay-r-311a83307/",
		},
	},
	{
		id: 5,
		name: "R Sanjay",
		role: "Backend Systems Architect",
		image: "/other/ss.png",
		skills: ["Django", "SQL","Flask", "FastAPI", "TensorFlow"],
		bio: "Specializes in backend systems with a focus on performance, data integrity, and security.",
		portfolio: "https://ssanjay.vercel.app/",
		social: {
			github: "https://github.com/Sanju-afk",
			linkedin: "https://www.linkedin.com/in/sanjay-r-311a83307/",
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
	const [activeId, setActiveId] = useState<number | null>(null)

	const handleSocialClick = (url: string, platform: string) => {
		console.log(`Clicking ${platform}:`, url) // Debug log
		if (url && url !== "#") {
			// Create a temporary anchor element and click it
			const link = document.createElement('a')
			link.href = url
			link.target = '_blank'
			link.rel = 'noopener noreferrer'
			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
		}
	}

	// Create a layout style for the bottom row members
	const getCardClassName = (index: number) => {
		return "flex flex-col h-full p-4 transition-all duration-300 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/50"
	}

	// Split team members for layout
	const topRowMembers = teamMembers.slice(0, 3);
	const bottomRowMembers = teamMembers.slice(3);

	return (
		<div className="flex flex-col items-center w-full">
			{/* Top row - 3 members */}
			<motion.div
				className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				{topRowMembers.map((member, index) => (
					<motion.div
						key={member.id}
						className={getCardClassName(index)}
						variants={item}
						onMouseEnter={() => setActiveId(member.id)}
						onMouseLeave={() => setActiveId(null)}
					>
						<div className="relative w-full max-w-[240px] h-[240px] mx-auto mb-3 overflow-hidden rounded-lg">
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
							<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent"></div>
						</div>

						<h3 className="mb-1 text-base font-bold text-white">{member.name}</h3>
						<p className="mb-2 text-sm text-purple-400">{member.role}</p>

						<div className="mb-3">
							<div className="flex flex-wrap gap-1">
								{member.skills.slice(0, 5).map((skill) => (
									<span
										key={skill}
										className="px-1.5 py-0.5 text-xs text-purple-300 border rounded-full bg-purple-900/30 border-purple-500/30"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="flex flex-wrap items-center justify-between gap-1 mt-auto">
							<Button
								variant="default"
								size="sm"
								className="flex items-center gap-1 px-2 text-white bg-purple-600 rounded-full shadow-md cursor-pointer hover:bg-purple-700 shadow-purple-500/20 h-7"
								asChild
							>
								<Link
									href={member.portfolio}
									target="_blank"
									rel="noopener noreferrer"
									className="no-underline"
								>
									<svg
										className="w-3 h-3"
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
								</Link>
							</Button>

							<div className="flex gap-1">
								{Object.entries(member.social).map(([platform, url]) => (
									<Button
										key={platform}
										variant="ghost"
										size="sm"
										className="w-6 h-6 p-0 transition-colors duration-200 rounded-full cursor-pointer hover:bg-gray-800"
										asChild
									>
										<Link
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center w-full h-full"
										>
											{platform === 'github' && <Github className="w-3 h-3 text-gray-300 transition-colors hover:text-white" />}
											{platform === 'linkedin' && <Linkedin className="w-3 h-3 text-gray-300 transition-colors hover:text-blue-600" />}
											<span className="sr-only">{platform}</span>
										</Link>
									</Button>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
			
			{/* Bottom row - 2 members centered */}
			<motion.div
				className="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:w-2/3 lg:mx-auto"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				{bottomRowMembers.map((member, index) => (
					<motion.div
						key={member.id}
						className={getCardClassName(index + 3)} // +3 because these are indexes 3 and 4
						variants={item}
						onMouseEnter={() => setActiveId(member.id)}
						onMouseLeave={() => setActiveId(null)}
					>
						<div className="relative w-full max-w-[240px] h-[240px] mx-auto mb-3 overflow-hidden rounded-lg">
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
							<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent"></div>
						</div>

						<h3 className="mb-1 text-base font-bold text-white">{member.name}</h3>
						<p className="mb-2 text-sm text-purple-400">{member.role}</p>

						<div className="mb-3">
							<div className="flex flex-wrap gap-1">
								{member.skills.slice(0, 5).map((skill) => (
									<span
										key={skill}
										className="px-1.5 py-0.5 text-xs text-purple-300 border rounded-full bg-purple-900/30 border-purple-500/30"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="flex flex-wrap items-center justify-between gap-1 mt-auto">
							<Button
								variant="default"
								size="sm"
								className="flex items-center gap-1 px-2 text-white bg-purple-600 rounded-full shadow-md cursor-pointer hover:bg-purple-700 shadow-purple-500/20 h-7"
								asChild
							>
								<Link
									href={member.portfolio}
									target="_blank"
									rel="noopener noreferrer"
									className="no-underline"
								>
									<svg
										className="w-3 h-3"
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
								</Link>
							</Button>

							<div className="flex gap-1">
								{Object.entries(member.social).map(([platform, url]) => (
									<Button
										key={platform}
										variant="ghost"
										size="sm"
										className="w-6 h-6 p-0 transition-colors duration-200 rounded-full cursor-pointer hover:bg-gray-800"
										asChild
									>
										<Link
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center w-full h-full"
										>
											{platform === 'github' && <Github className="w-3 h-3 text-gray-300 transition-colors hover:text-white" />}
											{platform === 'linkedin' && <Linkedin className="w-3 h-3 text-gray-300 transition-colors hover:text-blue-600" />}
											<span className="sr-only">{platform}</span>
										</Link>
									</Button>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}