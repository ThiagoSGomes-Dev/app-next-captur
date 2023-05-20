import React from 'react'

const Contato = () => {
    return(
        <div className='max-w-[1240px] m-auto p-4 h-screen'>
            <h1 className='text-2xl font-bold text-center p-4'>Vamos trabalhar juntos</h1>
            <form action="/" className='max-w-[600px] m-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    <input className='border shadow-lg p-3' type="text" placeholder='Nome' />
                    <input className='border shadow-lg p-3' type="email" placeholder='Email' required/>
                </div>
                <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Assunto'/>
                <textarea className='border shadow-lg p-3 w-full' name="/" id="/" cols="30" rows="10" placeholder='Mensagem'></textarea>
                <button className='border shadow-lg p-3 w-full mt-2'>Enviar</button>
            </form>
        </div>
    );
}

export default Contato