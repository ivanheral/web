import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Square() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set('.square', { x: 0, rotate: 90, scale: 3 })
    gsap.to('.square', {
      scrollTrigger: {
        trigger: '#servicio2',
        start: 'top top',
        markers: false,
        scrub: true,
      },
      rotate: 0,
      scale: 1,
      x: 0,
    })
  }, [])

  return (
    <div id="servicio2" className="flex h-screen items-center justify-center overflow-hidden">
      <div className="square aspect-square w-60 bg-black"></div>
    </div>
  )
}
