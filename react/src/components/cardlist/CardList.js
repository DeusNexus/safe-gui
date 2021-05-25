import React from 'react';

const CardList = ({children, title}) => {
    
    return (
        <ul className='CardList'>
            {title ? title : <></>}
            {children}
        </ul>
    )
}

export default CardList
