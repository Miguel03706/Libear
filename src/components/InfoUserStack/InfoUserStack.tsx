import React from 'react'
import "./styles.scss"

// ICONES OBTIDOS NO SITE FLATICON
// <a href="https://www.flaticon.com/free-icons/hearth" title="hearth icons">Hearth icons created by apien - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/quartz" title="quartz icons">Quartz icons created by manshagraphics - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/fire" title="fire icons">Fire icons created by smashingstocks - Flaticon</a>

interface InfoUserStackProps {
    onFire: boolean;
    fire: number;
    crystal: number;
    hearth: number;
}

export default function InfoUserStack(props: InfoUserStackProps) {
    return (
        <div className='info-user-stack-section'>
            <div className='grid-info'>
                <div>
                    <img src="/icons/logo_urso.webp" alt="Logo libear" />
                </div>
                <div>
                    {
                        props.onFire ? (
                            <>
                                <img src="/icons/fire.webp" alt="Logo libear" />
                                <span className='fire-text-on'>{props.fire}</span>
                            </>
                        ) : (
                            <>
                                <img src="/icons/gray_fire.webp" alt="Logo libear" />
                                <span className='fire-text-off'>{props.fire}</span>
                            </>
                        )
                    }

                </div>
                <div>
                    <img src="/icons/crystal.webp" alt="Logo libear" />
                    <span className='crystal-text'>{props.crystal}</span>
                </div>
                <div>
                    <img src="/icons/hearth.webp" alt="Logo libear" />
                    <span className='hearth-text'>{props.hearth}</span>
                </div>
            </div>
        </div>
    )
}
