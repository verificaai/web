import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Homepage } from '../components/Homepage'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'

export function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <Homepage />
        <Features />
      </main>

      <Footer />
    </div>
  )
}
