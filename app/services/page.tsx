"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card-copy";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        
    
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="w-full absolute left-0 -top-24">
            <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-100 "
            />
        </div>
        <h1 className="text-4xl font-bold text-center z-10 mb-12 mt-40">Our <span className="text-purple">Services</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <Footer/>
      </div>
      
    </main>
  );
};

const services = [
  {
    title: "Web Development",
    description: "Custom web applications tailored to your business needs.",
    icon: "🌐",
    image: "https://assets.aceternity.com/demos/algochurn.webp", // Example image path
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    icon: "📱",
    image: "https://assets.aceternity.com/demos/algochurn.webp", // Example image path
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure and services.",
    icon: "☁️",
    image: "https://assets.aceternity.com/demos/algochurn.webp", // Example image path
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions to automate and optimize your processes.",
    icon: "🤖",
    image: "https://assets.aceternity.com/demos/algochurn.webp", // Example image path
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced security measures.",
    icon: "🔒",
    image: "https://assets.aceternity.com/demos/algochurn.webp", // Example image path
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights for informed decision-making.",
    icon: "📊",
    image: "https://assets.aceternity.com/demos/algochurn.webp", // Example image path
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

function ServiceCard({ title, description, icon, image }: ServiceCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/50 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="span"
            className="px-4 py-2 rounded-xl text-4xl"
          >
            {icon}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Learn More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ServicesPage;
