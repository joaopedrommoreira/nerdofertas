// src/components/LojasParceiras.jsx

import React from 'react';

// 1. Importe a nova imagem de destaque
import imgDestaque from '../assets/lojas-destaque.png'; // <-- IMAGEM GRANDE DA ESQUERDA

// 2. Importe os logos que já temos
import logoAmazon from '../assets/logos/amazon.png';
import logoMercadoLivre from '../assets/logos/mercadolivre.png';
import logoShopee from '../assets/logos/shopee.png';
import logoAliexpress from '../assets/logos/aliexpress.png';
import logoKabum from '../assets/logos/kabum.png';
import logoMagalu from '../assets/logos/magazineluiza.png';

// 3. Lista de lojas (temos 6, perfeito para um grid 3x2)
const lojas = [
  { name: 'Amazon', image: logoAmazon },
  { name: 'Mercado Livre', image: logoMercadoLivre },
  { name: 'Shopee', image: logoShopee },
  { name: 'AliExpress', image: logoAliexpress },
  { name: 'KaBuM!', image: logoKabum },
  { name: 'Magazine Luiza', image: logoMagalu },
];

function LojasParceiras() {
  return (
    // Fundo da seção (pode ser 'bg-slate-900' ou 'bg-slate-800' se quiser contraste)
    <section className="bg-gray-950 text-white py-16 md:py-4">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 4. NOVO LAYOUT: Grid de 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna 1: Imagem de Destaque */}
          <div className="w-full">
            <img 
              src={imgDestaque} 
              alt="Lojas Parceiras"
              className="rounded-lg shadow-lg w-full h-auto object-cover" 
            />
          </div>

          {/* Coluna 2: Título e Grid de Logos */}
          <div className="w-full">
            
            {/* Título (centralizado no mobile, alinhado à esquerda no desktop) */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight
                           text-center md:text-left mb-4">
              LOJAS QUE VOCÊS CONFIAM
            </h2>
            <p className="text-lg text-slate-300 mt-4 mb-8">
                Monitoramos os preços e cupons das maiores varejistas do Brasil e do mundo, tudo em um só lugar.
              </p>

            {/* Grid de Logos 3x2 (3 colunas) */}
            <div className="grid grid-cols-3 gap-6">
              
              {lojas.map((loja, index) => (
                <div 
                  key={loja.name}
                  className="flex items-center justify-center p-4"
                >
                  <img 
                    src={loja.image} 
                    alt={loja.name} 
                    className="h-12 w-auto object-contain 
                               hover:scale-110 transition-transform duration-300
                               animate-float" // <-- 5. APLICA A ANIMAÇÃO
                    
                    // 6. APLICA UM ATRASO (delay) diferente para cada
                    //    para não flutuarem em sincronia
                    style={{ animationDelay: `${index * 300}ms` }}
                  />
                </div>
              ))}
            </div> {/* Fim do grid de logos */}
          </div> {/* Fim da Coluna 2 */}

        </div> {/* Fim do grid principal */}

      </div>
    </section>
  );
}

export default LojasParceiras;