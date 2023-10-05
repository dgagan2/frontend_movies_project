import { useState } from 'react'

function useStateModal () {
  // Estado único para guardar todos los valores del formulario en un objeto
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => { setIsOpen(false) }

  return [isOpen,
    openModal,
    closeModal]
}

export default useStateModal
