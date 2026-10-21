import React from 'react';
import { FolderGit2, Globe, Mail, ExternalLink, Code2, Briefcase, User, Sparkles } from 'lucide-react';

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">

            {/* Navegação */}
            <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Wellington
                    </span>
                    <nav className="flex gap-6 text-sm text-slate-400">
                        <a href="#sobre" className="hover:text-white transition">Sobre</a>
                        <a href="#projetos" className="hover:text-white transition">Projetos</a>
                        <a href="#contacto" className="hover:text-white transition">Contacto</a>
                    </nav>
                </div>  
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-start gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                    <Sparkles className="w-4 h-4" /> Bem-vindo ao meu portfólio
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Olá, sou o <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Wellington</span>.
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                    Desenvolvedor focado em criar soluções digitais modernas, funcionais e focadas na melhor experiência do utilizador.
                </p>
                <div className="flex gap-4 pt-2">
                    <a href="#projetos" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition text-white">
                        Ver Projetos
                    </a>
                    <a href="https://github.com/wellington-pm" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700">
                        <FolderGit2 className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700">
                        <Globe className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Sobre mim */}
            <section id="sobre" className="py-16 px-6 bg-slate-800/50 border-y border-slate-800">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                        <User className="text-blue-400" /> Sobre Mim
                    </h2>
                    <p className="text-slate-300 leading-relaxed max-w-3xl">
                        Tenho paixão por tecnologia, desenvolvimento web e produto. Atuo no ecossistema de tecnologia criando aplicações escaláveis, combinando código limpo, boa arquitetura e design intuitivo.
                    </p>
                </div>
            </section>

            {/* Projetos */}
            <section id="projetos" className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
                    <Code2 className="text-blue-400" /> Projetos em Destaque
                </h2>
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Card Projeto 1 */}
                    <div className="p-6 bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-slate-600 transition group">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">Meu Portfólio React</h3>
                        <p className="text-slate-400 text-sm mb-4">
                            Portfólio moderno construído com React, Vite, Tailwind CSS e alojado gratuitamente via GitHub Actions e GitHub Pages.
                        </p>
                        <div className="flex gap-2 mb-6 text-xs">
                            <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">React</span>
                            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Tailwind</span>
                            <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Vite</span>
                        </div>
                        <a href="#" className="inline-flex items-center gap-1 text-sm text-blue-400 hover:underline">
                            Ver Código <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Card Projeto 2 */}
                    <div className="p-6 bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-slate-600 transition group">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">Projeto Futuro</h3>
                        <p className="text-slate-400 text-sm mb-4">
                            Descrição do seu próximo projeto, destacando os desafios técnicos resolvidos e o impacto gerado.
                        </p>
                        <div className="flex gap-2 mb-6 text-xs">
                            <span className="px-2.5 py-1 rounded bg-slate-700 text-slate-300">TypeScript</span>
                            <span className="px-2.5 py-1 rounded bg-slate-700 text-slate-300">Node.js</span>
                        </div>
                        <a href="#" className="inline-flex items-center gap-1 text-sm text-blue-400 hover:underline">
                            Ver Mais <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </section>

            {/* Contacto */}
            <section id="contacto" className="py-16 px-6 bg-slate-800/50 border-t border-slate-800">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-bold">Vamos conversar?</h2>
                    <p className="text-slate-400 max-w-md">
                        Estou sempre aberto a novos projetos, colaborações ou oportunidades no mercado de tecnologia.
                    </p>
                    <a href="mailto:seuemail@exemplo.com" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition text-white mt-2">
                        <Mail className="w-5 h-5" /> Enviar Mensagem
                    </a>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="py-6 border-t border-slate-800 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Wellington. Criado com React & Tailwind CSS.
            </footer>

        </div>
    );
}