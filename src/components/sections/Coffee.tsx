import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Coffee() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const frame_count = 9
    const offset_value = 100
    gsap.to('.viewer', {
      backgroundPosition: -offset_value * frame_count * 2 + 'px 50%',
      ease: 'steps(' + frame_count + ')', // use a stepped ease for the sprite sheet
      scrollTrigger: {
        trigger: '.scene',
        start: 'top top',
        end: '+=' + frame_count * offset_value,
        pin: true,
        scrub: true,
        markers: false,
      },
    })

    gsap.to('.text.center', {
      scrollTrigger: {
        trigger: '.scene2',
        scrub: true,
        markers: false,
      },
      transform: 'translateY(40%)',
    })
  }, [])

  return (
    <div id="inicio" className="flex h-screen items-center justify-center">
      <section className="scene section h-screen">
        <div className="viewer"></div>
        <div className="scene2">
          <div className="text center">A currar!!!</div>
        </div>
      </section>
    </div>
  )
}
