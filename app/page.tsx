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
      // Get screen resolution
      const resolution = `${window.screen.width}x${window.screen.height}`;
      
      // Create an object to store visitor information
      const visitorInfo = {
        resolution: resolution,
        location: "Unknown Location"
      };
      
      // Function to send notification after getting location data
      const sendNotification = (locationInfo: { resolution: string; location: string }) => {
        fetch("/api/notify-visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(locationInfo)
        })
          .then(res => res.json())
          .then(data => console.log("📩 Visit notification sent:", data))
          .catch(err => console.error("❌ Notification error:", err));
      };
      
      // Try to get location information using a free geolocation API
      // Set a timeout to ensure we don't wait too long
      const locationTimeout = setTimeout(() => {
        // If the timeout triggers, send with unknown location
        sendNotification(visitorInfo);
      }, 3000); // 3 second timeout
      
      fetch("https://ipapi.co/json/")
        .then(res => {
          if (!res.ok) throw new Error('Location API response was not ok');
          return res.json();
        })
        .then(locationData => {
          // Clear the timeout since we got data
          clearTimeout(locationTimeout);
          
          // Update the location information with city and country if available
          const locationStr = locationData.city && locationData.country_name 
            ? `${locationData.city}, ${locationData.country_name}`
            : "Location Unavailable";
          
          // Send notification with the location information
          sendNotification({
            resolution: resolution,
            location: locationStr
          });
        })
        .catch((error) => {
          // Clear the timeout since we're handling the error
          clearTimeout(locationTimeout);
          console.error("Failed to get location:", error);
          sendNotification(visitorInfo);
        });
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
