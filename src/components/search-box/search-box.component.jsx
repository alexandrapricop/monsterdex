import React from 'react';
import './search-box.style.css';

export const SearchBox = ({onChange}) => {
    return(
        <>
            <input className='search-box' type='search' placeholder='search monster' onChange={onChange}/>
        </>
    )
}
