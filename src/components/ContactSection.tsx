import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Terminal,
  Code
} from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bagheera00012@gmail.com",
    link: "mailto:bagheera00012@gmail.com",
    color: "text-primary"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9555350586",
    link: "tel:+919555350586",
    color: "text-accent"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kanpur, India",
    link: "#",
    color: "text-secondary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/yash-gupta-145820227/",
    color: "text-primary"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    link: "https://github.com/Jhonsnowwwwww",
    color: "text-accent"
  },
  {
    icon: Code,
    label: "LeetCode",
    value: "Check my progress",
    link: "https://leetcode.com/u/Bagheera_0012/",
    color: "text-secondary"
  }
]

const terminalCommands = [
  "$ whoami",
  "yash.gupta",
  "$ cat skills.txt",
  "Full-Stack Development | Competitive Programming | ML",
  "$ status",
  "Available for opportunities",
  "$ contact --help",
  "Use the form below or click the links →"
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isTerminalVisible, setIsTerminalVisible] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold cyber-title mb-4">
            INIT_CONTACT.SH
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects? Let's build something amazing together.
            Drop me a message or connect through social platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="cyber" className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl cyber-title flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-muted/20 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@domain.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-muted/20 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/20 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-muted/20 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="cyber" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Terminal Window */}
            <Card variant="glass" className="overflow-hidden">
              <CardHeader 
                className="bg-muted/10 cursor-pointer flex flex-row items-center justify-between"
                onClick={() => setIsTerminalVisible(!isTerminalVisible)}
              >
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">yash@portfolio:~$</CardTitle>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <motion.div
                  initial={false}
                  animate={{ height: isTerminalVisible ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 font-mono text-sm space-y-2 bg-card/50">
                    {terminalCommands.map((command, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={command.startsWith('$') ? 'text-primary' : 'text-muted-foreground'}
                      >
                        {command}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-2xl cyber-title">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/20 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-5 h-5 text-background" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{info.label}</div>
                      <div className={`text-sm ${info.color}`}>{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card variant="neon" className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold cyber-title mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">1+</div>
                    <div className="text-sm text-muted-foreground">Year Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Easter Egg - Konami Code */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xs text-muted-foreground font-mono">
            Pro tip: Try the Konami code for a surprise! ↑↑↓↓←→←→BA
          </p>
        </motion.div>
      </div>
    </section>
  )
}