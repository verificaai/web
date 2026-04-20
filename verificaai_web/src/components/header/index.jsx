import { useState } from 'react'
import './style.css'
import Logo from '../../assets/Logo.svg'
import Lupa from '../../assets/Lupa.svg'

function Header() {

  return (
    <>
      <header>
        <div className='links'>
          <ul>
            <li>
              <a href="#">
                <img src={Logo} alt="logo" />
              </a>
            </li>

            <li>
              <a href="#">Analisar</a>
            </li>

            <li>
              <a href="#">Sobre nós</a>
            </li>
          </ul>
        </div>

        <button>
          <img src={Lupa} alt="lupa" />
          <p>VERIFICAR</p>
        </button>
      </header>
    </>
  )
}

export default Header
