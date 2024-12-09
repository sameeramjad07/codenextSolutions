'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'
import Footer from '@/components/Footer'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from '@/lib/utils'

interface DetailedServicePageProps {
  service: {
    title: string
    description: string
    icon: string
    image: string
    features: {
      title: string;
      description: string;
      link: string;
    }[];
    technologies: string[]
  }
}

export default function DetailedServicePage({ service }: DetailedServicePageProps) {
  const [rotationX, setRotationX] = useState(0)
  const [rotationY, setRotationY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left
    const y = e.clientY - box.top
    const centerX = box.width / 2
    const centerY = box.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotationX(rotateX)
    setRotationY(rotateY)
  }

  const handleMouseLeave = () => {
    setRotationX(0)
    setRotationY(0)
  }

  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center items-center flex-col overflow-hidden">
      {/* <BackgroundBeamsWithCollision /> */}
      <div className="max-w-7xl w-full z-10">
        <FloatingNav navItems={navItems} />
        <div className="w-full absolute left-0 -top-24">
            <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-100 "
            />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-40 mb-20 text-center"
        >
          <h1 className="md:text-3xl text-xl lg:text-7xl font-bold text-center text-white relative z-20">
            <span className="bg-clip-text text-transparent dark:text-white bg-gradient-to-r from-purple-500 to-blue-500">
              {service.title}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{service.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                transform: `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <CardContainer className="inter-var w-full max-w-lg mx-auto mt-4">
            <CardBody className="bg-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.15] dark:bg-black/50 dark:border-white/[0.15] border-black/[0.1] w-full h-auto rounded-2xl p-8 border shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardItem translateZ="100" className="w-full mb-4">
                <img
                    src={service.image}
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-lg"
                    alt={service.title}
                />
                </CardItem>
                <div className="mt-4">
                <CardItem
                    as="h3"
                    translateZ="80"
                    className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center"
                >
                    {service.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-600 dark:text-neutral-300 text-sm text-center leading-relaxed"
                >
                    {service.description}
                </CardItem>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                <CardItem
                    translateZ="40"
                    as="button"
                    className="px-6 py-3 rounded-full bg-purple-500 text-white font-medium shadow-lg hover:bg-purple-600 transition duration-200"
                >
                    Learn More
                </CardItem>
                <CardItem
                    translateZ="40"
                    as="button"
                    className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium shadow-lg hover:bg-blue-600 transition duration-200"
                >
                    Get Started
                </CardItem>
                </div>
            </CardBody>
            </CardContainer>
            </motion.div>
          </div>

          <div>
            <h2 className="text-3xl text-center font-bold bg-clip-text text-transparent dark:text-white bg-gradient-to-r from-purple-500 to-blue-500">
              Key Features
            </h2>
            <HoverEffect items={service.features} />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent dark:text-white bg-gradient-to-r from-purple-500 to-blue-500">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-full px-4 py-2 text-sm font-medium text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent dark:text-white bg-gradient-to-r from-purple-500 to-blue-500">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your vision to life with our cutting-edge {service.title.toLowerCase()} solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-8 py-3 rounded-full text-white font-bold",
              "bg-gradient-to-r from-purple-500 to-blue-500",
              "hover:from-purple-600 hover:to-blue-600",
              "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",
              "transition-all duration-200 ease-in-out"
            )}
          >
            Contact Us Now
          </motion.button>
        </motion.div>
      </div>
      <TextHoverEffect text="CODENEXT" />
      <Footer />
    </main>
  )
}

