const expresiones = {
  txtPassword: /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#$%^&.\-_\-.,"';~*?_~+%&#/]{6,20}$/,
  txtEmail: /^[a-zA-Z0-9_\-.~]{2,}@[a-zA-Z0-9_\-.~]{2,}\.[a-zA-Z]{2,4}$/
}
const validateFormLogin = (input) => {
  const errors = {}
  if (!input.email.trim()) {
    errors.email = 'El email es requerido'
  } else {
    if (!expresiones.txtEmail.test(input.email)) {
      errors.email = 'Valide el correo'
    }
  }
  if (!input.password.trim()) {
    errors.password = 'La contraseña es requerida'
  }

  return errors
}

export default validateFormLogin
