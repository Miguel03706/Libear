'use client'
import { Button, Center, Image } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function MenuNavigate({
  inicio,
  missoes,
  loja,
  config,
}: {
  inicio?: boolean
  missoes?: boolean
  loja?: boolean
  config?: boolean
}) {
  const [user, setUser] = useState([])
  const [nav, setNav] = useState(false)

  // useEffect(() => {
  //     const userKey = Object.keys(window.sessionStorage)
  //         .filter(it => it.startsWith('firebase:authUser'))[0];
  //     const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
  //     setUser(user);
  // }, []);

  const routes = [
    {
      path: '/inicio',
      label: 'Inicio',
      img: '../icons/inicio.webp',
      color: inicio ? true : false,
      alt: 'icone de uma casa',
    },
    {
      path: '/missoes',
      label: 'Missões',
      img: '../icons/missoes.webp',
      color: missoes ? true : false,
      alt: 'icone de um livro',
    },
    {
      path: '/loja',
      label: 'Loja',
      img: '../icons/loja.webp',
      color: loja ? true : false,
      alt: 'icone de uma loja',
    },
    {
      path: '/configurar',
      label: 'Configurações',
      img: '../icons/config.webp',
      color: config ? true : false,
      alt: 'icone de duas engrenagens',
    },
    {
      path: '/inicio',
      label: '0',
      img: '../icons/chama-cinza.webp',
      alt: 'icone de chama',
    },
    {
      path: '/perfil',
      label: '',
      // img: `../user/user_img/${user.photoURL}.webp`,
      img: `../user/user_img/teste.webp`,

      alt: 'icone do usuario',
    },
  ]

  const routesMobile = [
    { path: '/inicio', label: 'Inicio' },
    { path: '/missoes', label: 'Missões' },
    { path: '/loja', label: 'Loja' },
    { path: '/configurar', label: 'Configurações' },
    { path: '/perfil', label: 'Perfil' },
  ]
  return <></>
}
