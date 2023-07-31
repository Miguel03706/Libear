import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const pages: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <div className='absolute'>
          <Link href='/cadastrar'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Começar
            </button>
          </Link>
          <Link href='/entrar'>
            <button>Já tenho uma conta</button>
          </Link>
        </div>
        <img
          src='/images/polar.webp'
          className='w-screen h-auto border-b-2 border-black'
          alt='Mascote Libear no gelo'
        />
      </div>

      <div className='mt-20 text-center font-bold'>Libear</div>
    </>
  )
}

export default pages
