import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default function Preguntas({ name }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.preguntas', { opacity: 0, y: 60 })
    gsap.to('.preguntas', {
      scrollTrigger: {
        trigger: '#questions',
        start: 'top center',
        markers: false,
        scrub: false,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    })

    gsap.set(`#questions`, {
      clipPath: 'polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%)',
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#questions',
          start: 'center center',
          scrub: true,
        },
      })
      .to(`#questions`, { clipPath: 'polygon(-150% 0%, 250% 0%, 200% 100%, -150% 100%)' })
  }, [])

  return (
    <div id="preguntas" className="relative flex min-h-screen w-full items-center justify-center">
      <div className="preguntas relative z-10 w-full p-6 py-16 md:w-auto">
        <div className="max-w-7xl grid-cols-4 gap-4 bg-white p-4 text-center text-xs text-gray-500 shadow-lg sm:text-base">
          <div className="col-span-4 block">
            <p className="mb-2 font-semibold text-gray-900">¿Trabajáis con mutuas?</p>
            <p className="text-gray-700">
              No directamente pero con la factura que os emitimos por el servicio dependiendo del seguro médico que
              dispongáis pueden reembolsaros el importe íntegro o un porcentaje.
            </p>
          </div>

          <div className="col-span-4 block md:col-span-2">
            <p className="mb-2 font-semibold text-gray-900">¿Trabajáis los fines de semana?</p>
            <p className="text-gray-600">Sí, pero el importe es distinto (Consultar tarifas).</p>
          </div>

          <div className="col-span-4 block md:col-span-2">
            <p className="mb-2 font-semibold text-gray-900">¿En qué zonas prestáis servicio?</p>
            <p className="text-gray-600">
              En Puerta de Hierro, Aravaca, Pozuelo de Alarcón, La Moraleja, El Viso y Majadahonda.
            </p>
          </div>

          <div className="col-span-4 block">
            <p className="mb-2 font-semibold text-gray-900">¿Prestáis servicio fuera de ese área?</p>
            <p className="text-gray-600">
              Si estáis fuera de ese área y requieres nuestro servicio ponte en contacto con nosotros y estudiaremos tu
              caso. Estamos expandiendo el área de tratamientos. Generalmente depende de la distancia y la facilidad del
              aparcamiento.
            </p>
          </div>

          <div className="col-span-4 block">
            <p className="mb-2 font-semibold text-gray-900">
              ¿Qué necesito para que mi seguro me cubra las sesiones de fisioterapia?
            </p>
            <p className="text-gray-600">
              Generalmente se necesita un informe médico con la prescripción de las sesiones de fisioterapia. Otros
              seguros también piden un informe del fisioterapeuta colegiado que nosotros les realizamos. Si no tienes un
              médico de confianza nosotros podemos ponerte en contacto con profesionales con los que hemos trabajado en
              federaciones o clubes de alto rendimiento, que pueden realizaros una consulta así como un informe si fuera
              necesario.
            </p>
          </div>

          <div className="col-span-4 block">
            <p className="mb-2 font-semibold text-gray-600">
              Si tienes cualquier otra duda ponte en contacto con secretaria y estaremos encantados de atenderte.
            </p>
          </div>
        </div>
      </div>
      <div id={name} className="absolute inset-0 flex h-screen items-center justify-center bg-bluedark"></div>
    </div>
  )
}
