import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'

export default function Atividades() {
  return (
    <div className='flex'>
      <div className='flex-none w-1/3 h-auto'>
        <Sidebar />
      </div>
      <div className='flex-initial w-1/3 h-auto'>
        <div>aa</div>
      </div>
      <div className='flex-initial w-1/3 h-auto'>
        <div>bb</div>
      </div>
    </div>
  )
}
