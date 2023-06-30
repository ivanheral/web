import React from 'react'
import Head from 'next/head'

import Contacto from '@/components/sections/Contacto'
import Inicio from '@/components/sections/Inicio'
import Preguntas from '@/components/sections/Preguntas'
import Servicios from '@/components/sections/Servicios'
import Tarifas from '@/components/sections/Tarifas'
import Layout from '@/layouts/Layout'
export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Fisioluxury, Fisioterapia de calidad a domicilio</title>
      </Head>
      <Inicio name="inicio" />
      <Servicios name="servicios" />
      <Tarifas name="tarifas" />
      <Preguntas name="questions" />
      <Contacto name="contacto" />
      {/*<Square /><Coffee /><Polygon />*/}
    </Layout>
  )
}
