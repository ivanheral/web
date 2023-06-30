import { ThemesTemplate } from '../interfaces/theme'

const ThemesForm: ThemesTemplate = {
  default: {
    form: 'pt-4 flex flex-wrap',
    label: 'text-gray-700 text-xs sm:text-base flex',
    control: 'mb-4 relative',
    field:
      'bg-white w-full rounded focus:outline-none appearance-none py-3 px-4 border border-gray-500 text-xs sm:text-base placeholder:text-xs',
    gutter: 'px-4',
  },
}

export default ThemesForm
