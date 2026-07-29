import { Check, Search, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const BRAND = {
    green: '#00CB00',
    blue: '#183EFF',
    orange: '#FF5900',
    yellow: '#FFCB00'
}

export function Homepage(){
    return(
        <section className="relative overflow-hidden bg-background px-5 pt-24 pb-24 sm:pt-32 sm:pb-32">
            {/*blobs*/}
            <div aria-hidden = 'true' className = 'pointer-events-none absolute inset-0 overflow-hidden'>
                <div
                    className = 'absolute -left-24 top-4 h-72 w-72 rounded-full opacity-20 blur-3xl'
                    style = {{ backgroundColor: BRAND.green }}
                />

                <div
                    className = 'absolute -right-20 top-24 h-80 w-80 rounded-full opacity-20 blur-3xl'
                    style = {{ backgroundColor: BRAND.blue }}
                />

                <div
                    className = 'absolute bottom-0 left-1/3 h-64 w-64 rounded-full opacity-[0.18] blur-3xl'
                    style = {{ backgroundColor: BRAND.yellow }}
                />
            </div>

            <div className = 'relative mx-auto max-w-3xl text-center'>
                <h1 className = 'mt-6 text-4xl leading-tight tracking-tight text-foreground sm:text-5xl'>
                    Transformando dúvidas em{" "}
                    <span
                        className = 'bg-clip-text font-semibold text-transparent'
                        style={{
                            backgroundImage: `linear-gradient(90deg, ${BRAND.green}, ${BRAND.blue}, ${BRAND.yellow})`,
                        }}
                    >
                        respostas
                    </span>{" "}
                    seguras
                </h1>

                <p className = 'mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground'>
                    VerificaAI surge para frear a disseminação de informações falsas geradas por Inteligência 
                    Artificial, sendo uma ferramenta de fácil acesso que permite que os usuários verifiquem de
                    forma rápida a veracidade da origem do vídeo
                </p>

                <div className = 'mt-10'>
                    <Link
                        to = '/verificar'
                        className = 'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#183EFF]/25 transition-all duration-300 hover:scale-[1.03] hover:brightness-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring'
                        style = {{ backgroundImage: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.green})` }}
                    >
                        Verificar agora
                    </Link>
                </div>
            </div>
        </section>
    )
}