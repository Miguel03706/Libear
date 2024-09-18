'use client'
import React, { useState, useEffect, useRef } from 'react';
import "./styles.scss";
import { Image } from '@chakra-ui/react';
import Activities from './activities.json'

interface Activity {
    id: string;
    image: string;
    title: string;
    description: string;
    link: string;
    progress: number;
}

interface Unidade {
    titulo: string;
    atividades: Activity[];
}

interface Secao {
    unidade: Unidade[];
}

interface ActivitiesProps {
    secao: Secao[];
}

export default function ActivitiesRoad(props: ActivitiesProps) {
    // const [color, setColor] = useState('#E5DE2F');
    const [currentSection, setCurrentSection] = useState(0);
    const [currentUnit, setCurrentUnit] = useState(0);
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentColor, setCurrentColor] = useState("");
    const roadSectionRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        setCurrentSection(0)
        setCurrentTitle("TESTE")
        setCurrentUnit(0)
        setCurrentColor("#E5DE2F")
        console.log(props.secao)
    }, []);  // Garantir que o listener seja adicionado apenas uma vez

    // useEffect(() => {
    //     if (localStorage.getItem('chakra-ui-color-mode') === "dark") {
    //         setColor('#49CFE1');
    //     } else {
    //         setColor('#E5DE2F');
    //     }
    // }, [setColor]);

    return (
        <div ref={roadSectionRef} style={{ overflowX: "hidden" }}>
            <div className='current-card' style={{ background: currentColor }}>
                <p>
                    Seção {currentSection + 1}, Unidade {currentUnit + 1}
                </p>
                <p>
                    {currentTitle}
                </p>
            </div>
            <div className='activities-road-section' >
                {
                    Activities.secao.map((secao, secaoIndex) => (
                        <div key={`secao-${secaoIndex}`} className="section">
                            {
                                secao.unidade.map((unidade, unidadeIndex) => (
                                    <div key={`unit-${unidadeIndex}`} className="unit">
                                        <div className="unit-title">{unidade.titulo}</div>
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
        </div>
    );
}