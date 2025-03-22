"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Tap Academy",
    location: "Bengaluru, Karnataka",
    period: "June 2024 – Present",
    responsibilities: [
      "Built a live Resume Builder with React.js, showing instant results and analytics, and created 4 resume templates using SCSS.",
      "Used OpenAI APIs to make a Resume Analysis System that compares resumes to job descriptions.",
      "Gave students advice to improve their job applications.",
      "Created an OTP login and signup system with SMS, used by over 50,000 users.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Codeverse Technologies",
    location: "Bengaluru, Karnataka",
    period: "September 2023 – June 2024",
    responsibilities: [
      "Developed a module called Design Directory using Java and React as part of a Clothing ERP solution.",
      "Guided 5 junior trainees, explaining the project flow from controller to database, including how data is saved.",
      "Fixed bugs by debugging Java and JavaScript code, resolving performance issues, and ensuring seamless integration between frontend and backend components.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey as a software developer"
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-32 pb-12"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-0 sm:left-12 top-0 h-full w-0.5 bg-border"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-12 top-0 -ml-[12px] h-7 w-7 rounded-full border-4 border-background bg-primary"></div>

              <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                <div className="sm:w-32 sm:text-right sm:mr-8 mb-2 sm:mb-0">
                  <div className="flex items-center sm:justify-end text-muted-foreground">
                    <Calendar className="h-8 w-8 mr-1 sm:mr-2" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {experience.title}
                  </h3>
                  <div className="flex items-center text-primary">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {experience.location}
                  </p>
                </div>
              </div>

              <div className="sm:pl-40">
                <ul className="list-disc pl-5 space-y-2">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i} className="text-muted-foreground">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

