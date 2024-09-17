'use client'
import React, { useState, useEffect } from 'react';
import "./styles.scss";
import { Image } from '@chakra-ui/react';
import Activities from './activities.json'

export default function ActivitiesRoad() {
    const [color, setColor] = useState('#E5DE2F');

    const contentStyle = (index: number) => {
        const positionInGroup = index % 4;
        const baseMargin = 2; // Base margin increment
        let marginLeft = '0rem';
        let marginRight = '0rem';

        if (positionInGroup === 0) {
            // Primeiro item centralizado
            marginLeft = 'auto';
            marginRight = 'auto';
        } else if (positionInGroup === 1 || positionInGroup === 2) {
            // Segundo e terceiro itens vão para a direita
            marginLeft = `${positionInGroup * baseMargin}rem`;
        } else if (positionInGroup === 3) {
            // Quarto item vai um pouco mais para a esquerda
            marginLeft = `${(positionInGroup - 1) * baseMargin - 1}rem`;
        }

        return {
            marginLeft,
            marginRight,
        };
    };

    useEffect(() => {
    }, []);

    useEffect(() => {
        if (localStorage.getItem('chakra-ui-color-mode') === "dark") {
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
                        <div className="roadmap" key={activity.id}>
                            <div className={`roadmap-item ${index % 2 ? 'left' : 'right'}`} style={contentStyle(index)}>
                                <div className="content">
                                    <Image src={`/icons/activitys/${activity.image}.webp`} alt={activity.title} w={84} h={84} />
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}