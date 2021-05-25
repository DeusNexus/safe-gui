import React from 'react';

const Card = (props) => {

    return (
        <div 
            className='card'
            style={{
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: '0.25rem',
                padding: '4px',
            }}
        >
            {props.children}
        </div>
    )
}

export default Card
