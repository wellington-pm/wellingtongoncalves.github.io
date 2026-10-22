import React, { useState } from 'react';
import {
    Mail,
    ExternalLink,
    Code2,
    User,
    Sparkles,
    BarChart3,
    Layers,
    ShieldCheck,
    BrainCircuit,
    BookOpen,
    ArrowUpRight,
    ChevronRight,
    TrendingUp,
    Target,
    CalendarDays,
    GraduationCap
} from 'lucide-react';

// SVG Oficial do GitHub
const GithubIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

// SVG Oficial do LinkedIn
const LinkedinIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
);

// SVG Oficial do Medium
const MediumIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
);

export default function App() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 'platform-kyc',
            category: 'platform',
            title: 'Otimização de Onboarding, KYC & Pagamentos',
            company: 'Grupo Aposta Ganha',
            role: 'Product Manager (Platform)',
            metrics: '+Conversão no Funil | Certificação GLI-19 & GLI-33',
            description: 'Liderança da squad de Plataforma reestruturando a jornada de cadastro, verificação de identidade (KYC), depósitos via Pix e saques em conformidade com as novas regulações do mercado brasileiro.',
            tags: ['Onboarding', 'KYC', 'Pix', 'Compliance', 'UX Research'],
            link: '#'
        },
        {
            id: 'responsible-gaming',
            category: 'platform',
            title: 'Módulo de Jogo Responsável & Design de Proteção',
            company: 'Grupo Aposta Ganha',
            role: 'Product Manager',
            metrics: 'Atendimento às exigências do Ministério da Fazenda',
            description: 'Concepção de ferramentas e limites autoconfiguráveis de depósitos, tempo e autoexclusão, unindo conformidade regulatória com UX não intrusiva.',
            tags: ['Responsible Gaming', 'Regulamentação', 'Design System', 'CRM Integration'],
            link: '#'
        },
        {
            id: 'okr-efficiency',
            category: 'data',
            title: 'Gestão de Backlog & Eficiência Operacional',
            company: 'Marketplace Operations',
            role: 'Product Owner',
            metrics: '+8% Entrega no Prazo YoY | +60% Redução TMR QoQ',
            description: 'Implementação de framework de priorização orientado a dados, mapeamento de processos e redução do tempo médio de resolução (TMR) em fluxos operacionais.',
            tags: ['Data Analytics', 'Scrum/Kanban', 'SQL', 'Power BI'],
            link: '#'
        },
        {
            id: 'medium-article-1',
            category: 'articles',
            title: 'Regulamentação de iGaming & Design de Jogo Responsável no Brasil',
            company: 'Medium Article',
            role: 'Autor',
            metrics: 'Thought Leadership',
            description: 'Análise aprofundada das melhores práticas de UX, retenção e conformidade técnica no novo cenário regulatório brasileiro.',
            tags: ['Medium', 'Artigo', 'iGaming', 'Regulação'],
            link: 'https://medium.com'
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">

            {/* Header */}
            <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800/80">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                        Wellington Gonçalves
                    </a>
                    <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                        <a href="#pilares" className="hover:text-blue-400 transition">Pilares</a>
                        <a href="#projetos" className="hover:text-blue-400 transition">Case Studies</a>
                        <a href="#sobre" className="hover:text-blue-400 transition">Sobre Mim</a>
                    </nav>
                    <a href="#contacto" className="text-xs md:text-sm px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-600 hover:text-white transition">
                        Contato & Parcerias
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-36 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start gap-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> Product Manager • Platform & Core Experience
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] max-w-4xl">
                    Construindo produtos digitais escaláveis, orientados a <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">dados, IA e alta conversão</span>.
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
                    Líder da squad de Plataforma no Grupo Aposta Ganha. Especialista em jornadas críticas de usuário (Onboarding, KYC, Pagamentos), Design System e conformidade regulatória (GLI-19/33). Estudante de MBA na FIAP e Bacharelado em IA na UNIVESP.
                </p>

                {/* Links de Contato & Redes */}
                <div className="flex flex-wrap gap-4 pt-2 items-center">
                    <a href="#projetos" className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition text-white shadow-lg shadow-blue-600/20 flex items-center gap-2">
                        Explorar Case Studies <ChevronRight className="w-4 h-4" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3.5 bg-slate-900 hover:bg-slate-800 rounded-xl transition border border-slate-800 text-slate-300 hover:text-white flex items-center gap-2" title="LinkedIn">
                        <LinkedinIcon className="w-5 h-5" />
                        <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
                    </a>
                    <a href="https://medium.com" target="_blank" rel="noreferrer" className="p-3.5 bg-slate-900 hover:bg-slate-800 rounded-xl transition border border-slate-800 text-slate-300 hover:text-white flex items-center gap-2" title="Medium">
                        <MediumIcon className="w-5 h-5" />
                        <span className="text-sm font-medium hidden sm:inline">Medium</span>
                    </a>
                    <a href="https://github.com/wellington-pm" target="_blank" rel="noreferrer" className="p-3.5 bg-slate-900 hover:bg-slate-800 rounded-xl transition border border-slate-800 text-slate-300 hover:text-white flex items-center gap-2" title="GitHub">
                        <GithubIcon className="w-5 h-5" />
                        <span className="text-sm font-medium hidden sm:inline">GitHub</span>
                    </a>
                </div>
            </section>

            {/* Faixa de Métricas Rápidas (Estilo Jane Rex / Data-Driven) */}
            <section className="py-10 bg-slate-900/50 border-y border-slate-800/80">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                        <div className="text-3xl font-extrabold text-emerald-400">+8% YoY</div>
                        <div className="text-xs text-slate-400 mt-1 font-medium">Entrega no Prazo (OKRs)</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                        <div className="text-3xl font-extrabold text-blue-400">+60% QoQ</div>
                        <div className="text-xs text-slate-400 mt-1 font-medium">Redução de TMR Operacional</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                        <div className="text-3xl font-extrabold text-teal-400">GLI-19 & 33</div>
                        <div className="text-xs text-slate-400 mt-1 font-medium">Certificação Regulacional</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                        <div className="text-3xl font-extrabold text-purple-400">+5 Anos</div>
                        <div className="text-xs text-slate-400 mt-1 font-medium">Experiência em Produtos Digitais</div>
                    </div>
                </div>
            </section>

            {/* Pilares de Atuação (Estilo Afolabi Sokeye) */}
            <section id="pilares" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col items-start gap-3 mb-12">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Expertise & Competências</span>
                    <h2 className="text-3xl font-bold tracking-tight">Pilares de Product Management</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Pilar 1 */}
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition flex flex-col gap-4">
                        <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold">Plataforma & Core Experience</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Otimização do ecossistema Web/Mobile: Onboarding, KYC, Depósitos Pix, Saques, Casino Lobby, CRM e Design System unificado.
                        </p>
                    </div>

                    {/* Pilar 2 */}
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition flex flex-col gap-4">
                        <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold">Cultura orientada a Dados (Data-Driven)</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Definição de OKRs, instrumentação de funis de conversão, consultas SQL, dashboards no Power BI/GCP e testes de hipóteses.
                        </p>
                    </div>

                    {/* Pilar 3 */}
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition flex flex-col gap-4">
                        <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            <BrainCircuit className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold">AI Native & Inovação Técnica</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Aplicação de Inteligência Artificial para produtividade, engenharia de prompts, auditoria de LLMs e integração de soluções modernas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projetos & Case Studies (Estilo Florence & Seyifunmi) */}
            <section id="projetos" className="py-24 px-6 bg-slate-900/30 border-t border-slate-800/80">
                <div className="max-w-6xl mx-auto">

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Trabalhos em Destaque</span>
                            <h2 className="text-3xl font-bold tracking-tight mt-1">Estudos de Caso & Projetos</h2>
                        </div>

                        {/* Filtros de Categoria */}
                        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                Todos
                            </button>
                            <button
                                onClick={() => setActiveFilter('platform')}
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition ${activeFilter === 'platform' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                Plataforma
                            </button>
                            <button
                                onClick={() => setActiveFilter('data')}
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition ${activeFilter === 'data' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                Dados & Operações
                            </button>
                            <button
                                onClick={() => setActiveFilter('articles')}
                                className={`px-4 py-2 rounded-lg text-xs font-medium transition ${activeFilter === 'articles' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                Artigos
                            </button>
                        </div>
                    </div>

                    {/* Grid de Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition"></div>

                                <div>
                                    <div className="flex justify-between items-start gap-4 mb-4">
                                        <div>
                                            <span className="text-xs font-medium text-slate-400">{project.company} • {project.role}</span>
                                            <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-blue-400 transition">{project.title}</h3>
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-4">
                                        <TrendingUp className="w-3.5 h-3.5" /> {project.metrics}
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
                                    >
                                        Ver detalhes do projeto <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Sobre Mim */}
            <section id="sobre" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 items-center">

                    <div className="md:col-span-7 flex flex-col gap-6">
                        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Product Manager & Consultor de Produtos Digitais | Criando experiências de impacto e aplicando IA nos negócios.</span>
                        <h2 className="text-3xl font-bold tracking-tight">Conheça o Wellington</h2>

                        <p className="text-slate-300 leading-relaxed">
                            Olá! 👋 Sou o Wellington, Product Manager e Consultor de Produtos Digitais. Sou movido por transformar desafios complexos em produtos que simplificam a vida das pessoas e geram resultados reais.
                        </p>

                        <p className="text-slate-300 leading-relaxed">
                            Com mais de 5 anos de experiência liderando produtos e plataformas em setores como iGaming, e-commerce e marketplaces, energia e combustíveis, hoje atuo de forma independente prestando consultoria em gestão de produtos, otimização de jornadas digitais e integração de IA na operação.
                        </p>
                            
                        <p className="text-slate-300 leading-relaxed">
                            Minha trajetória começou no desenvolvimento de software e na engenharia. Essa bagagem técnica me dá a base necessária para unir estratégia de negócios, arquitetura técnica e paixão pela experiência do usuário.
                        </p>

                        <p className="text-slate-300 landing-relaed">
                            <strong>Como posso ajudar & fora da rotina:</strong>
                        </p>

                        <ul className="text-slate-300 space-y-2">
                            <li>🎯 <strong>Serviços de Consultoria:</strong> Ajudo empresas a estruturar descobertas de produto (discovery), otimizar funis de conversão, garantir aderência regulatória e acelerar fluxos com IA.</li>
                            <li>💡 <strong>IA & Experimentos:</strong> Exploro ativamente prompt engineering, automações e novas ferramentas de IA para criar protótipos e evoluir entregas.</li>
                            <li>📝 <strong>Conteúdo & Comunidade:</strong> Escrevo artigos sobre gestão de produtos, mercado regulado e o impacto da inteligência artificial no design de produtos.</li>
                            <li>🎓 <strong>Aprendizado Contínuo:</strong> Atualmente cursando MBA em Gestão de Produtos (FIAP) e Bacharelado em IA (UNIVESP).</li>
                        </ul>

                        <p className="text-slate-300 landing-relaed">
                            Se você precisa de um apoio estratégico e prático para alavancar seu produto ou acelerar suas iniciativas de tecnologia, vamos conversar!
                        </p>

                        <p className="text-slate-300 landing-relaed">
                            <strong>Vamos construir algo incrível juntos?</strong>
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">MBA Gestão de Produtos (FIAP)</span>
                            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">Bacharelado em IA (UNIVESP)</span>
                            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">Scrum & Kanban</span>
                            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">SQL & GCP</span>
                        </div>
                    </div>

                    <div className="md:col-span-5 flex flex-col gap-6">

                        <div className="md:col-span-5 p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col gap-6">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <GraduationCap className="text-blue-400 w-5 h-5" /> Formação
                            </h3>

                            <div className="space-y-4 text-sm text-slate-300">
                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">MBA em Gestão de Produtos Digitais</div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">FIAP</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Em Andamento</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Inteligência Artificial</div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">UNIVESP</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Em Andamento</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Gestor da Tecnologia da Informação</div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">FIAP</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5 p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col gap-6">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Target className="text-blue-400 w-5 h-5" /> Ferramentas & Stack
                            </h3>

                            <div className="space-y-4 text-sm text-slate-300">
                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Discovery & Gestão</div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Jira</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Confluence</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Miro</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Azure DevOps</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Dados & Analytics</div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">SQL</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Power BI</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Google Cloud Platform</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Looker Studio</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Engenharia & IA</div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">React</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Tailwind CSS</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">Prompt Engineering</span>
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-xs">LLM Auditing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Contato & Parcerias */}
            <section id="contacto" className="py-20 px-6 bg-slate-900/50 border-t border-slate-800/80">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Contato & Parcerias</span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vamos impulsionar seu produto ou trocar ideias sobre o mercado?</h2>
                    <p className="text-slate-400 max-w-xl leading-relaxed">
                        Aberto a projetos de consultoria estratégica, novos desafios de liderança e conexões sobre tecnologia, IA e ecossistema digital.
                    </p>
                    <a href="https://calendar.app.google/6UnFqmyWUybstb2J9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition text-white shadow-xl shadow-blue-600/25 mt-2">
                        <CalendarDays className="w-5 h-5" /> Agendar um bate-papo
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-slate-900 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Wellington Gonçalves.
            </footer>

        </div>
    );
}