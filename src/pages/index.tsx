import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer/Footer'

const pages: React.FC = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='relative'>
        <img
          src='/images/polar.webp'
          className='w-screen h-auto border-b-2 border-black'
          alt='Mascote Libear no gelo'
        />
        <div className='absolute inset-0 flex gap-2 justify-around items-center md:h-72'>
          <div className='w-40 md:w-full h-auto text-white text-center'></div>
          <div className=' w-full h-auto text-white text-center '>
            <div className='text-center'>
              <div className='text-sm sm:text-base md:text-lg text-white'>
                Aprenda libras da melhor maneira!
              </div>
              <div>
                <Link href='/cadastrar'>
                  <button className='mt-4 bg-primary text-black hover:bg-secondary md:text-white md:font-bold py-2 px-4 rounded-lg transition-colors border-black border-2 w-52 md:w-80 md:h-14'>
                    Começar
                  </button>
                </Link>
              </div>
              <div>
                <Link href='/entrar'>
                  <button className='mt-4 bg-transparent text-black hover:bg-secondary md:text-white md:font-bold py-2 px-4 rounded-lg transition-colors border-black border-2 w-52 md:w-80 md:h-14'>
                    Já tenho uma conta
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20 mb-10 text-center font-bold'>
        <h1 className='text-3xl text-black'>Libear</h1>
      </div>

      <div className='flex flex-wrap md:flex-nowrap text-center md:gap-14 w-screen'>
        <div className='md:p-10'>
          <img
            src='/images/planeta-terra.webp'
            alt='foto de planeta Terra'
            className='w-72 h-auto'
          />
        </div>
        <div className='md:p-10'>
          <span className='font-bold'>Ensino de qualidade</span>
          <p>
            O jeito mais inovador de aprender idiomas! Aprender com o Libear é
            divertido e viciante. Ganhe pontos ao acertar, corra contra o tempo
            e passe de nível. As nossas aulas são rápidas e eficazes.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap md:flex-nowrap text-center md:gap-14 w-screen'>
        <div className='md:p-10'>
          <img
            src='/images/moeda.webp'
            alt='foto de planeta Terra'
            className='w-72 h-auto'
          />
        </div>
        <div className='md:p-10 col-span-2'>
          <span className='font-bold'>Libear Premium</span>
          <p>
            Melhore o seu aprendizado com o Libear premium Aprender um idioma no
            Libear é totalmente gratuito, mas você pode remover os anúncios e
            apoiar a educação gratuita com o premium.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default pages
