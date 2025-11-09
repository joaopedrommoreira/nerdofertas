// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { BsWhatsapp, BsTelegram } from 'react-icons/bs';

const promo = {
  imageUrl: 'https://i.postimg.cc/sDdWPYvs/bd4a114c-8b50-4e5f-be94-908360454f5a.jpg',
  title: 'Smart TV 43" Crystal UHD 4K U8600F 2025 + Soundbar B400F/ZD',
  originalPrice: 'R$ 2.611,55',
  salePrice: 'R$ 1.768,00',
  discountPercent: 32,
  coupon: 'Junte-se ao grupo',
};

function Hero() {

  const [dailyJoins, setDailyJoins] = useState(47);
useEffect(() => {
    // Definimos um intervalo de tempo
    // (ex: a cada 7 segundos - 7000ms)
    const interval = setInterval(() => {
      
      // Gera um número aleatório (1 ou 2)
      const increment = Math.floor(Math.random() * 2) + 1;
      
      // Atualiza o estado, somando o incremento
      // (Usamos 'prevCount' para garantir que ele pegue o valor anterior)
      setDailyJoins(prevCount => prevCount + increment);

    }, 7000); // 7000ms = 7 segundos. Ajuste este tempo como quiser!

    // Limpa o intervalo quando o componente "morrer"
    // (essencial para evitar vazamento de memória)
    return () => clearInterval(interval);

  }, []);


  return (
    <section className="min-h-screen text-white flex items-center
                      bg-gradient-to-b from-gray-900 to-gray-950">
      
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* ===== Coluna 1: Texto e CTAs ===== */}
          {/* MUDANÇA AQUI: De 'md:col-span-7' para 'md:col-span-8' */}
          <div className="text-center md:text-left opacity-0 animate-slideInRight md:col-span-8 md:order-last">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              As Melhores Ofertas, <span className="text-emerald-400">Antes de Todo Mundo.</span>
            </h1>

            <p className="text-lg text-slate-300 mt-6">
              Chega de pagar caro. Entre para nossos grupos exclusivos e receba promoções imperdíveis, direto no seu celular.
            </p>
            <p className="text-sm text-yellow-300 mt-6 font-semibold">
              🔥 
              {/* O 'key' força o React a re-renderizar o span,
                  o que RECOMEÇA a animação 'animate-pop' */}
              <span key={dailyJoins} className="inline-block animate-pop">
                {dailyJoins}
              </span> 
              {' '}pessoas entraram no grupo hoje!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
              
              <a
                href="#" // Link do WhatsApp
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2
                           bg-green-500 text-white font-bold py-3 px-6 rounded-lg text-lg
                           hover:bg-green-600 transition-colors duration-300"
              >
                <BsWhatsapp size={20} />
                <span>Ofertas no Whatsapp</span>
              </a>
              
              <a
                href="#" // Link do Telegram
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2
                           bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg
                           hover:bg-blue-600 transition-colors duration-300"
              >
                <BsTelegram size={20} />
                <span>Ofertas no Telegram</span>
              </a>
            </div>
            
            <p className="text-sm text-slate-400 mt-6">
              Junte-se a mais de 150.000 caçadores de ofertas!
            </p>
          </div>

          {/* ===== Coluna 2: Card da Promoção ===== */}
          {/* MUDANÇA AQUI: De 'md:col-span-5' para 'md:col-span-4' */}
          <div className="opacity-0 animate-slideInLeft md:col-span-4 md:order-first">
            
            {/* O wrapper da animação */}
            <div className="animated-border-wrapper">
              
              {/* O card em si */}
              <div className="rounded-xl overflow-hidden shadow-2xl 
                              border-2 border-slate-700">
                
                {/* Parte Branca (Imagem) */}
                <div className="bg-white p-4 md:p-1">
                  <img 
                    src={promo.imageUrl} 
                    alt={promo.title} 
                    className="w-full h-auto object-cover rounded-md" 
                  />
                </div>
                
                {/* Parte Escura (Conteúdo) */}
                <div className="bg-slate-800 p-6">
                  <p className="text-lg text-slate-200">
                    ➡️ {promo.title}
                  </p>
                  <div className="mt-4">
                    <p className="text-lg text-slate-400 line-through">
                      {promo.originalPrice}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                      <p className="text-3xl font-bold text-white">
                        ✅ {promo.salePrice}
                      </p>
                      <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {promo.discountPercent}% OFF
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-emerald-400 mt-3">
                      Vai deixar passar? <span className="uppercase">{promo.coupon}</span>
                    </p>
                  </div>
                </div>
              </div>

            </div> {/* Fim do 'animated-border-wrapper' */}

          </div> {/* Fim da Coluna 2 (Card) */}

        </div> {/* Fim do Grid */}
      </div> {/* Fim do Container */}
    </section>
  );
}

export default Hero;