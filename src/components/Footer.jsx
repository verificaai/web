import { useState } from 'react'
import VerificaAI from '../assets/VerificaAI-footer.svg'
import { Link } from 'react-router-dom'
import { FileText, Github, Mail } from "lucide-react"

const EMAIL = 'verificaai@gmail.com'

export function Footer() {

  return (
    <footer className = 'bg-background'>
      <div
        aria-hidden = 'true'
        className = 'h-1 w-full'
        style = {{ backgroundImage: 'linear-gradient(90deg, #00CB00, #183EFF, #FFCB00, #FF5900)' }}
      />
      <div className = 'mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4'>
        <div>
          <div className = 'flex items-center gap-2.5'>
            <img src={VerificaAI} alt="VerificaAI" />
          </div>
        </div>

      <nav aria-label = "Páginas">
        <h2 className = 'flex items-center gap-2 text-sm font-semibold text-foreground'>
          <FileText size={15} style={{ color: "#00CB00"}} aria-hidden='true' />
          Páginas
        </h2>

        <ul className = 'mt-4 space-y-2.5 text-sm text-muted-foreground'>
          <li><Link to='/' className='hover:text-[#183EFF] transition-colors'>Principal</Link></li>
          <li><Link to='/sobre' className='hover:text-[#183EFF] transition-colors'>Sobre</Link></li>
          <li><Link to='/verificar' className='hover:text-[#183EFF] transition-colors'>Vrrificar</Link></li>
        </ul>
      </nav>

      <div>
        <h2 className = 'flex items-center gap-2 text-sm font-semibold text-foreground'>
          <Github size={15} style={{ color: "#183EFF" }} aria-hidden="true" />
          Redes
        </h2>

        <ul className = 'mt-4 space-y-2.5 text-sm text-muted-foreground'>
          <li>
            <a 
              href = 'https://github.com/verificaai'
              target = '_blank'
              rel = 'noopener noreferrer'
              className = 'hover:text-[#183EFF] transition-colors'
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className = 'flex items-center gap-2 text-sm font-semibold text-foreground'>
          <Mail size={15} style={{ color: "#FF5900" }} aria-hidden='true' />
          Contato
        </h2>

        <ul className = 'mt-4 space-y-2.5 text-sm text-muted-foreground'>
          <li>
            <a 
              href = {`mailto:${EMAIL}`}
              className = 'hover:text-[#183EFF] transition-colors'
            >
              {EMAIL}
            </a>
          </li>
        </ul>
      </div>
      </div>

      <div className = 'border-t border-border'>
        <p className = 'mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground'>
          © 2026 VerificaAI
        </p>
      </div>
    </footer>
  )
}
