import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { sobreTopics } from '../data/sobreContent.json'
import banner from '../assets/bliss.png'
import Logo from '../assets/VerificaAI-about.svg'
import { Bubbles } from '../components/Bubbles'

export function About() {
  const [active, setActive] = useState(sobreTopics[0].id);
  const topic = sobreTopics.find((t) => t.id === active) ?? sobreTopics[0];
  return (
    <div className = 'relative flex min-h-screen flex-col'>
      <Bubbles />
      <Header />

      <main className = 'flex-1'>
        <section className = 'relative px-5 pt-16 pb-10'>

          <div className = 'relative mx-auto max-w-3xl text-center'>
            <h1 className = 'text-4xl font-bold tracking-tight text-foreground sm:text-5xl'>
              Sobre nós
            </h1>

            <p className = 'mx-auto mt-4 max-w-xl text-base text-muted-foreground'>
              Descubra como tudo isso é possível
            </p>
          </div>
        </section>

        <div className = 'mx-auto max-w-5xl px-5'>
          <div className = 'relative overflow-hidden rounded-3xl border border-border'>
            <img 
              src = {banner}
              alt = ''
              width = {1600}
              height = {700}
              loading = 'lazy'
              className = 'h-48 w-full object-cover sm:h-72 lg:h-80'
            />

            <div
              aria-hidden = 'true'
              className = 'absolute inset-0 opacity-30'
            />
          </div>
        </div>

        <div className = 'mt-10 flex flex-col items-center gap-3'>
          <img src={Logo} alt="VerificaAI" />
        </div>

        <section className = 'mx-auto max-w-5xl px-5 py-12'>
          <div
            role = 'tablist'
            aria-label = "Tópicos sobre o VerificaAI"
            className = 'grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center'
          >
            {sobreTopics.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key = {t.id}
                  type = 'button'
                  role = 'tab'
                  id = {`tab-${t.id}`}
                  aria-selected = {isActive}
                  aria-controls = 'painel-sobre'
                  onClick = {() => setActive(t.id)}
                  className = {`rounded-md px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'border-transparent text-white shadow-lg shadow-[#183EFF]/25'
                      : 'border-border bg-background text-muted-foreground hover:border-[#183EFF] hover:text-[#183EFF]'
                  }`}
                  style = {
                    isActive
                      ? { backgroundImage : 'linear-gradient(90deg, #183EFF, #00CB00)' }
                      : undefined
                  }
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div
            key = {topic.id}
            id = 'painel-sobre'
            role = 'tabpanel'
            aria-labelledby = {`tab-${topic.id}`}
            className = 'animate-va-fade mx-auto mt-10 max-w-3xl'
          >
            <h2 className = 'text-2xl font-bold text-foreground sm:text-3xl'>
              {topic.title}
            </h2>

            <div className = 'mt-5 space-y-5'>
              {topic.content.split('\n\n').map((p, i) => (
                <p key = {i} className = 'text-base leading-relaxed text-muted-foreground'>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

