import Image from 'next/legacy/image';
import Link from 'next/link';

const page404 = () => {
    return(
        <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover  custom-404 text-white'>
            <div class="absolute top-0 left-0 right-0 bottom-0 h-full w-full">
                <div className='relative h-full'>
                    <div className='flex justify-between absolute w-full p-[20px]'>
                    <Link href='http://localhost:3000'>
                        <div className="flex items-center">
                            <Image 
                            src="/favicon-32x32.png" 
                            alt="Logo Captur" 
                            width={32} 
                            height={32} 
                            />
                            <h1 className='font-bold text-3xl ml-2'>Captur</h1>
                        </div>
                    </Link>
                    </div>
                    <div class="h-full flex flex-col items-center justify-center px-16">
                        <div>
                            <div className='text-center text-[5.25rem]'>404</div>
                            <h1 className='flex justify-center items-center text-2xl text-center font-bold'>Página não encontrada</h1>
                            <p>Hmm, a página que você estava procurando parece não existir mais.</p>
                            <div className='flex justify-center items-center '>
                                <Link className='px-8 py-2 border mt-4' href={'http://localhost:3000'}>Voltar para Captur</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='flex items-center justify-between absolute bottom-20 left-20 right-20' >
                    <div className='font-bold z-10'>
                        Foto de <Link href={'https://unsplash.com/pt-br/@neonbrand'} alt='Autor da imagem da page 404'>@neonbrand</Link>
                    </div>
                    <div className='z-10'>404</div>
                </footer>
            </div>
        </div>
    );
}

export default page404