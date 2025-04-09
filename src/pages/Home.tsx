import React from "react";
import { Button } from "../components/ui/button";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Advogado especialista"
            className="h-full w-full object-cover transition-transform duration-10000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy-blue/75 mix-blend-multiply"></div>
        </div>
        
        {/* Gold line at top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-80 z-10"></div>
        
        {/* Content Container */}
        <div className="container mx-auto px-6 pt-24 pb-16 relative z-10 text-center">
          <div className="flex items-center justify-center mb-10">
            <div className="w-12 h-1 bg-gold mr-5 opacity-90"></div>
            <div className="text-xl font-semibold tracking-wider text-white uppercase letter-spacing-2">
              Escritório de Advocacia Especializado
            </div>
            <div className="w-12 h-1 bg-gold ml-5 opacity-90"></div>
          </div>
          
          <div className="space-y-8 max-w-3xl mx-auto my-14">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Especialistas em <span className="text-gold drop-shadow-sm">Licitações Públicas</span>
            </h1>
            <p className="text-sm font-medium tracking-widest text-gold border-b-2 border-gold inline-block pb-2 mx-auto px-2">
              CONSULTORIA JURÍDICA EMPRESARIAL
            </p>
            <p className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed font-light">
              Assessoria especializada em licitações públicas e direito empresarial, 
              com foco em resultados e excelência no atendimento.
            </p>
            <Button className="mt-10 bg-gold text-navy-blue hover:bg-gold-light transition-colors duration-300 text-lg px-10 py-6 shadow-xl font-medium">
              Agende uma Consulta
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-20 bg-white/10 backdrop-blur-sm py-10 px-8 rounded-lg border border-gold/30 shadow-lg">
            <div className="text-center px-6 py-4 border-r border-l border-gold/20 hover:bg-white/5 transition-all duration-300 rounded">
              <p className="text-6xl font-bold text-gold drop-shadow-md tracking-tight mb-3">500<span className="text-4xl">+</span></p>
              <p className="text-sm uppercase tracking-wider text-white/90 font-medium mt-2 border-t border-gold/30 pt-2">Clientes Atendidos</p>
            </div>
            <div className="text-center px-6 py-4 border-r border-l border-gold/20 hover:bg-white/5 transition-all duration-300 rounded">
              <p className="text-6xl font-bold text-gold drop-shadow-md tracking-tight mb-3">95<span className="text-4xl">%</span></p>
              <p className="text-sm uppercase tracking-wider text-white/90 font-medium mt-2 border-t border-gold/30 pt-2">Taxa de Sucesso</p>
            </div>
            <div className="text-center px-6 py-4 border-r border-l border-gold/20 hover:bg-white/5 transition-all duration-300 rounded">
              <p className="text-6xl font-bold text-gold drop-shadow-md tracking-tight mb-3">15<span className="text-4xl">+</span></p>
              <p className="text-sm uppercase tracking-wider text-white/90 font-medium mt-2 border-t border-gold/30 pt-2">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Por que nos escolher */}
      <div className="bg-cream py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gold mb-6"></div>
            <h2 className="text-3xl font-bold text-center text-charcoal">Por que escolher nosso escritório?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
              <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Experiência Comprovada</h3>
              <p className="text-charcoal/80">Mais de 15 anos de atuação exclusiva em licitações públicas, com histórico comprovado de sucesso.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
              <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Atendimento Personalizado</h3>
              <p className="text-charcoal/80">Cada cliente recebe atenção individualizada, com estratégias específicas para suas necessidades.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20">
              <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Equipe Especializada</h3>
              <p className="text-charcoal/80">Profissionais altamente qualificados e constantemente atualizados sobre legislação e jurisprudência.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Depoimentos */}
      <div className="py-24 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gold mb-6"></div>
            <h2 className="text-3xl font-bold text-center text-charcoal">O que dizem nossos clientes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-navy-blue/10 flex items-center justify-center border-2 border-gold">
                  <span className="text-2xl text-gold font-serif">M</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-blue text-lg">Maria Silva</h4>
                  <p className="text-sm text-charcoal/70">Diretora Comercial</p>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-gold/20 font-serif">"</span>
                <p className="text-charcoal/80 relative z-10 italic">Excelente assessoria em todo o processo licitatório. A equipe é muito competente e nos deu total suporte, resultando em grande sucesso em nossas participações.</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-navy-blue/10 flex items-center justify-center border-2 border-gold">
                  <span className="text-2xl text-gold font-serif">J</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-blue text-lg">João Santos</h4>
                  <p className="text-sm text-charcoal/70">Empresário</p>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-gold/20 font-serif">"</span>
                <p className="text-charcoal/80 relative z-10 italic">Profissionais extremamente capacitados que nos ajudaram a resolver questões complexas em licitações. Recomendo fortemente seus serviços.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-cream text-charcoal py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-70"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="w-16 h-1 bg-gold mb-6"></div>
            <h2 className="text-4xl font-bold mb-6">Pronto para ter a melhor assessoria em licitações?</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto font-light">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a ter sucesso em licitações públicas.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button className="bg-navy-blue text-white hover:bg-navy-blue/90 transition-colors duration-300 text-lg px-10 py-6 shadow-lg">
              Agende uma Consulta Gratuita
            </Button>
            <Button className="bg-transparent border-2 border-navy-blue text-navy-blue hover:bg-navy-blue/5 transition-colors duration-300 text-lg px-10 py-6">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511934567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-fade-in"
        aria-label="Contato via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.357 17.357c-.775.775-1.684 1.383-2.692 1.804-1.042.436-2.147.657-3.286.657-2.328 0-4.518-.907-6.17-2.557-1.65-1.65-2.557-3.84-2.557-6.17 0-1.14.221-2.245.657-3.287.42-1.008 1.028-1.917 1.803-2.692.775-.775 1.684-1.383 2.692-1.804C9.846.872 10.951.651 12.09.651c2.328 0 4.518.907 6.17 2.557 1.65 1.65 2.557 3.84 2.557 6.17 0 1.14-.221 2.245-.657 3.287-.42 1.008-1.028 1.917-1.803 2.692z" />
        </svg>
      </a>
      {/* Footer */}
      <footer className="bg-navy-blue text-white py-16 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-70"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Coluna 1 - Sobre */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gold mb-4">Legislar</h3>
              <p className="text-white/80 leading-relaxed">
                Especialistas em licitações públicas e consultoria jurídica empresarial, 
                oferecendo soluções personalizadas e resultados consistentes há mais de 15 anos.
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gold hover:text-gold-light transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gold hover:text-gold-light transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gold hover:text-gold-light transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="text-white/80 hover:text-gold transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-white/80 hover:text-gold transition-colors duration-300">Sobre Nós</a>
                </li>
                <li>
                  <a href="/services" className="text-white/80 hover:text-gold transition-colors duration-300">Serviços</a>
                </li>
                <li>
                  <a href="/blog" className="text-white/80 hover:text-gold transition-colors duration-300">Blog</a>
                </li>
                <li>
                  <a href="/contact" className="text-white/80 hover:text-gold transition-colors duration-300">Contato</a>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Contato */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <p className="flex items-center text-white/80">
                  <svg className="h-5 w-5 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Av. Paulista, 1000 - São Paulo, SP
                </p>
                <p className="flex items-center text-white/80">
                  <svg className="h-5 w-5 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  contato@legislar.com.br
                </p>
                <p className="flex items-center text-white/80">
                  <svg className="h-5 w-5 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  (11) 3456-7890
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>© 2024 Legislar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};