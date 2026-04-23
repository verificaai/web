import { useState } from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

function Verify() {
  return (
     <div className='page'>
      <Header />

      <div className='about-container'>
        <div className='texto'>
          <h1>
            Verificar
          </h1>

          <h2>
            É fácil, quer ver?
          </h2>
        </div>
      </div>

      <Footer />
     </div>
  )
}

export default Verify
