const expresiones = {
  txtPassword: /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#$%^&.\-_\-.,"';~*?_~+%&#/]{6,20}$/,
  txtEmail: /^[a-zA-Z0-9_\-.~]{2,}@[a-zA-Z0-9_\-.~]{2,}\.[a-zA-Z]{2,4}$/,
  txtName: /^[a-zA-ZÁ-ÿ\s]{3,50}$/,
  txtAge: /^\d{1,2}$/
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
  if (!input.firstname.trim()) {
    errors.firstname = 'El campo Nombres es requerido'
  } else {
    if (!expresiones.txtName.test(input.firstname)) {
      errors.firstname = 'Nombre no valido'
    }
  }
  if (!input.lastName.trim()) {
    errors.lastName = 'El campo Apellidos es requerido'
  } else {
    if (!expresiones.txtName.test(input.lastName)) {
      errors.lastName = 'Apellido no valido'
    }
  }
  if (!input.age.trim()) {
    errors.age = 'El campo Edad es requerido'
  } else {
    if (!expresiones.txtAge.test(input.age)) {
      errors.age = 'Edad no valida'
    }
  }

  return errors
}

const validateFormUpdateUSer = (input) => {
  const errors = {}
  if (!input.email.trim()) {
    errors.email = 'El campo email es requerido'
  } else {
    if (!expresiones.txtEmail.test(input.email)) {
      errors.email = 'La información ingresada no es un correo'
    }
  }
  if (!input.firstname.trim()) {
    errors.firstname = 'El campo Nombres es requerido'
  } else {
    if (!expresiones.txtName.test(input.firstname)) {
      errors.firstname = 'Nombre no valido'
    }
  }
  if (!input.lastName.trim()) {
    errors.lastName = 'El campo Apellidos es requerido'
  } else {
    if (!expresiones.txtName.test(input.lastName)) {
      errors.lastName = 'Apellido no valido'
    }
  }
  if (!input.age) {
    errors.age = 'El campo Edad es requerido'
  } else {
    if (!expresiones.txtAge.test(input.age)) {
      errors.age = 'Edad no valida'
    }
  }

  return errors
}

export { validateForm, validateFormUpdateUSer }
