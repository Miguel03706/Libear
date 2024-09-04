'use client'
import React, { ReactNode } from 'react'
import Logo from '../../../public/icons/logo_urso.webp'
import Link from 'next/link'
import Image from 'next/image'
import "./styles.scss"

interface MenuProps {
  children: ReactNode
}

/** Componente para o menu lateral, é preciso definir qual a posição da pagina no menu (item1, item2 e etc) */
export default function Menu(props: MenuProps) {
  // Separar os itens do menu do conteúdo principal
  const stackItens = React.Children.toArray(props.children)[0]
  const content = React.Children.toArray(props.children)[1]

  return (
    <div className='menu-section'>
      <div className='navegacao'>
        <div className='logo-libear'>
          <Link href='/' passHref>
            <span className='icone'>
              <Image src={Logo} alt='' />
            </span>
            <span className='titulo-topo'>Libear</span>
          </Link>
        </div>
        {stackItens ? stackItens : null}
      </div>

      <div className='main'>
        {content ? content : null}
      </div>
    </div>
  )
}
