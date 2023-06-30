import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Tarifas({ name }) {
  const tarifas = [
    { title: 'Sesión fisioterapia', price: '90 €', time: '1h' },
    { title: 'Sesión Fisioterapia', price: '120 €', time: '1h 30min' },
    { title: 'Bono 5 sesiones', price: '400 €', time: '1h' },
    { title: 'Bono 5 sesiones', price: '550 €', time: '1h 30 min' },
    { title: 'Sesión fin de semana', price: '120 €', time: '1h' },
    { title: 'Sesión fin de semana', price: '150 €', time: '1h 30 min' },
  ]

  const scrollToNode = (node) => {
    document.getElementById(node).scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.tarifa', { opacity: 0, y: 60 })
    gsap.to('.tarifa', {
      scrollTrigger: {
        trigger: '#tarifas',
        start: 'top center',
        markers: false,
        scrub: false,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    })

    gsap.set(`#tarifas`, {
      clipPath: 'circle(130% at 50% 50%)',
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#tarifas',
          start: 'top center',
          scrub: true,
        },
      })
      .to(`#tarifas`, { clipPath: 'circle(-40% at 50% 50%)' })

    for (let i = 0; i < tarifas.length; i++) {
      gsap.set('.partss' + i, { opacity: 0, y: 60 })
      gsap.to('.partss' + i, {
        scrollTrigger: {
          trigger: '#tarifas',
          start: 'top center',
          markers: false,
          scrub: false,
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i / 2,
      })
    }
  }, [tarifas.length])

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <div className="tarifa relative z-10 w-full p-6 py-16 md:w-auto">
        <div className="grid max-w-7xl grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {tarifas.map((e, i) => {
            return (
              <div key={i} className={`partss${i} w-full bg-white p-8 shadow-lg`}>
                <div className="relative h-64">
                  <h1 className="text-center text-xl font-semibold text-gray-500">{e.title}</h1>
                  <div className="px-7 py-4 text-center">
                    <h1 className="text-4xl font-black text-gray-700">{e.price}</h1>
                    <p className="mt-2  text-gray-500">{e.time}</p>
                  </div>
                  <button
                    onClick={() => {
                      scrollToNode('contacto')
                    }}
                    className="absolute inset-x-0 bottom-0 mb-3 mt-6 w-full self-end rounded bg-gray-700 py-2 font-semibold text-white duration-200 hover:bg-gray-800 hover:shadow-xl"
                  >
                    Concretar cita
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div id={name} className="absolute inset-0 flex h-screen items-center justify-center bg-bluedark"></div>
    </div>
  )
}
