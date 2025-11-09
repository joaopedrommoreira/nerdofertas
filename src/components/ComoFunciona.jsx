// src/components/FeaturesStats.jsx

import React from 'react';
import CountUp from 'react-countup';
// 1. NOVOS IMPORTES DE ÍCONES
import { FiTruck } from "react-icons/fi";
import { AiOutlineSafety, AiOutlineCreditCard } from "react-icons/ai";

// Defina os números (baseados no seu novo rascunho)
const stats = {
  dinheiroEconomizado: 17000000,
  usuariosNoGrupo: 150000,
};

// 2. ATUALIZAÇÃO DO ARRAY 'features'
// Cada objeto agora tem sua própria propriedade 'icon'
const features = [
  {
    icon: <AiOutlineSafety className="h-8 w-8 text-emerald-400 mt-1 flex-shrink-0" />,
    title: 'Ofertas Selecionadas',
    description: 'Indicações de ofertas selecionadas a dedo, com links verificados e seguros, sem riscos de fraudes.'
  },
  {
    icon: <AiOutlineCreditCard className="h-8 w-8 text-emerald-400 mt-1 flex-shrink-0" />,
    title: 'Parcelamento sem juros',
    description: 'Filtramos as melhores ofertas e promoções que permitem parcelamento sem juros nos cartões.'
  },
  {
    icon: <FiTruck className="h-8 w-8 text-emerald-400 mt-1 flex-shrink-0" />,
    title: 'Frete Grátis',
    description: 'Economize sempre comprando com frete grátis e entregas para todo Brasil.'
  }
];
// (Eu reordenei os itens para os ícones fazerem mais sentido com o texto, 
//  mas pode ajustar a ordem e o texto como preferir)


function FeaturesStats() {
  return (
    // Fundo da seção
    <section className="bg-gray-950 text-white py-16 md:py-24">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Grid de 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ===== Coluna 1: Features (Como Funciona) ===== */}
          <div className="flex flex-col gap-6">
            
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              O que você recebe ao entrar?
            </h2>

            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex animate-float items-start p-4 bg-gray-800 rounded-lg 
                           border border-gray-800 shadow-lg"
              >
                {/* 3. RENDERIZA O ÍCONE ESPECÍFICO */}
                {feature.icon} 
                
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Coluna 2: Stats (Números) ===== */}
          <div className="flex flex-col gap-10 text-center md:text-left">
            
            {/* Stat 1: Dinheiro Economizado */}
            <div>
              <h3 className="text-lg text-slate-300 uppercase tracking-wider mb-1">
                Total Economizado
              </h3>
              <span className="text-5xl md:text-6xl font-bold text-emerald-400
                               animate-pulse-glow">
                + R$ 
                <CountUp
                  end={stats.dinheiroEconomizado}
                  duration={3} 
                  separator="."
                  enableScrollSpy 
                  scrollSpyOnce 
                />
              </span>
            </div>

            {/* Stat 2: Usuários */}
            <div>
              <h3 className="text-lg text-slate-300 uppercase tracking-wider mb-1">
                Membros que Economizam
              </h3>
              <span className="text-5xl md:text-6xl font-bold text-emerald-400
                               animate-pulse-glow">
                +
                <CountUp
                  end={stats.usuariosNoGrupo}
                  duration={3}
                  separator="."
                  enableScrollSpy
                  scrollSpyOnce
                />
              </span>
            </div>
            

          </div> {/* Fim da Coluna 2 */}

        </div> {/* Fim do Grid */}
      </div>
    </section>
  );
}

export default FeaturesStats;