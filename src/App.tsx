/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Hammer,
  Truck,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Quote,
  Award,
  Users,
  BadgePercent,
  MapPinned,
  Facebook,
  Instagram
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Entrance
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      })
        .from('.hero-sub', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-cta', {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)'
        }, '-=0.4');

      // Scroll Reveals
      gsap.utils.toArray('.reveal').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Bento Grid Animation
      gsap.fromTo('.bento-item',
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: bentoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Partnership Image Animation (Zoom, Fade, Grayscale)
      gsap.to('.partnership-img', {
        scale: 1.1,
        filter: 'grayscale(10%)',
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-brand-blue selection:bg-brand-yellow selection:text-brand-blue">
      {/* HEADER */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 md:px-12 flex items-center justify-between"
      >
        <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="/logo.jpg"
            alt="Casa Brasil Logo"
            className="h-10 w-10 rounded-lg object-cover border border-white/10"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col leading-none -space-y-0.5">
            <span className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white whitespace-nowrap">
              CASA <span className="text-brand-yellow">BRASIL</span>
            </span>
            <span className="font-display text-[8px] md:text-[10px] text-white tracking-wider whitespace-nowrap">
              Materiais para Construção
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/80">
          <a href="#home" className="hover:text-brand-yellow transition-colors">Início</a>
          <a href="#diferenciais" className="hover:text-brand-yellow transition-colors">Diferenciais</a>
          <a href="#sobre" className="hover:text-brand-yellow transition-colors">Sobre Nós</a>
          {/* <a href="#servicos" className="hover:text-brand-yellow transition-colors">Serviços</a> */}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5512974087481"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
          >
            ORÇAMENTO
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white hover:text-brand-yellow transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-blue-dark/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-8 pt-20">
          <nav className="flex flex-col items-center gap-8 text-xl font-bold uppercase tracking-widest text-white">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-yellow transition-colors">Início</a>
            <a href="#diferenciais" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-yellow transition-colors">Diferenciais</a>
            <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-yellow transition-colors">Sobre Nós</a>
            {/* <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-yellow transition-colors">Serviços</a> */}
          </nav>
          <a href="https://wa.me/5512974087481" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue px-8 py-4 rounded-full text-lg font-black transition-all hover:scale-105 active:scale-95">
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Construção de Luxo"
            className="w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/60 to-brand-blue" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 reveal">
            <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/80">
              Aparecida - SP
            </span>
          </div>

          <h1 className="hero-title font-display text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-6 md:mb-8 text-white">
            DO BÁSICO AO <br />
            <span className="text-brand-yellow">ACABAMENTO</span>
          </h1>

          <p className="hero-sub text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Construa seus sonhos com quem faz parte da história de Aparecida há mais de 30 anos. Qualidade premium e preço imbatível para sua obra.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="https://wa.me/5512974087481"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative bg-brand-yellow text-brand-blue px-6 py-4 sm:px-10 sm:py-5 rounded-full font-black text-base sm:text-lg flex items-center justify-center gap-3 overflow-hidden transition-all hover:pr-10 sm:hover:pr-12"
            >
              <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
              <ArrowRight className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="https://www.instagram.com/p/CoqBhWFMYzY/"
              target="_blank"
              rel="noopener noreferrer">
              <button className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 rounded-full glass font-bold text-base sm:text-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all text-white cursor-pointer">
                Conheça nossa loja
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-12 border-y border-white/10 bg-brand-blue-dark overflow-hidden">
        <div className="marquee-content flex gap-12 md:gap-24 items-center">
          {[1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <span className="text-2xl md:text-4xl font-display font-black text-white/20 uppercase tracking-tighter">PREÇO IMBATÍVEL</span>
              <span className="w-3 h-3 bg-brand-yellow rounded-full" />
              <span className="text-2xl md:text-4xl font-display font-black text-white/20 uppercase tracking-tighter">ENTREGA RÁPIDA</span>
              <span className="w-3 h-3 bg-white rounded-full" />
              <span className="text-2xl md:text-4xl font-display font-black text-white/20 uppercase tracking-tighter">30 ANOS DE TRADIÇÃO</span>
              <span className="w-3 h-3 bg-brand-yellow rounded-full" />
              <span className="text-2xl md:text-4xl font-display font-black text-white/20 uppercase tracking-tighter">QUALIDADE PREMIUM</span>
              <span className="w-3 h-3 bg-white rounded-full" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* DIFERENCIAIS (EXPANDED BENTO GRID) */}
      <section id="diferenciais" className="py-24 px-6 md:px-12 bg-brand-blue" ref={bentoRef}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4 md:mb-6 reveal text-white">
                POR QUE ESCOLHER A <br />
                <span className="text-brand-yellow">CASA BRASIL?</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg reveal">
                Combinamos tradição familiar com a eficiência moderna para garantir que sua obra nunca pare.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Item - Logistics */}
            <div className="bento-item md:col-span-8 bento-card group bg-white/5">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <Truck size={120} className="text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-blue-light/20 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                  <Truck className="text-brand-yellow w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 text-white">Logística de Elite</h3>
                <p className="text-white/80 text-lg max-w-md">
                  Entregamos em Aparecida, Guaratinguetá, Roseira, Potim, Cunha e Lorena com frota própria e agilidade recorde.
                </p>
              </div>
            </div>

            {/* Bento Item - Location */}
            <div className="bento-item md:col-span-4 bento-card bg-brand-blue-dark/40 border-white/20">
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-yellow/30">
                <MapPinned className="text-brand-yellow w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Localização Central</h3>
              <p className="text-white/80">
                Estamos no coração de Aparecida, no centro da cidade, facilitando seu acesso e retirada.
              </p>
            </div>

            {/* Bento Item - Prices */}
            <div className="bento-item md:col-span-4 bento-card bg-brand-yellow/10 border-brand-yellow/30">
              <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-yellow/40">
                <BadgePercent className="text-brand-yellow w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Preços Imbatíveis</h3>
              <p className="text-white/80">
                Ofertas imperdíveis em todos os setores, do básico ao acabamento fino.
              </p>
            </div>

            {/* Bento Item - Family Service */}
            <div className="bento-item md:col-span-4 bento-card bg-white/5 border-white/10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <Users className="text-brand-yellow w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Atendimento Familiar</h3>
              <p className="text-white/80">
                Mais de 30 anos de história tratando cada cliente como parte da nossa família.
              </p>
            </div>

            {/* Bento Item - Quality */}
            <div className="bento-item md:col-span-4 bento-card bg-brand-blue-light/20 border-white/20">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <Award className="text-brand-yellow w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Produtos Premium</h3>
              <p className="text-white/80">
                Nossa experiência nos proporciona trabalhar com as melhores marcas e com procedência garantida.
              </p>
            </div>

            {/* Wide Bento Item - Price Imbatível */}
            <div className="bento-item md:col-span-12 bento-card bg-gradient-to-r from-brand-yellow/20 to-transparent border-brand-yellow/20">
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Redes Sociais</h3>
                  <p className="text-white/70 text-base md:text-lg">
                    Siga nossas redes sociais para ficar por dentro das novidades e promoções.
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/casabrasilmateriais_aparecida/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 hover:bg-brand-yellow hover:text-brand-blue hover:scale-110 transition-all duration-300 text-white"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="https://www.facebook.com/casabrasilmateriaisparaconstrucao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 hover:bg-brand-yellow hover:text-brand-blue hover:scale-110 transition-all duration-300 text-white"
                  >
                    <Facebook size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE / SERVIÇOS */}
      <section id="sobre" className="py-24 bg-brand-blue-dark relative overflow-hidden" ref={aboutRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
                <img
                  src="/img.jpg"
                  alt="Nossa História"
                  className="partnership-img w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-blue-dark/95 backdrop-blur-2xl p-8 rounded-[2rem] hidden md:flex flex-col gap-4 max-w-xs border border-brand-yellow/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center border border-brand-yellow/20">
                  <Users className="text-brand-yellow w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-yellow font-display font-bold text-xl mb-2">Empresa Familiar</h4>
                  <p className="text-white/90 text-sm leading-relaxed">Mais de três décadas dedicadas à construção da nossa abençoada cidade.</p>
                </div>
              </div>
            </div>

            <div className="reveal">
              <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Nossa Essência</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 text-white">
                TRADIÇÃO QUE <br />
                <span className="text-white/40">CONSTRÓI O FUTURO</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                A Casa Brasil não é apenas uma loja de materiais. Somos parte da fundação de Aparecida. Com fé e trabalho duro, transformamos cada tijolo em um lar seguro para nossos clientes.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { title: 'Atendimento Familiar', desc: 'Consultores especialistas que entendem sua necessidade.' },
                  { title: 'Variedade Completa', desc: 'Do alicerce ao telhado, temos tudo o que você precisa.' },
                  { title: 'Compromisso com a Fé', desc: 'Trabalhamos com ética e dedicação total à nossa comunidade.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-yellow flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://www.instagram.com/p/CoqBhWFMYzY/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-base md:text-lg font-bold text-white w-full max-w-sm mt-4"
              >
                <span className="border-b-2 border-brand-yellow pb-1 group-hover:text-brand-yellow transition-colors whitespace-nowrap">CONHEÇA NOSSA LOJA</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 bg-brand-blue">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 reveal text-white">
              O QUE DIZEM <br />
              <span className="text-brand-yellow">NOSSOS CLIENTES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ricardo Silva', role: 'Engenheiro Civil', text: 'A Casa Brasil é minha parceira número 1. Entrega rápida e materiais de primeira linha.' },
              { name: 'Vitor Campos', role: 'Cliente', text: 'A melhor loja da cidade e um ótimo atendimento!! 👏👏👏' },
              { name: 'João Paulo', role: 'Mestre de Obras', text: 'Trabalho com eles há 15 anos. Nunca me deixaram na mão. A melhor de Aparecida e região.' }
            ].map((testi, idx) => (
              <div key={idx} className="glass p-10 rounded-[2rem] relative reveal">
                <Quote className="absolute top-8 right-8 text-white/10 w-12 h-12" />
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-brand-yellow text-brand-yellow" />)}
                </div>
                <p className="text-white/80 italic mb-8 text-lg">"{testi.text}"</p>
                <div>
                  <p className="font-bold text-white">{testi.name}</p>
                  <p className="text-brand-yellow text-xs font-bold tracking-widest uppercase">{testi.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-brand-blue-dark p-8 md:p-24 text-center border border-brand-yellow/30 reveal">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>

            <div className="relative z-10 flex justify-center mb-8">
              <img
                src="/logo.jpg"
                alt="Casa Brasil Logo"
                className="h-20 w-20 rounded-2xl shadow-2xl border border-white/20"
                referrerPolicy="no-referrer"
              />
            </div>

            <h2 className="relative z-10 text-4xl md:text-7xl font-display font-black tracking-tighter mb-8 text-white">
              PRONTO PARA <br />
              <span className="text-brand-yellow">CONSTRUIR?</span>
            </h2>
            <p className="relative z-10 text-white/80 text-xl max-w-2xl mx-auto mb-12">
              Faça seu orçamento sem compromisso agora mesmo e descubra por que somos a escolha número 1 do Vale do Paraíba.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://wa.me/5512974087481"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-yellow text-brand-blue px-8 py-5 md:px-12 md:py-6 rounded-full font-black text-lg md:text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                WHATSAPP
              </a>
              <div className="text-white/70 font-bold text-xs md:text-sm text-center sm:text-left">
                <span className="text-brand-yellow font-bold tracking-wider uppercase text-[10px] md:text-xs block mb-1">Horário de Funcionamento</span>
                Segunda a Sexta das 07h às 18h <br />
                Sábado das 07h às 13h
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10 bg-brand-blue-dark">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Casa Brasil Logo"
                className="h-8 w-8 rounded-md object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col leading-none -space-y-0.5">
                <span className="font-display font-bold text-lg tracking-tighter text-white whitespace-nowrap">
                  CASA <span className="text-brand-yellow">BRASIL</span>
                </span>
                <span className="font-display text-[7px] md:text-[9px] text-white tracking-wider whitespace-nowrap">
                  Materiais para Construção
                </span>
              </div>
            </div>

            <div className="text-white/40 text-[10px] md:text-xs font-medium tracking-widest uppercase text-center md:text-left">
              © 2026 Casa Brasil - Aparecida. Todos os direitos reservados.
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/casabrasilmateriais_aparecida/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-yellow transition-colors"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/casabrasilmateriaisparaconstrucao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-yellow transition-colors"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Valério+Francisco,+n+23,+Centro+Aparecida+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-yellow transition-colors"
                title="Rua Valério Francisco, n 23, Centro Aparecida - SP"
              >
                <MapPin size={20} />
              </a>
              <a
                href="tel:1231058740"
                className="text-white/60 hover:text-brand-yellow transition-colors"
                title="(12) 3105-8740"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://wa.me/5512974087481"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-yellow transition-colors"
                title="WhatsApp: +55 12 3105-8740"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
