"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Code, Database, FileCode, Laptop, Server, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["TypeScript", "JavaScript", "Java", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    icon: <FileCode className="h-6 w-6 text-primary" />,
    skills: ["React", "Node.js", "Express.js", "Ant Design (AntD)", "Material-UI"],
  },
  {
    title: "Libraries",
    icon: <Laptop className="h-6 w-6 text-primary" />,
    skills: ["Mongoose", "React Hook Form", "Yup (for validation)", "Jest Testing Library", "jQuery"],
  },
  {
    title: "Developer Tools",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: ["Git", "Figma", "VS Code", "IntelliJ", "Eclipse"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Other Skills",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["REST APIs", "Agile Methodology", "Debugging", "Performance Optimization"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive list of my technical skills and proficiencies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-md bg-primary/10 mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

