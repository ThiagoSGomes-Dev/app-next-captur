import Contato from '@/components/Contato';
import Hero from '../components/Hero';

const contato = () => {
    return(
        <div>
            <Hero heading='Contato' message='Envie o formulário abaixo para mais trabalhos e cotações.' />
            <Contato />
        </div>
    );
}

export default contato