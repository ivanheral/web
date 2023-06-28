import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { FieldTemplate } from '../../../interfaces/field'
import { ThemeTemplate } from '../../../interfaces/theme'

interface iInput {
  field: FieldTemplate
  theme: ThemeTemplate
  register?: UseFormRegister<FieldValues>
}

const Input = (props: iInput): JSX.Element => {
  const { field, theme, register } = props

  return (
    <input
      className={theme.field}
      {...(field.placeholder ? { placeholder: field.placeholder } : {})}
      {...(register ? register(field.control, field.validators) : {})}
    />
  )
}

export default Input
