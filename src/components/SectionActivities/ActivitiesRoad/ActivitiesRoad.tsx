'use client'
import React, { useEffect, useRef, useState } from 'react'
import Activities from './activities.json'
import "./styles.scss"

export default function ActivitiesRoad() {
    const [color, setColor] = useState('');

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
                            
                        </div>
                    )
                })
            }
        </div >
    )
}
