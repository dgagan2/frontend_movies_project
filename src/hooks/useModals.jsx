import { useState } from 'react'

const useModals = (initialValue = false, data) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const openModal = () => { setIsOpen(true) }
  const closeModal = () => setIsOpen(false)

  return [isOpen, openModal, closeModal]
}

export default useModals
