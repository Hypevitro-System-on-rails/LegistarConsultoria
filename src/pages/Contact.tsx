import React from "react";
import { Button } from "../components/ui/button";

export const Contact = () => {
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
              Fale Conosco
            </div>
            <div className="w-12 h-1 bg-gold ml-5 opacity-90"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-white mb-8">Entre em Contato</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Estamos prontos para ajudar sua empresa a alcançar sucesso em licitações públicas.
              Entre em contato conosco para uma consulta especializada.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-cream relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold opacity-20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div className="bg-white p-12 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-navy-blue mb-10 text-center">Envie sua Mensagem</h2>
              <form className="space-y-8 w-full max-w-xl">
                <div>
                  <label className="block text-base font-semibold text-charcoal mb-3">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    placeholder="Digite seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-base font-semibold text-charcoal mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-charcoal mb-3">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label className="block text-base font-semibold text-charcoal mb-3">
                    Mensagem
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    rows={4}
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                
                <Button className="w-full bg-navy-blue text-white hover:bg-navy-blue/90 py-6 text-lg">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="bg-white p-12 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gold/20 flex flex-col">
              <h2 className="text-2xl font-semibold text-navy-blue mb-8 text-center">Informações de Contato</h2>
              
              <div className="flex-grow space-y-8 mb-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-navy-blue mb-2">Telefone</h3>
                    <p className="text-charcoal/80">(11) 1234-5678</p>
                    <p className="text-charcoal/80">(11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-navy-blue mb-2">Email</h3>
                    <p className="text-charcoal/80">contato@escritorio.com</p>
                    <p className="text-charcoal/80">comercial@escritorio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-navy-blue mb-2">Endereço</h3>
                    <p className="text-charcoal/80">
                      Av. Paulista, 1000<br />
                      Bela Vista<br />
                      São Paulo - SP<br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0998641325593!2d-46.65390492359619!3d-23.565635178502677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1706634547317!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};