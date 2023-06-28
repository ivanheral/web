import React, { useEffect, useState } from 'react'
import { FieldValues, FormState } from 'react-hook-form'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Button from '@/components/button/button'
import Form from '@/components/forms/form/form'
import fetchAPI from '@/utils/apiFetch'
import config from '@/utils/config/form'
export default function Contacto({ name }) {
  const [send, setSend] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const [form, setForm] = useState<FormState<FieldValues> | undefined>(undefined)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(`#contacto`, {
      clipPath: 'circle(0% at 50% 50%)',
    })

    gsap.to(`#contacto`, {
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
      .to(`#contacto`, { clipPath: 'circle(100% at 50% 50%)' })

    gsap.set('.contact', { opacity: 0, y: 60 })
    gsap.to('.contact', {
      scrollTrigger: {
        trigger: '#contacto',
        start: 'top center',
        markers: false,
        scrub: false,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    })
  }, [])

  const submitHandle = async (value: FieldValues) => {
    setLoading(true)
    setSend(false)
    const data = await fetchAPI('../api/send-email', 'POST', value)
    const { message } = data
    console.log(message)
    if (message) {
      /** exito */
      setSend(true)
      setLoading(false)
    }
  }

  const handleForm = (value: FormState<FieldValues>) => {
    setForm(value)
  }

  return (
    <div className="test2">
      <div id={name} className="flex h-screen items-center justify-center">
        <div className="contact flex w-full flex-col rounded-md bg-white pb-4 text-xs sm:text-base md:max-w-xl md:shadow-lg">
          <div className="block w-full p-4 pb-0 md:pb-4">
            Puedes ponerte en contacto con nosotros para cualquier consulta a través de:
          </div>
          <div className="m-4 grid gap-2 md:grid-cols-6">
            <a
              className="w-full cursor-pointer rounded bg-gray-700 p-2 text-center font-semibold text-white hover:bg-gray-800 hover:shadow-xl md:col-span-2"
              href="tel:34687130067"
            >
              +34 687130067
            </a>
            <a
              className="w-full cursor-pointer rounded bg-gray-700 p-2 text-center font-semibold text-white hover:bg-gray-800 hover:shadow-xl md:col-span-4"
              href="mailto:fisioluxurypozuelo@gmail.com"
            >
              fisioluxurypozuelo@gmail.com
            </a>
          </div>
          <Form handle={handleForm} submit={submitHandle} {...config}>
            <Button text="contactar" disabled={!form?.isValid} />
          </Form>
          {loading && !send && (
            <div className="align-center block w-full p-4 text-center text-xs sm:text-base md:p-4">
              Enviando mensaje
            </div>
          )}
          {send && (
            <div className="block w-full p-4 text-center text-xs sm:text-base md:p-4">
              Mensaje enviado correctamente
            </div>
          )}
        </div>
      </div>
    </div>
  )
}