import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

const portfolio = () => {
    return(
        <div>
            <Hero heading='Meu Portfolio' message={'Este é um dos meus trabalhos recentes viajando pelo mundo.'}/>
            <Portfolio />
        </div>
    );
}

export default portfolio