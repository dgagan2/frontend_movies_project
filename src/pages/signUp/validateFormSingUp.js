const expresiones = {
  txtPassword: /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#$%^&.\-_\-.,"';~*?_~+%&#/]{6,20}$/,
  txtEmail: /^[a-zA-Z0-9_\-.~]{2,}@[a-zA-Z0-9_\-.~]{2,}\.[a-zA-Z]{2,4}$/
}
const validateForm = (input) => {
  const errors = {}
  if (!input.email.trim()) {
    errors.email = 'El campo email es requerido'
  } else {
    if (!expresiones.txtEmail.test(input.email)) {
      errors.email = 'La información ingresada no es un correo'
    }
  }
  if (!input.password.trim()) {
    errors.password = 'El campo contraseña es requerido'
  } else {
    if (!expresiones.txtPassword.test(input.password)) {
      errors.password = 'La contraseña debe tener minimo 6 caracteres'
    }
    if (input.password_two != input.password) {
      errors.password = 'Las contraseñas no coinciden'
    }
  }
  if (!input.firstName.trim()) {
    errors.firstName = 'El campo Nombres es requerido'
  }
  if (!input.lastName.trim()) {
    errors.lastName = 'El campo Apellidos es requerido'
  }
  if (!input.age.trim()) {
    errors.age = 'El campo Edad es requerido'
  }

  return errors
}

export default validateForm
