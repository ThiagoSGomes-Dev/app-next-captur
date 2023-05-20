import React from 'react';

const Footer = ({Copyright, Author}) => {
    return(
        <div className='bg-[#172554] flex justify-center items-center w-full h-full text-white p-5'>
            <div className='flex justify-center items-center flex-col'>
                <h3 className='text-1xl' >{ Copyright }</h3>
                <p>{ Author }</p>
            </div>
        </div>
    )   
}

export default Footer