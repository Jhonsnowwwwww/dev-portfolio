import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D, Center, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, ExternalLink, Mail, Phone, Linkedin, Github, Code, Star } from 'lucide-react'
import { Suspense } from 'react'

function FloatingCube() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial 
          color="#00D4FF" 
          emissive="#001a33"
          wireframe={false}
        />
      </mesh>
    </Float>
  )
}

function CodeSymbols() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <Float key={index} speed={1.5 + index * 0.3} rotationIntensity={0.5}>
          <mesh position={[
            Math.cos((index * Math.PI) / 2) * 3,
            Math.sin((index * Math.PI) / 2) * 2,
            -1
          ]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial 
              color="#8B5CF6" 
              emissive="#2D1B69"
              wireframe={index % 2 === 0}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#00D4FF" intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={0.5} />
      
      <FloatingCube />
      <CodeSymbols />
    </>
  )
}

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-dark flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              height: '100px',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-6xl lg:text-8xl font-black cyber-title">
              YASH
              <br />
              GUPTA
            </h1>
            <div className="text-xl lg:text-2xl text-muted-foreground font-mono">
              <span className="text-primary">{'>'}</span> Software Engineer
            </div>
            <div className="text-lg text-muted-foreground max-w-lg">
              Crafting digital experiences with cutting-edge technologies. 
              MERN Stack specialist with a passion for competitive programming and ML.
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-3 gap-6"
          >
            <div className="text-center glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <a href="https://www.codechef.com/users/ashura_zoro" target="_blank" rel="noopener noreferrer" className="text-center glass p-4 rounded-lg hover:scale-105 transition-transform cursor-pointer">
              <div className="text-2xl font-bold text-accent flex items-center justify-center gap-1">
                3 <Star className="w-5 h-5 fill-accent" />
              </div>
              <div className="text-sm text-muted-foreground">CodeChef</div>
            </a>
            <div className="text-center glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-secondary">8.0</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="cyber" size="lg" className="group">
              <a 
                href="https://drive.google.com/file/d/1-ETlSxrZcg2LWU2BWVUGZuZGUnYQb6gU/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5 group-hover:animate-bounce" />
                Resume
              </a>
            </Button>
            <Button variant="neon" size="lg">
              <a 
                href="https://www.linkedin.com/in/yash-gupta-145820227" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
            <Button variant="glass" size="lg">
              <a 
                href="https://github.com/Jhonsnowwwwww" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View Projects
              </a>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              +91 9555350586
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              bagheera00012@gmail.com
            </div>
            <a href="https://www.linkedin.com/in/yash-gupta-145820227/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4 text-primary" />
              LinkedIn
            </a>
            <a href="https://github.com/Jhonsnowwwwww" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github className="w-4 h-4 text-primary" />
              GitHub
            </a>
            <a href="https://leetcode.com/u/Bagheera_0012/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Code className="w-4 h-4 text-primary" />
              LeetCode
            </a>
          </motion.div>
        </motion.div>

        {/* Right 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-[600px] relative"
        >
          <div className="absolute inset-0 bg-gradient-cyber opacity-10 rounded-2xl blur-3xl"></div>
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <Scene3D />
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={0.5}
                enablePan={false}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
        <div className="text-xs text-center mt-2 text-muted-foreground">SCROLL</div>
      </motion.div>
    </div>
  )
}