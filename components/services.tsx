"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Cloud, Shield, Zap, TrendingUp, Paintbrush } from "lucide-react"

const services = [
	{
		icon: <Code className="w-8 h-8 text-purple-400" />,
		title: "Full Stack Development",
		description:
			"Modern, scalable web and mobile apps using React, Next.js, Node.js, Flutter, and more.",
	},
	{
		icon: <Smartphone className="w-8 h-8 text-purple-400" />,
		title: "Mobile App Development",
		description: "Cross-platform mobile apps with beautiful UI and smooth performance.",
	},
	{
		icon: <Paintbrush className="w-8 h-8 text-purple-400" />,
		title: "UI & UX Design",
		description:
			"Crafting intuitive, user-friendly interfaces with a focus on aesthetics and usability.",
	},
	
]

export default function ServicesSection() {
	return (
		<section className="relative z-10 py-24 overflow-hidden">
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{/* Cyberpunk glowing gradients */}
				<div className="absolute w-[500px] h-[500px] bg-gradient-radial from-purple-700/40 to-transparent rounded-full blur-3xl -top-40 -left-40 animate-pulse" />
				<div className="absolute w-[400px] h-[400px] bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-2xl -bottom-32 -right-32 animate-pulse" />
				<div className="absolute w-40 h-40 bg-purple-400/10 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
			</div>
			<div className="container mx-auto px-4 relative z-20">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 drop-shadow-[0_2px_16px_rgba(168,85,247,0.25)] tracking-tight"
				>
					Our{" "}
					<span className="text-purple-400" style={{ fontVariantLigatures: "none" }}>
						Services
					</span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-lg text-gray-300 text-center mb-14 max-w-2xl mx-auto"
				>
					We offer a full spectrum of digital solutions to help your business thrive in the
					modern world.
				</motion.p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{services.map((service, idx) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="relative flex flex-col items-center p-10 border border-purple-700/30 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-purple-950/60 backdrop-blur-md shadow-2xl hover:border-purple-400/70 hover:shadow-purple-500/20 transition-all duration-300 group overflow-hidden"
						>
							<div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-700/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-300" />
							<div className="mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_16px_rgba(168,85,247,0.25)]">
								{service.icon}
							</div>
							<h3 className="text-xl font-semibold text-white mb-2 text-center drop-shadow-[0_2px_8px_rgba(168,85,247,0.15)] tracking-wide">
								{service.title}
							</h3>
							<p className="text-gray-300 text-center text-base leading-relaxed">
								{service.description}
							</p>
							<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
