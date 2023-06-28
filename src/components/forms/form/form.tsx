import React, { useEffect } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import themes from '../../../config/theme'
import { FieldTemplate, FormTemplate } from '../../../interfaces/field'
import { ThemeTemplate } from '../../../interfaces/theme'
import Helper from '../helper/helper'
import Input from '../input/input'
import Textarea from '../textarea/textarea'
import Validator from '../validator/validator'

const Form = (props: FormTemplate): JSX.Element => {
  // i18n
  const { fields, theme = 'default', handle, submit, children, defaultValues } = props

  const {
    register,
    handleSubmit,
    formState,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues ? defaultValues : undefined,
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    submit && submit(data)
  }

  const getClass = (f: FieldTemplate): string => {
    const className = f.class ? (themeForm.control ? `${f.class} ${themeForm.control}` : f.class) : 'w-full'
    return themeForm?.gutter ? `${className} ${themeForm?.gutter}` : className
  }

  useEffect(() => {
    handle && handle(formState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState.isValid])

  useEffect(() => {
    reset(defaultValues)

    trigger()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.defaultValues])

  const themeForm: ThemeTemplate = themes[theme]

  const getField = (f: FieldTemplate): JSX.Element => {
    const fields: { [key: string]: JSX.Element } = {
      input: <Input register={register} theme={themeForm} field={f} />,
      textarea: <Textarea register={register} theme={themeForm} field={f} />,
    }

    return fields[f.type]
  }

  return (
    <form className={themeForm.form} onSubmit={handleSubmit(onSubmit)}>
      {fields.map((f, index) => (
        <div className={getClass(f)} key={index}>
          <label className={themeForm.label}>{f.label}</label>
          {getField(f)}
          <Validator errors={errors[f.control]} />
          {f.helper && !errors[f.control] ? <Helper helper={f.helper} /> : null}
        </div>
      ))}
      <div className={themeForm.gutter + ' ' + 'w-full'}>{children}</div>
    </form>
  )
}

export default Form
