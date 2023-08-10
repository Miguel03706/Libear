import Link from 'next/link'
import React from 'react'
import FormRegister from '@/components/Auth/FormRegister/FormRegister'

export default function Cadastrar() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='grid text-center spacing-y-0 w-64'>
        <div className='flex justify-center items-center'>
          <img
            className='w-52 h-auto'
            src='/icons/logo_urso.webp'
            alt='Mascote Libear com fundo azul'
          />
        </div>
        <div className='my-4'>Cadastrar</div>
        <div className='text-left'>
          <FormRegister />
        </div>
        <div>
          <input
            type='submit'
            value='Cadastrar'
            className='border-2 p-2  bg-cyan-600 hover:bg-opacity-90 text-white py-2 px-4 text-md rounded-lg transition-colors cursor-pointer'
          />
        </div>
        <div className='mt-4'>
          Já possui uma conta?{' '}
          <Link href='/entrar' className='text-blue-600 hover:text-blue-500'>
            Entrar
          </Link>
        </div>
      </div>
    </div>
  )
}
