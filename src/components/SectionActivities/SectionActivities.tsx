import React from 'react'
import "./styles.scss"

interface SectionActivitiesProps {
    children: React.ReactNode
}
export default function SectionActivities(props: SectionActivitiesProps) {
    return (
        <div className='section-activities'>
            {props.children}
        </div>
    )
}
