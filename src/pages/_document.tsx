import { Head, Html, Main, NextScript } from 'next/document'

import { Favicon } from '@/components/Favicon/Favicon'

const Document = () => {
  return (
    <Html lang="es-ES">
      <Head>
        <Favicon></Favicon>
      </Head>
      <body className="select-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
