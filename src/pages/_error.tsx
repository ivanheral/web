import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function NotFound() {
  return (
    <div className={roboto.className}>
      <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-gray-800 text-center">
        <div className="text-9xl font-bold text-white">404</div>
      </div>
    </div>
  )
}
