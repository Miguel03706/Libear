'use client'
import React, { useEffect, useState, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import Logo from '../../../public/icons/logo_urso.webp'
// import Cookies from 'js-cookie'
import Itens from './itens'
import Link from 'next/link'
import Image from 'next/image'

interface MenuProps {
  children: ReactNode
  item1?: boolean
  item2?: boolean
  item3?: boolean
  item4?: boolean
  item5?: boolean
  item6?: boolean
  item7?: boolean
  item8?: boolean
  item9?: boolean
}

/** Componente para o menu lateral, é preciso definir qual a posição da pagina no menu (item1, item2 e etc) */
export default function Menu(props: MenuProps) {
  const [open, setOpen] = useState<string | undefined>()
  const [path, setPath] = useState<string | undefined>()
  // const [count, setCount] = useState<number>(
  //   Number(Cookies.get('conexaoPerdida')) || 0,
  // )
  // const [conexao, setConexao] = useState<string | undefined>(
  //   Cookies.get('conexao')?.toString(),
  // )

  // const handleMenu = () => {
  //   setOpen(open === 'true' ? 'false' : 'true')
  //   localStorage.setItem('menuOpen', open === 'true' ? 'false' : 'true')
  // }

  useEffect(() => {
    setOpen(localStorage.getItem('menuOpen')?.toString())
  }, [path])

  useEffect(() => {
    setOpen(
      localStorage.getItem('menuOpen')
        ? localStorage.getItem('menuOpen')?.toString()
        : 'true',
    )
    setPath(location.pathname)
  }, [])

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // lógica a ser executada a cada segundo
  //     if (Cookies.get('conexao') === 'fechada') {
  //       setConexao('fechada')
  //       setCount(Number(Cookies.get('conexaoPerdida')))
  //     } else {
  //       setConexao('aberta')
  //     }
  //   }, 1000)

  //   // Limpa o intervalo quando o componente é desmontado
  //   return () => clearInterval(intervalId)
  // }, []) // O segundo argumento (array vazio) garante que o efeito seja executado apenas uma vez durante a montagem inicial do componente

  return (
    <div className='container-fluid row'>
      {/* A classe "active" serve para saber se o menu está aberto ou fechado */}
      <div className={open === 'true' ? 'navegacao' : 'navegacao active'}>
        <ul>
          <li>
            <Link href='/' passHref>
              <span className='icone'>
                <Image src={Logo} alt='' />
              </span>
              <span className='titulo-topo'>Libear</span>
            </Link>
          </li>
          {/* ITENS: qualquer item adicionado, add nova prop para ele */}
          <Itens
            active={open ? true : false}
            item1={props.item1}
            item2={props.item2}
            item3={props.item3}
            item4={props.item4}
            item5={props.item5}
            item6={props.item6}
            item7={props.item7}
            item8={props.item8}
            item9={props.item9}
          />
        </ul>
        {/* <div className={open === 'true' ? 'foot' : 'foot-active'}>
          <span className='text-sm'>{Cookies.get('sessionEmail')}</span>
          {conexao?.toString() === 'fechada' ? (
            <span
              className='texto-bolinha vermelha'
              data-count={`${count === 0 ? '' : count}`}
              data-color='red'
            ></span>
          ) : (
            <>
              <span
                className='texto-bolinha verde'
                data-count={`${count === 0 ? '' : count}`}
                data-color='chartreuse'
              ></span>
            </>
          )}
        </div> */}
      </div>

      <div className={open === 'true' ? 'main' : 'main active'}>
        {/* Barra do topo*/}
        {/* <div className='barra-topo'>
          <div className='alternar'>
            <img
              src={Trocar}
              alt='diminuir menu'
              onClick={() => handleMenu()}
            />
          </div>
        </div> */}
        <Box
          className={
            open === 'true'
              ? 'cardbox min-w-[1100px]'
              : 'cardbox active min-w-[1100px]'
          }
        >
          {props.children}
        </Box>
      </div>
    </div>
  )
}
