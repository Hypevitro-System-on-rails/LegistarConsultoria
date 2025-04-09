import React from "react";
import { Button } from "../components/ui/button";

export const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511934567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-fade-in flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="currentColor"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </a>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-navy-blue">
        {/* Gold line at top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-80"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-center mb-10">
            <div className="w-12 h-1 bg-gold mr-5 opacity-90"></div>
            <div className="text-xl font-semibold tracking-wider text-white uppercase letter-spacing-2">
              Conhecimento e Atualização
            </div>
            <div className="w-12 h-1 bg-gold ml-5 opacity-90"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-white mb-8">Blog</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Mantenha-se atualizado sobre o mundo das licitações públicas com nossos artigos
              e análises especializadas.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-24 bg-cream relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold opacity-20"></div>
        <div className="container mx-auto px-6 max-w-4xl relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
          <div className="flex flex-col space-y-8">
            <article className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Licitações públicas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">
                Como participar de licitações públicas com sucesso
              </h2>
              <p className="text-sm text-gold mb-4">Publicado em 15 de Janeiro, 2024</p>
              <p className="text-charcoal/80 mb-6">
                Guia completo sobre os principais aspectos a serem considerados ao
                participar de licitações públicas. Aprenda as melhores práticas e
                estratégias para aumentar suas chances de sucesso.
              </p>
              <Button className="bg-navy-blue text-white hover:bg-navy-blue/90 transition-colors duration-300">
                Ler mais
              </Button>
            </article>
            
            <article className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Legislação e documentos"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">
                Mudanças recentes na lei de licitações
              </h2>
              <p className="text-sm text-gold mb-4">Publicado em 10 de Janeiro, 2024</p>
              <p className="text-charcoal/80 mb-6">
                Análise detalhada das principais alterações na legislação de licitações
                e seus impactos práticos para empresas participantes de processos licitatórios.
              </p>
              <Button className="bg-navy-blue text-white hover:bg-navy-blue/90 transition-colors duration-300">
                Ler mais
              </Button>
            </article>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-70"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Quer receber nossas atualizações?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-light">
            Inscreva-se em nossa newsletter para receber as últimas notícias e análises
            sobre licitações públicas diretamente em seu e-mail.
          </p>
          <Button className="bg-gold text-navy-blue hover:bg-gold-light transition-colors duration-300 text-lg px-10 py-6 shadow-lg">
            Inscrever-se Gratuitamente
          </Button>
        </div>
      </div>
    </div>
  );
};