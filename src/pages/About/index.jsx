import { useState } from 'react'
import './style.css'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Topics from '../../components/topics'

function About() {
  return (
     <div className='page'>
      <Header/>

      <div className='about-container'>
        <div className='text'>
          <h1>
          Sobre nós
          </h1>

          <p>
            Descubra como tudo isso é possível, e conheça as pessoas por trás
          </p>
        </div>
        
        <Topics />
      </div>

      <Footer />
     </div>
  )
}

export default About
