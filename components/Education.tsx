"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Electrical and Electronics",
    institution: "Sagar Institute of Research and Technology",
    location: "Bhopal, MP",
    period: "June 2019 – June 2023",
  },
  {
    degree: "Higher Secondary School",
    institution: "Carmel Convent School",
    location: "Bhopal, MP",
    period: "June 2016 – June 2017",
  },
]

const certifications = [
  {
    title: "Full Stack Development (MERN)",
    institution: "Sharma Computer Academy",
    period: "April 2023 – August 2023",
  },
  {
    title: "Data Structure and Algorithm",
    institution: "Sharma Computer Academy",
    period: "September 2022 – December 2022",
  },
  {
    title: "Object-Oriented Programming in Java",
    institution: "Scaler",
    period: "October 2023",
  },
]

export default function Education() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education & Certifications"
          subtitle="My academic background and professional certifications"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-md bg-primary/10 mr-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-sm border border-border"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-foreground">{item.degree}</h4>
                  <p className="text-primary font-medium">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                  <p className="text-sm text-muted-foreground mt-2">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-md bg-primary/10 mr-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-sm border border-border"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-primary font-medium">{item.institution}</p>
                  <p className="text-sm text-muted-foreground mt-2">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

