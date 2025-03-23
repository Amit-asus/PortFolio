"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "Kanban Board",
    description:
      "A drag-and-drop Kanban board application to manage tasks efficiently. Features include task creation, editing, and organization across different status columns.",
    image: "/projectSvg.svg?height=400&width=800",
    technologies: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
    highlights: [
      "Developed a Kanban board application to manage tasks efficiently with drag-and-drop functionality.",
      "Designed an intuitive UI with Tailwind CSS, ensuring responsiveness and a seamless user experience.",
      "Implemented local storage support to persist user tasks without requiring authentication.",
    ],
    github: "https://github.com/Amit-asus/kan-ban-board-dark",
    demo: "https://kan-ban-board-dark.vercel.app/",
  },
  {
    title: "Budget Tracker",
    description:
      "A comprehensive budget tracking application that helps users monitor their income and expenses, providing detailed financial insights.",
    image: "/projectSvg.svg?height=600&width=800",
    technologies: ["React.js", "Semantic UI", "Redux Toolkit", "Redux-Saga"],
    highlights: [
      "Created a budget tracking application to monitor income and expenses, providing users with detailed financial insights.",
      "Utilized Redux Toolkit for efficient state management and implemented Redux-Saga middleware to handle complex asynchronous operations.",
      "Designed a clean and responsive user interface using Semantic UI, enhancing usability and accessibility.",
    ],
    github: "https://github.com/Amit-asus/budget-react",
    demo: "https://budget-react-dun.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background/50 border-red">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent development work"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl overflow-hidden shadow-md border border-border transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                {/* {JSON.stringify(project.image)} */}
                <Image
                  src={project.image || "/images/donut_783083.png"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h4 className="font-semibold text-foreground mb-2">
                  Key Features:
                </h4>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
