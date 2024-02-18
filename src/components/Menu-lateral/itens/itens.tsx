import React, { useState } from 'react'
import ModalSair from './modal-sair'
import '../styles.css'
import Swal from 'sweetalert2'
import Link from 'next/link'
import limparCookies from '@/utils/LimparCookies'

interface TypeItens {
  active: boolean | string
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

/** Componente de itens do menu lateral */
function itens(props: TypeItens) {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

  function closeModal() {
    setIsOpen(false)
  }

  const handleSair = () => {
    Swal.fire({
      title: 'Tem certeza que deseja sair?',
      showDenyButton: true,
      reverseButtons: true,
      showCloseButton: true,
      denyButtonText: `Sair`,
      confirmButtonText: 'Cancelar',
      didOpen: () => {
        const diseble = Swal.getDenyButton()
        diseble?.setAttribute('disabled', 'true')
        setTimeout(() => {
          diseble?.removeAttribute('disabled')
        }, 800)
      },
    }).then((result) => {
      if (result.isDenied) {
        limparCookies()

        document.location = '/'
      }
    })
  }

  return (
    <>
      {/* Cada <li> é um item do menu lateral */}
      {/* Nas "./pages" add em "./pages/painel" componente com prop indicando a numeração do item */}

      {/* CADASTRAR USUÁRIO */}
      <li
        className={`${props.item1 ? 'hovered' : ''} ${
          props.active === false ? 'active' : ''
        }`}
      >
        <Link href='/painel/cadastro'>
          <span className='icone'></span>
          <span className='titulo'>Clientes</span>
        </Link>
      </li>

      {/* PEDIDOS */}
      <li
        className={`${props.item2 ? 'hovered' : ''} ${
          props.active === false ? 'active' : ''
        }`}
      >
        <Link href='/painel/pedidos'>
          <span className='icone'>imagem</span>
          <span className='titulo'>Pedidos</span>
        </Link>
      </li>

      {/* PRODUTOS */}
      <li
        className={`${props.item3 ? 'hovered' : ''} ${
          props.active === false ? 'active' : ''
        }`}
      >
        <Link href='/painel/produtos'>
          <span className='icone'></span>
          <span className='titulo'>Produtos</span>
        </Link>
      </li>

      {/* <ViewAdmin> */}
      {/* SETORES */}
      <li
        className={`${props.item4 ? 'hovered' : ''} ${
          props.active === false ? 'active' : ''
        }`}
      >
        <Link href='/painel/setores'>
          <span className='icone'>imagem</span>
          <span className='titulo'>Setores</span>
        </Link>
      </li>
      {/* MEDIDAS */}
      <li
        className={`${props.item5 ? 'hovered' : ''} ${
          props.active === false ? 'active' : ''
        }`}
      >
        <Link href='/painel/medidas'>
          <span className='icone'>imagem</span>
          <span className='titulo'>Medidas</span>
        </Link>
      </li>
      {/* BANNERS */}
      <li
        className={`${props.item6 ? 'hovered' : ''} ${
          props.active === false ? 'active' : ''
        }`}
      >
        <Link href='/painel/banners'>
          <span className='icone'>imagem</span>
          <span className='titulo'>Banners</span>
        </Link>
      </li>
      {/* CATEGORIAS */}
      <li
        className={`${props.item7 ? 'hovered' : ''} ${
          props.active === false ? 'active' : ''
        }`}
      >
        <Link href='/painel/categorias'>
          <span className='icone'>imagem</span>
          <span className='titulo'>Categorias</span>
        </Link>
      </li>
      {/* USUÁRIOS */}
      <li
        className={`${props.item8 ? 'hovered' : ''} ${
          props.active === false ? 'active' : ''
        }`}
      >
        <Link href='/painel/usuarios'>
          <span className='icone'>imagem</span>
          <span className='titulo'>Usuários</span>
        </Link>
      </li>
      {/* FERIADOS */}
      <li
        className={`${props.item9 ? 'hovered' : ''} ${
          props.active === false ? 'active' : ''
        }`}
      >
        <Link href='/painel/feriados'>
          <span className='icone'>imagem</span>
          <span className='titulo'>Feriados</span>
        </Link>
      </li>
      {/* </ViewAdmin> */}

      {/* SAIR */}
      <li className={`${props.active === false ? 'active' : ''}`}>
        <Link href='#' onClick={handleSair}>
          <span className='icone'>imagem</span>
          <span className='titulo'>Sair</span>
        </Link>
      </li>

      <ModalSair
        //modalOpen={handleSair}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </>
  )
}

export default itens
