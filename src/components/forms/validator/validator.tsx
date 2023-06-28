import React, { useEffect } from 'react'
import { FieldError } from 'react-hook-form'

interface iValidator {
  errors: FieldError | undefined
}

const Validator = (props: iValidator): JSX.Element => {
  useEffect(() => {
    /** */
  }, [props])

  const { errors } = props
  return (
    <>
      {
        <p className={`${errors ? 'visible' : 'invisible'} m-0 h-1 text-xs text-gray-500`}>
          {errors && errors.message && errors.message}
        </p>
      }
    </>
  )
}

export default Validator
