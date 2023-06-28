import { FaInstagram, FaTwitter } from 'react-icons/fa'
const icons = [{ icon: FaInstagram }, { icon: FaTwitter }]

import Activelink from '../Activelink/Activelink'

export function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 bg-white shadow-2xl shadow-black">
      <div className="mx-auto p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 sm:text-center md:text-sm">
            © 2023{' '}
            <Activelink href="/" className="text-gray-500 hover:text-gray-900">
              <a>Fisioluxury</a>
            </Activelink>
          </span>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {icons.map((Icon, i) => {
              return (
                <Activelink key={i} href="#" className="text-gray-500 hover:text-gray-900">
                  <Icon.icon />
                </Activelink>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}