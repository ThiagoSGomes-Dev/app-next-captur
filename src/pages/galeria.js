import Slider from '@/components/Slider';
import { SliderData } from "@/components/SliderData";
import Hero from '../components/Hero';

const galeria = () => {
    return(
        <div>
            <Hero heading='Minha Galeria'/>
            <Slider slides={SliderData}/>
        </div>
    );
}

export default galeria