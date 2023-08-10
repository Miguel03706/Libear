import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='overflow-x-hidden'>
      <div className='relative'>
        <img
          src='/images/notFound/404.png'
          className='w-screen h-screen'
          alt='Mascote Libear no gelo'
        />
        <div className='absolute inset-0 flex  items-center '>
          <div className=' w-full h-auto text-white text-center'>
            <div className='text-center'>
              <div className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center ml-16'>
                <p className='text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300'>
                  404
                </p>
                <p className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2'>
                  Página não encontrada
                </p>
                <p className='text-lg md:text-xl lg:text-2xl text-gray-300 my-12'>
                  Desculpe, a página que você está procurando não foi
                  encontrada.
                </p>
                <Link
                  href='/'
                  className='flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150'
                  title='Retornar'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Retornar</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
