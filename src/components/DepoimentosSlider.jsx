// src/components/DepoimentosSlider.jsx

import React from 'react';
import { BsWhatsapp, BsTelegram } from 'react-icons/bs';

// 1. Importar os componentes do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// 2. Importar os módulos
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 3. Importar os estilos CSS essenciais do Swiper (já fizemos isso, mas é boa prática)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 4. Importe as imagens dos seus depoimentos (ajuste os nomes se precisar)
import depoimento1 from '../assets/depoimentos/depoimento1.png';
import depoimento2 from '../assets/depoimentos/depoimento2.png';
import depoimento3 from '../assets/depoimentos/depoimento3.png';
import depoimento4 from '../assets/depoimentos/depoimento4.png';
// Adicione mais imports aqui...

// 5. Crie uma lista com suas ofertas
const listaDepoimentos = [
  { img: depoimento1, alt: 'Depoimento de membro 1' },
  { img: depoimento2, alt: 'Depoimento de membro 2' },
  { img: depoimento3, alt: 'Depoimento de membro 3' },
  { img: depoimento4, alt: 'Depoimento de membro 4' },
  // Adicione mais depoimentos aqui...
];

function DepoimentosSlider() {
  return (
    // Seção com fundo escuro (igual ao Hero) para variar
    <section className="bg-gray-950 text-white py-16 md:py-14">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Aprovado pela Comunidade
          </h2>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            Veja o que nossos membros estão comprando e recebendo em casa graças às ofertas do grupo.
          </p>
        </div>

        {/* 6. O componente Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000, // Um pouco mais lento para dar tempo de ler
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          
          // Quantidade de slides por tela
          slidesPerView={1}
          spaceBetween={30} // Espaço entre os slides

          // Responsividade
          breakpoints={{
            // Quando a tela for >= 768px (tablets)
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // Quando a tela for >= 1024px (desktop)
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          
          // 7. A MÁGICA: Reusando a classe do outro slider
          // Isso vai nos dar as setas e bolinhas verdes!
          className="mySwiper" 
        >
          {/* 8. Mapeia a lista de depoimentos */}
          {listaDepoimentos.map((depoimento, index) => (
            <SwiperSlide key={index}>
              <img 
                src={depoimento.img} 
                alt={depoimento.alt} 
                // Estilização da imagem
                className="rounded-lg shadow-xl w-full h-auto object-cover
                           border-2 shadow-lg shadow-gray-400/20 border-gray-500" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-16"> {/* Margem 'mt-16' para dar respiro */}
          
          <h3 className="text-2xl font-bold mb-4">
            Gostou do que viu? Entre agora!
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">
            Junte-se aos mais de 150.000 caçadores de ofertas e comece a economizar.
          </p>
          
          {/* Botões (reutilizados do Hero, mas sempre centralizados) */}
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <a
              href="#" // Link do WhatsApp
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2
                         bg-green-500 text-white font-bold py-3 px-6 rounded-lg text-lg
                         hover:bg-green-600 transition-colors duration-300"
            >
              <BsWhatsapp size={20} />
              <span>Receber ofertas no Whats</span>
            </a>
            <a
              href="#" // Link do Telegram
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2
                         bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg
                         hover:bg-blue-600 transition-colors duration-300"
            >
              <BsTelegram size={20} />
              <span>Receber ofertas no Telegram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DepoimentosSlider;