import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Code2, Database, Brain, Users, Globe } from 'lucide-react'

const projects = [
  {
    title: "FoundiFy",
    description: "Scalable lost-and-found platform using MERN stack addressing university's inefficiency in retrieving lost items",
    image: "/api/placeholder/600/400",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
    features: [
      "40% increase in recovered items",
      "25% boost in community participation", 
      "User authentication & authorization",
      "Efficient search functionalities"
    ],
    liveLink: "https://lost-and-found-lac.vercel.app/login",
    githubLink: "https://github.com/tdgadwani/LostAndFound",
    icon: Database,
    category: "Full Stack"
  },
  {
    title: "Disease Detector",
    description: "CNN-based model predicting diseases from X-ray images with 96% accuracy using advanced computer vision",
    image: "/api/placeholder/600/400", 
    technologies: ["Python", "TensorFlow", "CNN", "OpenCV", "NumPy"],
    features: [
      "96% prediction accuracy",
      "Real-time X-ray analysis",
      "Multiple disease detection",
      "User-friendly interface"
    ],
    liveLink: "#",
    githubLink: "#",
    icon: Brain,
    category: "AI/ML"
  },
  {
    title: "Public Sphere",
    description: "Citizen-government interaction portal with real-time reporting, monitoring, and communication features",
    image: "/api/placeholder/600/400",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    features: [
      "Location-based reporting",
      "Real-time status updates",
      "OTP verification system", 
      "Government official dashboard"
    ],
    liveLink: "https://hack-ofest-dev-coders.vercel.app/",
    githubLink: "https://github.com/RaviSaini045/HackOfest_DevCoders",
    icon: Users,
    category: "Web App"
  },
  {
    title: "Latency Topology Visualizer",
    description: "A 3D world map visualization for cryptocurrency exchange server locations and real-time latency data across AWS, GCP, and Azure regions",
    image: "/api/placeholder/600/400",
    technologies: ["React 18", "TypeScript", "Three.js", "Tailwind CSS", "Visx"],
    features: [
      "Interactive 3D globe visualization",
      "Real-time latency connections",
      "Historical latency charts",
      "Dark/light theme support"
    ],
    liveLink: "https://latency-topology-visualizer-p73d.vercel.app/",
    githubLink: "https://github.com/Jhonsnowwwwww/Latency_Topology_Visualizer",
    icon: Globe,
    category: "Data Viz"
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group"
    >
      <Card variant="cyber" className="h-full hover:scale-105 transition-all duration-300 overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-glow overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <project.icon className="w-16 h-16 text-primary animate-float" />
          </div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary/20 border-primary text-primary">
              {project.category}
            </Badge>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button variant="neon" size="sm" asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="glass" size="sm" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl cyber-title">{project.title}</CardTitle>
          <p className="text-muted-foreground text-sm">{project.description}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                variant="outline" 
                className="text-xs border-primary/30 text-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-accent">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                  <Code2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold cyber-title mb-4">
            PROJECTS.JSON
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies, 
            each project solving real-world problems with measurable impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Card variant="glass" className="inline-block p-8">
            <h3 className="text-2xl font-bold cyber-title mb-4">
              Want to See More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions
            </p>
            <Button variant="cyber" size="lg" className="group" asChild>
              <a href="https://github.com/Jhonsnowwwwww" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5 group-hover:animate-spin" />
                Visit GitHub Profile
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}