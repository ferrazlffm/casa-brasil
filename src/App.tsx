/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Hammer, 
  Truck, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Menu, 
  X,
  Star,
  Quote,
  Award,
  Users,
  BadgePercent,
  MapPinned
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
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
        <div className="flex items-center gap-3">
          <img 
            src="https://instagram.fguj2-1.fna.fbcdn.net/v/t51.2885-19/416085363_686730583528904_1869603727862051298_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45MjEuYzIifQ&_nc_ht=instagram.fguj2-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QHFvA3Cr8XMQtBIsGTX9u2IDbuH3NGGUwoxAzjpAAyd4JkBLQHFBrOMn4JD32dB2WyWzMH3uN6DN9Y8k38w-zUp&_nc_ohc=J8cqJ35Zl-8Q7kNvwFLtdfW&_nc_gid=OrI8h41R4uXYO3EAOSjLXg&edm=ADDLYBMBAAAA&ccb=7-5&oh=00_AfxCyxQJUAYp4ttIcvPo_dlosUqSRciFAHdjZf06pobyRQ&oe=69B0FB42&_nc_sid=56bdfd" 
            alt="Casa Brasil Logo" 
            className="h-10 w-10 rounded-lg object-cover border border-white/10"
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-bold text-xl tracking-tighter text-white">
            CASA <span className="text-brand-yellow">BRASIL</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/80">
          <a href="#home" className="hover:text-brand-yellow transition-colors">Início</a>
          <a href="#diferenciais" className="hover:text-brand-yellow transition-colors">Diferenciais</a>
          <a href="#sobre" className="hover:text-brand-yellow transition-colors">Sobre Nós</a>
          <a href="#servicos" className="hover:text-brand-yellow transition-colors">Serviços</a>
        </nav>

        <button className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95">
          ORÇAMENTO
        </button>
      </header>

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
              Aparecida - SP | Capital da Fé
            </span>
          </div>
          
          <h1 className="hero-title font-display text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8 text-white">
            DO BÁSICO AO <br />
            <span className="text-brand-yellow">ACABAMENTO</span>
          </h1>
          
          <p className="hero-sub text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Construa seus sonhos com quem faz parte da história de Aparecida há mais de 30 anos. Qualidade premium e preço imbatível para sua obra.
          </p>
          
          <div className="hero-cta flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="group relative bg-brand-yellow text-brand-blue px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
              <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-10 py-5 rounded-full glass font-bold text-lg hover:bg-white/10 transition-all text-white">
              VER OFERTAS
            </button>
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 reveal text-white">
                POR QUE ESCOLHER A <br />
                <span className="text-brand-yellow">CASA BRASIL?</span>
              </h2>
              <p className="text-white/70 text-lg reveal">
                Combinamos tradição familiar com a eficiência moderna para garantir que sua obra nunca pare.
              </p>
            </div>
            <div className="reveal">
              <div className="text-8xl font-display font-black text-white/10 leading-none">01</div>
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
                  Entregamos em Aparecida, Guaratinguetá, Roseira e Lorena com frota própria e agilidade recorde.
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
                Estamos no coração de Aparecida (Rua Valério Francisco, 23), facilitando seu acesso e retirada.
              </p>
            </div>

            {/* Bento Item - Prices */}
            <div className="bento-item md:col-span-4 bento-card bg-brand-yellow/10 border-brand-yellow/30">
              <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-yellow/40">
                <BadgePercent className="text-brand-yellow w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Preços Excelentes</h3>
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
                Trabalhamos apenas com marcas de extrema qualidade e procedência garantida.
              </p>
            </div>

            {/* Wide Bento Item - Price Imbatível */}
            <div className="bento-item md:col-span-12 bento-card bg-gradient-to-r from-brand-yellow/20 to-transparent border-brand-yellow/20">
              <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-3xl font-display font-bold mb-4 text-white">Negociação Direta</h3>
                  <p className="text-white/70 text-lg">
                    Compramos em grandes volumes para garantir o melhor preço final do Vale do Paraíba para você.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="text-center px-8 py-4 glass rounded-2xl">
                    <div className="text-4xl font-black text-brand-yellow">30+</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/60">Anos de Fé</div>
                  </div>
                  <div className="text-center px-8 py-4 glass rounded-2xl">
                    <div className="text-4xl font-black text-brand-yellow">10k+</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/60">Obras Realizadas</div>
                  </div>
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
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
                  alt="Nossa História"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl hidden md:block max-w-xs">
              <img 
                src="https://instagram.fguj2-1.fna.fbcdn.net/v/t51.2885-19/416085363_686730583528904_1869603727862051298_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45MjEuYzIifQ&_nc_ht=instagram.fguj2-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QHFvA3Cr8XMQtBIsGTX9u2IDbuH3NGGUwoxAzjpAAyd4JkBLQHFBrOMn4JD32dB2WyWzMH3uN6DN9Y8k38w-zUp&_nc_ohc=J8cqJ35Zl-8Q7kNvwFLtdfW&_nc_gid=OrI8h41R4uXYO3EAOSjLXg&edm=ADDLYBMBAAAA&ccb=7-5&oh=00_AfxCyxQJUAYp4ttIcvPo_dlosUqSRciFAHdjZf06pobyRQ&oe=69B0FB42&_nc_sid=56bdfd" 
                alt="Casa Brasil Logo" 
                className="h-12 w-12 rounded-xl mb-4 border border-white/10"
                referrerPolicy="no-referrer"
              />
                <p className="text-brand-yellow font-display font-bold text-xl mb-2">Empresa Familiar</p>
                <p className="text-white/80 text-sm">Mais de três décadas dedicadas à construção da nossa abençoada cidade.</p>
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

              <button className="flex items-center gap-4 group text-lg font-bold text-white">
                <span className="border-b-2 border-brand-yellow pb-1 group-hover:text-brand-yellow transition-colors">CONHEÇA NOSSA HISTÓRIA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
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
              { name: 'Maria Oliveira', role: 'Proprietária', text: 'Reformar minha casa foi muito mais tranquilo com o atendimento deles. Preço justo e muita paciência.' },
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
          <div className="relative rounded-[3rem] overflow-hidden bg-brand-blue-dark p-12 md:p-24 text-center border border-brand-yellow/30 reveal">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10 flex justify-center mb-8">
              <img 
                src="https://instagram.fguj2-1.fna.fbcdn.net/v/t51.2885-19/416085363_686730583528904_1869603727862051298_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45MjEuYzIifQ&_nc_ht=instagram.fguj2-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QHFvA3Cr8XMQtBIsGTX9u2IDbuH3NGGUwoxAzjpAAyd4JkBLQHFBrOMn4JD32dB2WyWzMH3uN6DN9Y8k38w-zUp&_nc_ohc=J8cqJ35Zl-8Q7kNvwFLtdfW&_nc_gid=OrI8h41R4uXYO3EAOSjLXg&edm=ADDLYBMBAAAA&ccb=7-5&oh=00_AfxCyxQJUAYp4ttIcvPo_dlosUqSRciFAHdjZf06pobyRQ&oe=69B0FB42&_nc_sid=56bdfd" 
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
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/5512999999999" 
                className="w-full md:w-auto bg-brand-yellow text-brand-blue px-12 py-6 rounded-full font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
              >
                <Phone className="w-6 h-6" />
                WHATSAPP
              </a>
              <div className="text-white/70 font-bold text-sm">
                Rua Valério Francisco, n 23, Centro <br />
                Aparecida - SP
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
                src="https://instagram.fguj2-1.fna.fbcdn.net/v/t51.2885-19/416085363_686730583528904_1869603727862051298_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45MjEuYzIifQ&_nc_ht=instagram.fguj2-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QHFvA3Cr8XMQtBIsGTX9u2IDbuH3NGGUwoxAzjpAAyd4JkBLQHFBrOMn4JD32dB2WyWzMH3uN6DN9Y8k38w-zUp&_nc_ohc=J8cqJ35Zl-8Q7kNvwFLtdfW&_nc_gid=OrI8h41R4uXYO3EAOSjLXg&edm=ADDLYBMBAAAA&ccb=7-5&oh=00_AfxCyxQJUAYp4ttIcvPo_dlosUqSRciFAHdjZf06pobyRQ&oe=69B0FB42&_nc_sid=56bdfd" 
                alt="Casa Brasil Logo" 
                className="h-8 w-8 rounded-md object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-lg tracking-tighter text-white">
                CASA <span className="text-brand-yellow">BRASIL</span>
              </span>
            </div>
            
            <div className="text-white/40 text-xs font-medium tracking-widest uppercase">
              © 2026 Casa Brasil Materiais para Construção. Todos os direitos reservados.
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-brand-yellow transition-colors"><MapPin size={20} /></a>
              <a href="#" className="text-white/60 hover:text-brand-yellow transition-colors"><Phone size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
