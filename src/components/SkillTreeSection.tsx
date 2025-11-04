import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Brain, 
  GitBranch,
  Globe,
  Zap
} from 'lucide-react'
import { useState } from 'react'

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Globe,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: [
      { name: 'React.js', level: 92, experience: '2+ years' },
      { name: 'Vue.js', level: 85, experience: '1+ year' },
      { name: 'JavaScript/TypeScript', level: 95, experience: '2+ years' },
      { name: 'HTML5/CSS3', level: 90, experience: '2+ years' },
      { name: 'Tailwind CSS', level: 88, experience: '2+ years' },
      { name: 'Material UI', level: 80, experience: '1+ year' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    skills: [
      { name: 'Node.js', level: 88, experience: '2+ years' },
      { name: 'Express.js', level: 85, experience: '2+ years' },
      { name: 'Java', level: 80, experience: '2+ years' },
      { name: 'Spring Boot', level: 78, experience: '1+ year' },
      { name: 'RESTful APIs', level: 90, experience: '2+ years' },
      { name: 'GraphQL', level: 75, experience: '6 months' },
      { name: 'Kafka', level: 75, experience: '1+ year' },
      { name: 'Redis', level: 72, experience: '1+ year' },
      { name: 'Web Services', level: 80, experience: '1+ year' }
    ]
  },
  {
    id: 'database',
    title: 'Database & Storage',
    icon: Database,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    skills: [
      { name: 'MongoDB', level: 85, experience: '2+ years' },
      { name: 'MySQL', level: 82, experience: '2+ years' },
      { name: 'Mongoose', level: 88, experience: '2+ years' },
      { name: 'SQL', level: 85, experience: '2+ years' }
    ]
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: Code,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: [
      { name: 'C++', level: 95, experience: '2+ years' },
      { name: 'Python', level: 90, experience: '2+ years' },
      { name: 'JavaScript', level: 95, experience: '2+ years' },
      { name: 'Java', level: 80, experience: '2+ years' },
      { name: 'C#', level: 75, experience: '1+ year' },
      { name: 'C', level: 85, experience: '2+ years' }
    ]
  },
  {
    id: 'ml',
    title: 'ML & Data Science',
    icon: Brain,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    skills: [
      { name: 'NumPy', level: 85, experience: '2+ years' },
      { name: 'Matplotlib', level: 80, experience: '2+ years' },
      { name: 'TensorFlow', level: 75, experience: '1+ year' },
      { name: 'Computer Vision', level: 78, experience: '1+ year' },
      { name: 'Data Analysis', level: 82, experience: '2+ years' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Zap,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    skills: [
      { name: 'Git/GitHub', level: 90, experience: '2+ years' },
      { name: 'VS Code', level: 95, experience: '2+ years' },
      { name: 'Postman', level: 88, experience: '2+ years' },
      { name: 'NPM', level: 85, experience: '2+ years' },
      { name: 'Gulp/Grunt', level: 70, experience: '6 months' }
    ]
  }
]

const SkillNode = ({ category, isActive, onClick }: { 
  category: typeof skillCategories[0], 
  isActive: boolean, 
  onClick: () => void 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`cursor-pointer relative ${isActive ? 'z-10' : 'z-0'}`}
      onClick={onClick}
    >
      <div className={`
        w-24 h-24 rounded-full flex items-center justify-center
        transition-all duration-300 border-2
        ${isActive 
          ? `${category.bgColor} border-current ${category.color} shadow-neon-cyan` 
          : 'bg-card border-border hover:border-primary/50'
        }
      `}>
        <category.icon className={`w-8 h-8 ${isActive ? category.color : 'text-muted-foreground'}`} />
      </div>
      
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className={`text-xs font-medium whitespace-nowrap ${
          isActive ? category.color : 'text-muted-foreground'
        }`}>
          {category.title.split(' ')[0]}
        </div>
      </div>

      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 rounded-full border-2 border-current animate-glow-pulse"
        />
      )}
    </motion.div>
  )
}

export default function SkillTreeSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0])

  return (
    <section id="skills" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold cyber-title mb-4">
            SKILL_TREE.MAP
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive skill tree showcasing technical expertise across multiple domains. 
            Click on nodes to explore detailed proficiency levels.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill Tree Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card variant="glass" className="p-8">
              <h3 className="text-2xl font-bold cyber-title mb-8 text-center">
                Interactive Skill Tree
              </h3>
              
              {/* Skill Tree Layout */}
              <div className="relative h-96 flex items-center justify-center">
                {/* Central Hub */}
                <div className="absolute w-16 h-16 bg-gradient-cyber rounded-full flex items-center justify-center shadow-neon-cyan">
                  <Zap className="w-8 h-8 text-background" />
                </div>

                {/* Skill Nodes in Circle */}
                {skillCategories.map((category, index) => {
                  const angle = (index * 360) / skillCategories.length
                  const radius = 120
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius

                  return (
                    <div
                      key={category.id}
                      className="absolute"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      {/* Connection Line */}
                      <div 
                        className="absolute w-px bg-primary/30"
                        style={{
                          height: `${radius}px`,
                          top: '50%',
                          left: '50%',
                          transformOrigin: 'top center',
                          transform: `translateX(-50%) rotate(${angle + 180}deg)`
                        }}
                      />
                      
                      <SkillNode
                        category={category}
                        isActive={activeCategory.id === category.id}
                        onClick={() => setActiveCategory(category)}
                      />
                    </div>
                  )
                })}
              </div>
            </Card>
          </motion.div>

          {/* Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            key={activeCategory.id}
          >
            <Card variant="cyber" className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${activeCategory.bgColor} flex items-center justify-center`}>
                    <activeCategory.icon className={`w-6 h-6 ${activeCategory.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold cyber-title">{activeCategory.title}</h3>
                </div>

                <div className="space-y-6">
                  {activeCategory.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={`${activeCategory.color} border-current`}>
                            {skill.experience}
                          </Badge>
                          <Badge className="bg-gradient-cyber text-background">
                            {skill.level}%
                          </Badge>
                        </div>
                      </div>
                      
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-muted"
                      />
                      
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Proficiency Level</span>
                        <span>{skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="mt-8 p-4 bg-gradient-glow rounded-lg">
                  <h4 className="font-semibold mb-2">Category Overview</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {activeCategory.skills.length}
                      </div>
                      <div className="text-xs text-muted-foreground">Technologies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">
                        {Math.round(activeCategory.skills.reduce((acc, skill) => acc + skill.level, 0) / activeCategory.skills.length)}%
                      </div>
                      <div className="text-xs text-muted-foreground">Average Proficiency</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}