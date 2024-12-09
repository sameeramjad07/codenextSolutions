'use client'

import { useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa'

export function ContactButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="mailto:contact@codenextsolutions.com"
      className={`
        relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white
        transition-all duration-300 ease-out
        ${isHovered ? 'bg-blue-600' : 'bg-blue-500'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex items-center">
        Let's get in touch
        <FaLocationArrow className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
      </span>
      <span
        className={`
          absolute inset-0 bg-blue-600
          transition-all duration-300 ease-out
          ${isHovered ? 'scale-x-100' : 'scale-x-0'}
        `}
        style={{ transformOrigin: 'left' }}
      />
    </a>
  )
}

