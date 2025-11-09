// src/components/OfertasSlider.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importar os ícones que vamos usar no card
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { HiOutlineTicket } from 'react-icons/hi2';

// Importar os estilos CSS do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ======================================================================
// 1. IMPORTE AS IMAGENS *DOS PRODUTOS*
//
// Lembre-se: estas devem ser as fotos dos PRODUTOS,
// não o card inteiro (ex: só a foto da TV, só a foto da Placa de Vídeo).
// Coloque-as em 'src/assets/ofertas/'
// ======================================================================
import imgTvAoc from '../assets/ofertas/oferta1.png'; // Exemplo: a TV
import imgPlacaVideo from '../assets/ofertas/oferta2.png'; // Exemplo: a Placa
import imgFone from '../assets/ofertas/oferta3.png'; // Exemplo
import imgMonitor from '../assets/ofertas/oferta4.png'; // Exemplo
import imgPS5 from '../assets/ofertas/oferta5.png';
import imgAirfryer from '../assets/ofertas/oferta6.png';
import imgSamsung from '../assets/ofertas/oferta7.png';

// 2. ATUALIZAMOS A LISTA DE OFERTAS com dados completos
const listaOfertas = [
  { 
    img: imgTvAoc, 
    alt: 'Lenovo Ideapad Slim 3', 
    title: 'Notebook Lenovo Ideapad Slim 3 15irh10 Intel Core i5-13420h 8gb 512gb Ssd Linux 15.3',
    price: 'R$ 2.189',
    coupon: 'AGORAMELI'
  },
  { 
    img: imgPlacaVideo, 
    alt: 'Placa De Vídeo Inno3d Nvidia Rtx 5070 12gb', 
    title: 'Placa De Vídeo Inno3d Nvidia Rtx 5070 12gb Oc Edition',
    price: 'R$ 3.489',
    coupon: 'AGORAMELI'
  },
  { 
    img: imgFone, 
    alt: 'Smart TV 4K 43" LG UHD', 
    title: ' Smart TV 4K 43" LG UHD 43UA75 Processador α7 AI Ger8 4K',
    price: 'R$ 1.361',
    coupon: 'AGORA15'
  },
  { 
    img: imgMonitor, 
    alt: 'Processador AMD Ryzen 5 5500 3.6GHz', 
    title: ' Processador AMD Ryzen 5 5500 3.6GHz 4.2GHz Max Turbo Cache 16MB AM4 Sem Vídeo',
    price: 'R$ 359,00',
    coupon: 'MELIMAIS20'
  },
  {
    img: imgPS5,
    alt: 'PlayStation 5 Digital Edition 825GB',
    title: 'PlayStation 5 Digital Edition 825GB',
    price: 'R$ 2.998',
    coupon: 'BRMEGA08 + moedas'
  },
  {
    img: imgAirfryer,
    alt: 'Fritadeira airfryer XL Philips Walita HD9206',
    title: 'Fritadeira airfryer XL Philips Walita HD9206',
    price: 'R$ 319',
    coupon: 'JANOAPP'
  },
  {
    img: imgSamsung,
    alt: 'Celular Samsung Galaxy S24 FE',
    title: 'Celular Samsung Galaxy S24 FE 5G 128GB 8GB RAM Tela 6.7" Câm. Tripla',
    price: 'R$ 2.205,48',
    coupon: ''
  },
];


function OfertasSlider() {
  return (
    // Fundo da seção
    <section className="bg-gray-950 text-white py-16 md:py-24">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Veja o que Nossos Membros Recebem
          </h2>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            Isso é apenas uma pequena amostra das dezenas de ofertas postadas todos os dias.
          </p>
        </div>

        {/* 3. O Swiper (sem mudanças na configuração) */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="mySwiper"
          // Adicionamos padding no container do slider para as sombras aparecerem
          style={{ padding: '10px 0' }} 
        >
          {/* 4. A MUDANÇA ESTÁ AQUI: O conteúdo do Slide */}
          {listaOfertas.map((oferta, index) => (
            <SwiperSlide key={index}>
              
              {/* O Card da Oferta */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-lg shadow-xl overflow-hidden 
                              border border-slate-700 h-full
                              flex flex-col"> {/* Garante altura total */}
                
                {/* Imagem (Parte de Cima) */}
                <div className="bg-white">
                  <img 
                    src={oferta.img} 
                    alt={oferta.alt} 
                    // 'h-48' ou 'h-56' - define uma altura fixa
                    // 'object-contain' - garante que o produto todo apareça
                    className="w-full h-56 object-contain" 
                  />
                </div>
                
                {/* Conteúdo (Parte de Baixo) */}
                <div className="p-4 flex flex-col flex-grow"> {/* 'flex-grow' preenche o espaço */}
                  
                  {/* Título */}
                  {/* 'min-h-[5rem]' (80px) - garante 2 linhas de altura
                      para os cards não pularem de tamanho
                  */}
                  <p className="text-base font-semibold text-slate-200 min-h-[5rem]">
                    ➡️ {oferta.title}
                  </p>
                  
                  {/* Preço */}
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <BsFillCheckSquareFill size={24} className="text-green-500" />
                      <span className="text-2xl font-bold text-white">
                        {oferta.price}
                      </span>
                    </div>
                  </div>
                  
                  {/* Cupom */}
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <HiOutlineTicket size={24} className="text-emerald-400" />
                      <span className="text-base font-semibold text-emerald-400">
                        Cupom: <span className="uppercase">{oferta.coupon}</span>
                      </span>
                      
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default OfertasSlider;