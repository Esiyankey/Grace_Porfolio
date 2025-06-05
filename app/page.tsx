"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Figma",
    "Postman",
  ]

  const projects = [
    {
      title: "Unified Self-Service Platform",
      company: "UITS, KNUST",
      description:
        "Co-developed a platform for document requests used by thousands of students and staff. Integrated 8 services into one seamless application.",
      tech: ["React", "Next.js", "TypeScript"],
      impact: "Used by thousands of users",
    },
    {
      title: "ERP Optimization Platform",
      company: "Big Data Ghana",
      description:
        "Enhanced reliability through QA testing, reducing client-side issues by 40%. Contributed frontend features for fuel inventory and logistics.",
      tech: ["React", "JavaScript", "QA Testing"],
      impact: "40% reduction in client issues",
    },
    {
      title: "Church Management Platform",
      company: "Love Tech Alpha",
      description:
        "Built with Next.js and TypeScript to digitize member onboarding and lesson access. Scaled to support widespread leadership training.",
      tech: ["Next.js", "TypeScript", "React"],
      impact: "Scaled for widespread use",
    },
    {
      title: "Review Collection Platform",
      company: "Self-Initiated",
      description:
        "Designing a QR code-based platform to collect customer reviews in text, audio, or video format to improve brand trust.",
      tech: ["React", "Next.js", "QR Integration"],
      impact: "Improving brand trust",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Grace Yankey
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors">
                About
              </a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className=" px-4 sm:px-6 lg:px-8">
        <div className=" bg-[url('/images/image1.jpg')] bg-cover bg-center md:h-[700px] text-white">
          <div className="text-center pt-32">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6">
                GY
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-white mb-6">Grace Yankey</h1>
            <p className="text-2xl md:text-3xl text-teal-600 dark:text-teal-400 mb-6 font-medium">Frontend Developer</p>
            <p className="text-lg text-slate-200 dark:text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Crafting responsive and accessible web applications with over 2 years of experience. Passionate about
              building user-centered solutions that address real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/Esiyankey"
                className="text-slate-200 dark:text-slate-300 hover:text-teal-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/grace-yankey-2832a7265/"
                className="text-slate-200 dark:text-slate-300 hover:text-teal-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <div className="flex items-center text-slate-200 dark:text-slate-300">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">Kumasi, Ghana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Im a frontend developer with over 2 years of experience crafting responsive and accessible web
                applications using React and Next.js. I specialize in turning UI/UX designs into clean, high-performance
                code and have worked on platforms used by thousands of users.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Im passionate about building user-centered solutions that address real-world problems and improve
                digital experiences. My experience spans from enterprise platforms to innovative startup projects.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  2+ years of frontend development experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Platforms serving thousands of users
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  40% reduction in client-side issues
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>8 services integrated into unified
                  platforms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700 hover:from-teal-200 hover:to-emerald-200 dark:hover:from-teal-800/40 dark:hover:to-emerald-800/40 transition-all"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                  </div>
                  <CardDescription className="text-teal-600 dark:text-teal-400 font-medium">
                    {project.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-teal-200 dark:border-teal-700 text-teal-600 dark:text-teal-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    {project.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Lets discuss how we can work together to bring your ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Lets Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-teal-600 mr-3" />
                  <a
                    href="mailto:graceyan244@gmail.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors"
                  >
                    graceyan244@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">Kumasi, Ghana</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-teal-600 mr-3" />
                  <a
                    href="https://www.linkedin.com/in/grace-yankey-2832a7265/"
                    className="text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 text-teal-600 mr-3" />
                  <a
                    href="https://github.com/Esiyankey"
                    className="text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 border-slate-300 dark:border-slate-600 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 border-slate-300 dark:border-slate-600 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 border-slate-300 dark:border-slate-600 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2024 Grace Yankey. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
