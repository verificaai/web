import { useState } from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

import { Link } from 'react-router-dom'
import Erro from '../../assets/Erro.png'

function Error() {
  return (
     <div className='page'>
      <Header/>

      <div className='error-container'>
        <h1>
            404 Error Page
        </h1>


        <div className='mensagem'>
            <img src={ Erro } alt="" />
            <h1>
                Ops... Não tem nada aqui
            </h1>
        </div>

        <Link to={"/"} className='button'>
            Voltar
        </Link>
      </div>

      <Footer />
     </div>
  )
}

export default Error
