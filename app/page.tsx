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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Landing Hero with 3D elements */}
      <section id="hero" className="w-full h-screen relative overflow-hidden">
        <Suspense
          fallback={<div className="w-full h-screen bg-black flex items-center justify-center">Loading...</div>}
        >
          <LandingHero />
        </Suspense>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#team">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/20 backdrop-blur-sm border border-purple-500/30 hover:bg-black/30"
            >
              <ChevronDown className="h-6 w-6 text-purple-400" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Our Team
          </h2>
          <TeamSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Our Projects
          </h2>
          <ProjectsSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Our Skills
          </h2>
          <SkillsSection />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            About Us
          </h2>
          <AboutSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Get In Touch
          </h2>
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-black border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Quantum Devs. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
