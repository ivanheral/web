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
    <div id={name} className="flex min-h-screen w-full items-center justify-center bg-bluedark p-4 py-16">
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
                  className="roundend absolute inset-x-0 bottom-0 mb-3 mt-6 w-full self-end bg-gray-700 py-2 font-semibold text-white duration-200 hover:bg-gray-800 hover:shadow-xl"
                >
                  Concretar cita
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
