import { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Lupa from '../assets/Lupa.png'

import { Link } from 'react-router-dom'
import { Menu, X, ShieldCheck } from 'lucide-react'

const links = [
  { to: "/verificar", label: "Analisar"},
  { to: "/sobre", label: "Sobre nós"}
]

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='sticky top-0 z-50 border-b border-border bg-background'>
      <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5' aria-label='Principal'>
        <Link to = '/'>
          <img src={Logo} alt="Logo" />
        </Link>

        <div className='hidden items-center gap-8 md:flex'>
          {
            links.map((l) => (
              <Link
                key = {l.to}
                to = {l.to}
                className = 'group relative text-sm text-foreground transition-colors duration-300 hover:text-[#183EFF]'
              >
                {l.label}
                <span
                  aria-hidden = 'true'
                  className = 'absolute -bottom-1 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full'
                  style = {{ backgroundImage: 'linear-gradient(90deg, #00CB00, #183EFF, #FFCB00, #FF5900)' }}
                />
              </Link>
            ))
          }

          <Link
            to = '/verificar'
            className = 'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#183EFF]/30 hover:brightness-110'
            style = {{ backgroundImage: 'linear-gradient(90deg, #183EFF, #00CB00)' }}
          >
            <img src={Lupa} alt="Logo" />
            Verificar
          </Link>
        </div>

        <button
          type = 'button'
          onClick = {() => setOpen((v) => !v)}
          aria-expanded = {open}
          aria-label = {open ? "Fechar menu" : "Abrir menu"}
          className = 'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors duration-300 hover:border-[#183EFF] hover:text-[#183EFF] md:hidden'
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open &&(
        <div className = 'border-t border-border bg-background md:hidden'>
          <div className = 'mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4'>
            {
              links.map((l) =>(
                <Link
                  key = {l.to}
                  to = {l.to}
                  onClick = {() => setOpen(false)}
                  className = 'rounded-lg px-2 py-3 text-base text-foreground transition-colors hover:text-[#183EFF]'
                >
                  {l.label}
                </Link>
              ))
            }
            <Link
              to = '/verificar'
              onClick = {() => setOpen(false)}
              className = 'mt-2 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-bold text-white'
              style = {{ backgroundImage: 'linear-gradient(90deg, #183EFF, #00CB00)' }}
            >
              <ShieldCheck size={16} aria-hidden='true' />
              VERIFICAR
            </Link>
          </div>
        </div>
      )}

    </header>
  )
}
