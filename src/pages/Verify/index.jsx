import { useState } from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Upload from '../../components/upload'

function Verify() {
  return (
     <div className='page'>
      <Header />
      
          <div className='upload-container'>
            <div className='text'>
              <h1>
                Verificar
              </h1>

              <h2>
                É fácil, quer ver?
              </h2>
            </div>

            <div className='upload'>
              <Upload />

              <button>
                Verificar
              </button>
            </div>
          </div>

      <Footer />
     </div>
  )
}

export default Verify
