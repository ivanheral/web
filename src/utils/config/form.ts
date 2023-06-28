const form = {
  name: 'post',
  defaultValues: {
    mail: '',
    body: '',
  },
  fields: [
    {
      placeholder: 'correo electronico',
      control: 'mail',
      class: 'w-full',
      type: 'input',
      validators: {
        required: 'El campo es requerido',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'El correo electronico no es correcto',
        },
      },
    },
    {
      placeholder: 'mensaje',
      control: 'body',
      class: 'w-full',
      type: 'textarea',
      validators: {
        required: 'El campo es obligatorio',
      },
    },
  ],
}

export default form
