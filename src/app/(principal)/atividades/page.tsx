import React from 'react'
import SectionActivities from '@/components/SectionActivities/SectionActivities'
import StackItem from '@/components/Menu-lateral/StackItens/StackItem/StackItem'
import StackItens from '@/components/Menu-lateral/StackItens/StackItens'
import SectionInfo from '@/components/SectionInfo/SectionInfo'
import MenuLateral from '@/components/Menu-lateral/Menu'
import PerfilIcon from 'public/icons/logo_urso.webp'
import MissionIcon from 'public/icons/missoes.webp'
import ConfigIcon from 'public/icons/config.webp'
import InicioIcon from 'public/icons/inicio.webp'
import StoreIcon from 'public/icons/loja.webp'

export default function Atividades() {
  return (
    <MenuLateral>
      <StackItens>
        <StackItem icon={InicioIcon} redirect='/atividades'>Inicio</StackItem>
        <StackItem icon={MissionIcon} redirect='/missoes'>Missões</StackItem>
        <StackItem icon={StoreIcon} redirect='/loja'>Loja</StackItem>
        <StackItem icon={ConfigIcon} redirect='/configuracoes'>Configurações</StackItem>
        <StackItem icon={PerfilIcon} redirect='/perfil'>Perfil</StackItem>
      </StackItens>
      <div>
        <>teste</>
        <SectionActivities>
          <div className='h-screen'>Atividades</div>
        </SectionActivities>
        <SectionInfo />
      </div>
    </MenuLateral>
  )
}
