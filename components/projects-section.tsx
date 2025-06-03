"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [

  {
		id: 1,
		title: "MovieVerse",
		description:
			"A cross-platform movie discovery app that combines user ratings with emotional intelligence. Users can rate movies and get mood-based recommendations. Feeling happy, sad, or nostalgic? MovieVerse has a pick for every vibe. Features swipeable Tinder-style movie cards and a mood-input system for personalized curation.",
		image: "/projects/mv.png",
		tech: ["React Native", "React", "Django"],
		links: {
			demo: "https://movieverse-nine.vercel.app",
			github: "https://github.com/jefin10/MovieVerse",
		},
	},
	{
		id: 2,
		title: "RescueBytes",
		description:
			"🆘 A disaster response platform with real-time location-based coordination. Mobile app for citizens to send SOS alerts, view local updates, and request help. Web dashboard for administrators to manage emergencies, deploy responders, and track ongoing incidents. Designed for fast and efficient crisis handling.",
		image: "/projects/RescueBytes.png",
		tech: ["React", "Node.js", "MongoDB", "Express"],
		links: {
			demo: "https://rbbackend-hlah.onrender.com/",
			github: "https://github.com/jenjose72/RescueBytes/tree/new-feature-branch",
		},
	},
	{
		id: 3,
		title: "BMchats",
		description:
			"A sleek real-time chat app featuring direct messages and group chats. Built with React and powered by Socket.io for instant communication. Includes typing indicators, online status tracking, and MongoDB for message persistence.",
		image: "/projects/BMChats.png",
		tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
		links: {
			demo: "https://bmchats.onrender.com/",
			github: "https://github.com/jenjose72/BMChats",
		},
	},
	{
		id: 4,
		title: "LifeLink",
		description:
			"A full-stack hospital management system with dedicated portals for hospitals, doctors, and patients. Enables appointment scheduling, patient record handling, doctor onboarding, and more. Built on the MERN stack with secure authentication and a clean workflow across all users.",
		image: "/projects/lifelink.png",
		tech: ["MongoDB", "Express", "React", "Node.js"],
		links: {
			demo: "https://lifelink-pxpw.onrender.com",
			github: "https://github.com/jefin10/LifeLink",
		},
	},
	{
		id: 5,
		title: "PlayTube",
		description:
			"A modern YouTube clone using React and Tailwind CSS with real-time video fetching via the YouTube Data API. Features responsive UI, video playback, category browsing, and search. Planned backend expansion includes user history, likes, and saved video support.",
		image: "/projects/yt-home.png",
		tech: ["React", "Tailwind CSS"],
		links: {
			demo: "https://youtube-clone-neon-six.vercel.app/",
			github: "https://github.com/jefin10/Youtube_clone",
		},
	},
	{
		id: 6,
		title: "WebNoter",
		description:
			"A minimal Chrome extension that lets users take notes specific to the website they're visiting. Perfect for researchers, students, or anyone who wants to jot down thoughts tied to a particular page.",
		image: "/projects/wn.png",
		tech: ["React"],
		links: {
			demo: "https://microsoftedge.microsoft.com/addons/detail/webnoter/mfjidnneofhnhfgmejckjhpffclaebjc",
			github: "https://github.com/mahadevpnair10/WebNoter",
		},
	},
	{
		id: 7,
		title: "LoopX",
		description:
			"A data dashboard for startups and teams to visualize KPIs, sales, and customer engagement in real time. Modular components powered by Chart.js and a drag-and-drop interface make it fully customizable.",
		image: "/projects/loopx.png",
		tech: ["React", "Chart.js", "Firebase"],
		links: {
			demo: "https://incredible-crepe-ae8c57.netlify.app",
			github: "https://github.com/jefin10/loopX",
		},
	},
	{
		id: 8,
		title: "Wellnex",
		description:
			"A comprehensive healthcare platform that seamlessly integrates medication management, emergency response, fitness tracking, and mental wellness support in one intuitive interface. Features include medication reminders, drug interaction alerts, offline first aid library, emergency SOS, BMI calculator, workout guidance, and mental wellbeing tools.",
		image: "/projects/wl.png",
		tech: ["React Native", "Supabase"],
		links: {
			demo: "https://wellnex-pi.vercel.app/",
			github: "https://github.com/jenjose72/Wellnex/",
		},
	},
]

function ProjectCard({ project }) {
	const [hovered, setHovered] = useState(false)
	const cardRef = useRef(null)

	// Mouse position for 3D effect
	const x = useMotionValue(0)
	const y = useMotionValue(0)

	// Smooth spring physics for rotation
	const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 })
	const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 })

	function handleMouseMove(e) {
		if (!cardRef.current) return

		const rect = cardRef.current.getBoundingClientRect()
		const centerX = rect.left + rect.width / 2
		const centerY = rect.top + rect.height / 2

		x.set(e.clientX - centerX)
		y.set(e.clientY - centerY)
	}

	function handleMouseLeave() {
		setHovered(false)
		x.set(0)
		y.set(0)
	}

	return (
		<motion.div
			ref={cardRef}
			className="h-full cyberpunk-card"
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
				perspective: 1000,
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={handleMouseLeave}
			transition={{ duration: 0.2 }}
		>
			<div className="flex flex-col h-full p-6">
				<div
					className="relative w-full mb-4 overflow-hidden rounded-lg aspect-video"
					style={{ transform: "translateZ(20px)" }}
				>
					<Image
						src={project.image || "/placeholder.svg"}
						alt={project.title}
						fill
						className="object-cover"
					/>
				</div>

				<h3 className="mb-2 text-xl font-bold" style={{ transform: "translateZ(30px)" }}>
					{project.title}
				</h3>

				<p className="flex-grow mb-4 text-sm text-gray-400" style={{ transform: "translateZ(25px)" }}>
					{project.description}
				</p>

				<div className="mb-4" style={{ transform: "translateZ(35px)" }}>
					<h4 className="mb-2 text-xs tracking-wider text-gray-500 uppercase">Tech Stack</h4>
					<div className="flex flex-wrap gap-2">
						{project.tech.map((tech) => (
							<Badge
								key={tech}
								variant="outline"
								className="text-purple-300 bg-purple-900/30 border-purple-500/30 hover:bg-purple-800/40"
							>
								{tech}
							</Badge>
						))}
					</div>
				</div>

				<div className="flex gap-2 mt-auto" style={{ transform: "translateZ(40px)" }}>
					<Button size="sm" variant="default" className="gap-2 bg-purple-600 hover:bg-purple-700" asChild>
						<a href={project.links.demo} target="_blank" rel="noopener noreferrer">
							<ExternalLink className="w-4 h-4" />
							Demo
						</a>
					</Button>
					<Button size="sm" variant="outline" className="gap-2 border-purple-500/50 hover:bg-purple-950/30" asChild>
						<a href={project.links.github} target="_blank" rel="noopener noreferrer">
							<Github className="w-4 h-4" />
							Code
						</a>
					</Button>
				</div>
			</div>
		</motion.div>
	)
}

export default function ProjectsSection() {
	const [currentPage, setCurrentPage] = useState(0)
	const projectsPerPage = 4
	const totalPages = Math.ceil(projects.length / projectsPerPage)

	// Get current projects to display
	const getCurrentProjects = () => {
		const startIndex = currentPage * projectsPerPage
		const endIndex = startIndex + projectsPerPage
		return projects.slice(startIndex, endIndex)
	}

	const goToNextPage = () => {
		setCurrentPage((prev) => (prev + 1) % totalPages)
	}

	const goToPrevPage = () => {
		setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
	}

	return (
		<div className="relative">
			{/* Projects Grid */}
			<motion.div
				key={currentPage}
				className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -50 }}
				transition={{ duration: 0.5 }}
			>
				{getCurrentProjects().map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</motion.div>

			{/* Navigation Controls */}
			<div className="flex items-center justify-center gap-6">
				{/* Previous Button */}
				<Button
					onClick={goToPrevPage}
					variant="outline"
					size="lg"
					className="relative overflow-hidden transition-all duration-300 border-2 group bg-black/20 backdrop-blur-sm border-purple-500/50 hover:border-purple-400 hover:bg-purple-950/30"
				>
					<div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600/20 to-cyan-400/20 group-hover:opacity-100"></div>
					<ChevronLeft className="relative z-10 w-6 h-6 text-purple-400 group-hover:text-purple-300" />
					<span className="relative z-10 ml-2 text-purple-400 group-hover:text-purple-300">Previous</span>
				</Button>

				{/* Page Indicator */}
				<div className="flex items-center gap-3">
					{Array.from({ length: totalPages }, (_, index) => (
						<motion.div
							key={index}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentPage
									? "bg-purple-500 shadow-lg shadow-purple-500/50"
									: "bg-gray-600 hover:bg-gray-500"
							}`}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => setCurrentPage(index)}
							style={{ cursor: "pointer" }}
						/>
					))}
				</div>

				{/* Next Button */}
				<Button
					onClick={goToNextPage}
					variant="outline"
					size="lg"
					className="relative overflow-hidden transition-all duration-300 border-2 group bg-black/20 backdrop-blur-sm border-purple-500/50 hover:border-purple-400 hover:bg-purple-950/30"
				>
					<div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600/20 to-cyan-400/20 group-hover:opacity-100"></div>
					<span className="relative z-10 mr-2 text-purple-400 group-hover:text-purple-300">Next</span>
					<ChevronRight className="relative z-10 w-6 h-6 text-purple-400 group-hover:text-purple-300" />
				</Button>
			</div>

			{/* Project Counter */}
			<div className="mt-6 text-center">
				<p className="text-sm text-gray-400">
					Showing {getCurrentProjects().length} of {projects.length} projects
				</p>
			</div>
		</div>
	)
}