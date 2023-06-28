import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Inicio({ name }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.inicio', { opacity: 0, y: 60 })
    gsap.to('.inicio', {
      scrollTrigger: {
        trigger: '#inicio',
        start: 'top center',
        markers: false,
        scrub: false,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    })

    gsap.set(`#inicio`, {
      clipPath: 'polygon(-25% 0%, 100% 0%, 100% 100%, 0 100%)',
    })

    gsap.to(`#inicio`, {
      clipPath: 'polygon(50% 0%, 100% 0%, 50% 100%, 0 100%)',
      duration: 1.5,
    })

    gsap
      .timeline({
        scrollTrigger: {
          scrub: true,
        },
      })
      .to(`#inicio`, { clipPath: 'polygon(-125% 0%, 100% 0%, 200% 100%, 0 100%)' })

    for (let i = 0; i < 4; i++) {
      gsap.set('.part' + i, { opacity: 0, y: 60 })
      gsap.to('.part' + i, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i + 0.5,
      })
    }
  }, [])

  return (
    <div className="test3 relative h-screen w-full">
      <div className="inicio absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 p-6 md:w-auto md:p-0">
        <div className="max-w-6xl bg-white p-4 text-center text-xs text-gray-500 shadow-lg sm:text-base">
          <span className="part0 mb-6 block">
            ¨FisioLuxury, porque la fisioterapia de calidad a domicilio es un lujo¨
          </span>
          <span className="part1 mb-6 block">
            Somos fisioterapeutas con más de 10 años de experiencia en el deporte profesional y personas de alto
            rendimiento. Han confiado en nosotros directivos, actores, músicos, empresarios y público general. También
            empresas como Netflix Los Ángeles, Netflix UK, Athletic Club de Bilbao y la Federación Española de Pádel
            entre otros.
          </span>
          <span className="part2 mb-6 block">
            Nuestra filosofía consiste en tratamientos individualizados de terapia manual avanzada. Confiamos en el
            poder de las manos para volver a equilibrar la homeostasis tensional del cuerpo humano. No perdemos tiempo
            con aparatología aparcando pacientes en máquinas carentes de evidencia científica.
          </span>
          <span className="part3 mb-6 block">¨En Fisioluxury te tratamos en serio, y no en serie¨</span>
        </div>
      </div>
      <div id={name} className="z-10 flex h-screen items-center justify-center bg-white"></div>
    </div>
  )
}
