import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Polygon() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set('#inicio2', {
      clipPath: 'circle(0% at 50% 50%)',
    })

    gsap.to('#inicio2', {
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
      .to('#inicio2', { clipPath: 'circle(100% at 50% 50%)' })
  }, [])

  return (
    <div className="test w-full" id="example">
      <div id="inicio2" className="flex h-screen items-center justify-center overflow-hidden bg-white">
        <div>TEST</div>
      </div>
    </div>
  )
}
