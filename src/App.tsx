import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Home, 
  FileText, 
  BadgeDollarSign, 
  HeartHandshake, 
  Zap, 
  ArrowRight,
  Menu,
  X,
  Phone,
  BarChart3,
  Briefcase,
  Building2,
  Car,
  Clock,
  Star,
  Shield,
  MousePointer2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_URL = 'https://i.ibb.co/HDQnMq9m/Imagem-24-04-2026-a-s-16-00.png';
const WHATSAPP_NUMBER = '5511957991038';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const COMPANY_NAME = 'Assessoria e Consultoria Vida Nova';

const NavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-slate-600 hover:text-green-600 font-semibold transition-colors duration-200 py-2"
  >
    {children}
  </a>
);

const ServiceCard = ({ icon: Icon, title, description, id }: { icon: any; title: string; description: string; id?: string, key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 flex flex-col h-full group"
    id={id || `service-${title.toLowerCase().replace(/\s+/g, '-')}`}
  >
    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">{title}</h3>
    <p className="text-slate-500 mb-8 flex-grow leading-relaxed text-sm md:text-base">{description}</p>
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-green-600 font-bold hover:gap-2 transition-all duration-200"
    >
      Falar sobre este serviço <ArrowRight size={18} className="ml-1" />
    </a>
  </motion.div>
);

const DifferentialItem = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="flex gap-4 items-start p-5 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
    <div className="shrink-0 text-green-600 bg-green-100 p-2.5 rounded-lg">
      <Icon size={22} />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Limpa nome",
      description: "Serviço voltado para quem deseja regularizar pendências financeiras e busca uma situação de crédito saudável.",
      icon: BadgeDollarSign
    },
    {
      title: "Consultoria imobiliária",
      description: "Orientação especializada para garantir segurança e clareza em suas decisões no mercado de imóveis.",
      icon: Home
    },
    {
      title: "Venda de descartáveis",
      description: "Soluções práticas com o melhor custo-benefício para empresas que buscam organização e reposição constante.",
      icon: Building2
    },
    {
      title: "Assessoria PCD",
      description: "Atendimento humano e especializado com total direcionamento em demandas específicas para PCD.",
      icon: HeartHandshake
    },
    {
      title: "Documentação de imóveis",
      description: "Suporte completo para organizar e agilizar processos burocráticos e documentações imobiliárias.",
      icon: FileText
    },
    {
      title: "Representação de seguros",
      description: "Encontramos a solução ideal para proteger o que é mais importante para você e sua família.",
      icon: ShieldCheck
    },
    {
      title: "Representação de consórcios",
      description: "Planejamento estratégico para a conquista de automóveis e outros bens com taxas competitivas.",
      icon: Car
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
      
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt={COMPANY_NAME} 
              className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`}
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavItem href="#inicio">Início</NavItem>
            <NavItem href="#sobre">Sobre</NavItem>
            <NavItem href="#servicos">Serviços</NavItem>
            <NavItem href="#diferenciais">Diferenciais</NavItem>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-700 transition-all duration-200 shadow-md flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-lg" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-xl">
              <NavItem href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</NavItem>
              <NavItem href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</NavItem>
              <NavItem href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</NavItem>
              <NavItem href="#diferenciais" onClick={() => setIsMenuOpen(false)}>Diferenciais</NavItem>
              <div className="pt-6 border-t border-slate-100">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-3"
                >
                  <MessageCircle size={24} />
                  Falar no WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Modern Clean Hero Section (No large images) */}
        <section id="inicio" className="relative pt-32 pb-16 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 -z-10 w-full md:w-2/3 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(22,163,74,0.05)_0%,rgba(255,255,255,1)_60%)]" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-green-50 text-green-700 font-bold text-xs uppercase tracking-wider mb-8 border border-green-100">
                   Assessoria Especializada & Consultoria
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                  Soluções com <span className="text-green-600">clareza e segurança</span> para o seu dia a dia.
                </h1>
                <p className="text-lg md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Ajudamos pessoas e empresas a resolverem demandas importantes com acompanhamento humano e direcionamento profissional.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-10 py-5 rounded-full font-extrabold text-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-green-200 flex items-center justify-center gap-3 group"
                  >
                    <span>Falar com um atendente</span>
                    <MessageCircle size={24} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#servicos"
                    className="bg-slate-900 text-white px-10 py-5 rounded-full font-extrabold text-xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center"
                  >
                    Nossos serviços
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Subtle Abstract elements */}
          <div className="absolute left-10 top-40 w-24 h-24 bg-green-500/10 blur-3xl rounded-full" />
          <div className="absolute right-10 bottom-20 w-32 h-32 bg-slate-900/5 blur-3xl rounded-full" />
        </section>

        {/* Dynamic About Section (Iconic/Typography Focus) */}
        <section id="sobre" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <ShieldCheck className="text-green-600 mb-4" size={40} />
                    <h4 className="font-bold text-slate-900">Segurança</h4>
                    <p className="text-slate-500 text-sm mt-2">Processos 100% regulares.</p>
                  </div>
                  <div className="bg-slate-900 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center translate-x-4">
                    <Zap className="text-green-400 mb-4" size={40} />
                    <h4 className="font-bold text-white">Agilidade</h4>
                    <p className="text-slate-400 text-sm mt-2">Foco em resolução rápida.</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center -translate-x-4">
                    <Users className="text-green-600 mb-4" size={40} />
                    <h4 className="font-bold text-slate-900">Humano</h4>
                    <p className="text-slate-500 text-sm mt-2">Você fala com reais consultores.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <BarChart3 className="text-green-600 mb-4" size={40} />
                    <h4 className="font-bold text-slate-900">Resultados</h4>
                    <p className="text-slate-500 text-sm mt-2">Orientação para o sucesso.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-green-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">A Vida Nova Assessoria</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Atendimento personalizado e soluções práticas para o seu progresso.
                </h3>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                  <p>
                    A <strong>Assessoria e Consultoria Vida Nova</strong> nasceu com um propósito claro: oferecer suporte real para situações que travam o dia a dia de pessoas e empresas.
                  </p>
                  <p>
                    Entendemos que burocracia e processos complexos exigem um atendimento próximo e uma linguagem clara. Por isso, trabalhamos com total transparência para garantir que você tome as melhores decisões.
                  </p>
                </div>
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 />
                  </div>
                  <p className="text-slate-700 font-medium italic">
                    "Ajudando você a organizar seu presente para conquistar um futuro melhor."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-green-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Nossas Soluções</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Como podemos te ajudar?</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                Cada serviço é focado em trazer agilidade e segurança jurídica e financeira para os seus objetivos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
              
              {/* Convergent CTA Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white flex flex-col justify-center items-center text-center group border border-green-500/20"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 italic">Precisa de outra solução?</h3>
                <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                  Nossa equipe está preparada para entender sua demanda específica.
                </p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-slate-900 py-4 rounded-xl font-black text-xl hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg"
                >
                  Falar agora
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section id="diferenciais" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-green-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Nossos Diferenciais</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-10 leading-tight">
                  Excelência no atendimento com foco total em você.
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <DifferentialItem 
                    icon={Users} 
                    title="Atendimento Humano" 
                    description="Esqueça robôs. Aqui você fala diretamente com nossa equipe especializada." 
                  />
                  <DifferentialItem 
                    icon={Zap} 
                    title="Contato Ágil" 
                    description="Prioridade em respostas rápidas e suporte eficiente pelo WhatsApp." 
                  />
                  <DifferentialItem 
                    icon={ShieldCheck} 
                    title="Transparência" 
                    description="Clareza total em cada etapa do processo e soluções personalizadas." 
                  />
                  <DifferentialItem 
                    icon={Briefcase} 
                    title="PF e Empresas" 
                    description="Estrutura para atender cidadãos e demandas de negócios corporativos." 
                  />
                  <DifferentialItem 
                    icon={HeartHandshake} 
                    title="Acolhimento" 
                    description="Mais que consultoria, oferecemos suporte e direcionamento humano." 
                  />
                  <DifferentialItem 
                    icon={MousePointer2} 
                    title="Simplicidade" 
                    description="Processos focados em descomplicar sua rotina burocrática." 
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 relative"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-600 rotate-12 rounded-2xl hidden md:block" />
                <h4 className="text-2xl font-bold text-slate-900 mb-8 border-b border-green-100 pb-4">Destrave seu progresso hoje</h4>
                <div className="space-y-6">
                  <div className="p-6 bg-green-50 rounded-2xl group transition-all hover:bg-green-100">
                    <p className="text-green-900 leading-relaxed font-semibold">
                      Muitas vezes, planos e decisões travam por falta de orientação clara. Estamos aqui para dar segurança às suas escolhas.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Seja para regularizar seu crédito ou planejar um consórcio, o acompanhamento próximo faz toda a diferença nos resultados.
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-green-600 transition-all group"
                  >
                    <span>Iniciar agora no WhatsApp</span>
                    <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Oportunidade de Mudança Section (High Contrast / Dark Blue) */}
        <section className="py-28 relative overflow-hidden bg-[#0A192F]" id="contato">
          <div className="absolute inset-0 bg-[#0A192F] -z-10" />
          <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none hidden lg:block">
            <img src={LOGO_URL} alt="Logo Bg" className="h-96 grayscale" />
          </div>
          
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-block py-2 px-6 rounded-full bg-green-600 text-white font-black text-xs uppercase tracking-[0.2em] mb-10 shadow-lg shadow-green-900/40">
                Oportunidade de Novos Começos
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10 leading-tight">
                Dê um novo passo <span className="text-green-500">na sua vida com</span> segurança total.
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-14 max-w-2xl mx-auto leading-relaxed">
                Chega de dúvidas e pendências. Fale com um atendente humano agora e receba a orientação técnica que você precisa.
              </p>
              <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-4 bg-green-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-2xl shadow-green-900/50"
                >
                  <MessageCircle size={32} />
                  Conversar com um humano
                </a>
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                <span className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Atendimento Diário</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Foco em Resultados</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Suporte Especializado</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer (Dark Blue) */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src={LOGO_URL} 
                  alt={COMPANY_NAME} 
                  className="h-16 brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-lg text-slate-400 mb-10 max-w-sm leading-relaxed italic">
                "Nosso compromisso é transformar complexidade em soluções seguras para você e sua empresa."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-bold uppercase tracking-widest mb-1">WhatsApp de Contato</p>
                  <p className="text-xl font-bold text-white">(11) 95799-1038</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Navegação</h4>
              <ul className="space-y-4">
                <li><a href="#inicio" className="hover:text-green-500 transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-green-500 transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="hover:text-green-500 transition-colors">Nossos Serviços</a></li>
                <li><a href="#diferenciais" className="hover:text-green-500 transition-colors">Diferenciais</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Atendimento</h4>
              <p className="mb-8 leading-relaxed">
                Unidade Digital e Presencial<br />
                São Paulo - SP
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-bold bg-green-600 hover:bg-green-700 px-7 py-3.5 rounded-xl transition-all duration-300 w-full"
              >
                Chamar Agora <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <p>© {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.</p>
            <div className="flex gap-10">
              <span className="hover:text-white cursor-pointer">Privacidade</span>
              <span className="hover:text-white cursor-pointer">Termos</span>
              <a href={WHATSAPP_LINK} className="text-green-600 hover:text-green-400 font-bold">Falar com Consultor</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Green WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce cursor-pointer flex items-center justify-center border-t border-white/20"
        aria-label="Atendimento via WhatsApp"
      >
        <MessageCircle size={36} />
      </a>

    </div>
  );
}
