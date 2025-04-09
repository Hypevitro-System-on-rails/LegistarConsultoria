import React from "react";
import { Button } from "../components/ui/button";

export const Services = () => {
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
              Nossos Serviços
            </div>
            <div className="w-12 h-1 bg-gold ml-5 opacity-90"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-white mb-8">Áreas de Atuação</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Oferecemos serviços especializados em licitações públicas e direito empresarial,
              com foco em resultados e excelência no atendimento.
            </p>
          </div>
        </div>
      </div>
        
      <div className="container mx-auto px-6 py-24 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Licitações Públicas */}
          <div className="bg-white p-12 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
            <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-navy-blue mb-4">
              Assessoria em Licitações Públicas
            </h2>
            <p className="text-charcoal/80 mb-6">
              Oferecemos suporte completo em todas as etapas do processo licitatório, desde a análise inicial até a execução do contrato.
            </p>
            <ul className="space-y-4 text-charcoal/80">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Análise preventiva de editais e orientação estratégica para participação</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Elaboração de recursos administrativos e impugnações</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Defesa em processos administrativos de penalização</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Consultoria em compliance e regularização documental</span>
              </li>
            </ul>
          </div>

          {/* Consultoria Empresarial */}
          <div className="bg-white p-12 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
            <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-navy-blue mb-4">
              Consultoria Jurídica Empresarial
            </h2>
            <p className="text-charcoal/80 mb-6">
              Assessoria jurídica especializada para empresas que participam de licitações, garantindo segurança e conformidade em todas as operações.
            </p>
            <ul className="space-y-4 text-charcoal/80">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Adequação legal e documental para participação em licitações</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Gestão e acompanhamento de contratos administrativos</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Análise de riscos e consultoria preventiva</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Representação em processos administrativos e judiciais</span>
              </li>
            </ul>
          </div>

          {/* Defesas em Processos */}
          <div className="bg-white p-12 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
            <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-navy-blue mb-4">
              Defesas em Processos Licitatórios
            </h2>
            <p className="text-charcoal/80 mb-6">
              Atuação especializada na defesa dos direitos e interesses das empresas em todas as fases do processo licitatório.
            </p>
            <ul className="space-y-4 text-charcoal/80">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Defesa em processos de inidoneidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Recursos contra desclassificação ou inabilitação</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Medidas judiciais para garantir direitos em licitações</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Acompanhamento de diligências e perícias</span>
              </li>
            </ul>
          </div>

          {/* Consultoria Preventiva */}
          <div className="bg-white p-12 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
            <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-navy-blue mb-4">
              Consultoria Preventiva
            </h2>
            <p className="text-charcoal/80 mb-6">
              Orientação estratégica para prevenir problemas e maximizar o sucesso em licitações públicas.
            </p>
            <ul className="space-y-4 text-charcoal/80">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Análise prévia de documentação e requisitos</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Treinamento de equipes para participação em certames</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Auditoria de processos internos</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Consultoria em governança corporativa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-navy-blue text-white py-24 relative overflow-hidden mt-24">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-70"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Precisa de assessoria especializada?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-light">
              Nossa equipe está pronta para auxiliar sua empresa em todas as etapas do processo licitatório, garantindo segurança jurídica e maximizando suas chances de sucesso.
            </p>
            <Button className="bg-gold text-navy-blue hover:bg-gold-light transition-colors duration-300 text-lg px-10 py-6 shadow-lg">
              Agende uma Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};