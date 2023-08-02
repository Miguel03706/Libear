import Link from 'next/link'
import React from 'react'

const Cadastrar: React.FC = () => {
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
          <div>
            <div>
              <label
                htmlFor='email'
                className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
              >
                Email:
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Digite seu email'
                required
              />
            </div>
            <div className='my-4'>
              <label
                htmlFor='password'
                className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
              >
                Senha
              </label>
              <input
                type='password'
                id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Digite sua senha'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='confirm_password'
                className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
              >
                Confirmar senha
              </label>
              <input
                type='password'
                id='confirm_password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Confirme sua senha'
                required
              />
            </div>
          </div>
        </div>
        <div className=''>
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

export default Cadastrar
