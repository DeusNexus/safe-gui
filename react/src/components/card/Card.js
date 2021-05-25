import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Card = ({children, title, subtitle, showDefault}) => {
    const [show, setShow] = useState(showDefault ? showDefault : false)

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
                    <span onClick={() => setShow(!show)}>
                        <b>{title}</b> {subtitle ? `- ${subtitle}` : <></>}
                        <IoMdArrowDropdown/>
                        <br/>
                    </span>
                    {
                        show ?
                            <>
                                {children}
                            </>
                            : 
                            <></>
                        }
                </div>
            </li>
            <br/>
        </>
    )
}

export default Card
