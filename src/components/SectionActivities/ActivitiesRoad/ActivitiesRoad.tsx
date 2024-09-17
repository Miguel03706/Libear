'use client'
import React, { useState, useEffect } from 'react';
import "./styles.scss";
import { Image } from '@chakra-ui/react';
import Activities from './activities.json'

export default function ActivitiesRoad() {
    // const [color, setColor] = useState('#E5DE2F');
    const [currentSection, setCurrentSection] = useState(0);
    const [currentUnit, setCurrentUnit] = useState(0);
    const [currentTitle, setCurrenntTitle] = useState("");

    const roadmapStyle = (index: number) => {
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

    const handleScroll = () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
                setCurrentSection(index);
                const units = section.querySelectorAll('.unit');
                units.forEach((unit, unitIndex) => {
                    const unitRect = unit.getBoundingClientRect();
                    if (unitRect.top <= 0 && unitRect.bottom >= 0) {
                        setCurrentUnit(unitIndex);
                    }
                });
            }
        });
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

        setCurrenntTitle("Alfabeto")
    }, []);

    // useEffect(() => {
    //     if (localStorage.getItem('chakra-ui-color-mode') === "dark") {
    //         setColor('#49CFE1');
    //     } else {
    //         setColor('#E5DE2F');
    //     }
    // }, [setColor]);

    return (
        <div className='activities-road-section'>
            {
                Activities.secao.map((secao, secaoIndex) => (
                    <div key={`secao-${secaoIndex}`} className="section">
                        <div className='current-card' style={{ backgroundColor: secao.background }}>
                            <p>
                                Seção {currentSection + 1}, Unidade {currentUnit + 1}
                            </p>
                            <p>
                                {currentTitle}
                            </p>
                        </div>
                        {
                            secao.unidade.map((unidade, unidadeIndex) => (
                                <div key={`unidade-${unidadeIndex}`} className="unit">
                                    <div className="unidade-title">{unidade.titulo}</div>
                                    {
                                        unidade.atividades.map((activity, activityIndex) => (
                                            <div className="roadmap" key={activity.id}>
                                                <div className={`roadmap-item ${activityIndex % 2 ? 'left' : 'right'}`} style={roadmapStyle(activityIndex)}>
                                                    <div className="content">
                                                        <Image src={`/icons/activitys/${activity.image}.webp`} alt={activity.title} w={84} h={84} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}