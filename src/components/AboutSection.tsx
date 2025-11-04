import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Briefcase, Award, Code, Brain, Trophy, FileCheck } from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: "Amazon ML Summer School",
    description: "Top 3000 from 85,000+ applicants",
    progress: 96,
    color: "text-accent"
  },
  {
    icon: Trophy,
    title: "LeetCode Contest",
    description: "Global Rank 397 among 40,000+",
    progress: 92,
    color: "text-primary"
  },
  {
    icon: Code,
    title: "ByteVerse Hackathon",
    description: "Top 10 out of 250+ teams",
    progress: 88,
    color: "text-secondary"
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "1000+ problems solved",
    progress: 95,
    color: "text-accent"
  }
]

const skills = [
  { name: "JavaScript/TypeScript", level: 95, category: "frontend" },
  { name: "React.js", level: 92, category: "frontend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Java", level: 80, category: "language" },
  { name: "Spring Boot", level: 78, category: "backend" },
  { name: "Python", level: 90, category: "language" },
  { name: "C++", level: 95, category: "language" },
  { name: "MongoDB", level: 85, category: "database" },
  { name: "Kafka", level: 75, category: "backend" },
  { name: "Redis", level: 72, category: "database" },
  { name: "Machine Learning", level: 80, category: "ai" },
  { name: "Data Structures & Algorithms", level: 98, category: "cs" }
]

const education = [
  {
    degree: "B.Tech. in Electronics and Communication Engineering",
    institution: "National Institute of Technology, Patna",
    period: "2021 - 2025",
    cgpa: "8.0/10",
    icon: GraduationCap
  }
]

const experience = [
  {
    role: "Associate Data Engineer",
    company: "Tredence Analytics Pvt. Ltd",
    period: "June 2025 - Present",
    location: "Client: Mercedes-Benz Daimler",
    achievements: [
      "Migrating enterprise-scale data from SAP HANA to Snowflake, optimizing query execution by 35%",
      "Converted XML-based logic into efficient SQL workflows, improving data processing speed by 40%",
      "Enhanced query performance through SQL tuning, reducing compute costs by 25%",
      "Validated and reconciled large datasets using dbt and Snowflake, ensuring 99.9% data integrity"
    ],
    icon: Briefcase
  },
  {
    role: "SDE Intern",
    company: "Spyglass Analytics Software",
    period: "Jan 2025 - May 2025",
    location: "Gurugram",
    achievements: [
      "Enhanced web app interactions, boosting user engagement by 50%",
      "Integrated AI APIs reducing response time from 1.5s to 0.9s",
      "Created reusable React components improving performance by 20%"
    ],
    icon: Briefcase
  },
  {
    role: "Software Engineering Intern", 
    company: "ITJOBXS",
    period: "June 2024 - Aug 2024",
    location: "Remote",
    achievements: [
      "Developed responsive web application in agile environment",
      "Implemented fraud detection algorithm reducing fake posts by 80%",
      "Integrated Google Recaptcha for enhanced security"
    ],
    icon: Briefcase
  },
  {
    role: "Frontend Dev Intern",
    company: "MVAI",
    period: "June 2023 - Aug 2023",
    location: "Remote",
    achievements: [
      "Built interactive UI components using React.js and modern CSS",
      "Optimized frontend performance resulting in 30% faster load times",
      "Collaborated with design team to implement pixel-perfect interfaces",
      "Developed responsive designs ensuring cross-browser compatibility"
    ],
    icon: Briefcase
  }
]

const certifications = [
  {
    title: "Coursera Machine Learning Certification",
    issuer: "Coursera",
    date: "2024",
    credentialId: "M2AV9WXP89CR",
    url: "https://www.coursera.org/account/accomplishments/specialization/M2AV9WXP89CR",
    icon: FileCheck,
    status: "Active"
  },
  {
    title: "Amazon Q - Generative AI- Powered Assistant Learning Plan",
    issuer: "AWS Training & Certification",
    date: "2024",
    credentialId: "View Certificate",
    url: "https://drive.google.com/file/d/1YbzZaO0iZJCoN7J7AyDdz9yuKpTZ8x3u/view?usp=drive_link",
    icon: FileCheck,
    status: "Active"
  },
  {
    title: "Amazon Q Developer Getting Started",
    issuer: "AWS Training & Certification",
    date: "2024",
    credentialId: "View Certificate",
    url: "https://drive.google.com/file/d/1IqNqnmPYmWVuENzU3V5mPvxGdN4qYpqs/view?usp=drive_link",
    icon: FileCheck,
    status: "Active"
  },
  {
    title: "Snow Pro Core Certification",
    issuer: "Snowflake",
    date: "September 2025",
    credentialId: "Certified",
    url: "#",
    icon: FileCheck,
    status: "Active"
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold cyber-title mb-4">
            ABOUT_ME.EXE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software engineer with expertise in full-stack development, 
            competitive programming, and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <Card key={index} variant="cyber" className="group hover:scale-105 transition-transform">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {achievement.description}
                </p>
                <Progress value={achievement.progress} className="h-2" />
                <span className="text-xs text-primary mt-1 block">
                  {achievement.progress}% Achievement Rate
                </span>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="glass" className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl cyber-title">Technical Arsenal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="outline" className="text-primary border-primary">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Education */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-2xl cyber-title">Education</CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center">
                        <edu.icon className="w-6 h-6 text-background" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-primary">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                        <Badge className="bg-accent text-accent-foreground">
                          CGPA: {edu.cgpa}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-2xl cyber-title">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center">
                        <exp.icon className="w-6 h-6 text-background" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period} • {exp.location}</p>
                      <ul className="mt-3 space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-2xl cyber-title">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex gap-4 p-4 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-glow rounded-lg flex items-center justify-center">
                        <cert.icon className="w-5 h-5 text-background" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold hover:text-primary transition-colors"
                      >
                        {cert.title}
                      </a>
                      <p className="text-sm text-primary">{cert.issuer}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">
                          {cert.date} • ID: {cert.credentialId}
                        </span>
                        <Badge variant="outline" className="text-accent border-accent">
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}