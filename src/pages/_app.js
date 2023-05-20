import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Verificar se a página atual é a página 404
  const is404Page = router.pathname === '/404';

  // Renderizar o Navbar somente se a página atual não for a página 404
  return (
    <>
      {!is404Page && <Navbar />}
      <Component {...pageProps} />
      <Footer Author='Feito com &#10084; by &#64;ThiagoSGomes-Dev' Copyright='Copyright &copy; Captur - 2023 todos os direitos reservados.' />
    </>
  );
}

// Para impedir que o componente Navbar seja exibido na page /404 no aplicativo.

// Neste exemplo, usamos o hook useRouter do Next.js para obter o objeto router, que contém informações sobre a rota atual. Em seguida, verificamos se o router.pathname é igual a '/404', indicando que a página atual é a página de erro 404. Se for o caso, o Navbar não será renderizado. Caso contrário, o Navbar será renderizado normalmente. Certifique-se de que o caminho '/404' corresponda ao caminho correto da sua página de erro 404 no seu aplicativo.

