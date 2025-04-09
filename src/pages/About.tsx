import React from "react";
import { Button } from "../components/ui/button";

export const About = () => {
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
              Conheça Nossa História
            </div>
            <div className="w-12 h-1 bg-gold ml-5 opacity-90"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-white mb-8">Sobre Nós</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Com mais de 15 anos de experiência, nosso escritório se especializou em
              licitações públicas e consultoria jurídica empresarial, construindo uma
              sólida reputação baseada em resultados consistentes e atendimento
              personalizado.
            </p>
          </div>
        </div>
      </div>

      {/* Missão, Visão e Valores */}
      <div className="py-24 bg-cream relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold opacity-20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
              <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Nossa Missão</h3>
              <p className="text-charcoal/80">
                Oferecer soluções jurídicas eficientes e personalizadas, garantindo a
                segurança e o sucesso de nossos clientes em processos licitatórios e
                questões empresariais.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
              <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Nossa Visão</h3>
              <p className="text-charcoal/80">
                Ser referência nacional em assessoria jurídica para licitações públicas,
                reconhecidos pela excelência e compromisso com o sucesso dos nossos clientes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
              <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Nossos Valores</h3>
              <p className="text-charcoal/80">
                Ética, transparência, excelência e compromisso com resultados são os
                pilares que norteiam nossa atuação profissional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nossa Equipe */}
      <div className="py-24 bg-light-gray relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold opacity-20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gold mb-6"></div>
            <h2 className="text-3xl font-bold text-center text-charcoal">Nossa Equipe</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-navy-blue/10 mx-auto mb-6 flex items-center justify-center border-2 border-gold">
                <span className="text-3xl text-gold font-serif">A</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-blue mb-2">Dr. André Silva</h3>
              <p className="text-sm text-charcoal/70 mb-4">Sócio Fundador</p>
              <p className="text-charcoal/80">
                Especialista em Direito Administrativo e Licitações Públicas com mais de
                20 anos de experiência.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-navy-blue/10 mx-auto mb-6 flex items-center justify-center border-2 border-gold">
                <span className="text-3xl text-gold font-serif">M</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-blue mb-2">Dra. Maria Santos</h3>
              <p className="text-sm text-charcoal/70 mb-4">Sócia</p>
              <p className="text-charcoal/80">
                Especialista em Direito Empresarial e Contratos Administrativos,
                com vasta experiência em consultoria jurídica.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-navy-blue/10 mx-auto mb-6 flex items-center justify-center border-2 border-gold">
                <span className="text-3xl text-gold font-serif">R</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-blue mb-2">Dr. Ricardo Oliveira</h3>
              <p className="text-sm text-charcoal/70 mb-4">Coordenador Jurídico</p>
              <p className="text-charcoal/80">
                Especialista em Direito Público e Processos Licitatórios,
                com foco em análise e elaboração de recursos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy-blue text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-70"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Quer saber mais sobre nosso trabalho?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-light">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a alcançar seus objetivos em licitações públicas.
          </p>
          <Button className="bg-gold text-navy-blue hover:bg-gold-light transition-colors duration-300 text-lg px-10 py-6 shadow-lg">
            Agende uma Consulta Gratuita
          </Button>
        </div>
      </div>
    </div>
  );
};