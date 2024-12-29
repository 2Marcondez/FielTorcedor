import { useState, useEffect } from 'react'
import styled from 'styled-components'

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  max-width: 400px;
  width: 90%;
  position: relative;
  text-align: center;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.9;
  }
`

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [email, setEmail] = useState('')

  // Verificar se o modal já foi fechado anteriormente
  useEffect(() => {
    const modalClosed = localStorage.getItem('modalClosed')
    if (modalClosed) {
      setIsOpen(false)
    }
  }, [])

  // Função para fechar o modal e armazenar no localStorage
  const closeModal = () => {
    setIsOpen(false)
    localStorage.setItem('modalClosed', 'true') // Armazena no localStorage que o modal foi fechado
  }

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <h2>Abrace o Corinthians como nenhum outro,</h2>
        <p>Torne-se FIEL TORCEDOR</p>
        <Input
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubmitButton>QUERO SER FIEL TORCEDOR</SubmitButton>
      </ModalContent>
    </ModalOverlay>
  )
}
