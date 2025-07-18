"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Zap, Users, Lightbulb, Code, Rocket } from "lucide-react"

const values = [
  {
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    title: "Innovation",
    description:
      "We push the boundaries of what's possible on the web, constantly exploring new technologies and approaches.",
  },
  
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    title: "Creativity",
    description: "We approach each project with fresh eyes and creative thinking to solve complex problems.",
  },
  {
    icon: <Code className="w-6 h-6 text-green-400" />,
    title: "Quality",
    description:
      "We're committed to writing clean, maintainable code and delivering polished, high-performance products.",
  },
  
]

export default function AboutSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <div ref={containerRef} className="relative grid-pattern">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
            <motion.p
            className="text-lg leading-relaxed text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            We are a dedicated team of university students, passionate about web development and digital innovation.
            With our combined experience and fresh perspectives, we're eager to create elegant, efficient solutions
            for real-world challenges. Our academic foundation and hands-on expertise drive us to develop
            standout web experiences that blend creativity with technical excellence.
            </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/80 via-cyan-500/80 to-purple-500/80 transform -translate-x-1/2"></div>

          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-8`}>
                <div className="w-1/2">
                  <div className="h-full p-6 cyberpunk-card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 border rounded-lg bg-black/50 border-purple-500/20">{value.icon}</div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                    </div>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>

                <div className="absolute w-6 h-6 transform -translate-x-1/2 bg-black border-2 border-purple-500 rounded-full left-1/2 glow-border"></div>

                <div className="w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-2xl font-bold glow-text">Our Mission</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            To create digital experiences that inspire, engage, and push the boundaries of what's possible on the web,
            while delivering exceptional value to our clients and users.
          </p>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute w-40 h-40 rounded-full -top-20 -left-20 bg-purple-500/10 blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute w-40 h-40 rounded-full -bottom-20 -right-20 bg-cyan-500/10 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
      />
    </div>
  )
}
