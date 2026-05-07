import { useState } from 'react'
import './style.css'
import Logo from '../../assets/Logo.svg'
import Lupa from '../../assets/Lupa.svg'

import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
      <div className='links'>
        <ul>
          <li>
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </li>

          <li>
            <Link to={"/verificar"}>Analisar</Link>
          </li>

          <li>
            <Link to={"/sobre"}>Sobre nós</Link>
          </li>
        </ul>
      </div>

      <Link to={"/verificar"} className='button'>
        <img src={Lupa} alt="lupa" />
        <p>VERIFICAR</p>
      </Link>
    </header>
  )
}

export default Header
