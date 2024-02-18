import React from 'react'

interface NavigationProps {
  children: React.ReactNode
}

export default function Navigation({ children }: NavigationProps) {
  return <div className='grid grid-cols-3'>{children}</div>
}
