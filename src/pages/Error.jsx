import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Bubbles } from '../components/Bubbles'
import { Link, useNavigate } from 'react-router-dom'
import Erro from '../assets/Erro.png'

export function Error() {
    const navigate = useNavigate();
    return (
        <div className = 'relative flex min-h-screen flex-col'>
            <Bubbles />
            <Header />

            <main className = 'relative flex flex-1 items-center justify-center px-5 py-24'>
                <div className = 'relative z-10 mx-auto max-w-xl text-center'>
                    <img 
                        src = {Erro} 
                        alt = "404" 
                        className = 'mx-auto h-24 w-auto sm:h-32'
                    />

                    <h2 className = 'mt-6 text-2xl font-bold tracking-tight text-foreground sm:text:3xl'>
                        Ops... não tem nada aqui
                    </h2>

                    <p className = 'mx-auto mt-4 max-w-md text-base text-muted-foreground'>
                        A página que você está procurando não existe ou foi movida
                    </p>

                    <div className = 'mt-10 flex flex-col items-center gap-4'>
                        <Link
                            to = '/verificar'
                            className = 'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#183EFF]/25 transition-all duration-300 hover:scale-[1.03] hover:brightness-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring'
                            style = {{ backgroundImage: 'linear-gradient(90deg, #183EFF, #00CB00)' }}
                        >
                            Voltar para a principal
                        </Link>

                        <button
                            type = 'button'
                            onClick={() => navigate(-1)}
                            className = 'text-sm font-medium text-[#183EFF] underline underline-offset-4 transition-colors hover:text-[#00CB00]'
                        >
                            ou volte para a página anterior
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
