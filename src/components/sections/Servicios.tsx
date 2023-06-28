import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Servicios({ name }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.servicio', { opacity: 0, y: 60 })
    gsap.to('.servicio', {
      scrollTrigger: {
        trigger: '#servicios',
        start: 'top center',
        markers: false,
        scrub: false,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    })

    gsap.set(`#servicios`, {
      clipPath: 'circle(100% at 50% 50%)',
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#servicios',
          start: 'top center',
          scrub: true,
        },
      })
      .to(`#servicios`, { clipPath: 'circle(-40% at 50% 50%)' })

    gsap
      .timeline({
        scrollTrigger: {
          scrub: true,
        },
        defaults: { duration: 12 },
      })
      .to(`#servicio`, { clipPath: 'circle(0% at 50% 50%)' })

    for (let i = 0; i < 3; i++) {
      gsap.set('.parts' + i, { opacity: 0, y: 60 })
      gsap.to('.parts' + i, {
        scrollTrigger: {
          trigger: '#servicio',
          start: 'top center',
          markers: false,
          scrub: false,
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i,
      })
    }
  }, [])

  return (
    <div className="test relative h-screen w-full">
      <div className="inicio absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 p-6 md:w-auto md:p-0">
        <div className="servicio max-w-7xl bg-white p-4 text-center text-xs text-gray-500 shadow-lg sm:text-base">
          <span className="parts0 mb-6 block">
            La principal característica que diferencia a nuestros fisioterapeutas es la visión integral que tenemos del
            cuerpo humano y por ello el tratamiento que realizamos. No solo se tiene en cuenta el sistema
            musculoesquelético como se ha hecho tradicionalmente, sino que también se contempla el sistema formado por
            la viscerofascia (el tejido conectivo que da soporte a los órganos) y el sistema dural (tejido conectivo que
            recubre parte del sistema nervioso).
          </span>
          <span className="parts0 mb-6 block">
            Por ello es muy común ver a nuestros fisioterapeutas realizando técnicas en la parte abdominal para tratar
            un dolor lumbar (dolor de espalda baja) o tratando el sacro para prevenir una cervicalgia (dolor en el
            cuello).
          </span>
          <span className="parts0 mb-6 block">
            En la primera sesión se realizará una anamnesis (breve entrevista) para realizar una historia clínica que
            nos lleve al origen de tu dolor y así poder resolverlo con un correcto diagnóstico y seguimiento.
          </span>
        </div>
      </div>
      <div id={name} className="z-10 flex h-screen items-center justify-center bg-white"></div>
    </div>
  )
}
