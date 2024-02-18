import React from 'react'
import MenuLateral from '@/components/Menu-lateral'

export default function Atividades() {
  return (
    <div>
      {/** TODO: FAZER UM COMPONENTE DE MENU LATERAL COM UM GRID Q DIVIDA A TELA EM TRÊS COLUNAS
       * 1/3 PARA O MENU LATERAL
       * 1/3 PARA O CONTEÚDO DA PÁGINA
       * 1/3 PARA PROPAGANDA
       */}
      <MenuLateral>
        <div>
          <div className='flex'>
            <div className='bg-blue-400 w-2/3 h-'>Atividades</div>
            <div className='bg-blue-600 w-1/3'>Barra lateral</div>
          </div>
        </div>
      </MenuLateral>
    </div>
  )
}
