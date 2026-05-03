import { useState } from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className='page'>
    <Header />

        <div className='home-container'>
          <div className='texto'>
            <h1>
              Transformando dúvidas em respostas seguras
            </h1>

            <p>
              VerificaAI surge para freiar a disseminação de informações falsas geradas por Inteligência Artificial, sendo uma ferramenta de fácil acesso que permite os usuários verificarem de forma rápida a veracidade da origem dos vídeos recebidos
            </p>
          </div>

          <Link to={"/verificar"} className='button'>
            Verificar agora
          </Link>
        </div>

    <Footer />
    </div>
  )
}

export default Home
