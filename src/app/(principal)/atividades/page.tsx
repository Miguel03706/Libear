import React from 'react'
import MenuLateral from '@/components/Menu-lateral/Menu'
import SectionActivities from '@/components/SectionActivities/SectionActivities'
import SectionInfo from '@/components/SectionInfo/SectionInfo'
import StackItens from '@/components/Menu-lateral/StackItens/StackItens'
import StackItem from '@/components/Menu-lateral/StackItens/StackItem/StackItem'
import InicioIcon from 'public/icons/inicio.webp'
import MissionIcon from 'public/icons/missoes.webp'
import StoreIcon from 'public/icons/loja.webp'
import ConfigIcon from 'public/icons/config.webp'
import PerfilIcon from 'public/icons/logo_urso.webp'


export default function Atividades() {
  return (
    <MenuLateral>
      <StackItens>
        <StackItem icon={InicioIcon}>Inicio</StackItem>
        <StackItem icon={MissionIcon}>Missões</StackItem>
        <StackItem icon={StoreIcon}>Loja</StackItem>
        <StackItem icon={ConfigIcon}>Configurações</StackItem>
        <StackItem icon={PerfilIcon}>Perfil</StackItem>

      </StackItens>
      <SectionActivities>
        <div>Atividades</div>
      </SectionActivities>
      <SectionInfo />
    </MenuLateral>
  )
}
