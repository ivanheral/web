import { FieldValues, FormState, RegisterOptions } from 'react-hook-form'

// Formulario
export type FormTemplate = {
  name: string
  theme?: string
  defaultValues?: PatternTemplate
  fields: Array<FieldTemplate>
  children?: Array<React.ReactNode> | React.ReactNode
  handle?: (value: FormState<FieldValues>) => void
  submit?: (value: FieldValues) => void
}

// Campo de formulario
export type FieldTemplate = {
  label?: string
  class: string
  type?: string
  control: string
  value?: string
  helper?: string
  placeholder?: string
  validators?: RegisterOptions<FieldValues>
}

// Patron (Pendiente de usar)
export type PatternTemplate = {
  [key: string]: string
}
