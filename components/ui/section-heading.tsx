"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeading({ title, subtitle, className, titleClassName, subtitleClassName }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-12", className)}
    >
      <h2 className={cn("text-3xl font-bold text-foreground sm:text-4xl", titleClassName)}>{title}</h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg text-muted-foreground max-w-2xl mx-auto", subtitleClassName)}>{subtitle}</p>
      )}
    </motion.div>
  )
}

