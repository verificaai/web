import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Zap, ShieldCheck } from "lucide-react"

const items = [
    {
        icon: Search,
        color: '#00CB00',
        title: 'Análise forense',
        text: 'Verificação de vestígios digitais no vídeo para identificar sinais de geração por IA'
    },
    {
        icon: Zap,
        color: '#183EFF',
        title: 'Rápido e acessível',
        text: 'Resultado em poucos segundos, sem necessidade de qualquer conhecimento técnico'
    },
    {
        icon: ShieldCheck,
        color: '#FF5900',
        title: 'Sem julgamento de conteúdo',
        text: 'Analisamos apenas a origem e autenticidade do vídeo, nunca a opnião expressa nele'
    }
];

export function Features(){
    return(
        <section className = 'bg-background px-5 pb-24' aria-labelledby = 'diferenciais'>
            <h2 id = 'diferenciais' className = 'sr-only'>
                Diferenciais do VerificaAI
            </h2>

            <div className = 'mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {items.map(({ icon: Icon, color, title, text }) => (
                    <article
                        key = {title}
                        className = 'rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
                    >
                        <span
                            className = 'flex h-11 w-11 items-center justify-center rounded-full'
                            style = {{ backgroundColor: `${color}1A`, color }}
                            aria-hidden = 'true'
                        >
                            <Icon size={20} />
                        </span>

                        <h3 className = 'mt-4 text-base font-bold text-foreground'>
                            {title}
                        </h3>

                        <p className = 'mt-2 text-sm leading-relaxed text-muted-foreground'>
                            {text}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}