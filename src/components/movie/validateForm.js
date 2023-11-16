const validateForm = (input) => {
  const errors = {}

  if (!input.title.trim()) {
    errors.title = 'El campo titulo es requerido'
  }
  if (!input.overview.trim()) {
    errors.overview = 'El campo descripción es requerido'
  }
  if (Object.keys(input.genre).length == 0) {
    errors.genre = 'El campo genero es requerido'
  }
  if (Object.keys(input.language).length == 0) {
    errors.language = 'El campo lenguaje es requerido'
  }
  if (!input.releaseDate.trim()) {
    errors.releaseDate = 'El campo fecha es requerido'
  }
  if (!input.posterPath) {
    errors.posterPath = 'El campo poster es requerido'
  }
  if (!input.posterPath) {
    errors.postBackground = 'El campo imagen de fondo es requerido'
  }

  return errors
}

export default validateForm
