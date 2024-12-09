'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
// import { BackgroundBeams } from "@/components/ui/background-beams"
import { SparklesCore } from '@/components/ui/sparkles'
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Map from '@/components/map'
import FAQ from '@/components/FAQ'

export default function ContactPage() {
    const [activeSection, setActiveSection] = useState('form')
  return (
    <div className="min-h-screen bg-black-100 overflow-hidden relative flex flex-col p-4 items-center justify-center">
      {/* <BackgroundBeams /> */}
      <FloatingNav navItems={navItems} />
      <div className="w-full h-[40rem] relative">
        <div className="absolute inset-0 h-screen w-full bg-transparent z-20 flex items-center justify-center">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
      <div className="max-w-7xl -mt-[32rem] px-4 sm:px-6 lg:px-8 z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white">
            <TextGenerateEffect words="Get in Touch" />
          </h1>
          <p className="text-xl text-gray-300">
            We'd love to hear from you. Choose how you'd like to connect with us.
          </p>
        </motion.div>
            <div className="w-full absolute left-0 -top-24">
            <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-100 "
            />
        </div>
        <div className="flex flex-col -mt-[4rem] lg:flex-row gap-x-40 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Contact Information
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  123 Tech Street, Digital City, 12345
                </CardItem>
                <CardItem
                  translateZ="100"
                  className="w-full mt-4"
                >
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Office"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    onClick={() => setActiveSection('map')}
                  >
                    View Map →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    onClick={() => setActiveSection('form')}
                  >
                    Contact Us
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            {/* <SocialLinks /> */}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3 w-[30rem]"
          >
            <AnimatePresence mode="wait">
              {activeSection === 'form' && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactForm />
                </motion.div>
              )}
              {activeSection === 'map' && (
                <motion.div
                  key="map"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Map />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 w-full max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <FAQ />
        </motion.div>
      </div>
      <Footer/>
    </div>
    
  )
}
