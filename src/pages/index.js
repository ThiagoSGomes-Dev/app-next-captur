import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";

export default function Home() {
  return (
    <main>
      <Hero heading='Captur Fotografia' message='Eu capturo momentos na natureza e os mantenho vivos.' />
      <Slider slides={SliderData}/>
      <Instagram />
    </main>
  );
}
