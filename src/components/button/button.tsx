import React from 'react'

import themes from '../../config/button'
import { ThemeButtonTemplate } from '../../interfaces/theme'

interface iButton {
  theme: string
  text: string
  disabled: boolean
  href?: string
  className?: string
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: iButton): JSX.Element => {
  // Obtenemos las properties
  const { theme, text, disabled, onclick, href, className } = props
  const themeButton: ThemeButtonTemplate = themes[theme]
  const { style, state } = themeButton
  const styleButton = `${style} ${state} ${className ? className : ''}`
  return (
    <button
      data-testid="button"
      {...(onclick ? { onClick: onclick } : {})}
      {...(disabled ? { disabled: disabled } : {})}
      {...(href ? { href } : {})}
      className={styleButton}
    >
      {text}
    </button>
  )
}

Button.defaultProps = { theme: 'default', text: 'accept', disabled: false }
export default Button
