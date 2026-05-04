import { useState } from 'react'
import './style.css'
import VerificaAI from '../../assets/VerificaAI-footer.svg'

import { Link } from 'react-router-dom'

function Footer() {

  return (
    <footer>
      <div className='footer-container'>
        <img src={VerificaAI} alt="VerificaAI" />

        <ul className='pages'>
          <h3>Páginas</h3>
          <li>
            <Link to={"/"}>Principal</Link>
          </li>
          <li>
            <Link to={"/sobre"}>Sobre</Link>
          </li>
          <li>
            <Link to={"/verificar"}>Verificar</Link>
          </li>
        </ul>
        
        <ul className='social'>
          <h3>Redes</h3>
          <li>
            <Link to={"https://github.com/verificaai"}>GitHub</Link>
          </li>
        </ul>

        <ul className='contact'>
          <h3>Contato</h3>
          <li>
            <Link>Contato</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
