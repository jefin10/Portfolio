"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Float, Stars } from "@react-three/drei"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

function Globe({ scale = 1 }) {
  const globeRef = useRef()

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={globeRef} scale={[scale, scale, scale]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#000000"
        emissive="#6d28d9"
        emissiveIntensity={0.5}
        roughness={0.7}
        metalness={0.3}
        wireframe
      />
    </mesh>
  )
}

function FloatingCards() {
  const cards = [
    { position: [3, 0, 0], rotation: [0, 0.5, 0.2], scale: 0.7, color: "#a855f7" },
    { position: [-3, 1, -1], rotation: [0.2, -0.5, -0.1], scale: 0.6, color: "#06b6d4" },
    { position: [2, -1.5, 1], rotation: [-0.1, 0.3, 0], scale: 0.5, color: "#8b5cf6" },
  ]

  return (
    <>
      {cards.map((card, index) => (
        <Float key={index} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={card.position} rotation={card.rotation} scale={card.scale}>
            <boxGeometry args={[1, 1.5, 0.05]} />
            <meshStandardMaterial
              color={card.color}
              emissive={card.color}
              emissiveIntensity={0.5}
              roughness={0.3}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

function Scene() {
  const { camera } = useThree()
  const groupRef = useRef()

  useEffect(() => {
    camera.position.set(0, 0, 8)

    // Animation timeline
    const tl = gsap.timeline()

    tl.from(groupRef.current.position, {
      y: -10,
      duration: 2,
      ease: "power3.out",
    })

    tl.from(
      groupRef.current.rotation,
      {
        x: Math.PI * 0.5,
        duration: 2,
        ease: "power3.out",
      },
      "<",
    )
  }, [camera])

  return (
    <group ref={groupRef}>
      <Globe scale={2} />
      <FloatingCards />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          position={[0, 3, 0]}
          fontSize={0.8}
          color="#a855f7"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.woff"
          anchorX="center"
          anchorY="middle"
        >
          Klaang V
        </Text>
      </Float>
    </group>
  )
}

export default function LandingHero() {
  return (
    <div className="relative w-full h-screen">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Scene />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 pb-2">
            Crafting Digital Futures
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
            We build cutting-edge web experiences that push the boundaries of what's possible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <Link href="#projects">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border border-purple-500/50 shadow-lg shadow-purple-500/20">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-purple-500/50 text-white hover:bg-purple-950/30">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
