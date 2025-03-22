"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background and what drives me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/SquarePic_amit-macd.jpg"
                  alt="Amit's Profile Picture"
                  width={300}
                  height={300}
                  priority
                  className="object-contain w-full h-full rounded-2xl" // Changed from object-cover
                />
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Fullstack Developer with a passion for creating impactful digital
              solutions
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Amit, a fullstack developer based in Bengaluru,
                Karnataka. I enjoy building everything from small business sites
                to rich interactive web applications.
              </p>

              <p>
                My journey in software development began during my studies at
                Sagar Institute of Research and Technology, where I discovered
                my passion for creating digital experiences that solve
                real-world problems.
              </p>

              <p>
                Currently, I'm working at Tap Academy, where I've developed a
                Real-Time Resume Builder and Resume Analysis System using
                React.js and OpenAI APIs. I'm also experienced with Java, having
                worked on a Clothing ERP solution at Codeverse Technologies.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enhancing my skills
                through continuous learning.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-foreground font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground">Bengaluru, Karnataka</p>
              </div>

              <div>
                <h4 className="text-foreground font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">
                  amitkushwaha01406@gmail.com
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-semibold mb-2">Phone</h4>
                <p className="text-muted-foreground">+91 8962374312</p>
              </div>

              <div>
                <h4 className="text-foreground font-semibold mb-2">Degree</h4>
                <p className="text-muted-foreground">
                  B.Tech in Electrical and Electronics
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
