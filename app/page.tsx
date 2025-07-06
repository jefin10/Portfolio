"use client"
import { Suspense } from "react"
import Link from "next/link"
import LandingHero from "@/components/landing-hero"
import TeamSection from "@/components/team-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect } from "react"
import ServicesSection from "@/components/services"

export default function Home() {

  useEffect(() => {
    // Activate the backend when the component mounts
    activateBackend()
  },[])

    useEffect(() => {
      fetch("/api/notify-visit", {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => console.log("📩 Visit notification sent:", data))
        .catch((err) => console.error("❌ Notification error:", err));
    }, []);

  const activateBackend = async () => {
    await fetch('https://rbbackend-hlah.onrender.com/')
    await fetch('https://bmchats.onrender.com/')
  }
  return (
    <main className="flex flex-col items-center justify-between min-h-screen overflow-auto scrollbar-hide">
      {/* Landing Hero with 3D elements */}
      <section id="hero" className="relative w-full h-screen overflow-hidden">
        <Suspense
          fallback={<div className="flex items-center justify-center w-full h-screen bg-black">Loading...</div>}
        >
          <LandingHero />
        </Suspense>
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <Link href="#team">
            <Button
              variant="ghost"
              size="icon"
              className="border rounded-full bg-black/20 backdrop-blur-sm border-purple-500/30 hover:bg-black/30"
            >
              <ChevronDown className="w-6 h-6 text-purple-400" />
            </Button>
          </Link>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="w-full py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            About Us
          </h2>
          <AboutSection />
        </div>
      </section>
      
      <section id='services' className="w-full py-20 bg-black">
        <div className="container px-4 mx-auto">
          <ServicesSection></ServicesSection>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container px-4 mx-auto">
          <h2 className="p-2 mb-16 text-4xl font-bold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Our Projects
          </h2>
          <ProjectsSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 bg-black">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Our Skills
          </h2>
          <SkillsSection />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-20 bg-black">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Our Team
          </h2>
          <TeamSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-black">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Get In Touch
          </h2>
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-black border-t border-purple-500/20">
        <div className="container px-4 mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Klaang V. All rights reserved.</p>
          
        </div>
      </footer>
    </main>
  )
}
