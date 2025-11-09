// src/components/Footer.jsx

import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual dinamicamente

  return (
    // Fundo bem escuro, 'py-12' dá um bom preenchimento
    <footer className="bg-gray-900 text-slate-400 py-5">
      <div className="max-w-6xl mx-auto px-2">
        
        <div className="text-center">
          
          {/* Aviso Legal Importante */}
          <p className="text-sm max-w-3xl mx-auto mb-6">
            <strong>Aviso Legal:</strong> Nosso site é um agregador de ofertas e promoções. Não vendemos nenhum produto ou serviço. Os preços e condições das ofertas podem sofrer alteração sem aviso prévio. A responsabilidade pela compra, entrega e pós-venda é inteiramente da loja vendedora.
          </p>

          {/* Copyright */}
          <p className="text-sm">
            &copy; {currentYear} Nerd Ofertas. Todos os direitos reservados.
          </p>
          
          {/* Links Opcionais (se você tiver) */}
          {/* <div className="flex justify-center gap-4 mt-4 text-sm">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
          */}

        </div>

      </div>
    </footer>
  );
}

export default Footer;