"use client"

import { motion } from "framer-motion"
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
    <section className="py-20 bg-background" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground">Technical Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive list of my technical skills and proficiencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 text-foreground">{category.title}</h3>
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

