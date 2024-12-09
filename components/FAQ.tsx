'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of digital services including web development, mobile app development, UI/UX design, and digital marketing solutions."
  },
  {
    question: "How can I request a quote?",
    answer: "You can request a quote by filling out our contact form or by emailing us directly at info@example.com. We'll get back to you within 24 hours with a detailed proposal."
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes, we provide ongoing support and maintenance for all our projects. We offer various support packages to suit your needs and ensure your digital solutions remain up-to-date and fully functional."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on the scope and complexity of the project. On average, a standard web development project takes 6-8 weeks from start to finish. We'll provide you with a detailed timeline during our initial consultation."
  }
]

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  )
}

