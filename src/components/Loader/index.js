import React from 'react'
import loaderSrc from '../../assets/loader.png'

export default function Loader() {
    return (
        <div>
            <img
                style={{ width: 80 }}
                alt="Loader icon"
                src={loaderSrc} />
        </div>
    )
}  
