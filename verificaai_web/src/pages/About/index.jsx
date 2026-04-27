import { useState } from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Topics from '../../components/topics'

function About() {
  return (
     <div className='page'>
      <Header/>

      <div className='about-container'>
        <div className='texto'>
          <h1>
          Sobre nós
          </h1>

          <p>
            Descubra como tudo isso é possível, e conheça as pessoas por trás
          </p>
        </div>

        <img src="https://s2-g1.glbimg.com/DmpUU0SgMjz2PTyqqSlqi7JnP_Q=/0x0:1920x1200/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/Y/l/ycmRwKTDuAeqIuACgvAA/xpwallpaper.jpg" />

      </div>

      <Footer />
     </div>
  )
}

export default About
