import React from 'react'

const Cadastrar: React.FC = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='grid grid-rows-6 text-center spacing-y-0'>
        <div className='row-span-2'>
          <img
            className='w-52 h-auto'
            src='/icons/logo_urso.webp'
            alt='Mascote Libear com fundo azul'
          />
        </div>
        <div>Cadastrar</div>
        <div>
          <input
            type='email'
            className='w-52 h-auto border-2 p-1'
            placeholder='Digite o seu email'
          />
        </div>
        <div>
          <input
            type='password'
            className='w-52 h-auto border-2 p-1'
            placeholder='Digite sua senha'
          />
        </div>
        <div>
          <input type='submit' value='Cadastrar' className='border-2 p-2' />
        </div>
      </div>
    </div>
  )
}

export default Cadastrar
