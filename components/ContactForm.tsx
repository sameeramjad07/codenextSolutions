'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Meteors } from "@/components/ui/meteors"

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full relative">
      {/* <Meteors number={20} /> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-2xl text-center md:text-start font-bold text-white mb-6'>Contact Form</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
        <Input id="name" name="name" required className="mt-1 bg-gray-800 text-white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <Input id="email" name="email" type="email" required className="mt-1 bg-gray-800 text-white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
        <Textarea id="message" name="message" required className="mt-1 bg-gray-800 text-white" rows={4} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button type="submit" variant="outline" className="w-full bg-black  dark:text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          Send Message
        </Button>
      </motion.div>
    </form>
  )
}

