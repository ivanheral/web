import { ThemesButtonTemplate } from '../interfaces/theme'

const ThemesButton: ThemesButtonTemplate = {
  default: {
    style: 'w-full rounded bg-bluedark py-2 text-white text-xs sm:text-base uppercase',
    state: 'disabled:bg-bluelight',
  },
}

export default ThemesButton
