// src/components/StatsSection.jsx

import React from 'react';
import CountUp from 'react-countup';

// 1. Defina seus números aqui (agora como inteiro)
const stats = {
  dinheiroEconomizado: 17250345, // Ex: 1.25 milhão (sem centavos)
  usuariosNoGrupo: 5247,
};

function StatsSection() {
  return (
    // Seção com fundo contrastante (slate-800)
    <section className="bg-slate-900 text-white py-16">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Grid com 2 colunas (no desktop) e 1 (no mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          
          {/* Stat 1: Dinheiro Economizado */}
          <div>
            <h3 className="text-lg text-slate-300 mb-2">
              Economizados no Grupo
            </h3>
            <span className="text-5xl md:text-6xl font-bold text-emerald-400">
              R$ 
              <CountUp
                end={stats.dinheiroEconomizado}
                duration={3} 
                separator="." // Separador de milhar
                // 2. Removemos 'decimals' e 'decimal'
                enableScrollSpy 
                scrollSpyOnce 
              />
            </span>
          </div>

          {/* Stat 2: Usuários */}
          <div>
            <h3 className="text-lg text-slate-300 mb-2">
              Membros Satisfeitos
            </h3>
            <span className="text-5xl md:text-6xl font-bold text-emerald-400">
              <CountUp
                end={stats.usuariosNoGrupo}
                duration={3}
                separator="."
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StatsSection;