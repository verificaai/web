import { useState } from 'react'
import './style.css'
import VerificaAI from '../../assets/VerificaAI.svg'

function Footer() {

  return (
    <footer>
      <div className='container'>
        <img src={VerificaAI} alt="" />

        <ul className='paginas'>
          <h3>Páginas</h3>
          <li>
            <a href="#">Principal</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Verificar</a>
          </li>
        </ul>
        
        <ul className='redes'>
          <h3>Redes</h3>
          <li>
            <a href="https://github.com/verificaai">GitHub</a>
          </li>
        </ul>

        <ul className='contato'>
          <h3>Contato</h3>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
