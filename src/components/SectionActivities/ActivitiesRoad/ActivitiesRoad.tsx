'use client'
import React, { useEffect, useRef, useState } from 'react'
import Activities from './activities.json'
import "./styles.scss"
import { Image } from '@chakra-ui/react';

export default function ActivitiesRoad() {
    const [color, setColor] = useState('#E5DE2F');

    useEffect(() => {
    }, [])

    useEffect(() => {
        if (localStorage.getItem('chakra-ui-color-mode') == "dark") {
            setColor('#49CFE1');

        } else {
            setColor('#E5DE2F');
        }
    }, [setColor]);

    return (
        <div className='activities-road-section'>
            {
                Activities.map((activity, index) => {
                    return (
                        <div key={activity.id} className="list-activities">
                            <div className='lesson'>
                                <div className="progress-bar" style={{
                                    "--progress": `${activity.progress}`
                                } as React.CSSProperties}>
                                    <Image src={`/icons/activitys/${activity.image}.webp`} alt={activity.title} w={84} h={84} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}
