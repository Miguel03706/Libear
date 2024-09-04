import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
    children: React.ReactNode
    icon: StaticImageData
    redirect?: string
}

export default function StackItem(props: MenuItemProps) {
    return (
        <div className='stack-item'>
            <Link href={`${props.redirect}`}>
                <Image src={props.icon} alt='' className='icon' />
                <span className='title'>{props.children}</span>
            </Link>
        </div>
    )
}
