import { ThemesButtonTemplate } from '../interfaces/theme'

const ThemesButton: ThemesButtonTemplate = {
  default: {
    style: 'w-full rounded bg-gray-700 py-2 font-semibold text-white text-xs sm:text-base',
    state: 'disabled:bg-gray-400',
  },
}

export default ThemesButton
