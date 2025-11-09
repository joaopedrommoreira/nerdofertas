// src/App.jsx

import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero' // 1. Importar nosso componente Hero
import ComoFunciona from './components/ComoFunciona'
import LojasParceiras from './components/LojasParceiras'
import OfertasSlider from './components/OfertasSlider'
import DepoimentosSlider from './components/DepoimentosSlider'
import Footer from './components/Footer'

function App() {
  
  // O App agora é responsável por "orquestrar" as seções
  // e manter o SEO principal.

  return (
    <>
      <Helmet>
        {/* Tags de SEO que já fizemos */}
        <title>Grupos de Ofertas | As Melhores Promoções de Informática</title>
        <meta 
          name="description" 
          content="Entre nos nossos grupos de WhatsApp e Telegram para receber as melhores ofertas de produtos de informática e gerais, antes de todo mundo." 
        />
        <html lang="pt-br" />
      </Helmet>

      {/* 2. Renderizar (mostrar) o componente Hero */}
      <main>
        <Hero />
        <LojasParceiras />
        <OfertasSlider />
        <ComoFunciona />
        <DepoimentosSlider />
        <Footer />
        {/* Futuramente, outras seções virão aqui: */}
        {/* <ComoFunciona /> */}
        {/* <FAQ /> */}
        {/* <Footer /> */}
      </main>
    </>
  )
}

export default App