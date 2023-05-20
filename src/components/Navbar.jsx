import Link from "next/link"
import React, { useState, useEffect } from "react"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import Image from 'next/legacy/image';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    
    const headleNav = () => {
        setNav(!nav);
    };

    useEffect(()=> {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
            }else {
                setColor('transparent');
                setTextColor('#ffffff');
            };
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return(
        <div style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 z-10 w-full ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='http://localhost:3000'>
                    <div className="flex items-center">
                        <Image 
                        src="/favicon-32x32.png" 
                        alt="Logo Captur" 
                        width={32} 
                        height={32} 
                        />
                        <h1 style={{color: `${textColor}`}} className='font-bold text-3xl ml-2'>Captur</h1>
                    </div>
                </Link>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='http://localhost:3000'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/galeria'>Galeria</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/portfolio'>Portfolio</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contato'>Contato</Link>
                    </li>
                </ul>
                    {/* Mobile Buttom */}
                    <div onClick={headleNav} className='block sm:hidden z-10'>
                        {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} /> }
                    </div>
                    {/* Mobile Menu */}
                    <div className={nav ? 'sm:hidden absolute top-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                        <ul>
                            <li onClick={headleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='http://localhost:3000'>Home</Link>
                            </li>
                            <li onClick={headleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/#Galeria'>Galeria</Link>
                            </li>
                            <li onClick={headleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/portfolio'>Portfolio</Link>
                            </li>
                            <li onClick={headleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/contato'>Contato</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Navbar