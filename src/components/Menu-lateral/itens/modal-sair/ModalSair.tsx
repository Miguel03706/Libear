import limparCookies from '@/utils/LimparCookies'
import React, { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50vh',
    left: '50vw',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '30px',
    paddingLeft: '80px',
    paddingRight: '80px',
    transform: 'translate(-50%, -50%)',
    zIndex: 2000,
  },
}

export default function ModalSair(props: {
  modalIsOpen: boolean
  closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined
}) {
  const [isDisabled, setIsDisebled] = useState(true)

  function afterOpenModal() {
    setTimeout(() => {
      setIsDisebled(false)
    }, 500)
  }
  function afterCloseModal() {
    setIsDisebled(true)
  }

  const handleSair = () => {
    // remover os cookies/memoria local
    limparCookies()

    document.location = '/'
  }

  return (
    <div className='p-5'>
      <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.closeModal}
        onAfterClose={afterCloseModal}
        style={customStyles}
        contentLabel='Modal excluir usuário'
      >
        <div className='text-center'>
          <h2>Sair da conta</h2>
        </div>
        <div className='mt-3 mb-2'>Você tem certeza que deseja sair?</div>
        <div className='row'>
          <button
            className='btn btn-danger mt-3 mb-3'
            onClick={handleSair}
            disabled={isDisabled}
          >
            Sair
          </button>
          <button className='btn btn-success mb-1' onClick={props.closeModal}>
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  )
}
