import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { FieldTemplate } from '../../../interfaces/field'
import { ThemeTemplate } from '../../../interfaces/theme'

interface iTextarea {
  field: FieldTemplate
  theme: ThemeTemplate
  register?: UseFormRegister<FieldValues>
}

const Textarea = (props: iTextarea): JSX.Element => {
  const { field, theme, register } = props

  return (
    <textarea
      rows={3}
      cols={50}
      className={theme.field}
      {...(field.placeholder ? { placeholder: field.placeholder } : {})}
      {...(register ? register(field.control, field.validators) : {})}
    ></textarea>
  )
}

export default Textarea
