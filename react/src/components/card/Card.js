import React from 'react';

const Card = ({children, title, subtitle}) => {
    return (
        <>
            <li>
                <div 
                    className='card'
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        borderRadius: '0.25rem',
                        padding: '4px',
                    }}
                >
                    <span>
                        <b>{title}</b> {subtitle ? <p>{`${subtitle}`}</p> : <br/>}
                    </span>
                    {children}
                </div>
            </li>
            <br/>
        </>
    )
}

export default Card
