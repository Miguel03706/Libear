import React from 'react'
import "./styles.scss"

export default function StackItens({ children }: { children: React.ReactNode }) {
    return (
        <div className='stack-itens'>{children}</div>
    )
}
