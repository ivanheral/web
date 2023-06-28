import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Section({ name }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(`#${name}`, {
      clipPath: 'circle(0% at 50% 50%)',
    })

    gsap.to(`#${name}`, {
      clipPath: 'circle(50% at 50% 50%)',
      duration: 1.5,
    })

    gsap
      .timeline({
        scrollTrigger: {
          scrub: true,
        },
        defaults: { duration: 12 },
      })
      .to(`#${name}`, { clipPath: 'circle(100% at 50% 50%)' })
    gsap.set(`.textFull`, { x: -3000 })
    gsap.to(`.textFull`, {
      scrollTrigger: {
        trigger: `#${name}`,
        start: 'top center',
        markers: false,
        scrub: false,
      },
      x: 0,
    })
  }, [name])

  return (
    <div id={name} className="flex h-screen items-center justify-center overflow-hidden">
      <div className="textFull max-w-7xl p-4 text-center text-xs sm:text-sm md:p-4 lg:text-lg">{name}</div>
    </div>
  )
}
