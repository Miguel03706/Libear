import FormEntrar from '@/components/Auth/FormEntrar/FormEntrar'
import Link from 'next/link'
import React from 'react'

export default function Entrar() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='grid text-center spacing-y-0 w-64'>
        <div className='flex justify-center items-center'>
          <img
            className='w-52 h-auto'
            src='/icons/logo_urso_sorrindo.webp'
            alt='Mascote Libear com fundo azul'
          />
        </div>
        <div className='my-4 text-center w-full'>Entrar</div>
        <div className='text-left'>
          <FormEntrar />
        </div>
        <div className='mt-4'>
          Não possui uma conta?{' '}
          <Link href='/cadastrar' className='text-blue-600 hover:text-blue-500'>
            Cadastrar
          </Link>
        </div>
      </div>
    </div>
  )
}
