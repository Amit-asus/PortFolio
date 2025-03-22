"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Tap Academy",
    location: "Bengaluru, Karnataka",
    period: "June 2024 – Present",
    responsibilities: [
      "Developed a Real-Time Resume Builder using React.js, enabling dynamic rendering of user results and analytics.",
      "Designed and implemented a Resume Analysis System leveraging OpenAI APIs to analyze resumes based on job descriptions and user-provided details.",
      "Provided tailored feedback and insights to enhance job application success.",
      "Designed an OTP-based login and signup system using SMS authentication, currently serving 50,000+ users.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Codeverse Technologies",
    location: "Bengaluru, Karnataka",
    period: "September 2023 – June 2024",
    responsibilities: [
      "Developed a module called Design Directory using Java and React as part of a Clothing ERP solution.",
      "Fixed bugs by debugging Java and JavaScript code, resolving performance issues, and ensuring seamless integration between frontend and backend components.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-background/50" id="experience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground">
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey as a software developer
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${index}`}
              className="relative pl-8 sm:pl-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-0 sm:left-12 top-0 h-full w-0.5 bg-border"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-10 sm:left-12 top-0 -ml-[3.5px] h-7 w-7 rounded-full border-4 border-background bg-primary"></div>

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
